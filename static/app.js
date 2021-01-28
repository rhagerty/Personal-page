$(".next-page").click(function () {
  $(".portfolio-box").show();
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

$(document).ready(function(){
    
})
$(".backToTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: "0px",
    },
    1000
  );
});