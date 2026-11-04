
const projects = [
  {
    number: "01", title: "Cryptocurrency Investment Platform", category: "fullstack", categoryLabel: "FULL-STACK WEB APPLICATION", visual: "investment",
    description: "A responsive investment platform featuring user and admin dashboards, configurable investment plans, deposit workflows, bonus enrollment, referral tracking, and transaction management.",
    technologies: "PHP · Laravel · MySQL · JavaScript · HTML · CSS · Bootstrap",
    liveUrl: "https://clearviewinvestments.org/", githubUrl: ""
  },
  {
    number: "02", title: "Movie Discovery Application", category: "javascript", categoryLabel: "API-POWERED APPLICATION", visual: "movie",
    description: "An interactive movie discovery experience with search, dynamic movie information, ratings, descriptions, and trailer discovery through external APIs.",
    technologies: "HTML5 · CSS3 · JavaScript · TMDB API · YouTube Data API",
    liveUrl: "https://ferdinandstanley.github.io/wdd330-project/movie-discovery/index.html", githubUrl: ""
  },
  {
    number: "03", title: "Lagos Chamber of Commerce", category: "web", categoryLabel: "MULTI-PAGE WEBSITE", visual: "chamber",
    description: "A multi-page business directory website with responsive layouts, dynamically rendered business listings from JSON, and interactive features using JavaScript and local storage.",
    technologies: "HTML5 · CSS3 · JavaScript · JSON · GitHub Pages",
    liveUrl: "", githubUrl: ""
  },
  {
    number: "04", title: "Responsive Temple Directory", category: "javascript", categoryLabel: "RESPONSIVE WEBSITE", visual: "temple",
    description: "A responsive directory website for presenting temple information with dynamic content, interactive features, accessible navigation, and layouts that adapt to different screen sizes.",
    technologies: "HTML5 · CSS3 · JavaScript",
    liveUrl: "https://ferdinandstanley.github.io/wdd131/filtered-temples.html", githubUrl: ""
  }
];

const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-button');

function projectPreview(project) {
  return `<div class="project-visual ${project.visual}" aria-hidden="true">
    <div class="mock-browser"><div class="mock-top"><i></i><i></i><i></i></div>
      <div class="mock-body"><div class="mock-brand"></div><div class="mock-heading"></div><div class="mock-sub"></div>
        <div class="mock-row"><div class="mock-tile"></div><div class="mock-tile"></div><div class="mock-tile"></div></div>
      </div>
    </div>
  </div>`;
}

function renderProjects(filter = 'all') {
  const visibleProjects = projects.filter(project => filter === 'all' || project.category === filter);
  projectsGrid.innerHTML = visibleProjects.map(project => {
    const liveLink = project.liveUrl
      ? `<a href="${project.liveUrl}" target="_blank" rel="noopener">Live demo ↗</a>`
      : `<span class="inactive-link">Live demo link to be added</span>`;
    const sourceLink = project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noopener">Source code ↗</a>`
      : `<span class="inactive-link">GitHub link will be added</span>`;
    return `<article class="project-card">
      ${projectPreview(project)}
      <div class="project-content">
        <div class="project-topline"><span class="project-type">${project.categoryLabel}</span><span class="project-number">${project.number} / 04</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">${project.technologies}</div>
        <div class="project-links">${liveLink}${sourceLink}</div>
      </div>
    </article>`;
  }).join('');
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
