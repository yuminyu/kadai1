
$(function(){
    // 変数に要素を入れる
    var open = $('.modal-open'),
      close = $('.modal-close'),
      container = $('.modal-container');
  
    //開くボタンをクリックしたらモーダルを表示する
    open.on('click',function(){ 
      container.addClass('active');
      return false;
    });
  
    //閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click',function(){  
      container.removeClass('active');
    });
  
    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
      if(!$(e.target).closest('.modal-body').length) {
        container.removeClass('active');
      }
    });
  });


let tyokin;
let ask_tyokin;
let Great;
let Good;
let made = 0;
let home = 0;
let nagusa = 0;
let hagema = 0;

tyokin = Math.floor(Math.random()*8+1)*10 + Math.floor(Math.random()*9);

console.log('正解は'+tyokin);
console.log('正解の文字列は'+String(tyokin));
console.log('正解の１０の位は'+String(tyokin).charAt(0));
console.log('正解の１の位は'+String(tyokin).charAt(1));

$("#check").click(function () {
    if(made<0){
      $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">終わってます。ページを更新してね。</p></div>');
      return;
    }
    ask_tyokin = $("#tyokin").val(); // テキストボックスのvalue値を取得
    console.log(typeof(ask_tyokin));
    if(ask_tyokin === "")return alert("２桁の正の整数(半角)を入力してください");
    if(ask_tyokin <= 9)return alert("２桁の正の整数(半角)を入力してください");
    if(ask_tyokin >= 100)return alert("２桁の正の整数(半角)を入力してください");
    
    Great = 0;
    Good = 0;
    made++;

    localStorage.setItem('memo'+ made, ask_tyokin)
    console.log(localStorage.getItem('memo'+made))
    

    $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">私の貯金は'+ask_tyokin+'兆円？</p></div>');
    console.log(ask_tyokin);
    
    if(ask_tyokin == tyokin){
      $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">Correct!</p></div>');
      setTimeout(function(){
      $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+made+'回の照会で正解しました。</p></div>');
      },500);
      for(let i = 1; i< made+1 ; i++){
        localStorage.removeItem('memo'+ i);
      }
      setTimeout(function(){
        if(localStorage.getItem('Saikoukiroku')===null || localStorage.getItem('Saikoukiroku')>=made){
          $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">最短で正解しました</p></div>');
          localStorage.setItem('Saikoukiroku',made);
        }else{
          setTimeout(function(){
            $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">ちなみに最短記録は'+localStorage.getItem('Saikoukiroku')+'回です。</p></div>');
          },800);
        }
      },800);
      setTimeout(function(){
        made = -1;
      },1000);
    }else{
      if(String(ask_tyokin).charAt(0) === String(tyokin).charAt(0))Great++;
      if(String(ask_tyokin).charAt(0) === String(tyokin).charAt(1))Good++;
      if(String(ask_tyokin).charAt(1) === String(tyokin).charAt(1))Great++;
      if(String(ask_tyokin).charAt(1) === String(tyokin).charAt(0))Good++;
      console.log(Great);
      console.log(Good);
      $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+Great+'Great'+Good+'Good</p></div>');
      }
  });

$("#check2").click(function(){
  if(made == 0){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">まだ何も照会されていませんが？</p></div>');
    return;return;
  }
  if(made>0){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+made+'回照会しています。</p></div>');
    setTimeout(function(){
      $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">照会した数字は↑の通りです。</p></div>');
    },300);
    setTimeout(function(){
      for(let i = 1 ; i < made+1 ; i++){
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+localStorage.getItem('memo'+i)+'</p></div>');
      }
    },600);
  }
  if(made<0){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">終わってます。ページを更新してね。</p></div>');
    return;
  }
});

$("#appendhomete").click(function(){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">あなたが一番です</p></div>')
    home++;
    setTimeout(function(){
    $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">私が一番</p></div>')
    },500);
});

$("#appendnagusa").click(function(){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">あなたはよくやっています</p></div>')
    nagusa++;
    setTimeout(function(){
    $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">そうだよな...</p></div>')
    },500);
});

$("#appendhagema").click(function(){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">あなたならできます</p></div>')
    hagema++;
    setTimeout(function(){
    $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">自信が湧いてきたぞ</p></div>')
    },500);
});

$("#appendOrei").click(function(){
    
    $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><div class="says"><p>アレクサ、ありがとう</p></div></div>')    
    if(home+nagusa+hagema == 0){
        setTimeout(function(){
            $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><div class="says"><p>私は何もしてませんよ。</p></div></div>')    
        },500);
    }else{
    setTimeout(function(){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><div class="says"><p>どういたしまして</p></div></div>')    
    },500);
    setTimeout(function(){
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><div class="says"><p>'+home+'回褒めて、'+nagusa+'回慰めて、'+hagema+'回励ましました。</p></div></div>')    
    },1000);
    }
});