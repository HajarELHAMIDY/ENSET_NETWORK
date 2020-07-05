$(() => {
    let carouselImages = $("#carouselExampleIndicators div div");

    $(window).resize(() => {
        let height = carouselImages.filter('.active').find('img').prop('height')

        console.log(height)
        $('#hover-slide').css('top', 0.7 * height)
    })

    let x = 5
})