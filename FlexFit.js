// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
});

//Save form data locally

function myFunction(form){
window.localStorage
	
console.log(form.field1.value);
console.log(form.field2.value);
console.log(form.field3.value);
console.log(form.field4.value);
console.log(form.field5.value);


}



