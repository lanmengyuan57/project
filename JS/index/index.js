$(function(){
    var flag = true;
    /* 轮播图 */
    $('.irbbox>i').click(function(){
        if(flag){
            flag = false
            if($(this).index()==0){
                if($('.irbbrun>div').position().left>=0){
                    $('.irbbrun>div').css({left:'0'})
                    flag = true
                }else{
                    $('.irbbrun>div').animate({left:'+=465px'},500,function(){
                        flag = true;
                    })
                }
            }
            if($(this).index()==1){
                if($('.irbbrun>div').position().left<=-3255){
                    $('.irbbrun>div').css({left:'-3255px'})
                    flag = true
                }else{
                    $('.irbbrun>div').animate({left:'-=465px'},500,function(){
                        flag = true
                    })
                }
            }
        }
    })
})