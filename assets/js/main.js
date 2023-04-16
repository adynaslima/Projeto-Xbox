const faq = document.querySelectorAll (".section__faq-accordion");

faq.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})