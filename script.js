//NavBar Brand
document.querySelector(".navbar-brand").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".navbar-brand").scrollIntoView({
    behavior: "smooth",
  });
});
//Home Nav
for (var i = 0; i < document.querySelectorAll(".home").length; i++) {
  document.querySelectorAll(".home")[i].addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".navbar-brand").scrollIntoView({
      behavior: "smooth",
    });
  });
}
//Price Nav
for (var i = 0; i < document.querySelectorAll(".price").length; i++) {
  document
    .querySelectorAll(".price")
    [i].addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".pricing-header").scrollIntoView({
        behavior: "smooth",
      });
    });
}
//About Nav
for (var i = 0; i < document.querySelectorAll(".about").length; i++) {
  document
    .querySelectorAll(".about")
    [i].addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".aboutus").scrollIntoView({
        behavior: "smooth",
      });
    });
}
//BookClass Heroes
document.querySelector(".btnprice").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".pricing-header").scrollIntoView({
    behavior: "smooth",
  });
});
//Features Footer
document.querySelector(".feature").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#icon-grid").scrollIntoView({
    behavior: "smooth",
  });
});
