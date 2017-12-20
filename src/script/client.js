

$(document).ready(function() {
var images=new Array("../src/images/picture1.jpeg","../src/images/picture2.jpg","../src/images/picture3.jpg","../src/images/picture4.jpg");
var nextimage=0;
doSlideshow();


function doSlideshow(){
if(nextimage>=images.length){nextimage=0;}
$('.containerStyle')
.css({'background-image':'url("'+images[nextimage++]+'")',
'transition': 'background-image 5s ease-in-out'
})
.fadeTo(1000,0.6,function(){
   setTimeout(doSlideshow,6000);
});
}



$('#checkBox').change(function () {
   if (!this.checked) 
      $('#carDest').fadeOut('slow');
   else 
       $('#carDest').fadeIn('slow');
});
// $("#datetimepickerButton1").click(function(event){
//   event.preventDefault();
//     $("#datepicker").datepicker();
// });

});

