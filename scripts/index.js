$(document).ready(function () {

  /* Smooth scroll function when clicking menu anchors */
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      // 800 specifies the number of milliseconds it takes to scroll to the specified area (optional)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  var sectionId1 = document.querySelector("#about");
  var sectionId2 = document.querySelector("#get-in-touch");
  var animationItem = "slide-in 2s forwards";

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting == true) {
        if (entry.target.id == "about") {
          document.querySelector(".scroll-down-container").style.animation = "scroll-hide 2.5s forwards";
          document.querySelector("#about .flexbox-item:nth-of-type(1)").style.animation = animationItem;
          document.querySelector("#about .flexbox-item:nth-of-type(2)").style.animation = animationItem;
          observer.unobserve(sectionId1);
        } else if (entry.target.id == "get-in-touch") {
          document.querySelector("#get-in-touch .flexbox-item:nth-of-type(1)").style.animation = animationItem;
          document.querySelector("#get-in-touch .flexbox-item:nth-of-type(2)").style.animation = animationItem;
          observer.unobserve(sectionId2);
        }
      }
    })
  });
  observer.observe(sectionId1);
  observer.observe(sectionId2)
});