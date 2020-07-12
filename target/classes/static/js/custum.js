 function myFunction(elment) {
    
var spans =  elment.parentNode.querySelectorAll("span")
 	console.log(elment)
 	console.log(elment.parentNode)
 	console.log(elment.parentNode.querySelectorAll("span"))
 	
  var dots = spans[0]
  var moreText = spans[1]
  var btnText = elment;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
 }
$(() => {
    let carouselImages = $("#carouselExampleIndicators div div");

    $(window).resize(() => {
        let height = carouselImages.filter('.active').find('img').prop('height')

        console.log(height)
        $('#hover-slide').css('top', 0.7 * height)
    })

    let x = 5
})