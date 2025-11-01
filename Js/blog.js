const blogContainer = document.getElementById("blogContainer");

const blogs = [
  {
    title: "2025 Fashion Forecast: What’s In & What’s Out",
    image: "assets/images/blog4.jpg",
    date: "October 25, 2025",
    desc: "From bold prints to minimalist chic, discover what defines next year’s luxury fashion trends.",
  },
  {
    title: "Sustainable Luxury: The Future of Fashion",
    image: "assets/images/blog2.jpg",
    date: "September 12, 2025",
    desc: "Luxury and sustainability merge as more brands embrace eco-friendly materials and ethical design.",
  },
  {
    title: "5 Must-Have Accessories for Every Season",
    image: "assets/images/blog3.jpg",
    date: "August 5, 2025",
    desc: "Elevate your wardrobe with timeless accessories that never go out of style.",
  },
  {
    title: "Behind the Scenes: How LuxeStyle Creates Magic",
    image: "assets/images/blog1.jpg",
    date: "July 18, 2025",
    desc: "Take a peek into the creative process that brings LuxeStyle’s exclusive designs to life.",
  },
  {
    title: "Top 10 Streetwear Looks You’ll Love",
    image: "assets/images/blog5.jpg",
    date: "June 30, 2025",
    desc: "Streetwear meets elegance — see how to style the perfect urban look.",
  },
  {
    title: "Mixing Modern and Classic: A Designer’s Perspective",
    image: "assets/images/blog6.jpg",
    date: "May 22, 2025",
    desc: "How our designers balance modern creativity with timeless fashion traditions.",
  }
];

blogs.forEach(blog => {
  const card = document.createElement("div");
  card.classList.add("col-md-4");
  card.innerHTML = `
    <div class="blog-card">
      <img src="${blog.image}" alt="${blog.title}">
      <div class="p-4">
        <h5 class="fw-bold">${blog.title}</h5>
        <small class="text-muted">${blog.date}</small>
        <p class="mt-3 text-secondary">${blog.desc}</p>
        <a href="single-blog.html" class="btn btn-read">Read More</a>
      </div>
    </div>
  `;
  blogContainer.appendChild(card);
});