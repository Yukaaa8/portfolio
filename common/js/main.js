// スマホハンバーガーメニュー
$(function () {
    $(".nav-toggle").click(function () {
      $(this).toggleClass("active");
  
      if ($(this).hasClass("active")) {
        $(".nav-menu").addClass("active");
      } else {
        $(".nav-menu").removeClass("active");
      }
    });
  });

//メニュー内を閉じておく
  $(function () {
    $(".nav-menu a[href]").click(function () {
      $(".nav-menu").removeClass("active");
      $(".nav-toggle").removeClass("active");
    });
  });

// トップページに戻るボタン
$(function() {
 
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 1100) {
      $(".pagetop").fadeIn("fast");
    } else {
      $(".pagetop").fadeOut("fast");
    }
   
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
   
    if ( scrollHeight - scrollPosition  <= footHeight ) {
      $(".pagetop").css({
        "position":"absolute",
      });
    } else {
      $(".pagetop").css({
        "position":"fixed",
      });
    }
  });
   
});

//テキストアニメーション
window.onload = function() {
const text = new SplitType(".text-animation", { types: "chars" }); // 文字ごとに分割

gsap.to(".char", {
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
  ease: "Power2.out" // 修正: Power2.out に変更
});
};

//画面可視領域に入ったらアニメーションを実行する
$(function () {
  // アニメーション関数
  function animateText() {
      $('.text-animation').each(function () {
          const winTop = $(window).scrollTop();
          const winH = window.innerHeight;
          const elemTop = $(this).offset().top;
          
          if (winTop + winH > elemTop) {
              if (!$(this).hasClass('animated')) { // すでにアニメーション済みならスキップ
                  $(this).addClass('animated');

                  // SplitType で文字を分割
                  const text = new SplitType(this, { types: "chars" });

                  gsap.fromTo(
                      $(this).find('.char'),
                      { y: 100, opacity: 0 },
                      {
                          y: 0,
                          opacity: 1,
                          stagger: 0.05,
                          duration: 0.5,
                          ease: "Power2.out"
                      }
                  );
              }
          }
      });
  }

  // スクロール時に実行
  $(window).on("scroll", animateText);
  
  // ページ読み込み時にもチェック（すでに見えている場合）
  animateText();
});

// 下線アニメーション
document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".js-observe-target");

  function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8; // 画面の80%の位置で発火

      lines.forEach(line => {
          const rect = line.getBoundingClientRect();
          if (rect.top < triggerBottom) {
              line.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // 初回実行（リロード時にすでに見えている場合も適用）
});

// ぼかし
$(window).scroll(function (){
  $('.inview-blur').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 150){
            $(this).addClass('blur');
          }
      });
});

// セクションのフェード
$(function() {
  // スクロール時の処理
  $(window).scroll(function() {
      $('.hide-down').each(function() {
          // 変数の宣言と代入
          const winTop  = $(window).scrollTop();
          const winH    = window.innerHeight;
          const hideTop = $(this).offset().top;
          console.log(winTop, winH, winTop + winH, hideTop);

          // 見える位置に来たらメニューを表示
          if (winTop + winH > hideTop) {
              $(this).addClass('show');
          }
      });
  });
});

// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});