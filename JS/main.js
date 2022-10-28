const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var loc = window.location.pathname;

   $('.nav-item').find('a').each(function() {
     $(this).toggleClass('active', $(this).attr('href') == loc);
  });
