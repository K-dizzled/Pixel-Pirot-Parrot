const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});

window.addEventListener("scroll", e => {
    // Dealing with Safari difference.
    // look into scrollingElement https://caniuse.com/#feat=document-scrollingelement
    let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop; 
    let newPos = scrollTop + "px";
    document.documentElement.style.setProperty('--scrollPos', newPos);
  });

  var printText = $('.text').data('text');

var contentArray = printText.split('/n');
$.each(contentArray, function(index, newLine) {
  $('.text').append('<span style="display:block;" id="'+index+'"></span>');
  
  var lineID = index;
  var self = $(this);
    setTimeout(function () {
      $.each(self, function(index, chunk){
          setTimeout(function () {
            $('#'+lineID).append("<span>"+chunk+"</span>");
            $('body, html').scrollTop($(document).height());
          }, index*5);
      });
      
    }, index*100);
});