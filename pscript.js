$(document).ready(function() {
  let $projectScroll = $('.project-scroll');
  let $projectCards = $('.project-card');
  let scrollAmount = calculateScrollAmount();

  function calculateScrollAmount() {
      let containerWidth = $('.container').width();
      let cardWidth = $('.project-card').outerWidth(true);
      let visibleCards = Math.floor(containerWidth / cardWidth);
      return cardWidth * visibleCards;
  }

  function cloneItems() {
      $projectCards.each(function() {
          $projectScroll.append($(this).clone());
      });
  }

  function scrollLeft() {
      if ($projectScroll.scrollLeft() <= 0) {
          $projectScroll.scrollLeft($projectScroll[0].scrollWidth / 2);
      }
      $projectScroll.animate({ scrollLeft: '-=' + scrollAmount }, 500);
  }

  function scrollRight() {
      if ($projectScroll.scrollLeft() + $projectScroll.width() >= $projectScroll[0].scrollWidth / 2) {
          $projectScroll.scrollLeft(0);
      }
      $projectScroll.animate({ scrollLeft: '+=' + scrollAmount }, 500);
  }

  $('.scroll-button.left').click(scrollLeft);
  $('.scroll-button.right').click(scrollRight);

  $(window).resize(function() {
      scrollAmount = calculateScrollAmount();
  });

  // Initialize scrollAmount and clone items on document ready
  scrollAmount = calculateScrollAmount();
  cloneItems();
});
