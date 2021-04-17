$(function(){
    var num = 0;
    $('.category>dl>dt').click(function(){
        if(num==0){
            $(this).css({color:'#fff',background:'#000'}).find('i').css({borderTopColor:'#fff'})
            $(this).parent().siblings().find('dt').css({color:'#000',background:'#fff'}).find('i').css({borderTopColor:'#000'})
            num++;
            $(this).siblings('dd').slideDown(500)
            $(this).parent().siblings().find('dd').slideUp(500)
        }else{
            $(this).css({color:'#000',background:'#fff'}).find('i').css({borderTopColor:'#000'})
            $(this).siblings('dd').slideUp(500)
            num=0;
        }
    })
    $('.category>dl>dd>ol>li').click(function(){
        for(var i = 0;i<3;i++){
            if(($('.mmmain>div>p').eq(i).text().trim())==$(this).text().slice(0,$(this).text().length-5)){
                $('.mmmain>div>p').eq(i).parent().removeClass('none').siblings().addClass('none')
                $('.mmnright>div').find('span').text( $(this).text().slice(-2,-1)+' 个产品')
            }
            if(($('.mmmain>div>p').eq(i).text().trim())==$(this).text().slice(0,$(this).text().length-3)){
                $('.mmmain>div>p').eq(i).parent().removeClass('none').siblings().addClass('none')
                $('.mmnright>div').find('span').text( $(this).text().slice(-2,-1)+' 个产品')
            }
            if($(this).text().slice(0,$(this).text().length-3)=='男性'){
                $('.mmmain>div>p').eq(0).parent().removeClass('none').siblings().addClass('none')
                $('.mmnright>div').find('span').text( $(this).text().slice(-2,-1)+' 个产品')
            }
            if($(this).text().slice(0,$(this).text().length-3)=='女性'){
                $('.mmmain>div>p').eq(0).parent().addClass('none').siblings().removeClass('none')
                $('.mmnright>div').find('span').text( $(this).text().slice(-2,-1)+' 个产品')
            }
        }
    })

    $('.mmnright>div').find('li').eq(1).click(function(){
        $('.mmmain>div').removeClass('none')
        $('.mmnright>div').find('span').text('8 个产品')
    })

    $('.mmmsp').hover(function(){
        $(this).find('a>span').css({opacity:'1'})
        $(this).siblings().find('a>span').css({opacity:'0'})
    },function(){
        $('.mmmsp').find('a>span').css({opacity:'0'})
    })
})