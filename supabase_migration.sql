-- ============================================================
-- THRIVING LADIES FOUNDATION — Production Database Migration
-- Run this in: Supabase Dashboard → SQL Editor
-- Project: okmavzvbwqrvipmtqyac
-- ============================================================

-- Enable UUID extension (already enabled by default in Supabase)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ────────────────────────────────────────────────────────────
-- 1. ADMIN USERS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id    uuid UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name       varchar(100) NOT NULL,
  email           varchar(255) NOT NULL UNIQUE,
  role            varchar(20) NOT NULL DEFAULT 'admin'
                  CHECK (role IN ('super_admin','admin','editor')),
  avatar_url      text,
  is_active       boolean NOT NULL DEFAULT true,
  last_login      timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Admins can read/update their own row; service role handles everything else
CREATE POLICY "admin_users_self_read"  ON admin_users FOR SELECT USING (auth.uid() = auth_user_id);
CREATE POLICY "admin_users_self_update" ON admin_users FOR UPDATE USING (auth.uid() = auth_user_id);

-- ────────────────────────────────────────────────────────────
-- 2. SCHOOLS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS schools (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name             varchar(200) NOT NULL,
  district         varchar(100),
  region           varchar(100),
  address          text,
  latitude         float8,
  longitude        float8,
  total_enrollment int DEFAULT 0,
  girl_enrollment  int DEFAULT 0,
  boy_enrollment   int DEFAULT 0,
  contact_person   varchar(100),
  contact_phone    varchar(30),
  category         varchar(20) DEFAULT 'primary'
                   CHECK (category IN ('primary','secondary','vocational')),
  is_active        boolean NOT NULL DEFAULT true,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now(),
  created_by       uuid REFERENCES admin_users(id)
);

ALTER TABLE schools ENABLE ROW LEVEL SECURITY;
CREATE POLICY "schools_public_read" ON schools FOR SELECT USING (is_active = true);
CREATE POLICY "schools_admin_all"   ON schools FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 3. BENEFICIARIES
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS beneficiaries (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name       varchar(100) NOT NULL,
  last_name        varchar(100),
  date_of_birth    date,
  age              int,
  gender           varchar(10) CHECK (gender IN ('female','male','other')),
  category         varchar(20) DEFAULT 'girl'
                   CHECK (category IN ('girl','boy','widow','family')),
  school_id        uuid REFERENCES schools(id) ON DELETE SET NULL,
  district         varchar(100),
  region           varchar(100),
  guardian_name    varchar(100),
  guardian_phone   varchar(30),
  notes            text,
  is_active        boolean NOT NULL DEFAULT true,
  enrollment_date  date DEFAULT CURRENT_DATE,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now(),
  created_by       uuid REFERENCES admin_users(id)
);

ALTER TABLE beneficiaries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "beneficiaries_admin_all" ON beneficiaries FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 4. PROJECTS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title            varchar(200) NOT NULL,
  slug             varchar(200) NOT NULL UNIQUE,
  description      text,
  objectives       text,
  status           varchar(20) NOT NULL DEFAULT 'planning'
                   CHECK (status IN ('planning','active','completed','paused')),
  start_date       date,
  end_date         date,
  budget           numeric(14,2) DEFAULT 0,
  amount_spent     numeric(14,2) DEFAULT 0,
  currency         varchar(3) DEFAULT 'UGX',
  location         varchar(200),
  school_id        uuid REFERENCES schools(id) ON DELETE SET NULL,
  category         varchar(30) DEFAULT 'mhm'
                   CHECK (category IN ('mhm','education','health','outreach','water','other')),
  cover_image_url  text,
  is_featured      boolean NOT NULL DEFAULT false,
  is_published     boolean NOT NULL DEFAULT false,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now(),
  created_by       uuid REFERENCES admin_users(id)
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "projects_public_read"  ON projects FOR SELECT USING (is_published = true);
CREATE POLICY "projects_admin_all"    ON projects FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 5. PROJECT BENEFICIARIES (Junction Table)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS project_beneficiaries (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id       uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  beneficiary_id   uuid NOT NULL REFERENCES beneficiaries(id) ON DELETE CASCADE,
  joined_date      date DEFAULT CURRENT_DATE,
  status           varchar(20) DEFAULT 'active'
                   CHECK (status IN ('active','completed','dropped')),
  notes            text,
  created_at       timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, beneficiary_id)
);

