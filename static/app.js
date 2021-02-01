// animation on first page load

$(document).ready(function () {
  setTimeout(function () {
    $(".gradient-text").css("visibility", "visible");
  }, 500);
  setTimeout(function () {
    $(".definition").css("visibility", "visible");
  }, 3000);
  setTimeout(function () {
    $(".likes").css("visibility", "visible");
  }, 4500);
  setTimeout(function () {
    $(".folder").css("visibility", "visible");
  }, 4500);
});

$(".next-page").click(function () {
  $(".jeopardy-container").hide();
  $(".connect4-container").hide();
  $(".boggle-container").hide();
  $(".portfolio-box").show();
  $(".sidebar").show();
  $(".resume-container").hide();
  $("html, body").animate(
    {
      scrollTop: parseInt($(".portfolio-box").offset().top),
    },
    2000
  );
});

$(".resume").click(function () {
  $(".portfolio-box").hide();
  $(".resume-container").show();
  $(".sidebar").show();
  $("html, body").animate(
    {
      scrollTop: parseInt($(".resume-container").offset().top),
    },
    2000
  );
});

$(".boggle-img").click(function () {
  $(".portfolio-box").slideUp();
  $(".resume-container").hide();
});

$(document).ready(function () {});
$(".backToTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: "0px",
    },
    1000
  );
  $(".resume-container").hide();
  $(".portfolio-box").hide();
  $(".jeopardy-container").hide();
  $(".connect4-container").hide();
  $(".boggle-container").hide();
});

$(".about").click(function () {
  $(".portfolio-box").hide();
  $(".resume-container").hide();
  $(".sidebar").show();
  $(".about-container").show();
  $("html, body").animate(
    {
      scrollTop: parseInt($(".about-container").offset().top),
    },
    2000
  );
});