// animation on first page load

$(document).ready(function () {
  setTimeout(function () {
    $(".gradient-text").css("visibility", "visible");
  }, 500);
  setTimeout(function () {
    $(".definition").css("visibility", "visible");
  }, 3500);
  setTimeout(function () {
    $(".likes").css("visibility", "visible");
  }, 6500);
  setTimeout(function () {
    $(".folder").css("visibility", "visible");
  }, 8000);
});

$(".next-page").click(function () {
  $(".portfolio-box").show();
  $(".sidebar").show();
  $("html, body").animate(
    {
      scrollTop: parseInt($(".sidebar").offset().top),
    },
    2000
  );
});

$(".resume").click(function () {
  $(".portfolio-box").hide();
  $(".resume-container").show();
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
});
