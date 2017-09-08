jQuery(document).ready(function() {
  var imgx = $('img.imagine');
  var buttony = $('.button');
  var imagini = ['img/1.jpg', 'img/2.jpg'];
  console.log();
  // imgx.attr('src', imagini[0]);
  var apasat = false;
  buttony.click(function() {
    if (apasat) {
      imgx.attr('src', imagini[1]);
      apasat = false;
    } else {
      imgx.attr('src', imagini[0]);
      apasat = true;

    }

  });


});

$('.container a.menu').hover(function(){
      $('.container a.menu').css("color", "red");
    }, function(){
      $('.container a.menu').css("color", "fff");

});
console.log("martini");
