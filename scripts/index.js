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

  /* Loop through each 'project' item */
  $(".project-item").each(function (index, value) {
    // start at 1 to get the correct 'nth-of-type' of classes
    index += 1;

    var project_item = ".project-item:nth-of-type(" + index;

    // open popup
    document.querySelector(project_item + ") .learn-more").addEventListener("click", function () {
      document.querySelector(project_item + ") .popup-learn-more").style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
    })

    // close popup
    document.querySelector(project_item + ") .popup-learn-more span:nth-child(1)").addEventListener("click", function () {
      document.querySelector(project_item + ") .popup-learn-more").style.display = "none";
      document.querySelector("body").style.overflow = "initial";
    })

    // when hovering over this class, do this:
    $(value).mouseover(function () {
      document.querySelector(project_item + ") img").classList.add("project-item-hover");
      $(value).css("background-color", "#1f1f1f");
      document.querySelector(project_item + ") .learn-more").style.display = "block";

    });
    // when NOT hovering over this class, do this:
    $(value).mouseout(function () {
      document.querySelector(project_item + ") img").classList.remove("project-item-hover");
      $(value).css("background-color", "initial");
      document.querySelector(project_item + ") .learn-more").style.display = "none";
    });

  })

  /* Slide-in animation when scrolling down to anchors' position (in this case: section titles) */
  var sectionId1 = document.querySelector("#about");
  var sectionId2 = document.querySelector("#get-in-touch");
  var animationItem = "slide-in 1.5s forwards";

  // define variable to observe whether the targeted id element is visible on screen or not
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
  // start observing targeted id element
  observer.observe(sectionId1);
  observer.observe(sectionId2)
});