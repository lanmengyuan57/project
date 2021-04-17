$(function(){
    if(window.localStorage.getItem('src')!=null){
        //创建元素
        var truc = $('<li><div class="GSone"><input type="checkbox"><img src="'+window.localStorage.getItem('src').slice(5,-2)+'"><div><strong>'+window.localStorage.getItem('TradeName')+'</strong><span>×</span></div></div><div class="GStwo">作品编号<span>REGULAR 52102</span></div><div class="GSthree">数量<div><span>-</span><p>'+window.localStorage.getItem('QofGoods')+'</p><span>+</span></div></div><div class="GSfour">商品总计<p>￥<span>'+String(window.localStorage.getItem('UnitPrice')*window.localStorage.getItem('QofGoods')).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','})+'</span></p></div></li>')
        //添加进购物车
        $('.truckGoods>ol').append(truc)
        $('.truck').removeClass('none')
        $('.EmptyCar').addClass('none')

        $('.GSfour>p>span').text(String(window.localStorage.getItem('UnitPrice')*window.localStorage.getItem('QofGoods')).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))

        $('.truckTotal>div>p>span').text($('.GSfour>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))

        //全选
        if($('.truckAll>input')[0].checked){
            $('.truckGoods>ol>li>div>input').prop('checked', true)
        }

        //加量加价
        var num = window.localStorage.getItem('QofGoods');
        //减
        $('.GSthree>div>span').eq(0).click(function(){
            num--
            if(num<=1){
                num=1;
            }
            //更改数量
            $(this).siblings('p').text(num)
            window.localStorage.setItem('QofGoods',num)


            //更改价格
            $('.GSfour>p>span').text(String(num*window.localStorage.getItem('UnitPrice')).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))

            if($('.truckAll>input')[0].checked){
                $('.truckTotal>div>p>span').text($('.GSfour>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
            }
            //缓存中的单价
            // window.localStorage.getItem(UnitPrice)
            //去掉价格中的千分位符
            // $('.GSfour>p>span').text().replace(/,|\s/g,'')
            //给价格添加上千分位符
            // "12345678".replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','})
        })
        //加
        $('.GSthree>div>span').eq(1).click(function(){
            num++
            if(num>=3){
                num=3;
            }
            //更改数量
            $(this).siblings('p').text(num)
            window.localStorage.setItem('QofGoods',num)

            //更改价格
            $('.GSfour>p>span').text(String(num*window.localStorage.getItem('UnitPrice')).replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))

            if($('.truckAll>input')[0].checked){
                $('.truckTotal>div>p>span').text($('.GSfour>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
            }
        })

        //清空缓存
        $('.GSone>div>span').click(function(){
            //清空缓存
            window.localStorage.clear()
            //删除商品
            $('.truckGoods>ol').remove(truc)
            $('.EmptyCar').removeClass('none')
            $('.truck').addClass('none')
            window.location.reload()
        })

        //选中
        if($('.truckAll>input')[0].checked){
            $('.truckGoods>ol>li>div>input').prop('checked', true)
        }
        //全选
        $('.truckAll>input').change(function(){
            if($('.truckAll>input')[0].checked){
                $('.truckGoods>ol>li>div>input').prop('checked', true)
                //改变总价
                $('.truckTotal>div>p>span').text($('.GSfour>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
            }else{
                $('.truckGoods>ol>li>div>input').prop('checked', false)
                //改变总价
                $('.truckTotal>div>p>span').text(0)
            }
        })

        //多选
        $('.truckGoods>ol>li>div>input').change(function(){
            for(var i = 0;i<$('.truckGoods>ol>li>div>input').length;i++){
                if($('.truckGoods>ol>li>div>input')[i].checked){
                    $('.truckAll>input').prop('checked', true)
                    //改变总价
                    $('.truckTotal>div>p>span').text($('.GSfour>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
                }else{
                    $('.truckAll>input').prop('checked', false)
                    //改变总价
                    $('.truckTotal>div>p>span').text(0)
                }
            }
        })
        
        //页面跳转
        //根据Class类名判断在哪一个页面
        $('.PlaceOrder').click(function(){
            if($('div').hasClass('mBwall')){
                $(window)[0].location.href = 'HTML/Mymoney.html'
            }else if($('div').hasClass('mtopmain')){
                $(window)[0].location.href = '../Mymoney.html'
            }else{
                $(window)[0].location.href = 'Mymoney.html'
            }
        })
    }
})

