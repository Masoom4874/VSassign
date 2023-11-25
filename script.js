function toggleNavbar() {
  var navbar = document.getElementById("Navbar");
  navbar.classList.toggle("show");
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var navbar = document.getElementById("Navbar");

  if (section && navbar) {
    var offset = navbar.offsetHeight;
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });

    navbar.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("close-btn").addEventListener("click", function () {
    // Navigate to the home section
    window.location.href = "#home";
  });
});

// Script for campaign page--------
// -------------------------------
// -------------------------------
var myElement = document.getElementById("campaign-2"),
  imgList = [
    { src: "assets/Ideas/IdeasImg1.png", title: "Gamifications" },
    { src: "assets/Ideas/IdeasImg2.png", title: "Quiz" },
    { src: "assets/Ideas/IdeasImg3.png", title: "Photo Activity(Pictivatr)" },
    { src: "assets/Ideas/IdeasImg4.png", title: "Educational Training" },
    { src: "assets/Ideas/IdeasImg5.png", title: "Pledge" },
    { src: "assets/Ideas/IdeasImg6.png", title: "Survey" },
    { src: "assets/Ideas/IdeasImg7.png", title: "Video based Quiz" },
  ];

function changeImage(myElement, imgList) {
  setInterval(function () {
    var randomImage = Math.floor(Math.random() * imgList.length);
    document.getElementById("campaign-image").src = imgList[randomImage].src;
    document.getElementById("image-title").textContent =
      imgList[randomImage].title;
  }, 1000);
}

changeImage(myElement, imgList);
