// 文章数据
const posts = [
  {
    title: "公猪的产前护理",
    date: "2026-08-14",
    excerpt: "有人问：母猪有产后护理，那公猪有产前护理吗？答案是：它压根不怀孕。但既然你问了，我认真写一篇。",
    tags: ["养殖", "硬核"],
    emoji: "🐗",
    color: "#c5e1a5",
    url: "post-4.html",
  },
  {
    title: "母猪的产后护理",
    date: "2026-08-13",
    excerpt: "作为一个啥都会的工程师，母猪的产后护理我自然也略懂亿点。本文手把手教你，学不会算我输。",
    tags: ["养殖", "硬核"],
    emoji: "🐷",
    color: "#f8bbd0",
    url: "post-1.html",
  },
  {
    title: "如何10块钱花一个月",
    date: "2026-08-12",
    excerpt: "极限生存挑战：用10块钱过一个月，平均每天三毛三，月末居然还能剩两毛买糖。",
    tags: ["生存", "理财"],
    emoji: "💰",
    color: "#c8e6c9",
    url: "post-2.html",
  },
  {
    title: "怎么样才能中3000万的彩票",
    date: "2026-08-11",
    excerpt: "中彩票的终极攻略：按我说的做，中奖概率能从约等于0，提升到无限接近0。",
    tags: ["玄学", "暴富"],
    emoji: "🍀",
    color: "#ffe0b2",
    url: "post-3.html",
  },
];

const postsGrid = document.getElementById("postsGrid");
const tagsCloud = document.getElementById("tagsCloud");

function renderPosts(list) {
  if (!postsGrid) return;
  postsGrid.innerHTML = list
    .map(
      (p) => `
      <article class="post-card">
        <div class="post-cover" style="background:${p.color}">${p.emoji}</div>
        <div class="post-body">
          <div class="post-date">${p.date}</div>
          <h3 class="post-title"><a href="${p.url}">${p.title}</a></h3>
          <p class="post-excerpt">${p.excerpt}</p>
          <div class="post-tags">${p.tags
            .map((t) => `<span class="post-tag"># ${t}</span>`)
            .join("")}</div>
        </div>
      </article>`
    )
    .join("");
}

function renderTags() {
  if (!tagsCloud) return;
  const counts = {};
  posts.forEach((p) => p.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  tagsCloud.innerHTML = Object.entries(counts)
    .map(([tag, n]) => `<span class="tag-pill">${tag}（${n}）</span>`)
    .join("");
}

// 主题切换
const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

// 移动端菜单
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
  mainNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mainNav.classList.remove("open"))
  );
}

// 初始化
renderPosts(posts);
renderTags();
