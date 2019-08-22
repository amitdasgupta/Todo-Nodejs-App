// checkbox check event

$(document).ready(function() {
  $('.todo-list-item>div>div>input:checkbox').on('mousedown',function(){
    console.log('checkbox pressed')
     if ($(this).is(':checked')) {
         $(this).closest('.todo-list-item>div').find('.todo-list-describe').css({
          textDecoration: 'none',
         });
     }
     else
     {
      $(this).closest('.todo-list-item').find('.todo-list-describe').css({
        textDecoration: 'line-through',
       });
     }
  });
});


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
    // sweet alert
    swal({
      title: "Fields Empty",
      text: "Please Fill all the fields!",
      icon: "error",
    });
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
      let todoList=$('#todo-list');
      let todoItem=$(document.createElement('div')).addClass('todo-list-item');
      todoItem.html("<div><div><input type='checkbox' value='"+response._id+"'><i class='fas fa-check-square'></i></div><div class=todo-list-describe ><div>"+
      todoDescription.val()+"</div><div><i class='far fa-calendar-alt'></i><div>"+
      todoDate.val()+"</div></div></div></div><div>"+
        todoCategory.val()+"</div></div>");
      $(todoList).append(todoItem);
      $('#todo-list>.todo-list-item:last-child>div:last-child').addClass(todoCategory.val());
      $(todoCategory).val('');
      $(todoDate).val('');
      $(todoDescription).val('');


      $('#todo-list>.todo-list-item:last-child>div>div>input:checkbox').on('mousedown',function(){
        console.log('checkbox pressed')
         if ($(this).is(':checked')) {
             $(this).closest('.todo-list-item>div').find('.todo-list-describe').css({
              textDecoration: 'none',
             });
         }
         else
         {
          $(this).closest('.todo-list-item').find('.todo-list-describe').css({
            textDecoration: 'line-through',
           });
         }
      });
    }
  });
}

$('#todo-operations-add').on('mousedown',addTodo);

$('#todo-operations-add').on('mouseup',function(){
      $(this).css({
        backgroundColor: '#424040',
      });
});

// todo operations delete

function deleteTodo(event){
  event.preventDefault();

  let selectedCheckbox=[];
  $('.todo-list-item>div>div>input:checkbox:checked').each(function(){
      selectedCheckbox.push($(this).val());
  });
  if(selectedCheckbox.length==0){
    // sweet alert
    swal({
      title: "Nothing To Delete",
      text: "Please select items to delete!",
      icon: "error",
    });
    return;
  }
  $(this).css({
    backgroundColor: 'rgb(255, 73, 73)',
  });

  // are you sure sweet alert

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover these Todos!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Yay! your todos are removed!", {
        icon: "success",
      });

         // jquery ajax call
          $.ajax({
            type: "post",
            url: "http://localhost:8000/delete",
            data: {
                items:JSON.stringify(selectedCheckbox)
            },
            success: function (response) {
              $('.todo-list-item>div>div>input:checkbox:checked').each(function(){
              $(this).closest(".todo-list-item").remove();
              });
            }
          });
    } else {
      swal("Your todos are safe!");
      return;
    }
  });

}


$('#todo-operations-delete').on('mousedown',deleteTodo);

$('#todo-operations-delete').on('mouseup',function(){
      $(this).css({
        backgroundColor: '#ef1313',
      });
});


