$(function(){
    /* footer */
    var arr=[['北京','上海','天津','重庆','哈尔滨','长春','沈阳','呼和浩特','石家庄','乌鲁木齐'],['哥本哈根'],['基辅'],['埃斯特角城','蒙德维德亚']]
    //返回顶部
    $(window).scroll(function(){
        if($(document).scrollTop()>=300){
            $('.ffixright>p').eq(1).fadeIn(500)
        }else{
            $('.ffixright>p').eq(1).fadeOut(500)
        }
    })
    $('.ffixright>p').eq(1).click(function(){
        $('html').animate({
            'scrollTop':0
        },700)
    })

    /* 地址二级联动 */
    $('.ftop>div>form>div').eq(0).find('select').change(function(){
        if($(this).val()<=4){
            $('.ftop>div>form>div').eq(1).find('select').empty()
            for(var i = 0;i<arr[$(this).val()-1].length;i++){
                var option = new Option(arr[$(this).val()-1][i],i)
                $('.ftop>div>form>div').eq(1).find('select').append(option)
            }
        }else{
            $('.ftop>div>form>div').eq(1).find('select').empty()
        }
    })
})