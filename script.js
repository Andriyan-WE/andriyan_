/* =======================
   TOOLS DATA
======================= */
const tools = [
  { name: "CapCut", icon: "assets/tools/capcut.png" },
  { name: "Photoshop", icon: "assets/tools/Adobe_Photoshop.png" },
  { name: "Canva", icon: "assets/tools/canva.png" }
];

const toolsGrid = document.getElementById("tools-grid");

toolsGrid.innerHTML = tools
  .map(
    tool => `
    <div class="tool-card" title="${tool.name}">
      <img src="${tool.icon}" alt="${tool.name}">
    </div>
  `
  )
  .join("");

/* =======================
   PROJECTS DATA
======================= */
const projects = [
  {
    type: "image",
    title: "Social Media Design – Visual Content Showcase",
    description:
      "This Instagram account serves as a portfolio to showcase my social media design works and campaign visuals. For a complete view of my design outputs, please visit the Instagram profile.",
    image: "assets/images/ig portofolio.png",
    link: "https://instagram.com/portfolio.andriyan",
    techStack: ["Adobe Photoshop"]
  },
  {
    type: "image",
    title: "VTuber Clipping – Channel Owner",
    description:
      "Managed and developed a VTuber clipping YouTube channel focused on short-form and highlight content. Responsibilities include content selection, video editing, thumbnail design, and optimizing videos for audience engagement and channel growth.",
    image: "assets/images/youtube mizu.png",
    link: "https://www.youtube.com/@Mizu-VTuberClipper/",
    techStack: ["Adobe Photoshop", "CapCut"]
  },
  {
    type: "image",
    title: "VTuber Clipping – Content Contributor",
    description:
      "Worked collaboratively on a VTuber clipping YouTube channel, contributing to content production through clip curation, video editing, and visual preparation, while maintaining consistency with the channel’s style and audience expectations.",
    image: "assets/images/youtube gosetsu.png",
    link: "https://www.youtube.com/@GosetsuClips",
    techStack: ["Adobe Photoshop", "CapCut"]
  },
  {
    type: "video",
    title: "Original Video Production – Filming & Editing",
    description:
      "An original video project focused on post-production editing, including visual pacing, sequencing, and overall presentation. This work showcases my ability to shape raw footage into a cohesive and engaging final video.",
    videoUrl: "assets/videos/just a short trip.mp4",
    externalLink: "https://www.instagram.com/reel/DSDDjcHkvwz/",
    techStack: ["CapCut"]
  },
  {
    type: "video",
    title: "Original Video Production – Filming & Editing",
    description:
      "An original video project focused on post-production editing, including visual pacing, sequencing, and overall presentation. This work showcases my ability to shape raw footage into a cohesive and engaging final video.",
    videoUrl: "assets/videos/content.mp4",
    externalLink: "https://www.instagram.com/reel/DKHutxNPdRp/",
    techStack: ["CapCut"]
  }
];

/* =======================
   RENDER MEDIA
======================= */
function renderMedia(project) {
  if (project.type === "video") {
    return `
      <div class="video-wrapper">
        <video controls muted onclick="event.stopPropagation()">
          <source src="${project.videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  }

  return `<img src="${project.image}" alt="${project.title}">`;
}

/* =======================
   RENDER PROJECT GRID
======================= */
const projectGrid = document.getElementById("project-grid");

projectGrid.innerHTML = projects
  .map(
    project => `
    <a href="${project.externalLink || project.link}" 
       target="_blank" 
       class="project-link-wrapper">
      <div class="project-card">
        ${renderMedia(project)}
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <small>${project.techStack.join(" • ")}</small>
        </div>
      </div>
    </a>
  `
  )
  .join("");
