(function () {
  function initHomeCards() {
    var cards = document.querySelectorAll('.home-card');

    cards.forEach(function (card) {
      var button = card.querySelector('.home-card__toggle');
      var content = card.querySelector('.home-card__content');

      button.addEventListener('click', function () {
        var isOpen = button.getAttribute('aria-expanded') === 'true';

        cards.forEach(function (otherCard) {
          var otherButton = otherCard.querySelector('.home-card__toggle');
          var otherContent = otherCard.querySelector('.home-card__content');
          otherButton.setAttribute('aria-expanded', 'false');
          otherCard.classList.remove('is-open');
          otherContent.hidden = true;
        });

        if (!isOpen) {
          button.setAttribute('aria-expanded', 'true');
          card.classList.add('is-open');
          content.hidden = false;
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeCards);
  } else {
    initHomeCards();
  }
})();
