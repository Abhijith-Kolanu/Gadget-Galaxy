document.addEventListener('DOMContentLoaded',function()
{
    const clickableContainer=document.getElementById('mor1');
    clickableContainer.addEventListener('click',function(event){
        if(event.target.classList.contains('mo1'))
        {
            window.location.href='mobiles.html';
        }
      else   if(event.target.classList.contains('mo2'))
        {
            window.location.href='laptopsTablets.html';
        }
       else  if(event.target.classList.contains('mo3'))
        {
            window.location.href='televisions.html';
        }
       else  if(event.target.classList.contains('mo4'))
        {
            window.location.href='homeApp.html';
        }
       else  if(event.target.classList.contains('mo5'))
        {
            window.location.href='kitchenApp.html';
        }
       else if(event.target.classList.contains('mo6'))
        {
            window.location.href='personals.html';
        }
    });
});