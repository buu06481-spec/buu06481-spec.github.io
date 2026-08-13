// 文章数据（替换为你自己的内容）
const posts = [
  {
    title: "用 CSS 变量打造可换肤的前端主题",
    date: "2024-12-01",
    excerpt: "介绍如何利用 CSS 自定义属性与 data-theme，优雅地实现深色模式与多主题切换。",
    tags: ["CSS", "前端"],
    emoji: "🎨",
    color: "#ffe0b2",
    url: "#",
  },
  {
    title: "JavaScript 异步编程完全指南",
    date: "2024-11-18",
    excerpt: "从回调、Promise 到 async/await，一文搞懂 JavaScript 异步编程的来龙去脉。",
    tags: ["JavaScript", "教程"],
    emoji: "⚡",
    color: "#c8e6c9",
    url: "#",
  },
  {
    title: "我的 2024 年读书清单",
    date: "2024-11-02",
    excerpt: "分享今年读过的几本好书，以及它们带给我的启发与思考。",
    tags: ["阅读", "生活"],
    emoji: "📚",
    color: "#bbdefb",
    url: "#",
  },
  {
    title: "从零搭建个人博客的踩坑记录",
    date: "2024-10-15",
    excerpt: "记录自己搭建博客过程中的域名、部署、SEO 等经验，希望对你有用。",
    tags: ["教程", "折腾"],
    emoji: "🚀",
    color: "#f8bbd0",
    url: "#",
  },
  {
    title: "TypeScript 类型体操入门",
    date: "2024-09-28",
    excerpt: "通过几个有趣的例子，带你领略 TypeScript 类型系统的强大与优雅。",
    tags: ["TypeScript", "进阶"],
    emoji: "🧩",
    color: "#d1c4e9",
    url: "#",
  },
  {
    title: "如何保持持续学习的动力",
    date: "2024-09-10",
    excerpt: "聊聊我在工作与生活中保持学习热情、建立知识体系的一些方法。",
    tags: ["成长", "思考"],
    emoji: "🌱",
    color: "#c5e1a5",
    url: "#",
  },
];

const postsGrid = document.getElementById("postsGrid");
const tagsCloud = document.getElementById("tagsCloud");

function renderPosts(list) {
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
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

// 移动端菜单
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mainNav.classList.remove("open"))
);

// 初始化
renderPosts(posts);
renderTags();
