$('input.first').click(changeButton); /* document.querySelector('input').addEventListener('click', changeButton); */
$('input.last').click(styleButton);

 function changeButton() {
     $('div').toggle(); /* stie automat sa ascunda sau sa faca elementul din nou vizibil */
     /* document.querySelector('div').style.visibility = 'hidden'; */
     $('div').text('You clicked!');
     let newElem = $('<span>Hello world</span>')
     $('div').html(newElem); /* adaugam un nou element */
     /* am putea scrie ce e mai sus: $('div').toggle().html(newElem); */
     $('div').fadeOut();
 }

 function styleButton() {
     $('div').css({
         'background-color': 'lightblue',
         'top': '30vh' /* putem sa schimbam mai multe proprietati simultan */
        });
 }