$(document).ready(function() {
  // 헤더 스크롤
  function handleScroll() {
      if ($(window).scrollTop() > 100) {
          $('header, .m_header_wrap').css('background-color', 'white');
          $('.go_top').addClass('visible');
      } else {
          $('header, .m_header_wrap').css('background-color', 'transparent');
          $('.go_top').removeClass('visible');
      }
  }
  $(window).on('scroll', handleScroll);

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

  // 버튼 활성화 토글
    const rBtns = document.querySelectorAll('.buttonR');
    const addBtns = document.querySelectorAll('.buttonA');

    //리모델링 서비스 버튼 클릭 이벤트
    rBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleActive(this, rBtns); // 리모델링 그룹에 대한 토글 처리
        });
    });

    //애드온 서비스 버튼 클릭 이벤트
    addBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleActive(this, addBtns); // 애드온 그룹에 대한 토글 처리
        });
    });

    // 버튼 활성화 토글 함수
    function toggleActive(selectedBtn, btns) {
        // 애드온 서비스 버튼에 대해서만 active 클래스 관리
        if (btns === addBtns) {
            btns.forEach(btn => {
                if (btn !== selectedBtn) {
                    btn.classList.remove('active'); // 선택된 버튼 외의 버튼에서 active 클래스 제거
                }
            });
        }
        selectedBtn.classList.toggle('active'); // 선택된 버튼에 active 클래스 토글
    }

    
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

    
});
