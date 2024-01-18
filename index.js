const swiper = new Swiper(".slide-content", {
  direction: "horizontal",
  spaceBetween: 45,
  centerSlide: "true",
  loop: true,
  fade: "true",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 45,
    },

    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    1160: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});

function redirectToFacebookGroup() {
  var facebookGroupUrl = "https://www.facebook.com/groups/nothingheldback";
  window.open(facebookGroupUrl, "_blank");
}
function redirectToJobBoard() {
  var olJobUrl = "https://www.onlinejobs.ph/jobseekers/job/1091226";

  window.open(olJobUrl, "_blank");
}

function redirectToVentureNet() {
  var joinVentureNet = "https://twitter.com/home";

  window.open(joinVentureNet, "_blank");
}
