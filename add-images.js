const images = [
    "https://ik.imagekit.io/xjtx0zx5v/visit2.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit15.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/vidit6.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit1.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit13.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit3.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit9.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit7.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit22.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit4.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit14.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/security.jpeg",
    "https://ik.imagekit.io/xjtx0zx5v/visit17.jpeg"
];

async function run() {
    let order = 50;
    for (const img of images) {
        let title = "Community Outreach";
        if (img.includes("security")) title = "Community Security Awareness";
        else if (img.includes("vidit")) title = "Field Visit";
        else title = "Field Visit " + Math.floor(Math.random() * 100);

        const data = {
            image_url: img,
            title: title,
            description: "Empowering communities across our outreach programs.",
            is_published: true,
            sort_order: order++
        };
        const res = await fetch("http://127.0.0.1:3000/api/gallery", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const text = await res.text();
        console.log("Added", img, res.status, text);
    }
}
run();
