$(document).ready(function() {
  $('.faqwrapper .faq-q').each(function() {
    var sz = $(this).attr('data-qsize') + 'em';
    var lnht = $(this).attr('data-qlnht') + '%';
    var col = $(this).attr('data-qcolor');
    $(this).css({'font-size': sz, 'line-height': lnht, 'color': col});
  });
  $('.faqwrapper .faq-a').each(function() {
    var sz = $(this).attr('data-asize') + 'em';
    var lnht = $(this).attr('data-alnht') + '%';
    var col = $(this).attr('data-acolor');
    var rvlck = $(this).attr('class');
    $(this).css({'font-size': sz, 'line-height': lnht, 'color': col});
    if (rvlck.indexOf('reveal') !== -1) {$(this).parent().prev().find('.fa').removeClass('fa-caret-down').addClass('fa-caret-up');}
    else {$(this).parent().prev().find('.fa').removeClass('fa-caret-up').addClass('fa-caret-down');}
  });
  $('.faqwrapper .faq-q, .faqwrapper .fa').on('click', function() {
    var rvlck = $(this).parent().next().find('.faq-a').attr('class');
    if (rvlck.indexOf('reveal') !== -1) {
       $(this).parent().next().slideUp(600);
       $(this).parent().next().find('.faq-a').removeClass('reveal').addClass('hide');
       if ($(this).hasClass('faq-q')) {$(this).next().removeClass('fa-caret-up').addClass('fa-caret-down')}
       else {$(this).removeClass('fa-caret-up').addClass('fa-caret-down')}
    }
    else {
      $(this).parent().next().hide();
      $(this).parent().next().find('.faq-a').removeClass('hide').addClass('reveal');
      $(this).parent().next().slideDown(600);
      if ($(this).hasClass('faq-q')) {$(this).next().removeClass('fa-caret-down').addClass('fa-caret-up')}
      else {$(this).removeClass('fa-caret-down').addClass('fa-caret-up')}
      var cloth = $(this).parent().find('.faq-q').attr('data-clothers');
      if (cloth == 1) {
        $('.faqwrapper .faq-a.reveal').not($(this).parent().next().find('.faq-a.reveal')).each(function() {
          $(this).parent().next().slideUp();
          $(this).removeClass('reveal').addClass('hide');
          $(this).parent().prev().find('.fa').removeClass('fa-caret-up').addClass('fa-caret-down');
        });
      }
    }
  });
});