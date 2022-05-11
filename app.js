const faqs = document.querySelectorAll(".faq");

for (let item of faqs) {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
    else {
      faqs.forEach((subFaq) => {
        subFaq.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
}
