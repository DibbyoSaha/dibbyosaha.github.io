const skillsElement = document.querySelector('.skills');
if (skillsElement) {
    var typed = new Typed(skillsElement, {
        strings: ['Developer', 'Tester', 'Bookworm'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const isWorkExperiencesPage = window.location.pathname.includes("work-experiences.html");
    const isProjectsPage = window.location.pathname.includes("projects.html");

    if (isWorkExperiencesPage) {
        const buttons = document.querySelectorAll('.icon-box a.social-icon');
        const sections = document.querySelectorAll('.experience-text');

        function showSection(target) {
            sections.forEach(section => {
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        }

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const target = button.dataset.target;
                showSection(target);
            });
        });

        // Show only the default section initially
        showSection('mccss');
    }

    if (isProjectsPage) {
        const projectButtons = document.querySelectorAll('.icon-box a.social-icon');
        const projectSections = document.querySelectorAll('.experience-text');

        function showProjectSection(target) {
            projectSections.forEach(section => {
                section.classList.remove('active');
            });

            const targetProject = document.getElementById(target);
            if (targetProject) {
                targetProject.classList.add('active');
            }
        }

        projectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const target = button.getAttribute('href').substring(1);
                showProjectSection(target);
            });
        });

        // Show only the default project section initially
        showProjectSection('mccss');
    }
});
