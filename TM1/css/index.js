window.onload = function () {
    // 头部选项卡
        let ent = document.querySelectorAll(".top_anniu .hover")
        let enta = document.querySelectorAll(".top_anniu .hover2")
        let liss = document.querySelectorAll(".top_anniu .bx_bb")
        liss.forEach(function(i,v){
            i.style.display = "none"
        })
        ent.forEach(function(item,index){
            
            item.onmouseleave = function(){
                liss[index].style.display = "none"
                enta[index].classList.remove("active6")
            }
        })
        enta.forEach(function(item,index){
            // item.style.zIndex = "99"
            item.onmouseenter = function(){
                liss[index].style.display = "block"
                if(index ==2){
                    return
                }
                enta[index].classList.add("active6")
            }
        })
    // 轮播选项卡
    xuan(".big_lun .left_li .li-bx a",".big_lun .left_li",".big_lun .left_li .liss_bx .Liss_li",".big_lun .left_li .liss_bx","active3")
    function xuan(ents,box,lis,liboxs,active){
        let ent = document.querySelectorAll(ents)
        let bigbox = document.querySelector(box)
        let li = document.querySelectorAll(lis)
        let libox = document.querySelector(liboxs)
        for(let i = 0;i<ent.length;i++){
            li[i].style.display = "none"
        }
        libox.style.display = "none"
        ent.forEach(function(itm,index){
            itm.onmouseenter = function(){
                libox.style.display = "block"
                for(let i = 0;i<ent.length;i++){
                    li[i].style.display = "none"
                    ent[i].classList.remove(active) 
                }
                li[index].style.display = "block"
                bigbox.style.display = "block"
                ent[index].classList.add(active)
            }
            
        })
        bigbox.onmouseleave=function(){
            for(let i = 0;i<ent.length;i++){
                li[i].style.display = "none"
                ent[i].classList.remove(active)
            }
            libox.style.display = "none"
        }
    }
    // 选项卡2
    xuan2(".tmguo .floor li",".tmguo .two_pi","active4")
    function xuan2(ents,lis,active){
        let ent = document.querySelectorAll(ents)
        // let bigbox = document.querySelector(box)
        let li = document.querySelectorAll(lis)
        // let libox = document.querySelector(liboxs)
        for(let i = 0;i<ent.length;i++){
            li[i].style.display = "none"
        }
        li[0].style.display = "block"
        ent[0].classList.add(active)
        ent.forEach(function(itm,index){
            itm.onmouseenter = function(){
                // libox.style.display = "block"
                for(let i = 0;i<ent.length;i++){
                    li[i].style.display = "none"
                    ent[i].classList.remove(active) 
                }
                li[index].style.display = "block"
                // bigbox.style.display = "block"
                ent[index].classList.add(active)
            }
            
        })
    }
    // 导航
    // 轮播图
    wufeng(".big_lun .big_pi", ".dian li", ".xxx", "active", "1230px", "-1230px", 1230, -1230)
    function wufeng(xxs, dians, boxx, active, width1, width2, width3, width4) {
        let xx = document.querySelectorAll(xxs)
        let dian = document.querySelectorAll(dians)
        // let smyy = document.querySelectorAll(smyys)
        // let left = document.querySelector(lefts)
        // let right = document.querySelector(rights)
        let box = document.querySelector(boxx)
        // console.log(xx)
        // console.log(right)
        let t = setInterval(move, 2000)
        let now = 0
        let next = 0
        xx[0].style.left = 0
        dian[0].classList.add(active)
        // smyy[0].classList.add(act)
        function move() {
            next++
            if (next == xx.length) {
                next = 0
            }
            xx[now].style.left = 0
            xx[next].style.left = width1
            animate(xx[now], { left: width4 }, function () {
                dian[now].classList.remove(active);
                // smyy[now].classList.remove(act)
            })
            animate(xx[next], { left: 0 }, function () {
                for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
                    dian[i].classList.remove(active);
                    // smyy[i].classList.remove(act)
                }
                dian[now].classList.add(active);
                // smyy[now].classList.add(act)
            })
            now = next
        }
        box.onmouseenter = function () {
            clearInterval(t)
        }
        box.onmouseleave = function () {
            t = setInterval(move, 2000)
        }
        // 鼠标移入
        for (let i = 0; i < dian.length; i++) {
            dian[i].onmouseenter = function () {
                next = i
                if (i > now && i != 0) {
                    xx[now].style.left = 0
                    xx[next].style.left = width1
                    animate(xx[now], { left: width4 }, function () {
                        dian[now].classList.remove(active);
                        // smyy[now].classList.remove(act)
                    })
                    dian[now].classList.add(active);
                    animate(xx[i], { left: 0 }, function () {
                        for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
                            dian[i].classList.remove(active);
                            // smyy[i].classList.remove(act)
                        }
                        dian[i].classList.add(active);
                        // smyy[i].classList.add(act)
                    })
                    now = i
                    next = i
                } else if (i < now && i != dian.length) {
                    xx[now].style.left = 0
                    xx[next].style.left = width2
                    animate(xx[now], { left: width3 }, function () {
                        dian[now].classList.remove(active);
                        // smyy[now].classList.remove(act)
                    })
                    animate(xx[i], { left: 0 }, function () {
                        for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
                            dian[i].classList.remove(active);
                            // smyy[i].classList.remove(act)
                        }
                        dian[i].classList.add(active);
                        // smyy[i].classList.add(act)
                    })
                    now = i
                    next = i
                }
            }

        }
        // // 鼠标点击左
        // left.onclick = function () {
        //     if (next == 0) {
        //         next = xx.length
        //     }
        //     next--
        //     xx[now].style.left = 0
        //     xx[next].style.left = width2
        //     animate(xx[now], { left: width3 }, function () {
        //         dian[now].classList.remove(active);
        //         smyy[now].classList.remove(act)
        //     })
        //     animate(xx[next], { left: 0 }, function () {
        //         for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
        //             dian[i].classList.remove(active);
        //             smyy[i].classList.remove(act)
        //         }
        //         dian[next].classList.add(active);
        //         smyy[next].classList.add(act)
        //     })
        //     now = next

        // }
        // // 右点击
        // right.onclick = function () {
        //     next++
        //     if (next == xx.length) {
        //         next = 0
        //     }
        //     xx[now].style.left = 0
        //     xx[next].style.left = width1
        //     animate(xx[now], { left: -width3 }, function () {
        //         dian[now].classList.remove(active);
        //         smyy[now].classList.remove(act)
        //     })
        //     dian[now].classList.add(active);
        //     animate(xx[next], { left: 0 }, function () {
        //         for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
        //             dian[i].classList.remove(active);
        //             smyy[i].classList.remove(act)
        //         }
        //         dian[next].classList.add(active);
        //         smyy[next].classList.add(act)
        //     })
        //     now = next
        // }
        // window.onblur = function () {
        //     clearInterval(t);
        // }
        // window.onfocus = function () {
        //     t = setInterval(move, 1000);
        // }
    }

    // 楼层跳转置顶
    // tiao(".ding", ".dingbusou")

    // fools,btns,lous,dings)
    function tiao(dings, dingbusou) {
        let fool = document.querySelectorAll(fools)//所有楼层
        let arr = []
        fool.forEach((v, i) => {
            let num = v.offsetTop //每一个元素到顶部距离
            arr.push(num)//添加到数组
        })
        let btn = document.querySelectorAll(btns)
        let lou = document.querySelector(lous)
        btn.forEach((v, i) => {
            v.onclick = function () {
                animate(document.documentElement, { scrollTop: arr[i] });
            }
        })
        // console.log(dingbusou)
        window.onscroll = function () {
            let windowtop = document.documentElement.scrollTop //获取现在滚动条到顶部距离
            // console.log(windowtop)
            let ding = document.querySelector(dings)
            let dingsou = document.querySelector(dingbusou)
            if (windowtop >= window.innerHeight) {
                ding.style.opacity = 1
                // lou.style.opacity = 1
                dingsou.style.opacity = 1
            } else {
                ding.style.opacity = 0
                // lou.style.opacity = 0
                dingsou.style.opacity = 0
            }
            ding.onclick = function () {
                animate(document.documentElement, { scrollTop: 0 });
            }
        }
    }
    // 楼层跳
    tiao(".flools", ".lx_bbtn", ".louceng", ".ls_top",".dingbusou",".ti_top",".right_black")
    function tiao(fools, btns, lous,tops, dings,top2,ridaos) {
        let fool = document.querySelectorAll(fools)//所有楼层
        let top = document.querySelector(tops)
        let tops2 = document.querySelector(top2)
        let ridao = document.querySelector(ridaos)
        let arr = []
        let arrColor = ["#64C333","#ff0036","#EA5F8D","#0AA6E8","#ff0036"]
        fool.forEach((v, i) => {
            let num = v.offsetTop //每一个元素到顶部距离
            arr.push(num)//添加到数组
        })
        let btn = document.querySelectorAll(btns)
        let lou = document.querySelector(lous)
        
        let flag = true
        window.onscroll = function () {//当页面滚动时事件
            let windowtop = document.body.scrollTop || document.documentElement.scrollTop //获取现在滚动条到顶部距离
            let ding = document.querySelector(dings)
            console.log()
            if (windowtop >= window.innerHeight /3) {
                ridao.style.display ="block"
            }
            if (windowtop >= window.innerHeight ) {
                animate(ding,{top:0},500)
                lou.style.opacity = 1
            } else {
                animate(ding,{top:-50},500)
                lou.style.opacity = 0
            }
            arr.forEach(function (v, i) {
                if (windowtop >= arr[i]) {
                    if (!flag) {
                        return
                    }    
                    btn.forEach(function (v, i) {
                        btn[i].style.background = "#666"
                    })
                    btn[i].style.background = arrColor[i]
                }
            })
            btn.forEach((v, i) => {
                v.onclick = function () {
                    flag = false
                    btn.forEach(function (v, i) {
                        btn[i].style.background = "#666"
                    })
                    btn[i].style.background = arrColor[i]
                    animate(document.documentElement, { scrollTop: arr[i] },function(){
                        flag = true
                    });
                }
            })
            top.onclick = function () {
                flag = false
                animate(document.documentElement, { scrollTop: 0 },function(){
                    flag = true
                });
                
            }
            tops2.onclick = function () {
                flag = false
                animate(document.documentElement, { scrollTop: 0 },function(){
                    flag = true
                });
                
            }
        }

    }
}
