$(function(){
    if(window.localStorage.getItem('src')!=null){
        $('.InStock').removeClass('none')
        //获取缓存初始化页面
        //获取购买数量
        var num = window.localStorage.getItem('QofGoods');
        $('.mdlmrnum>div>p').text(num)
        //获取图片路径
        $('.mdlmmimg>img').attr('src',window.localStorage.getItem('src').slice(5,-2))
        //获取单价
        $('.mdlmrdj>p>span').text(String(window.localStorage.getItem('UnitPrice')).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
        //计算商品总计
        $('.mdlmrhw>p>span').text(String(window.localStorage.getItem('UnitPrice')*num).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
        //更改初始文字
        $('.mdrmain>div>li>p>span').text($('.mdlmrhw>p>span').text())

        //全选
        if($('.mdltop>div>input')[0].checked){
            $('.mdlmleft>input').prop('checked', true)
        }

        //减
        $('.mdlmrnum>div>span').eq(1).click(function(){
            num--
            if(num<=1){
                num=1;
            }
            //更改数量
            $(this).siblings('p').text(num)
            window.localStorage.setItem('QofGoods',num)


            //更改价格
            $('.mdlmrhw>p>span').text(String(num*window.localStorage.getItem('UnitPrice')).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))

            if($('.mdltop>div>input')[0].checked){
                $('.mdrmain>div>li>p>span').text($('.mdlmrhw>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
            }
        })
        //加
        $('.mdlmrnum>div>span').eq(0).click(function(){
            num++
            if(num>=3){
                num=3;
            }
            //更改数量
            $(this).siblings('p').text(num)
            window.localStorage.setItem('QofGoods',num)

            //更改价格
            $('.mdlmrhw>p>span').text(String(num*window.localStorage.getItem('UnitPrice')).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))

            if($('.mdltop>div>input')[0].checked){
                $('.mdrmain>div>li>p>span').text($('.mdlmrhw>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
            }
        })

        //全选
        $('.mdltop>div>input').change(function(){
            if($('.mdltop>div>input')[0].checked){
                $('.mdlmleft>input').prop('checked', true)
                //改变总价
                $('.mdrmain>div>li>p>span').text($('.mdlmrhw>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
            }else{
                $('.mdlmleft>input').prop('checked', false)
                //改变总价
                $('.mdrmain>div>li>p>span').text(0)
            }
        })

        //多选
        $('.mdlmleft>input').change(function(){
            for(var i = 0;i<$('.mdlmleft>input').length;i++){
                if($('.mdlmleft>input')[i].checked){
                    $('.mdltop>div>input').prop('checked', true)
                    //改变总价
                    $('.mdrmain>div>li>p>span').text($('.mdlmrhw>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
                }else{
                    $('.mdltop>div>input').prop('checked', false)
                    //改变总价
                    $('.mdrmain>div>li>p>span').text(0)
                }
            }
        })

        //删除订单
        $('.mdlmmtbutton>div').eq(1).click(function(){
            $('.InStock').addClass('none')
            window.location.reload()
            window.localStorage.clear()
        })

        //提交订单
        $('.mdrfooter>button').click(function(){
            $(window)[0].location.href = 'LandingPage.html'
        })
    }else{
        $('.EmptyCars').removeClass('none')
        $('.EmptyCars>div>div>button').click(function(){
            $(window)[0].location.href = 'LE GMME.html'
        })
    }
})