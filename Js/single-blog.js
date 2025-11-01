// Js/single-blog.js
// read id from URL, find post from posts (we will re-declare posts here or fetch same data source).
// For simplicity, re-declare same posts array (or export from blog.js in a module setup).

const postsData = [
  // (copy the same objects from Js/blog.js)
  {
    id: 1,
    title: "10 Timeless Outfit Ideas for Every Season",
    author: "Sahar Sadat",
    date: "October 10, 2025",
    img: "assets/images/blog1.jpg",
    excerpt: "Discover ten classic outfit ideas that work year-round...",
    content: `<p>Building a timeless wardrobe means choosing pieces that transcend trends. Start with quality basics — a tailored blazer, crisp white shirt, well-fitted jeans. Learn how to layer for colder months and mix textures for depth. We'll walk through ten outfit combinations and how to adapt them for each season.</p>
    <h4>Key tips</h4>
    <p>Invest in neutral staples, learn proportion, and focus on balance between fitted and relaxed pieces.</p>`
  },
  {
    id: 2,
    title: "How to Accessorize Like a Fashion Pro",
    author: "Lina Alakozy",
    date: "September 28, 2025",
    img: "assets/images/blog2.jpg",
    excerpt: "Accessories make the outfit...",
    content: `<p>Accessories are the punctuation marks of any outfit. Choose one statement item — a bold bag, a standout necklace — and keep other pieces simple. Mix metals carefully and scale pieces to the silhouette you’re wearing.</p>
    <h4>Styling tricks</h4>
    <p>Layer delicate chains, use belts to define waist, and select sunglasses that flatter your face shape.</p>`
  },
  {
    id: 3,
    title: "Sustainable Fashion: Style with a Purpose",
    author: "Mustafa Ramani",
    date: "August 18, 2025",
    img: "assets/images/blog3.jpg",
    excerpt: "Sustainable choices can be chic...",
    content: <p>Sustainability isn't just a trend — it's a thoughtful approach to consumption. Opt for natural fibers, support transparent brands, and prioritize longevity over fast fashion. We'll highlight a few brands and wardrobe strategies to shop smarter.</p>
  },
  {
    id: 4,
    title: "The Secret to Effortless Street Style",
    author: "Ali Rateb",
    date: "July 12, 2025",
    img: "assets/images/blog4.jpg",
    excerpt: "Street style is about confidence...",
    content: <p>Street style mixes comfort with personality. Start with statement outerwear, combine high and low pieces, and always choose shoes that reflect your aesthetic. Confidence is the final accessory.</p>
  },
  {
    id: 5,
    title: "Color Psychology in Fashion",
    author: "Maryam Hossaini",
    date: "June 03, 2025",
    img: "assets/images/blog5.jpg",
    excerpt: "Colors influence mood and perception...",
    content: <p>Colors carry meaning — blues often calm, reds command attention. Use color-blocking to create focal points, and pick palettes that align with your brand or mood.</p>
  },
  {
    id: 6,
    title: "Luxury vs Minimalism: Finding Your True Style",
    author: "Armin Rahimi",
    date: "May 20, 2025",
    img: "assets/images/blog6.jpg",
    excerpt: "Where luxury meets simplicity...",
    content: <p>Both luxury and minimalism have their merits. Luxury focuses on craftsmanship and statement pieces; minimalism values restraint and perfect proportions. Learn to blend both for a curated wardrobe.</p>
  }
];

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

document.addEventListener('DOMContentLoaded', () => {
  const id = parseInt(getQueryParam('id')) || 1;
  const post = postsData.find(p => p.id === id) || postsData[0];

  // render content
  const titleEl = document.getElementById('post-title');
  const heroImg = document.getElementById('single-hero-img');
  const authorName = document.getElementById('post-author');
  const postDate = document.getElementById('post-date');
  const contentEl = document.getElementById('post-content');

  if (titleEl) titleEl.textContent = post.title;
  if (heroImg) heroImg.src = post.img;
  if (authorName) authorName.textContent = post.author;
  if (postDate) postDate.textContent = post.date;
  if (contentEl) contentEl.innerHTML = post.content;

  // COMMENTS using localStorage (key per post id)
  const commentsKey = comments_post_${post.id};
  const commentsList = document.getElementById('comments-list');
  const commentForm = document.getElementById('comment-form');

  function renderComments() {
    const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
    commentsList.innerHTML = comments.map(c => `
      <div class="comment">
        <div class="meta"><strong>${escapeHtml(c.name)}</strong> • <small class="text-muted">${new Date(c.date).toLocaleString()}</small></div>
        <div class="body">${escapeHtml(c.text)}</div>
      </div>
    `).join('');
  }

  function escapeHtml(unsafe) {
    return unsafe
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  renderComments();

  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('comment-name').value.trim();
      const text = document.getElementById('comment-text').value.trim();
      if (!name || !text) {
        alert('Please enter name and comment.');
        return;
      }
      const comments = JSON.parse(localStorage.getItem(commentsKey)) || [];
      comments.unshift({ name, text, date: Date.now() });
      localStorage.setItem(commentsKey, JSON.stringify(comments));
      commentForm.reset();
      renderComments();
    });
  }
});