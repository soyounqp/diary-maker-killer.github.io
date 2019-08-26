$("#left").scroll(function() {
  var $tt = $('.shadow-top');
  
  if($(this).scrollTop() >= 40) $tt.addClass('shown');
  else $tt.removeClass('shown');

  var $bb = $('.shadow-bottom');

  if($(this).scrollTop() <= 6650) $bb.addClass('shown');
  else $bb.removeClass('shown');
});


$(document).ready(function() {
    var shuffle = function() {
      $('ul').html($('ul li').sort(function() {
        return Math.random() - .5;
      }));
    }

    $().on('click', function(e) {
      e.preventDefault();
      shuffle();
    })
    shuffle();

    $("li").click(function(){
      $(this).hide();
      var a = $(this).text();
      $("#right").append(' ' + '<span class="removal">' + a + '</span>');
      $('.removal').on('click', function() {
        $(this).hide();
      })
    });
  });

  function timer () { 
    var date = new Date(); 
    var hour = date.getHours(); 
    var ampm = ( hour  < 12 || hour == 24 ) ? "오전 " : "오후 "; 
    hour = hour % 12 || 12; 
    var minute = date.getMinutes(); 
    minute = ( minute > 9 ) ? minute : "0" + minute; 
    var second = date.getSeconds(); 
    second = ( second > 9 ) ? second : "0" + second; 
    var millisec = date.getMilliseconds(); 
    millisec = ( millisec > 99 ) ? millisec : ( millisec > 9 ) ? "0" + millisec : "00" + millisec; 
    var timeString = ampm + hour + ":" + minute + ":" + second; 

    var year = date.getFullYear(); 
    var month = date.getMonth() + 1; 
    var day = date.getDate(); 
    var arrayWeek = [ "일" , "월" , "화" , "수" , "목" , "금" , "토" ]; 
    var week = date.getDay(); 
    week = arrayWeek [ week ]; 
    var dateString = year + "년 " + month + "월 " + day + "일 " + " " + week + "요일 " ; 
    return  dateString + timeString; 
  } 

  var tag = document.getElementById( "realTimer" ); 

  tag.innerHTML = timer(); 

  setInterval ( function() { tag.innerHTML = timer(); } , 1000 );  