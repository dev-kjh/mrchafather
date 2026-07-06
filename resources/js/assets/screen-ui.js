/*-------------------------------------------------
Author : WB,Seo
Create date : 2024. 11.06
Last update : 
-------------------------------------------------*/



// $(document).ready(function () {

//     $('#header nav').mouseover(function(){
//         if($(window).width() <= 1200){
//             return
//         }
//         $('#header').addClass('menu-open');
//         $('.depth-1 li').addClass('on');
//         $('.depth-2').addClass('on');

//     });

//     $('#header').mouseleave(function(){
//         if($(window).width() <= 1200){
//             return
//             }
//         $('#header').removeClass('menu-open');
//         $('.depth-1 li').removeClass('on');
//         $('.depth-2').removeClass('on');
//     });


//     $("#header .depth-1 > li > a").on('click', function(e){
//         var index = $(this).parents(".depth-1 > li").index();
        
//         if($("#header").hasClass('on') === false || index === 2) {
//             return
//         } 
//         e.preventDefault();
//         $(this).parent("li").toggleClass("active")
//         $(this).siblings(".depth-2").stop().slideToggle();
//         $(this).parent("li").siblings("li").children(".depth-2").slideUp();
//         $(this).parent("li").siblings("li").removeClass("active")
//     });

//     $(".ham_bg").on('click', function(e){
//         $('.hamBtn').removeClass('active');
//     });


//     window.scrollTo(0, 0);
//     // top버튼 클릭



    
//     $(".to-top-btn").on("click",function  () {
//         $("html, body").animate({ scrollTop: 0 }, "smooth");
//     });


// });


function modalOpen(obj){
    var modalWrap = $('#modal-bg'+obj);
    modalWrap.fadeIn();
    console.log('modal number :'+'.modal-bg'+obj);
    
}
/*
$(document).ready(function(){

    var modalClose = $('.close-btn');
    modalClose.on('click', function() {
        $('.modal-bg').fadeOut();
        
    });

});
*/
var modalClose = $('.close-btn');
var modalclosefunction = function() {
    $('.modal-bg').fadeOut();
}
modalClose.on('click', modalclosefunction);


function mail_select(v){
    $("#mail_2").val(v);
}

function form_check(){

    if(check_agree.checked == false){
        alert("이용약관 동의에 체크 바랍니다.");
        return false;
    }

    if(frm.mail_1.value == '' || frm.mail_2.value == ''){
        alert("이메일을 입력해주십시오.");
        frm.mail_1.focus();
        return false;
    }

                                                        // 이메일 정규식사용.
  var text = document.getElementById('mail_1').value;
  var regEmail = /^[a-zA-Z0-9-_/][a-zA-Z0-9-_/]*$/;

  if (regEmail.test(text) == false) {
      alert('올바른 이메일 형식을 사용 해 주세요.');
      return false;
  }
    if(frm.contents.value == ''){
        alert("내용을 입력해주십시오.");
        frm.contents.focus();
        return false;
    }
    if(frm.m_name.value == ''){
        alert("이름을 입력해주십시오.");
        frm.m_name.focus();
        return false;
    }
    if(frm.phone.value == ''){
        alert("연락처를 입력해주십시오.");
        frm.phone.focus();
        return false;
    }
    return true;
}
