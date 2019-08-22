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
      todoItem.html("<div><div><input type='checkbox' value='"+response._id+"'></div><div><div>"+
      todoDescription.val()+"</div><div><i class='far fa-calendar-alt'></i><div>"+
      todoDate.val()+"</div></div></div></div><div>"+
        todoCategory.val()+"</div></div>");
      $(todoList).append(todoItem);
      let todoListCategory=$('#todo-list>.todo-list-item:last-child>div:last-child');
      if(todoCategory.val()=='work')
      todoListCategory.addClass('work');
      else
      if(todoCategory.val()=='office')
      todoListCategory.addClass('office');
      else
      if(todoCategory.val()=='family')
      todoListCategory.addClass('family');
      else
      if(todoCategory.val()=='trips')
      todoListCategory.addClass('trips');
      else
      if(todoCategory.val()=='meetings')
      todoListCategory.addClass('meetings');
      else
      if(todoCategory.val()=='other')
      todoListCategory.addClass('other');

    }
  });
}

$('#todo-operations-add').on('mousedown',addTodo);

$('#todo-operations-add').on('mouseup',function(){
      $(this).css({
        backgroundColor: '#424040',
      });
});