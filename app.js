$(document).ready(function() {

$.ajax({ url: 'https://picsum.photos/list'}).done(function (data) {
  for(var i=87;i<99; i++) {
    var image = data[i];
    $('#gallery').append('<div class="col-lg-3 col-md-4 col-xs-6"><a href="#" class="d-block mb-4 h-100"><img class="img-fluid img-thumbnail" src="https://picsum.photos/400/300?image='+image.id+'" alt=""></a></div>')
    console.log(image.id);

  }
  console.log('done');
});

});

