import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('gallery')
      .select(`
        *,
        project:projects(id, title, slug),
        school:schools(id, name)
      `)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('SUPABASE DB ERROR:', error);
      // Fallback data when Supabase connection fails
      return NextResponse.json(mockGalleryData);
    }
    return NextResponse.json(data)
  } catch (err) {
    console.error('SUPABASE CATCH BLOCK ERROR:', err);
    // Fallback data when Supabase connection fails completely (e.g. DNS failure)
    return NextResponse.json(mockGalleryData);
  }
}

const mockGalleryData = [
  {
    id: '1',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/images/training2.jpeg',
    title: 'Community Training Session',
    description: 'Empowering pupils through skills training.',
    is_published: true,
    project: { title: 'Skill Development' }
  },
  {
    id: '2',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/images/children1.jpg',
    title: 'School Outreach',
    description: 'Reaching out to children in the communities.',
    is_published: true,
    school: { name: 'Buwaiswa Primary' }
  },
  {
    id: '3',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg',
    title: 'Clean Water Initiative',
    description: 'Bringing clean water to rural communities.',
    is_published: true,
    project: { title: 'Health & Hygiene' }
  },
  {
    id: '4',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg',
    title: 'Interactive Learning',
    description: 'Students engaged in interactive classroom sessions.',
    is_published: true,
    school: { name: 'Rural Outreach' }
  },
  {
    id: '5',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit2.jpeg',
    title: 'Field Visit',
    description: 'Bringing back hope to the vulnerable children.',
    is_published: true,
    project: { title: 'School Outreach' }
  },
  {
    id: '6',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit15.jpeg',
    title: 'Community Engagement',
    description: 'Connecting with local families.',
    is_published: true,
    project: { title: 'Community Outreach' }
  },
  {
    id: '7',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/vidit6.jpeg',
    title: 'School Visit',
    description: 'Reviewing educational progress at local schools.',
    is_published: true,
    school: { name: 'Rural Outreach' }
  },
  {
    id: '8',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit1.jpeg',
    title: 'Rural Field Trip',
    description: 'Assessing community needs and impact.',
    is_published: true,
    project: { title: 'Community Outreach' }
  },
  {
    id: '9',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit13.jpeg',
    title: 'Community Connections',
    description: 'Building relationships in the villages.',
    is_published: true,
    project: { title: 'Community Outreach' }
  },
  {
    id: '10',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit3.jpeg',
    title: 'Empowerment Session',
    description: 'Gathering with community members.',
    is_published: true,
    project: { title: 'Skill Development' }
  },
  {
    id: '11',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit9.jpeg',
    title: 'Impact Assessment',
    description: 'Measuring the impact of our programs.',
    is_published: true,
    project: { title: 'Community Outreach' }
  },
  {
    id: '12',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit7.jpeg',
    title: 'Education Awareness',
    description: 'Bringing back hope to stay in school.',
    is_published: true,
    project: { title: 'Education' }
  },
  {
    id: '13',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit22.jpeg',
    title: 'The Child\'s Voice',
    description: 'Giving children a voice to express their views.',
    is_published: true,
    project: { title: 'Child Protection' }
  },
  {
    id: '14',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit4.jpeg',
    title: 'Women Empowerment',
    description: 'Supporting women in rural areas.',
    is_published: true,
    project: { title: 'Skill Development' }
  },
  {
    id: '15',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit14.jpeg',
    title: 'Youth Engagement',
    description: 'Activities focused on youth development.',
    is_published: true,
    school: { name: 'Rural Outreach' }
  },
  // {
  //   id: '16',
  //   image_url: 'https://ik.imagekit.io/xjtx0zx5v/security.jpeg',
  //   title: 'Security',
  //   description: 'Briefing on community safety and awareness.',
  //   is_published: true,
  //   project: { title: 'Health & Hygiene' }
  // },
  {
    id: '17',
    image_url: 'https://ik.imagekit.io/xjtx0zx5v/visit17.jpeg',
    title: 'Program Follow-up',
    description: 'Following up on ongoing community projects.',
    is_published: true,
    project: { title: 'Community Outreach' }
  }
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { data, error } = await supabaseAdmin
      .from('gallery')
      .insert(body)
      .select()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data[0], { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
