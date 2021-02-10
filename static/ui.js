

const mediaQuery = window.matchMedia("( max-width: 700px )");

if (mediaQuery.matches) {
  $(".img").attr("src", "/static/images/me.png");
} else {
  $(".img").attr("src", "/static/images/me.jpg");
}

mediaQuery.addEventListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
