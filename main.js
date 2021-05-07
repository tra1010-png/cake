// ハンバーガーボタン
    window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  }) 

  $(".btn-humbergar button").click(function(){
    $(".mainmenu-sm").toggleClass("active");
    if($(".mainmenu-sm").hasClass("active")){
      $(this).children("img").attr("src","images/btn-close.png");
    }
    else {
      $(this).children("img").attr("src","images/btn-hamburger.png");
    }
  })