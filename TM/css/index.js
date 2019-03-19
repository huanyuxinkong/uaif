window.onload = function () {

    // 轮播图
    wufeng(".big_lun .big_pi",".dian li",".xxx","active","1230px","-1230px",1230,-1230)
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
    tiao(".ding",".dingbusou")

	// fools,btns,lous,dings)
    function tiao(dings,dingbusou){
        let fool = document.querySelectorAll(fools)//所有楼层
        let arr = []
        fool.forEach((v,i)=>{
            let num = v.offsetTop //每一个元素到顶部距离
            arr.push(num)//添加到数组
        })
        let btn = document.querySelectorAll(btns)
        let lou = document.querySelector(lous)
        btn.forEach((v,i)=>{
            v.onclick = function(){
                animate(document.documentElement, {scrollTop: arr[i]});
            }
		})
		console.log(dingbusou)
		window.onscroll = function(){
			let windowtop = document.documentElement.scrollTop //获取现在滚动条到顶部距离
        // console.log(windowtop)
		let ding = document.querySelector(dings)
		let dingsou = document.querySelector(dingbusou)
        if(windowtop >= window.innerHeight){
            ding.style.opacity = 1
			// lou.style.opacity = 1
			dingsou.style.opacity = 1
        }else{
            ding.style.opacity = 0
			// lou.style.opacity = 0
			dingsou.style.opacity = 0
        }
        ding.onclick = function(){
            animate(document.documentElement, {scrollTop: 0});
        }
		}
}