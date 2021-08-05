// 'use strict'

const submitted = false;
// const send = window.alart('メッセージの送信に成功しました。');

// メニューをクリックしたらスクロール
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    let speed = 400; // ミリ秒
    // アンカーの値取得
    let href = $(this).attr("href");
    // 移動先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    let position = target.offset().top;
    // スムーススクロール
    $("html, body").animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});








// プロフィール画像の表示
$(function () {
  let winWidth = $('body').outerWidth(true);
  let p_img = $('#p_img');

  //画面下位置を取得

  //表示位置
  let p_nav = $('.p_nav');
  let p_navTop = p_nav.offset().top - 550;
  let showFlug = false;

  //slideを画面右外へ配置
  // $('#p_img').css('margin-left', winWidth + 'px');
  // $('#p_img').css('margin-right', winWidth + 'px');
  $(window).scroll(function () {
    panelOpen();
  });
  //ウィンドウリサイズしたらwidth変更
  $(window).resize(function () {
    winWidth = $('body').outerWidth(true);
  });

  function panelOpen() {

    if ($(this).scrollTop() >= p_navTop && $(this).scrollTop() <= p_navTop + 700) {
      if (showFlug == false) {
        showFlug = true;
        // p_img.stop().animate({ 'marginLeft': '0px' }, 500);
        p_img.stop().animate({ 'left': '-20vw' }, 800);
        // p_img.stop().animate({ 'margin': '0 auto' }, 200);

      }
    } else {
      if (showFlug) {
        showFlug = false;
        // p_img.stop().animate({ 'marginLeft': winWidth + 'px' }, 200);
        p_img.stop().animate({ 'left': '-80vw' }, 600);

      }
    }
  }
});




// // skillsアイコンの表示
// $(function () {
//   let winWidth = $('body').outerWidth(true);
//   let s_img = $('#s_img');

//   //画面下位置を取得

//   //表示位置
//   let s_nav = $('#s_nav');
//   let s_navTop = s_nav.offset().top - 300;
//   let showFlug = false;

//   $(window).scroll(function () {
//     panelOpen();
//   });
//   //ウィンドウリサイズしたらwidth変更
//   $(window).resize(function () {
//     winWidth = $('body').outerWidth(true);
//   });

//   function panelOpen() {

//     if ($(this).scrollTop() >= s_navTop && $(this).scrollTop() <= s_navTop + 1100) {
//       if (showFlug == false) {
//         showFlug = true;
//         // s_img.stop().animate({ 'marginLeft': '0px' }, 500);
//         s_img.stop().animate({ 'left': '-20vw' }, 800);
//         // s_img.stop().animate({ 'margin': '0 auto' }, 200);
//         console.log(3);

//         $('.titlesss').addClass('line');
//       }
//     } else {
//       if (showFlug) {
//         showFlug = false;
//         // s_img.stop().animate({ 'marginLeft': winWidth + 'px' }, 200);
//         s_img.stop().animate({ 'left': '-80vw' }, 600);

//         console.log(4);
//       }
//     }
//   }
// });






























// // スクロールした時に要素が可視範囲に入ったらフェードイン表示
// $(function () {
//   $(window).scroll(function () {
//     $("#scrollin").each(function () {
//       let imgPos = $(this).offset().top;
//       let scroll = $(window).scrollTop();
//       let windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight / 5) {
//         $(this).addClass("fade_on");
//       } else {
//         $(this).removeClass("fade_on");
//       }
//     });
//   });
// });

// ↑id = "scrollin" class="fade_off"をつける



$(function () {
  function animation() {
    $('.fadeInUp').each(function () {
      //ターゲットの位置を取得
      let target = $(this).offset().top;
      //スクロール量を取得
      let scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      let windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function () {
    animation();
  });
});
