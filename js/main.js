$(function(){

    $('.header__slider').slick({ // слайдер(header/правый)
        infinite: true, // бесконечная прокрутка
        fade: true, // плавный переход между экранами
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead', // связали два слайдера
    });

    $('.slider-dotshead').slick({ // второй слайдер(header/правый нижний)
        slidesToShow: 4, // 4 элемента
        slidesToScroll: 1,
        asNavFor: '.header__slider',
        responsive: [
          {
            breakpoint: 961,
            settings: "unslick"
          },
        ]
    });

    $('.surf-slider').slick({
        slidesToShow: 4, // 4 элемента
        slidesToScroll: 1,
        focusOnSelect: true, // при нажатии срабатывает слайдер
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1210,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          },
        ]
    });
    $('.slider-map').slick({
        slidesToShow: 8, // 8 элементoв
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true, // при нажатии срабатывает слайдер
        responsive: [
          {
            breakpoint: 1103,
            settings: {
              slidesToShow: 3,
              variableWidth: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              centerMode: true,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
        ]
    });
    $('.holder__slider, .shop__slider').slick({
        infinite: true, // бесконечная прокрутка
        fade: true, // плавный переход между экранами
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click',function(){
                    //значение nights * на значение дата атрибута nights + значение гостя -1 * на значение атрибута гостя
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ );
    });


                //значение nights * на значение дата атрибута nights + значение гостя -1 * на значение атрибута гостя
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ );


    $('.surfboard-box__circle').on('click', function(){ // когда кликаем на сербокс, то ему же добавляется класс эктив
      $(this).toggleClass('active')
    });

    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('active');
    });

    new WOW().init(); // wow.js
});