$(document).ready(function () {
    $('#connect').on('click', function () {
        $('#connect-detail').show();
    });
    $('#connect-detail .touch').on('click', function () {
        $('#connect-detail').hide();
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    containerChange();
    

    $(window).scroll(
        function (e) {
            // console.log($('.best-title').scrollTop());
            // console.log($('.best-title').offset().top);
            // console.log('XX' + $(window).scrollTop());
            var offset = $('.best-title').offset().top;
            var a = $(window).scrollTop();
            $('#connect').css('top', `${a+150}px`);
            $('#connect-detail').css('top', `${a+150}px`);
            // $('#connect').animate({
            //     top: `${a+70}px`
            // },100,'linear');
            if (a >= offset - 500) {
                expand1();

            }






        }
    );

    function expand1() {

        var b = $('.mask-outter');
        b.animate({
            marginTop: "80px",
            height: "365px",
            marginBottom: "80px"
        }, 1100, "swing", function () {
            expand2()
        });
    }

    function expand2() {
        var a = $('.mask');
        a.animate({
            left: "50%",
            right: "50%"
        }, 1100, "swing");
        var c = $('.frame1');
        c.animate({
            opacity: 1
        }, 1100, "swing");

    }




    $(window).resize(function () {
        containerChange();
        
    });

    function containerChange() {
        var a=0;
        if ($(window).width() >= 768) {
            // 呼叫containerChange後 on事件就一直觸發
            $('.owl-carousel').off('translated.owl.carousel');
            $('.owl-carousel').on('translated.owl.carousel', function () {
                
                var str = $('.owl-carousel').find('.owl-item.active img').attr('src');
                var str2 = str.replace('.jpg', '-b.jpg');
                var bgImg1=$('#top .bg-image.bg-image-1');
                var bgImg2=$('#top .bg-image.bg-image-2');
                var bgImg3=$('#top .bg-image.bg-image-3');
                switch  (str2){
                    case './img/電腦/1-6-b.jpg':
                        bgImg1.fadeIn('slow');
                        bgImg2.fadeOut('slow');
                        bgImg3.fadeOut('slow');
                        break;
                    case './img/電腦/1-3-b.jpg':
                        bgImg1.fadeOut('slow');
                        bgImg2.fadeIn('slow');
                        bgImg3.fadeOut('slow');
                        break;
                    case './img/電腦/1-1-b.jpg':
                        bgImg1.fadeOut('slow');
                        bgImg2.fadeOut('slow');
                        bgImg3.fadeIn('slow');
                        break;
                    default:
                        // console.log('error');
                }
                   
                // var bgImage = $('#top .bg-image');
                // var top=$('#top');
                // bgImage.css('transition', `all 1s ease`);
                // bgImage.css('background', `url('${str2}')`);
                // a++;
                // console.log(a);
            });


        } else if ($(window).width() < 768) {
            $('.owl-carousel').off('translated.owl.carousel');
            $('.owl-carousel').on('translated.owl.carousel', function () {

                var bgImage = $('#top .bg-image');
                // console.log("XXX");
            });


        }
    }




    if ($(window).width() >= 768){
        $('.marquee').marquee({
            //duration in milliseconds of the marquee
            duration: 10000,
            //gap in pixels between the tickers
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: 'left',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: false,
            pauseOnHover: true,
        });
    };
     if ($(window).width() < 768){
        $('.marquee').marquee({
            //duration in milliseconds of the marquee
            duration: 5000,
            //gap in pixels between the tickers
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: 'left',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: false,
            pauseOnHover: true,
        });
    };
    

    $('.marquee2').marquee({
        //duration in milliseconds of the marquee
        duration: 6500,
        //gap in pixels between the tickers
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'up',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: false,
        pauseOnHover: true,
    });


    
    //加入會員按下去，跳出視窗，內容物切換
    $('#modal-join').on('show.bs.modal', function (event) {
        var btn=$(event.relatedTarget);
        var modal = $(this);
        modal.find('.modal-title').text(btn.data('title'));
        modal.find('.modal-body>form').show();
        modal.find('#assign-ok').hide();
        //申請按鍵按下去，資料清除，內容物切換，跟前面互相切換
        $('#assign-btn').on('click',function(){
            $('.modal-body .form-group>input').val("");
            $('.modal-body>form').hide();
            $('#assign-ok').show();
        });
      });
      $('#modal-forget').on('show.bs.modal', function (event) {
        var btn=$(event.relatedTarget);
        var modal = $(this);
        modal.find('.modal-title').text(btn.data('title'));
        modal.find('.modal-body>form').show();
        modal.find('#assign-ok-2').hide();
        $('#assign-btn-2').on('click',function(){
            $('.modal-body .form-group>input').val("");
            $('.modal-body>form').hide();
            $('#assign-ok-2').show();
        });
      });
      
      //行動版 登入 m-log與註冊 m-reg
      $('#m-log').on('show.bs.modal', function (event) {
        var btn=$(event.relatedTarget);
        var modal = $(this);
        modal.find('.modal-title').text(btn.data('title'));
        modal.find('.modal-body>form').show();
        modal.find('#assign-ok-3').hide();
        $('#assign-btn-3').on('click',function(){
            $('.modal-body .form-group>input').val("");
            $('.modal-body>form').hide();
            $('#assign-ok-3').show();
        });
      });




});