document.addEventListener('DOMContentLoaded', function() {

    var image = document.querySelectorAll('.chair-name');



    for (var i = 0; i < image.length; i++) {
        image[i].addEventListener('mouseenter', function () {

            var imgFrame = this.querySelector('.img-frame');
            imgFrame.style.visibility = "hidden";
        });
        image[i].addEventListener('mouseleave', function () {

            var imgFrame = this.querySelector('.img-frame');
            imgFrame.style.visibility = "visible";
        })
    }




    var scrollLeft = document.querySelector('.scroll-left');
    var scrollRight = document.querySelector('.scroll-right');
    var picIndex = 0;
    var slides = document.querySelectorAll('.slide1');

    var arrayOfSlides = [];

    for (var i=0; i<slides.length; i++){
        arrayOfSlides.push(slides[i]);
    }

    const checkPicIndex = function(n){
        if(n < 0){
            picIndex = arrayOfSlides.length-1;
        }else if(n >= arrayOfSlides.length){
            picIndex = 0;
        } else{
            picIndex = n;
        }
        return picIndex;
    };

        scrollRight.addEventListener('click', function () {

            checkPicIndex(picIndex);
            slides[picIndex].classList.remove('slide1--active');
            picIndex++;

            checkPicIndex(picIndex);
            slides[picIndex].classList.add('slide1--active');
        });


        scrollLeft.addEventListener('click', function () {

            checkPicIndex(picIndex);
            slides[picIndex].classList.remove('slide1--active');
            picIndex--;

            checkPicIndex(picIndex);
            slides[picIndex].classList.add('slide1--active');
        });
});