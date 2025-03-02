document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Ajouté pour éviter qu'ils restent invisibles
            }
        });
    }, { threshold: 0.2 });

    items.forEach((item) => observer.observe(item));
});
