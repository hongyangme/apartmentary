$(document).ready(function() {
    // 헤더 스크롤
    function handleScroll() {
        if ($(window).scrollTop() > 100) {
            $('header, .m_header_wrap').css('background-color', 'white');
            $('.go_top').addClass('visible').show(); // 버튼 보이게 설정
        } else {
            $('header, .m_header_wrap').css('background-color', 'transparent');
            $('.go_top').removeClass('visible').hide(); // 버튼 숨김 처리
        }
    }
    $(window).on('scroll', handleScroll);

    // 슬라이드 너비 반응형 재계산
    function updateSlideWidths() {
    const isMobile = $(window).width() <= 899;
    sWidth = isMobile ? $('.swipe_slide').width() : $('.swipe_slide').width() + 50;
    sWidth2 = isMobile ? $('.wrap_old .swipe_slide').width() : $('.wrap_old .swipe_slide').width() + 50;
    rvWidth = isMobile ? $('.review_box').width() : $('.review_box').width() + 50;
    totalSlides3 = isMobile? $('.review_box').length - 4 : $('.review_box').length - 3;
    swiperWidth3 = isMobile? $('.sec05 .swiper').width() / 3 : $('.sec05 .swiper').width() / 4;
}


    // 섹션1 슬라이드
    var winW = cnt = setId = 0;
    
    resizeFn(); // 초기 호출
    setTimeout(resizeFn, 100); // 페이지 로드 후 호출
    

    $('.main_slide').append($('.main_slide div').first().clone()).stop(); //사진 복사
   
    function resizeFn() {
        winW = $(window).innerWidth();
        $('.slide_box').css({ width: winW }); // 슬라이드 크기 조정
    }

    $(window).resize(function(){
        resizeFn();
        resizeFnSec3();
        resizeFnSec4();
        resizeFnSec5();
    }); // 창 크기 변경 시 호출
    autoplayFn(); // 슬라이드 자동 실행

    function autoplayFn() {
        setId = setInterval(nextCountFn, 3000);
    }

    function nextCountFn() {
        cnt++;
        mainslideFn();
    }

    function mainslideFn() {        
        $('.main_slide').stop().animate({ marginLeft: (-100 * cnt) + "%" }, 600, function() {
            if (cnt > 4) { // 마지막 슬라이드에 도달하면 첫 번째로 순간 이동
                cnt = 0;
                $('.main_slide').stop().css({ marginLeft: (-100 * cnt) + "%" },0); // 첫 번째 슬라이드로 순간 이동
            }
            if (cnt < 0){
                cnt = 4;
                $('.main_slide').css({ marginLeft: (-100 * cnt) + "%" },0);
            }
        });
    }

    $('.sec01 .arrow_l').on('click', function() {
        cnt--;
        clearInterval(setId);
        mainslideFn(); // 슬라이드 이동
        autoplayFn(); // 자동 슬라이드 재개
    });


    $('.sec01 .arrow_r').on('click', function() {
        cnt++;
        clearInterval(setId);
        mainslideFn();
        autoplayFn();
    });


    // 섹션 3 슬라이드
    function resizeFnSec3() {
        swiperWidth = $('.swiper').width() / 6;
        $('.wrap_30').css({marginLeft : (cnt2 * -sWidth) + "px" });
        aptSlide(); // 슬라이드 이벤트 재실행
        swiperSlide();
    }
    $(window).resize(resizeFnSec3);

    var cnt2 = 0;
    const totalSlides = $('.wrap_30 > .swipe_slide').length - 3;

    function aptSlide() {
        updateSlideWidths();
        $('.wrap_30').stop().animate({ marginLeft: (cnt2 * -sWidth) + "px" }, 400);
    }

    $('.sec03 .arrow_l').on('click', function() {
        if (cnt2 > 0) {
            cnt2--;
            aptSlide();
            swiperSlide();
        }
    });

    $('.sec03 .arrow_r').on('click', function() {
        if (cnt2 < totalSlides) {
            cnt2++;
            aptSlide();
            swiperSlide();
        }
    });

    let swiperWidth = $('.swiper').width() / 6;
    function swiperSlide() {
        $('.swiper_active_30').stop().animate({ marginLeft: (cnt2 * swiperWidth) + "px" }, 500);
    }

    // 섹션 4 슬라이드
    function resizeFnSec4() {
        swiperWidth2 = $('.swiper').width() / 6;
        $('.wrap_old').css({marginLeft : (cnt3 * -sWidth) + "px" });
        aptSlide2(); // 슬라이드 이벤트 재실행
        swiperSlide2();
    }
    $(window).resize(resizeFnSec4);

    var cnt3 = 0;
    const totalSlides2 = $('.wrap_old > .swipe_slide').length - 3;

    function aptSlide2() {
        updateSlideWidths();
        $('.wrap_old').stop().animate({ marginLeft: (cnt3 * -sWidth) + "px" }, 400);
    }

    $('.sec04 .arrow_l').on('click', function() {
        if (cnt3 > 0) {
            cnt3--;
            aptSlide2();
            swiperSlide2();
        }
    });

    $('.sec04 .arrow_r').on('click', function() {
        if (cnt3 < totalSlides2) {
            cnt3++;
            aptSlide2();
            swiperSlide2();
        }
    });

    let swiperWidth2 = $('.swiper').width() / 6;
    function swiperSlide2() {
        $('.swiper_active_old').stop().animate({ marginLeft: (cnt3 * swiperWidth2) + "px" }, 500);
    }

    // 섹션 5 슬라이드
    function resizeFnSec5() {
        $('.wrap_rb').css({marginLeft : (cnt4 * -rvWidth) + "px" });
        updateSlideWidths();
        const isMobile = $(window).width() <= 899;
        if (isMobile) cnt4 = 0;
        swiperWidth3 = $('.sec05 .swiper').width() / 4;
        rvSlide();
        swiperSlide3();
    }

    $(window).resize(resizeFnSec5);

    var cnt4 = 0;
    let totalSlides3;

    function rvSlide() {
        updateSlideWidths();
        $('.wrap_rb').stop().animate({ marginLeft: (cnt4 * -rvWidth) + "px" }, 400);
    }

    $('.sec05 .arrow_l').on('click', function() {
        if (cnt4 > 0) {
            cnt4--;
            rvSlide();
            swiperSlide3();
        }
    });

    $('.sec05 .arrow_r').on('click', function() {
        if (cnt4 < totalSlides3) {
            cnt4++;
            rvSlide();
            swiperSlide3();
        }
    });

    let swiperWidth3;
    function swiperSlide3() {
        $('.swiper_active_rv').stop().animate({ marginLeft: (cnt4 * swiperWidth3) + "px" }, 500);
    }

    // 모바일 내비게이션
    $('.m_hamburger').click(function() {
        $('.m_header_wrap, .m_nav_wrap, .m_nav').show();
        $('.m_header_wrap').css('background-color', 'white');
        $('main, footer').hide();
        $('.m_hamburger').hide();
        $('.m_close').show();
    });

    $('.m_close').click(function() {
        $('.m_nav_wrap, .m_nav').hide();
        $('.m_header_wrap').css('background-color', 'transparent');
        $('main, footer').show();
        $('.m_hamburger').show();
        $('.m_close').hide();
    });

    $(window).resize(function() {
        if ($(window).width() > 899) {
            $('main, footer').show();
            $('.m_nav_wrap, .m_nav').hide();
            $('.m_header_wrap').css('background-color', 'transparent');
            $('.m_hamburger').show();
            $('.m_close').hide();
        }
    });

    // 플로팅 버튼
    const topBtn = $('.go_top');

    topBtn.on('click', function(event) {
        goTop();
    });

    function goTop() {
        $('html, body').stop().animate({ scrollTop: 0 }, 500);
    }

    //1:1문의
    const inq  = $('.inquiry');
    const clsW = $('.close_w');
    inq.on('click', function(){
        $('.inquiry_w').show();
    })

    $(document).on('click', '.close_w', function() {
        $('.inquiry_w').css({
            display: 'none'
        });
    });

    // 스크롤업
    document.addEventListener('scroll',function(){


        let observer = new IntersectionObserver((e)=>{
            e.forEach((sec)=>{
                if (sec.isIntersecting){
                sec.target.style.opacity = 1;
                sec.target.style.marginTop = 0;

                // if (sec.target.classList.contains('headline') || sec.target.classList.contains('subtext')){
                // sec.target.style.opacity = 1;
                // sec.target.style.transform = 'translateX(0px)';
                // }
                // } else{
                //     sec.target.style.marginTop = 0;
                }
            })
        })

        let section = document.querySelectorAll('section');
        observer.observe(section[2]);
        observer.observe(section[3]);
        observer.observe(section[4]);

        // let tb = document.querySelectorAll('.textbox .headline, .textbox .subtext');
        // tb.forEach(tb => observer.observe(tb));

    });


    //모바일 터치 스크립트
    //// 터치 슬라이드 (섹션 3)
    let touchStartX = 0;
    let touchEndX = 0;

    // 섹션 3
    const wrap30 = document.querySelector('.wrap_30');
    wrap30.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrap30.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    }, { passive: false });

    wrap30.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && cnt2 < totalSlides) {
                cnt2++;
            } else if (diff < 0 && cnt2 > 0) {
                cnt2--;
            }
            aptSlide();
            swiperSlide();
        }
    });

    // 섹션 4
    const wrapOld = document.querySelector('.wrap_old');
    wrapOld.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrapOld.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    }, { passive: false });

    wrapOld.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && cnt3 < totalSlides2) {
                cnt3++;
            } else if (diff < 0 && cnt3 > 0) {
                cnt3--;
            }
            aptSlide2();
            swiperSlide2();
        }
    });

    // 섹션 5
    const wrapRb = document.querySelector('.wrap_rb');
    wrapRb.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrapRb.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    }, { passive: false });

    wrapRb.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && cnt4 < totalSlides3) {
                cnt4++;
            } else if (diff < 0 && cnt4 > 0) {
                cnt4--;
            }
            rvSlide();
            swiperSlide3();
        }
    });
});
