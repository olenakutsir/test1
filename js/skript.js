$('#btn-send').click(function() {
  // Please set your email in url field
  $.ajax({
      url: "https://formspree.io/olena.kutsir@gmail.com",  
      method: "POST",
      data: {
             email: email.value,
             message: msg.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Thank you!</h1>')
  } );
});