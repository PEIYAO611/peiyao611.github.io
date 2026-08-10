# 个人网站模板

纯 HTML + CSS + 一点 JavaScript。不需要 Node，不需要命令行，可以直接在 GitHub 网页上编辑。

## 上线前必须做的三件事

1. **填掉所有【】占位符。** 页面里凡是用【】包起来的中文都是待填内容，一个都不能留。
2. **全局替换两个字符串**（四个 html 文件都要，robots.txt 和 sitemap.xml 里的 USERNAME 也要）
   - `USERNAME` → 你的 GitHub 用户名
   - `you@ucsc.edu` → 真实邮箱
3. **检查一遍你愿意公开的内容。** 免费版 GitHub Pages 仓库必须公开，提交历史也是公开的。内容定稿后再第一次上传，不要把半成品当草稿箱。

首页的自我介绍段落和 PlantNet 那条论文来自你提供的参考页面，原样保留，需要的话自行替换。

## 文件说明

```
index.html          首页
research.html       研究
publications.html   论文
about.html          关于、教学、服务、联系
assets/style.css    全部样式，配色在最上面的 :root 里
assets/main.js      滚动淡入动效
assets/images/      放 portrait.jpg、pub-1.jpg、research-1.jpg 等
assets/cv.pdf       放你的 CV
robots.txt          指向 sitemap
sitemap.xml         给 Google 的页面清单
.nojekyll           让 GitHub Pages 原样发布文件
```

## 配色

改 `assets/style.css` 顶部的 `:root` 就能全站换色。

| 变量 | 值 | 用在哪 |
|---|---|---|
| `--paper` | `#FFFDFB` | 略带暖调的白底 |
| `--ink` | `#33302C` | 暖深灰，正文和标题 |
| `--ink-soft` | `#6E6862` | 次要文字 |
| `--pink` | `#FF2D7A` | 主强调色 |
| `--pink-deep` | `#D6005A` | 小字用的深粉，保证可读 |
| `--blue` | `#2B5CFF` | 第二强调色，只在少数几处 |

粉色出现的位置：首页大标题、每个 h2 下面的短横线、导航下划线、论文状态标记如 (Accepted)、会议名、方向编号 01、引注块左侧竖线。蓝色只用在少数几条横线和编号 02 上，起打断作用。想换成橘色就把 `--pink` 改成 `#FF5A1F`。

## 字体

全站 Poppins。大标题用 300 细体撑气质，正文 400，行高 1.95 留白。从 Google Fonts 加载，写在每个页面的 `<head>` 里。

## 排版积木

`.dash` 标题下的短横线（加 `--blue` 变蓝），`.split` 左右分栏，`.callout` 左竖线引注块，`.blocks` 三栏并列，`.entries` 条目列表，`.entry` 图文左右，`.entry--plain` 纯文字条目，`.status` 粉色斜体状态标记，`.hilite` 粉色强调。给任何元素加 `class="reveal"` 就有滚动淡入。

## 加一个新页面

复制 `research.html` 改名，编辑内容，然后在其他所有页面的 `<nav>` 里加一个链接，并把新网址加进 `sitemap.xml`。
