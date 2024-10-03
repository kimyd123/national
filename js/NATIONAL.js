$(function(){
    // 초기설정

    $('.sub').hide();  //서브메뉴


    $(window).resize(function(){ 
        if (window.innerWidth > 896) {  // 다바이스 크기가 896이상일떄 
            $('.main').show();
            $('.gnb_icon').show();

            $('.gnb').on("mouseenter focusin",function(){
            $(".sub").stop().slideDown(500); //서브메뉴 펼침
            });
    
            
            $('.gnb').on("mouseleave focusout",function(){
                $(".sub").stop().slideUp(500); //서브메뉴 담힘
            });
        } else {
            $('.main').hide();  
            $('.gnb_icon').hide();  

            $('.main').on("mouseenter focusin",function(){

            $(".sub",this).stop().slideDown(500); //서브메뉴 펼침
            });

            $('.main').on("mouseleave focusout",function(){
                $(".sub",this).stop().slideUp(500); //서브메뉴 담힘
            });
        }
        
        }).resize(); 

    $('.material-symbols-outlined.menu_icon').click(function(){
        $('.main').toggle();
        $('.gnb_icon').toggle();
    });


});



const contens_img_opa = document.querySelectorAll('.contens1 .contens_img_opa');

const obser = new IntersectionObserver(function(e){
    e.forEach((item,i)=>{

        if(item.isIntersecting){
            item.target.style.opacity=1;
        }else{
            item.target.style.opacity=0;
        }
    });
},{threshold : 1});

for(let i=0 ; i<contens_img_opa.length;i++){
    obser.observe(contens_img_opa[i]);
}