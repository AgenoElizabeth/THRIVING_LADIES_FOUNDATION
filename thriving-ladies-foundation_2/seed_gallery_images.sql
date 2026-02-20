-- Seeding Gallery with ImageKit Photos
-- Run this in your Supabase SQL Editor

INSERT INTO gallery (title, description, image_url, category, is_published, sort_order)
VALUES 
('Sarah''s Journey to Confidence', 'Sarah was a shy 14-year-old girl from Buwaiswa Primary School who missed school frequently due to menstrual discomfort. Through our menstrual hygiene management program, she learned about proper hygiene practices and received reusable sanitary pads. Today, Sarah is a confident young woman who regularly attends school and dreams of becoming a doctor.', 'https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg', 'beneficiaries', true, 1),

('A Mother''s Hope Restored', 'Grace lost her husband five years ago and struggled to provide for her three children. Our community outreach program connected her with educational resources and small business training. With our support, Grace started a small tailoring business and enrolled her children in our after-school program.', 'https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg', 'beneficiaries', true, 2),

('From Dropout to Dreamer', 'Michael was on the verge of dropping out of school due to lack of basic supplies and family financial difficulties. Our scholarship program provided him with books, uniforms, and school fees. Today, Michael is in secondary school and aspires to be an engineer.', 'https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg', 'programs', true, 3),

('Community Unity Through Action', 'The village of Kitgum was divided by poverty and lack of clean water. Our water project not only provided clean water access but also brought the community together for maintenance and education sessions.', 'https://ik.imagekit.io/xjtx0zx5v/images/clean-water.jpg', 'events', true, 4),

('Breaking the Cycle of Poverty', 'At 19, Patricia was a single mother struggling to provide for her infant daughter. Our vocational training program taught her tailoring skills and connected her with microfinance opportunities. She now runs a successful dressmaking business.', 'https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg', 'programs', true, 5),

('Victoria Awino - Founder', 'Awino Victoria, the Founder and Director of Thriving Ladies Foundation, has a heartbeat for the vulnerable child in rural Uganda. Her vision has expanded our reach to multiple communities, ensuring every pupil receives the education and health support they deserve.', 'https://ik.imagekit.io/xjtx0zx5v/images/Victoria.jpg', 'team', true, 6),

('Sanitation Improvements', 'We work to improve sanitation facilities in rural schools, ensuring that girls have a safe and dignified environment for menstrual hygiene management.', 'https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg', 'programs', true, 7),

('Reaching Rural Communities', 'Our urban and rural outreach programs focus on underserved areas where poverty and lack of access to education persist.', 'https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg', 'programs', true, 8),

('In the heart of the community', 'Our team working with local leaders and parents to create a supportive environment for all children.', 'https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg', 'events', true, 9),

('Victoria Distribution supplies', 'Distributing essential menstrual health supplies to students at Buwaiswa Primary School.', 'https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg', 'programs', true, 10);
