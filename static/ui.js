$(".nextBtn").click(function () {
  $(".header").hide();
  $(".second").hide();
  $(".portfolio-box").show();
  $(".resume-container").hide();
  $(".nextBtn").hide();
  $(".upBtn").show();
});
$(".upBtn").click(function () {
  $(".header").show();
  $(".second").show();
  $(".resume-container").hide();
  $(".portfolio-box").hide();
  $(".jeopardy-container").hide();
  $(".connect4-container").hide();
  $(".boggle-container").hide();
  $(".nextBtn").show();
  $(".upBtn").hide();
});

$(".resume").click(function () {
  $(".portfolio-box").hide();
  $(".header").hide();
  $(".second").hide();
  $(".resume-container").show();
  $(".about-container").hide();
  $(".nextBtn").hide();
  $(".upBtn").show();
});

$(".next-page").click(function () {
  $(".header").hide();
  $(".second").hide();
  $(".portfolio-box").show();
  $(".resume-container").hide();
  $(".nextBtn").hide();
  $(".upBtn").show();
});

$(".about").click(function () {
  $(".portfolio-box").hide();
  $(".resume-container").hide();
  $(".header").hide();
  $(".second").hide();
  $(".about-container").show();
  $(".nextBtn").hide();
  $(".upBtn").show();
});

$(".boggle-img").click(function () {
  $(".portfolio-box").slideUp();
  $(".resume-container").hide();
});


