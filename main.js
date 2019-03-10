$('.form-control').keypress(function(event){
    alert('Sisestasite:' + ' ' + ' " ' + String.fromCharCode(event.which) + ' " '); 
  });

$('.theme').on('click', function(e) {
  var $this = $(this);
  $this.toggleClass('green-theme')
  if ($this.hasClass('green-theme')) {
      $this.html('Green');
  } else {
      $this.html('Pink');
  }
  
  $('body, nav, .form-control, .email, .btn').toggleClass('pink'); 
  

  $('.green-logo, .fb-green').toggleClass('d-none');
  $('.pink-logo, .fb-pink').toggleClass('d-block');
  e.preventDefault();
});
