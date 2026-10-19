(function () {
  'use strict';

  /* ============================================
     Mobile Navigation Toggle
     ============================================ */
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('is-open');
    });

    // Close the menu when a nav link is clicked
    var navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });
  }


  /* ============================================
     Project Case Study Toggle
     ============================================ */
  var toggleButtons = document.querySelectorAll('.project-toggle');

  toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      var targetId = button.getAttribute('aria-controls');
      var target = document.getElementById(targetId);

      if (!target) return;

      if (expanded) {
        // Collapse
        target.hidden = true;
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'View case study';
      } else {
        // Expand
        target.hidden = false;
        button.setAttribute('aria-expanded', 'true');
        button.textContent = 'Collapse';
      }
    });
  });


  /* ============================================
     Hero Load-In Animation
     Only if the user hasn't opted out of motion.
     ============================================ */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!prefersReducedMotion.matches) {
    var hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('hero--animate');
    }
  }

})();
