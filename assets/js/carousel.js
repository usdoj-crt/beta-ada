/*!
 * Adapted from W3C WAI’s Web Accessibility Tutorials carousel
 * https://github.com/w3c/wai-tutorials/
 */

function mobileCarousel() {
  const context = {
    carousel: undefined,
    slides: undefined,
    index: undefined,
    slidenav: undefined,
    settings: undefined,
    timer: undefined,
    setFocus: undefined,
    animationSuspended: false,
  };

  function removeClass(el, className) {
    el.classList.remove(className);
  }

  function hasClass(el, className) {
    return el.classList.contains(className);
  }

  /* Initialization for the carousel
  Argument: set = an object of settings
  Possible settings:
  id <string> ID of the carousel wrapper element (required).
  slidenav <bool> If true, a list of slides is shown.
  animate <bool> If true, the slides can be animated.
  startAnimated <bool> If true, the animation begins
  immediately.
  If false, the animation needs
  to be initiated by clicking
  the play button. */
  function init(set) {
    // Make settings available to all functions
    context.settings = set;

    // Select the element and the individual slides
    context.carousel = document.getElementById(context.settings.id);

    if (!context.carousel) return;

    context.slides = context.carousel.querySelectorAll('.slide');

    context.carousel.className = 'active carousel';

    initControls();
    initSidenav();

    // Add a live region to announce the slide number when using the previous/next buttons
    const liveregion = document.createElement('div');
    liveregion.setAttribute('aria-live', 'polite');
    liveregion.setAttribute('aria-atomic', 'true');
    liveregion.setAttribute('class', 'liveregion hidden');
    context.carousel.appendChild(liveregion);

    // After the slide transitioned, remove the in-transition class, if focus should be set, set the tabindex attribute to -1 and focus the slide.
    context.slides[0].parentNode.addEventListener('transitionend', function (event) {
      let slide = event.target;
      removeClass(slide, 'in-transition');
      if (!hasClass(slide, 'current')) return;
      if (!context.setFocus) return;
      slide.setAttribute('tabindex', '-1');
      slide.focus();
      context.setFocus = false;
    });

    // When the mouse enters the carousel, suspend the animation.
    context.carousel.addEventListener('mouseenter', suspendAnimation);

    // When the mouse leaves the carousel, and the animation is suspended, start the animation.
    context.carousel.addEventListener('mouseleave', function (event) {
      if (context.animationSuspended) {
        startAnimation();
      }
    });

    // When the focus enters the carousel, suspend the animation
    context.carousel.addEventListener('focusin', function (event) {
      if (!hasClass(event.target, 'slide')) {
        suspendAnimation();
      }
    });

    // When the focus leaves the carousel, and the animation is suspended, start the animation
    context.carousel.addEventListener('focusout', function (event) {
      if (!hasClass(event.target, 'slide') && context.animationSuspended) {
        startAnimation();
      }
    });

    // Set the index (=current slide) to 0 – the first slide
    context.index = 0;
    setSlides(context.index);

    // If the carousel is animated, advance to the
    // next slide after 5s
    if (context.settings.startAnimated) {
      context.timer = setTimeout(nextSlide, 5000);
    }
  }

  function initControls() {
    const ctrls = document.createElement('ul');

    ctrls.className = 'controls';
    ctrls.innerHTML =
      '<li>' +
      '<button type="button" data-ga-event-name="Previous slide" class="carousel-btn btn-prev" aria-label="Previous slide" alt="Previous Item" />' +
      '</li>' +
      '<li>' +
      '<button type="button" data-ga-event-name="Next slide" class="carousel-btn btn-next" aria-label="Next slide" alt="Next Item" />' +
      '</li>';

    ctrls.querySelector('.btn-prev').addEventListener('click', function () {
      prevSlide(true);
    });
    ctrls.querySelector('.btn-next').addEventListener('click', function () {
      nextSlide(true);
    });

    context.carousel.appendChild(ctrls);
  }

  function initSidenav() {
    // If the carousel is animated or a slide navigation is requested in the settings, another unordered list that contains those elements is added. (Note that you cannot supress the navigation when it is animated.)
    if (!(context.settings.slidenav || context.settings.animate)) return;
    context.slidenav = document.createElement('ul');

    context.slidenav.className = 'slidenav';

    if (context.settings.animate) {
      const li = document.createElement('li');

      if (context.settings.startAnimated) {
        li.innerHTML = '<button data-action="stop" aria-label="Stop Animation">￭</button>';
      } else {
        li.innerHTML = '<button data-action="start" aria-label="Start Animation">▶</button>';
      }

      context.slidenav.appendChild(li);
    }

    if (context.settings.slidenav) {
      context.slides.forEach((_slide, i) => {
        const li = document.createElement('li');
        const klass = i === 0 ? 'class="current carousel-nav" ' : 'class="carousel-nav" ';
        const ariaLabel = '"slide ' + (i + 1) + ' navigation" ';

        li.innerHTML =
          '<button data-ga-event-name=' +
          ariaLabel +
          'aria-label=' +
          ariaLabel +
          klass +
          'data-slide="' +
          i +
          '"/>';
        context.slidenav.appendChild(li);
      });
    }

    context.slidenav.addEventListener(
      'click',
      function (event) {
        const button = event.target;
        if (button.localName != 'button') return;
        if (button.getAttribute('data-slide')) {
          if (context.settings.startAnimated) {
            stopAnimation();
          }
          setSlides(button.getAttribute('data-slide'), true);
        } else if (button.getAttribute('data-action') == 'stop') {
          stopAnimation();
        } else if (button.getAttribute('data-action') == 'start') {
          startAnimation();
        }
      },
      true
    );

    context.carousel.className = 'active carousel with-slidenav';
    context.carousel.appendChild(context.slidenav);
  }

  // Function to set a slide the current slide
  function setSlides(new_current, setFocusHere, transition, announceItemHere) {
    /* Focus, transition and announce Item are optional parameters.
    focus denotes if the focus should be set after the
    carousel advanced to slide number new_current.
    transition denotes if the transition is going into the
    next or previous direction.
    If announceItem is set to true, the live region’s text is changed (and announced)
    Here defaults are set: */

    context.setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
    transition = typeof transition !== 'undefined' ? transition : 'none';
    const announceItem = typeof announceItemHere !== 'undefined' ? announceItemHere : false;

    new_current = parseFloat(new_current);

    let length = context.slides.length;
    let new_next = new_current + 1;
    let new_prev = new_current - 1;

    if (new_next === length) {
      new_next = 0;
    } else if (new_prev < 0) {
      new_prev = length - 1;
    }

    // Reset slide classes
    context.slides.forEach((slide) => (slide.className = 'slide'));

    // Add classes to the previous, next and current slide
    context.slides[new_next].className =
      'next slide' + (transition == 'next' ? ' in-transition' : '');
    context.slides[new_next].removeAttribute('aria-hidden');

    context.slides[new_prev].className =
      'prev slide' + (transition == 'prev' ? ' in-transition' : '');
    context.slides[new_prev].setAttribute('aria-hidden', 'true');

    context.slides[new_current].className = 'current slide';
    context.slides[new_current].removeAttribute('aria-hidden');

    // Update the text in the live region which is then announced by screen readers.
    if (announceItem) {
      context.carousel.querySelector('.liveregion').textContent =
        'Item ' + (new_current + 1) + ' of ' + context.slides.length;
    }

    // Update the buttons in the slider navigation to match the currently displayed  item
    if (context.settings.slidenav) {
      const buttons = context.carousel.querySelectorAll('.slidenav button[data-slide]');
      buttons.forEach((button) => (button.className = 'carousel-nav'));
      buttons[new_current].className = 'current carousel-nav';
    }

    // Set the global index to the new current value
    context.index = new_current;
  }

  function nextSlide(announceItem) {
    announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

    const length = context.slides.length;
    let new_current = context.index + 1;

    if (new_current === length) {
      new_current = 0;
    }

    setSlides(new_current, false, 'prev', announceItem);

    if (context.settings.animate) {
      context.timer = setTimeout(nextSlide, 5000);
    }
  }

  function prevSlide(announceItem) {
    announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

    const length = context.slides.length;
    let new_current = context.index - 1;

    // If we are already on the first slide, show the last slide instead.
    if (new_current < 0) {
      new_current = length - 1;
    }

    setSlides(new_current, false, 'next', announceItem);
  }

  function stopAnimation() {
    clearTimeout(context.timer);
    context.settings.animate = false;
    context.animationSuspended = false;
    const action = context.carousel.querySelector('[data-action]');
    action.innerHTML = '<span class="visuallyhidden">Start Animation </span>▶';
    action.setAttribute('data-action', 'start');
  }

  function startAnimation() {
    context.settings.animate = true;
    context.animationSuspended = false;
    context.timer = setTimeout(nextSlide, 5000);
    const action = context.carousel.querySelector('[data-action]');
    action.innerHTML = '<span class="visuallyhidden">Stop Animation </span>￭';
    action.setAttribute('data-action', 'stop');
  }

  function suspendAnimation() {
    if (!context.settings.animate) return;
    clearTimeout(context.timer);
    settings.animate = false;
    context.animationSuspended = true;
  }

  init({
    id: 'carousel',
    slidenav: true,
    animate: false,
    startAnimated: false,
  });
}

export default mobileCarousel;