ALTER TABLE project_beneficiaries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "proj_ben_admin_all" ON project_beneficiaries FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 6. INVENTORY
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS inventory (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_name         varchar(200) NOT NULL,
  category          varchar(30) DEFAULT 'hygiene'
                    CHECK (category IN ('hygiene','scholastic','health','food','other')),
  unit              varchar(50) DEFAULT 'pieces',
  quantity_in       int NOT NULL DEFAULT 0,
  quantity_out      int NOT NULL DEFAULT 0,
  quantity_balance  int GENERATED ALWAYS AS (quantity_in - quantity_out) STORED,
  project_id        uuid REFERENCES projects(id) ON DELETE SET NULL,
  school_id         uuid REFERENCES schools(id) ON DELETE SET NULL,
  distribution_date date,
  distributed_by    varchar(100),
  notes             text,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now(),
  created_by        uuid REFERENCES admin_users(id)
);

ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "inventory_admin_all" ON inventory FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 7. DONORS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS donors (
  id                   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name           varchar(100),
  last_name            varchar(100),
  email                varchar(255) UNIQUE,
  phone                varchar(30),
  country              varchar(100) DEFAULT 'Uganda',
  city                 varchar(100),
  donor_type           varchar(20) DEFAULT 'individual'
                       CHECK (donor_type IN ('individual','corporate','anonymous')),
  is_anonymous         boolean NOT NULL DEFAULT false,
  subscribe_newsletter boolean NOT NULL DEFAULT false,
  total_donations      int NOT NULL DEFAULT 0,
  total_amount         numeric(15,2) NOT NULL DEFAULT 0,
  currency             varchar(3) DEFAULT 'UGX',
  preferred_payment    varchar(40),
  notes                text,
  first_donation_at    timestamptz,
  last_donation_at     timestamptz,
  created_at           timestamptz NOT NULL DEFAULT now(),
  updated_at           timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE donors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "donors_admin_all" ON donors FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 8. DONATIONS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS donations (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tx_ref              varchar(100) NOT NULL UNIQUE,
  flw_ref             varchar(100),
  flw_transaction_id  varchar(100),
  donor_id            uuid REFERENCES donors(id) ON DELETE SET NULL,
  amount              numeric(12,2) NOT NULL,
  currency            varchar(3) NOT NULL DEFAULT 'UGX',
  payment_method      varchar(40) NOT NULL,
  payment_provider    varchar(30) NOT NULL DEFAULT 'flutterwave',
  status              varchar(20) NOT NULL DEFAULT 'pending'
                      CHECK (status IN ('pending','completed','failed','refunded')),
  purpose             varchar(200) DEFAULT 'General Fund',
  project_id          uuid REFERENCES projects(id) ON DELETE SET NULL,
  donor_snapshot      jsonb,
  payment_meta        jsonb,
  webhook_verified    boolean NOT NULL DEFAULT false,
  paid_at             timestamptz,
  created_at          timestamptz NOT NULL DEFAULT now(),
  updated_at          timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
-- Public: can insert (own donation) and select by tx_ref
CREATE POLICY "donations_public_insert" ON donations FOR INSERT WITH CHECK (true);
CREATE POLICY "donations_public_select" ON donations FOR SELECT USING (true); -- Restricted to specific tx_ref in app logic
CREATE POLICY "donations_admin_all"     ON donations FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 9. GALLERY
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS gallery (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title           varchar(200) NOT NULL,
  description     text,
  image_url       text NOT NULL,
  thumbnail_url   text,
  category        varchar(30) DEFAULT 'programs'
                  CHECK (category IN ('programs','events','beneficiaries','team','other')),
  project_id      uuid REFERENCES projects(id) ON DELETE SET NULL,
  school_id       uuid REFERENCES schools(id) ON DELETE SET NULL,
  is_published    boolean NOT NULL DEFAULT true,
  sort_order      int DEFAULT 0,
  alt_text        varchar(300),
  taken_by        varchar(100),
  taken_at        date,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),
  created_by      uuid REFERENCES admin_users(id)
);

ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "gallery_public_read" ON gallery FOR SELECT USING (is_published = true);
CREATE POLICY "gallery_admin_all"   ON gallery FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 10. VIDEOS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS videos (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title            varchar(200) NOT NULL,
  description      text,
  video_url        text NOT NULL,
  thumbnail_url    text,
  provider         varchar(20) DEFAULT 'youtube'
                   CHECK (provider IN ('youtube','vimeo','direct')),
  category         varchar(30),
  project_id       uuid REFERENCES projects(id) ON DELETE SET NULL,
  duration_seconds int,
  is_published     boolean NOT NULL DEFAULT true,
  is_featured      boolean NOT NULL DEFAULT false,
  sort_order       int DEFAULT 0,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now(),
  created_by       uuid REFERENCES admin_users(id)
);

ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "videos_public_read" ON videos FOR SELECT USING (is_published = true);
CREATE POLICY "videos_admin_all"   ON videos FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 11. IMPACT METRICS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS impact_metrics (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name     varchar(200) NOT NULL,
  metric_key      varchar(100) NOT NULL UNIQUE,
  value           numeric(15,2) DEFAULT 0,
  unit            varchar(50),
  display_value   varchar(50),
  description     text,
  category        varchar(30) DEFAULT 'general'
                  CHECK (category IN ('health','education','finance','community','general')),
  icon            varchar(50),
  sort_order      int DEFAULT 0,
  is_published    boolean NOT NULL DEFAULT true,
  period_start    date,
  period_end      date,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),
  created_by      uuid REFERENCES admin_users(id)
);

