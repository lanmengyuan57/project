$(function(){
    //header搜索框点击事件
    $('.HBhlright').find('div').click(function(){
        $(this).next().removeClass('none').focus()
    })
    /* 二维码 */
    //header登录移入事件
    $('.HBhrleft').find('li').eq(0).find('a').eq(0).mouseover(function(){
        $(this).css({textDecoration:'underline'});
        $('.LoginHidden').removeClass('none')
    })
    //点击class之外的地方触发
    $(document).click(function(e) {
        if ($(e.target).closest(".LoginHidden").length == 0){
            //要实现的代码
            $('.HBhrleft').find('li').eq(0).find('a').eq(0).css({textDecoration:'none'});
            $('.LoginHidden').addClass('none')
        }
    })
    //input事件
    $('.LHmright>div>input').focus(function(){
        $(this).css({boxShadow:'0 1px 2px rgba(0,0,0,.2)'})
    }).blur(function(){
        $(this).css({boxShadow:'none'})
    })
    //登录按钮
    $('.Login').click(function(){
        if(($('.LHmrtops>input').val().trim()=='')&&($('.LHmrtop>input').val().trim()=='')){
            $('.Tips').eq(0).removeClass('none');
            $('.Tips').eq(1).removeClass('none');
            $('.LHmrtop>input').focus();
            $('.LHmrtops>input').val('');
            $('.LHmrtop>input').val('');
        }else{
            $('.Tips').eq(0).addClass('none')
            $('.Tips').eq(1).addClass('none')
        }
    })

    /* 顶部列表 */
    $('.HBfooter>li>span').click(function(){
        if($(this).parent().index()==0){
            $('.HBfooter>li').eq(0).siblings().find('span').css({color:'#999'})
            $(this).css({color:'#ae9477'})
            $('.BrandStory').removeClass('flexnone').children('div').eq(0).removeClass('none').siblings().addClass('none')
            $('.BrandStory').children('i').removeClass('none')
        }else{
            $('.HBfooter>li').eq(0).siblings().find('span').css({color:'#999'})
            $(this).css({color:'#000'})
            $('.BSone').addClass('none')
            $('.BrandStory').removeClass('flexnone').children('div').eq($(this).parent().index()-2).removeClass('none').siblings().addClass('none')
            $('.BrandStory').children('i').removeClass('none')
        }
    })
    $('.BSblack').mouseover(function(){
        $('.BrandStory').addClass('flexnone')
        $('.HBfooter>li').eq(0).siblings().find('span').css({color:'#000'})
    })

    /* 购物车移入事件 */
    var flag = true;
    //给购物车添加高度
    $('.ShoppingCart').css({height:$(document).height()+'px'})
    if(flag){
        flag=false;
        $('.HBhrright').mouseover(function(){
            $('.ShoppingCart').fadeIn(500)
        })
    }

    $('.main').mouseover(function(){
        $('.ShoppingCart').fadeOut(500,function(){
            flag=true;
        })
    })  

    //关闭购物车
    $('.SCclose>img').click(function(){
        $('.ShoppingCart').fadeOut(0)
    })
})