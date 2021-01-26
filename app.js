function displayResume() {
  hideElements();
  $(".resume-container").show();
}

$(".resume").on("click", displayResume);

function displayPortfolio() {
  hideElements();
  $(".portfolio-container").show();
  $(".capstone-container").show();
}

$(".portfolio").on("click", displayPortfolio);

function displayCapstone() {
  hideElements();
  $(".capstone-container").hide();
  $(".capstone-detail").show();
}
$(".capstone-link").on("click", displayCapstone);

function displayContactInfo() {
  hideElements();
  $(".contact-container").show();
}

$(".contact").on("click", displayContactInfo);

function displayAboutMe() {
  hideElements();
  $(".about-container").show();
}

$(".about").on("click", displayAboutMe);

function hideElements() {
  $(".resume-container").hide();
  $(".capstone-container").hide();
  $(".portfolio-container").hide();
  $(".contact-container").hide();
  $(".page-title").hide();
  $(".profile-pic").hide();
  $(".about-container").hide();
}

hideElements();
$(".page-title").show();
$(".profile-pic").show();
