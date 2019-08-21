// function to be called on submitting the form so that we can decide what to do

function onSubmitForm()
{
    console.log('form');
  if(document.pressed == 'add')
  {
   document.myform.action ="/add";
  }
  else
  if(document.pressed == 'delete')
  {
    document.myform.action ="/delete";
  }
  return true;
}
