
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(
        ".section, .student-card, .lab-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(function (section) {
        section.classList.add("reveal");
        observer.observe(section);
    });
});

