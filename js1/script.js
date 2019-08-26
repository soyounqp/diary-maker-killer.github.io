
 $(document).ready(function(){

    var clicks = 0;

    $("p").click(function(){
      $(this).hide();
      clicks++; $('#number').html(clicks);
    });

    $('.bomb').click(function(){ 
      $('body').addClass('bomb-effect');
      $('.a, .b, .c, .d, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p, .q, .r, .s, .t, .u, .v, .w, .x, .y, .z').hide();
      setTimeout(function(){location.reload();}, 4000);
    })

    
    $('.stopwatch').click(function(){ 
      $('p').stop();
      setTimeout(function(){location.reload();}, 5500);
    })
    

    $('.pistol').click(function(){
      $('p').toggleClass('pistol-effect');

    })
    
    $('.firecracker').click(function(){
      $('body').addClass('firecracker-effect');
      $('.a, .b, .c, .d, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p, .q, .r, .s, .t, .u, .v, .w, .x, .y, .z').hide();
      setTimeout(function(){location.reload();}, 4000);
    })

    var w = $('body');
    $('.warning').click(function(){
      w.addClass('warning-effect');});
        setTimeout(function() {
      w.removeClass('warning-effect');
    }, 7000);
  })

  function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }


  var aAudio = new Audio('sound1/bomb.mp3');
  var bAudio = new Audio('sound1/stopwatch.mp3');
  var cAudio = new Audio('sound1/swish.mp3');
  var dAudio = new Audio('sound1/firecracker.mp3');
  var eAudio = new Audio('sound1/warning.mp3');
  var fAudio = new Audio('sound1/pistol.mp3');
  
  function myAudioFunction(letter) {
    if(letter == 'click'){
      fAudio.play();
    }

   if(letter == 'bomb') {
     aAudio.play();
     bAudio.pause();
     cAudio.pause();
     dAudio.pause();
     eAudio.pause();
   } 
   else if(letter == 'stopwatch') {
     bAudio.play();
     aAudio.pause();
     cAudio.pause();
     dAudio.pause();
     eAudio.pause();
   }
   else if(letter == 'pistol') {
     cAudio.play();
     aAudio.pause();
     bAudio.pause();
     dAudio.pause();
     eAudio.pause();
   }
   else if(letter == 'firecracker') {
     dAudio.play();
     aAudio.pause();
     bAudio.pause();
     cAudio.pause();
     eAudio.pause();
   }
   else if(letter == 'warning') {
     eAudio.play();
     aAudio.pause();
     bAudio.pause();
     cAudio.pause();
     dAudio.pause();
   }
 }

 var target = $('p');
 var score = document.querySelector("#counter"),
 count = 0;
 target.onclick = function() {
  count += 1;
  score.innerHTML = "score: " + count;
};

$(document).ready(function(){
    animatep('.a');
    animatep('.b');
    animatep('.c');
    animatep('.d');
    animatep('.e');
    animatep('.f');
    animatep('.g');
    animatep('.h');
    animatep('.i');
    animatep('.j');
    animatep('.k');
    animatep('.l');
    animatep('.m');
    animatep('.n');
    animatep('.o');
    animatep('.p');
    animatep('.q');
    animatep('.r');
    animatep('.s');
    animatep('.t');
    animatep('.u');
    animatep('.v');
    animatep('.w');
    animatep('.x');
    animatep('.y');
    animatep('.z');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the p)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
}

function animatep(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 800,   function(){
      animatep(myclass);        
    }); 
};


