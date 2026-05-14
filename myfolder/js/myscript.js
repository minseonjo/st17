/**
 * Swiper 슬라이더 초기화 및 Play/Pause 토글 기능
 * Cafe24 Smart Design 환경에서 안전하게 동작하도록 IIFE로 작성
 */

(function() {
    'use strict';

    /**
     * DOM이 완전히 준비된 후 스크립트 실행
     * Cafe24 환경에서는 defer 속성을 사용할 수 없으므로
     * document.readyState를 확인하여 적절히 처리
     */
    function initializeSwiper() {
        // ===== Swiper 슬라이더 초기화 =====
        // Swiper 인스턴스 생성 및 기본 설정
        const swiper = new Swiper('.swiper', {
            // 슬라이드 방향 설정
            direction: 'horizontal',

            // 무한 반복 설정
            loop: true,

            // 현재 슬라이드가 가운데 위치하도록 설정
            // 슬라이더 시작 시 1번 슬라이드 왼쪽에 마지막 슬라이드 표시
            centeredSlides: true,

            // 동시에 표시할 슬라이드 개수 (3단 레이아웃)
            slidesPerView: 3,

            // 슬라이드 간 여백 설정
            spaceBetween: 20,

            // 페이지네이션 설정
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'progressbar', // 프로그레스바 형태의 페이지네이션
            },

            // 네비게이션 화살표 설정
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                addIcons: false, // 커스텀 이미지 사용
            },

            // 자동 재생 설정
            autoplay: {
                delay: 3000, // 3초마다 다음 슬라이드로 전환
                disableOnInteraction: false, // 사용자 상호작용 후에도 계속 자동 재생
            },
        });

        // ===== Play/Pause 토글 버튼 기능 =====
        // 재생/정지 버튼 요소 선택
        const playToggleBtn = document.querySelector('.swiper-button-play-toggle');

        if (playToggleBtn) {
            // 초기 상태: 자동 재생 중이므로 is-play 클래스 추가
            playToggleBtn.classList.add('is-play');

            /**
             * 버튼 클릭 이벤트 핸들러
             * 현재 재생 상태를 확인하여 토글 처리
             */
            playToggleBtn.addEventListener('click', function() {
                // swiper.autoplay.running으로 현재 재생 상태 확인
                if (swiper.autoplay.running) {
                    // 재생 중이면 자동 재생 멈추기
                    swiper.autoplay.stop();
                    // CSS로 시각적으로 구분하기 위해 클래스 변경
                    // is-play -> is-pause로 변경하면 아이콘이 play에서 pause로 변경됨
                    this.classList.remove('is-play');
                    this.classList.add('is-pause');
                } else {
                    // 멈춘 상태면 자동 재생 시작하기
                    swiper.autoplay.start();
                    // CSS로 시각적으로 구분하기 위해 클래스 변경
                    // is-pause -> is-play로 변경하면 아이콘이 pause에서 play로 변경됨
                    this.classList.remove('is-pause');
                    this.classList.add('is-play');
                }
            });
        }
    }

    /**
     * DOM 상태 확인 및 초기화 함수 실행
     * 이미 DOM이 준비되었으면 즉시 실행
     * 아직 준비 중이면 DOMContentLoaded 이벤트 대기
     */
    if (document.readyState === 'loading') {
        // DOM이 아직 로딩 중이면 DOMContentLoaded 이벤트 대기
        document.addEventListener('DOMContentLoaded', initializeSwiper);
    } else {
        // DOM이 이미 준비되었으면 즉시 실행
        initializeSwiper();
    }
})();
