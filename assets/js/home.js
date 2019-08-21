// changing  background  color on focus
$('#todo-description>input').on('focusin',function(){
    $('#todo-description').css({
      backgroundColor: '#d7d7d7',
    });
    $(this).css({
      backgroundColor: '#d7d7d7',
    });
});

$('#todo-description>input').on('focusout',function(){
  $('#todo-description').css({
    backgroundColor: 'white',
  });
  $(this).css({
    backgroundColor: 'white',
  });
});

$('#todo-details #todo-details-category').on('focusin',function(){
  $('#todo-details>div:first-child').css({
    backgroundColor: '#d7d7d7',
  });
  $(this).css({
    backgroundColor: '#d7d7d7',
  });
});

$('#todo-details #todo-details-category').on('focusout',function(){
  $('#todo-details>div:first-child').css({
    backgroundColor: 'white',
  });
  $(this).css({
    backgroundColor: 'white',
  });
});

$('#todo-details #todo-details-date').on('focusin',function(){
  $('#todo-details>div:last-child').css({
    backgroundColor: '#d7d7d7',
  });
  $(this).css({
    backgroundColor: '#d7d7d7',
  });
});

$('#todo-details #todo-details-date').on('focusout',function(){
$('#todo-details>div:last-child').css({
  backgroundColor: 'white',
});
$(this).css({
  backgroundColor: 'white',
});
});