ALTER TABLE impact_metrics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "impact_public_read" ON impact_metrics FOR SELECT USING (is_published = true);
CREATE POLICY "impact_admin_all"   ON impact_metrics FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- 12. INQUIRIES
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS inquiries (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name    varchar(200) NOT NULL,
  email        varchar(255) NOT NULL,
  phone        varchar(30),
  subject      varchar(300),
  inquiry_type varchar(30) DEFAULT 'general'
               CHECK (inquiry_type IN ('partnership','donation','volunteer','media','general')),
  message      text NOT NULL,
  status       varchar(20) NOT NULL DEFAULT 'new'
               CHECK (status IN ('new','in_progress','resolved','spam')),
  assigned_to  uuid REFERENCES admin_users(id) ON DELETE SET NULL,
  admin_notes  text,
  replied_at   timestamptz,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "inquiries_public_insert" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "inquiries_admin_all"     ON inquiries FOR ALL USING (auth.uid() IN (SELECT auth_user_id FROM admin_users WHERE is_active = true));

-- ────────────────────────────────────────────────────────────
-- AUTO-UPDATE updated_at TRIGGERS
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
DECLARE
  t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'admin_users','schools','beneficiaries','projects',
    'inventory','donors','donations','gallery','videos',
    'impact_metrics','inquiries'
  ] LOOP
    EXECUTE format(
      'CREATE TRIGGER %I BEFORE UPDATE ON %I FOR EACH ROW EXECUTE FUNCTION update_updated_at()',
      'set_' || t || '_updated_at', t
    );
  END LOOP;
END;
$$;

-- ────────────────────────────────────────────────────────────
-- DONE ✓
-- ────────────────────────────────────────────────────────────
