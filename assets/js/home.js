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


// function to add new task

function addTodo(event){
  event.preventDefault()
  let todoDescription=$('#todo-description>input');
  let todoCategory=$('#todo-details-category');
  let todoDate=$('#todo-details-date');
  if(todoCategory.val()==''||todoDescription.val()==''||todoDate.val()==''){
    alert('Please add all the fields');
    return;
  }
  $(this).css({
    backgroundColor: 'rgb(131, 128, 128)',
  });
  // jquery ajax call

  $.ajax({
    type: "post",
    url: "http://localhost:8000/add",
    data: {
       description:todoDescription.val(),
       category:todoCategory.val(),
       date:todoDate.val()
    },
    success: function (response) {
      console.log('response',response);
      let todoList=$('#todo-list');
      let todoItem=$(document.createElement('div')).addClass('todo-list-item');
      let todoItemDetails=$(document.createElement('div'));
      $(todoList).append(todoItem).append();
      $(todoItemDetails).appendTo(todoItem);
      let todoItemCheckbox=$(document.createElement('div'))
      .append(document.createElement('input').type('checkbox').value(response._id));
      let todoItemDetails_date=$(document.createElement('div'));
    }
  });
}

$('#todo-operations-add').on('mousedown',addTodo);

$('#todo-operations-add').on('mouseup',function(){
      $(this).css({
        backgroundColor: '#424040',
      });
});