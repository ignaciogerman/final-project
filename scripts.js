

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const cards = document.querySelectorAll(".card, .service, .project");

    // Observer for sections
    const sectionObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => sectionObserver.observe(section));

    // Observer for cards and child elements
    const cardObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.setProperty("--delay", index);
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    cards.forEach(card => cardObserver.observe(card));
});

