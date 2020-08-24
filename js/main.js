
// Home部分
function displaySubTitle(){
    let timeID, content, index = 0;

    code = document.querySelector('#sub-title');
    content = code.textContent.replace(/&gt;/g,'>').split('');
    code.textContent = '';
  
    timeID = setInterval(function (){
      if(index >= content.length) {
        clearInterval(timeID);
        return;
      }
      code.textContent += content[index++];
  
      if(document.body.scrollHeight){
        document.body.scrollTop = document.body.scrollHeight;
      }else if(document.documentElement.scrollHeight){
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
      }
    }, 100);
  }

displaySubTitle();

// About部分
$(function(){
  function animation(){
    $('.fadeInUp').each(function(){
      //ターゲットの位置を取得
      let target = $(this).offset().top;
      //スクロール量を取得
      let scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      let windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function (){
    animation();
  });
});

// Skill HTML部分
$(function(){
  function animation(){
    $('.fadeInUp-sub').each(function(){
      //ターゲットの位置を取得
      let target = $(this).offset().top;
      //スクロール量を取得
      let scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      let windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - windowHeight){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function (){
    animation();
  });
});
