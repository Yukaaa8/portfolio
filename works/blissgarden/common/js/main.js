// document.write("こんにちは！ABCabcEFGefg");
// スマホハンバーガーメニュー
$(function(){
    $("#nav-toggle").on("click", function(){
        $("body").toggleClass("open"); //★bodyをthisにすると効かなくなるのは、なぜ？
    });
});

// トップ画像のフェードイン
function load_effect() {
  var element = document.getElementsByClassName('bg-slider');
  if(!element) return; // 要素がない場合は終了
  
  for(var i = 0; i < element.length; i++) { 
    element[i].classList.add('is-show');
  }
}
setTimeout(load_effect, 300); // 600ミリ秒経過後に実行

// BgSwitcher
jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['common/images/mainphoto1.jpg','common/images/mainphoto2.jpg','common/images/mainphoto3.jpg'], // 切り替える背景画像を指定
        interval: 4000
    });
});

// メニュー画像のフェード
$(function() {
    // スクロール時の処理
    $(window).scroll(function() {
        $('.hide-left, .hide-down, .hide-right').each(function() {
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

//ロゴのフェードイン・アウト - スクロールするたびに実行　★1-3：ヘッダーのロゴの画像を700pxまでスクロールしたら表示させたい
$(window).on('scroll',function(){
    //スクロール量の取得
    const winTop = $(window).scrollTop();
    console.log(winTop);

    //700px以上ならclassをつけて、未満ならはずす
    if(winTop>700){
        $(".logo").addClass("logo-fade");
    }else{
        $(".logo").removeClass("logo-fade");
    }
});

//下部固定メニュー途中から出現
$(function () {
    var finq = $('#sp-fixed-menu');
    finq.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        finq.fadeIn();
      } else {
        finq.fadeOut();
      }
    });
  });

//グローバルナビゲーションの変化
window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector("#global-nav");
    // 796px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("scroll-nav", window.scrollY > 796);
});

//Reservationボタンの変化
window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector("#btn-rsv");
    // 796px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("scroll-btn", window.scrollY > 796);
});

//ページ内リンクスムーススクロール
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) =>{
link.addEventListener('click', (e) => {
e.preventDefault();

const href = link.getAttribute('href');
const targetSection = document.querySelector(href);
const sectionTop = targetSection.getBoundingClientRect().top;
const currentPos = window.scrollY;
const gap = 84;
const target = sectionTop + currentPos - gap;

window.scrollTo({
  top: target,
  behavior: 'smooth',
});
});
});
$(document).ready(function(){
    // ナビゲーションメニューのスムーススクロール
    $('a[href^="#"]').click(function() {
        var speed = 500; // スクロールの速度（ミリ秒）
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html, body').animate({scrollTop: position}, speed, 'swing');
        return false;
    });

    // フッターのSNSアイコンをクリックしたときにトップページへスムーススクロール
    $('#footerInner a').click(function() {
        var speed = 500; // スクロールの速度
        $('html, body').animate({scrollTop: 0}, speed, 'swing');
        return false;
    });
});


//ギャラリーの画像のフェード
$(function(){
    $(window).scroll(function (){
        $('.fadein-gallery').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
                $(function(){
                    $('.fadein-gallery').each(function(i){
                        $(this).delay(i * 200).queue(function(){
                            $(this).addClass('active');
                        });
                    });
                });
            }
        });
    });
});	