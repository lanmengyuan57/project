$(function(){
    var flag = true;
    var num = 0;
    $('.mtmlleft>i').click(function(){
        if(flag){
            $(this).addClass('none').siblings('i').removeClass('none')
            $('.mtmlleft>div').eq($(this).index()).css({borderColor:'#ae8472'}).siblings('div').css({borderColor:'transparent'})
            if($(this).index()==1){
                $('.mtmlright>div').animate({left:'-505px'},500,function(){
                    flag = true;
                })
            }else{
                $('.mtmlright>div').animate({left:'0'},500,function(){
                    flag = true;
                })
            }
        }
    })
    //放大镜
    $('.mtmlright>div>div').mouseover(function(){
        $(this).find('div').removeClass('none').mousemove(function(e){
            e = window.event||e
            var mousx = e.clientX - $(this).parent().offset().left;
            var mousy = e.clientY + $(document).scrollTop() - $(this).parent().offset().top;
            $(this).css({left:-mousx*2+'px',top:-mousy*2+'px'})
        })
    })

    $('.mtmlright>div>div').mouseout(function(){
        $(this).find('div').addClass('none')
    })

    //下拉框
    $('.mtmrfsel').click(function(){
        if(num==0){
            $('.Parameter>i').addClass('rotate').parent().siblings().removeClass('none')
            num++;
        }else{
            num=0
            $('.Parameter>i').removeClass('rotate').parent().siblings().addClass('none')
        }
    })
    //下拉框li
    $('.mtmrfsel>div').eq(1).find('li').click(function(){
        $('.Parameter>p').text($(this).find('p').text())
        $(this).find('i').removeClass('none').parent().siblings().find('i').addClass('none')
    })

    //购物车button
    if(window.localStorage.getItem('src')==null){
        $('.mtmrfooter>button').one('click',function(){
            //更改button文本
            $(this).text('商品已添加购物车')
            //商品名
            window.localStorage.setItem('TradeName',$('.mtmrtop>h1').text())
            //单价
            window.localStorage.setItem('UnitPrice',$('.Price>span').text().replace(/,|\s/g,''))
            //数量
            window.localStorage.setItem('QofGoods',$('.Parameter>p').text())
            //图片路径
            window.localStorage.setItem('src',$('.mtmlleft>div').eq(0).css('backgroundImage'))

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
            var num = 1;
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

                $('.truckTotal>div>p>span').text($('.GSfour>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
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

                $('.truckTotal>div>p>span').text($('.GSfour>p>span').text().replace(/[0-9]+?(?=(?:([0-9]{3}))+$)/g,function(a){return a+','}))
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
            window.location.reload()
        })
    }else{
        //更改button文本
        $('.mtmrfooter>button').text('商品已添加购物车')
    }
    //简介
    $('.mtdmnav>div').click(function(){
        if($(this).index()<3){
            $(this).find('p').css({color:'#000',borderBottomColor:'#000'}).parent().siblings().find('p').css({color:'#999',borderBottomColor:'#e5e5e5'})
            $('.mtdmnav>div').eq(3).find('div').eq($(this).index()).removeClass('none').find('p').css({color:'#000'}).parent().siblings().addClass('none')
        }
    })
})