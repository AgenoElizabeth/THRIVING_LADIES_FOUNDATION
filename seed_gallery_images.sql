-- Seeding Gallery with ImageKit Photos
-- Run this in your Supabase SQL Editor

INSERT INTO gallery (title, description, image_url, category, is_published, sort_order)
VALUES 
('Our Journey to Confidence', 'Through our menstrual hygiene management program, we learned about proper hygiene practices and received reusable sanitary pads. Today, we are confident young women who regularly attends school and dreams of becoming a doctor.', 'https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg', 'beneficiaries', true, 1),

('Our Hope Restored', 'Our community outreach program connected us with educational resources and small business training with support from Thriving Ladies Foundation.', 'https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg', 'beneficiaries', true, 2),

('From Dropout to Dreamer', 'Tabitha was on the verge of dropping out of school due to lack of basic supplies and family financial difficulties. Our scholarship program provided her with books, uniforms, and school fees. Today, Tabitha is in school and aspires to be an engineer.', 'https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg', 'programs', true, 3),

('Community Unity Through Action', 'We lacked clean water. Our water project not only provided clean water access but also brought the community together for maintenance and education sessions.', 'https://ik.imagekit.io/xjtx0zx5v/images/clean-water.jpg', 'events', true, 4),

('Breaking the Cycle of Poverty', 'At 19, Patricia was a single mother struggling to provide for her infant daughter. Our vocational training program taught her tailoring skills and connected her with microfinance opportunities. She now runs a successful dressmaking business.', 'https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg', 'programs', true, 5),

('Victoria Awino - Founder', 'Awino Victoria, the Founder and Director of Thriving Ladies Foundation, has a heartbeat for the vulnerable child in rural Uganda. Her vision has expanded our reach to multiple communities, ensuring every pupil receives the education and health support they deserve.', 'https://ik.imagekit.io/xjtx0zx5v/images/Victoria.jpg', 'team', true, 6),

('Sanitation Improvements', 'We work to improve sanitation facilities in rural schools, ensuring that girls have a safe and dignified environment for menstrual hygiene management.', 'https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg', 'programs', true, 7),

('Reaching Rural Communities', 'Our urban and rural outreach programs focus on underserved areas where poverty and lack of access to education persist.', 'https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg', 'programs', true, 8),

('In the heart of the community', 'Our team working with local leaders and parents to create a supportive environment for all children.', 'https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg', 'events', true, 9),

('Victoria Distribution supplies', 'Distributing essential menstrual health supplies to students at Buwaiswa Primary School.', 'https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg', 'programs', true, 10);
