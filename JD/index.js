window.onload = function(){
    // 我的京东
	let short1 = document.getElementsByClassName("short_an")[1]
	// console.log(short1)
	let list1 = document.getElementsByClassName("dt_lis")[0]
	let dt1 = document.getElementsByClassName("dt")[1]
	// console.log(list1)
	short1.onmouseenter = function () {
		list1.style.display = "block"
		short1.style.boxSizing = "border-box"
		dt1.style.backgroundColor = "#fff"
		dt1.style.borderLeft = "1px  solid #ccc"
		dt1.style.borderTop = "1px  solid #ccc"
		dt1.style.borderRight = "1px  solid #ccc"
		dt1.style.borderButton = "1px  solid #fff "
	}
	short1.onmouseleave = function () {
		list1.style.display = "none"
		dt1.style.backgroundColor = " transparent"
		dt1.style.borderLeft = "1px  solid transparent"
		dt1.style.borderTop = "1px  solid transparent"
		dt1.style.borderRight = "1px  solid transparent"
		dt1.style.borderButton = "1px  solid transparent "
	}
	// 企业采购
	let short2 = document.getElementsByClassName("short_an")[3]
	let dt2 = document.getElementsByClassName("dt")[3]
	let list2 = document.getElementsByClassName("ddd")[0]
	short2.onmouseenter = function () {
		list2.style.display = "block"
		short2.style.boxSizing = "border-box"
		dt2.style.backgroundColor = "#fff"
		dt2.style.borderLeft = "1px  solid #ccc"
		dt2.style.borderTop = "1px  solid #ccc"
		dt2.style.borderRight = "1px  solid #ccc"
		dt2.style.borderButton = "1px  solid #fff "
	}
	short2.onmouseleave = function () {
		list2.style.display = "none"
		dt2.style.backgroundColor = " transparent"
		dt2.style.borderLeft = "1px  solid transparent"
		dt2.style.borderTop = "1px  solid transparent"
		dt2.style.borderRight = "1px  solid transparent"
		dt2.style.borderButton = "1px  solid transparent "
	}
	// 客户服务
	let short3 = document.getElementsByClassName("short_an")[4]
	let dt3 = document.getElementsByClassName("dt")[4]
	let list3 = document.getElementsByClassName("kkh")[0]
	short3.onmouseenter = function () {
		list3.style.display = "block"
		short3.style.boxSizing = "border-box"
		dt3.style.backgroundColor = "#fff"
		dt3.style.borderLeft = "1px  solid #ccc"
		dt3.style.borderTop = "1px  solid #ccc"
		dt3.style.borderRight = "1px  solid #ccc"
		dt3.style.borderButton = "1px  solid #fff "
	}
	short3.onmouseleave = function () {
		list3.style.display = "none"
		dt3.style.backgroundColor = " transparent"
		dt3.style.borderLeft = "1px  solid transparent"
		dt3.style.borderTop = "1px  solid transparent"
		dt3.style.borderRight = "1px  solid transparent"
		dt3.style.borderButton = "1px  solid transparent "
	}
	// 网站导航
	let short4 = document.getElementsByClassName("short_an")[5]
	let dt4 = document.getElementsByClassName("dt")[5]
	let list4 = document.getElementsByClassName("wangzhan")[0]
	short4.onmouseenter = function () {
		list4.style.display = "block"
		short4.style.boxSizing = "border-box"
		dt4.style.backgroundColor = "#fff"
		dt4.style.borderLeft = "1px  solid #ccc"
		dt4.style.borderTop = "1px  solid #ccc"
		dt4.style.borderRight = "1px  solid #ccc"
		dt4.style.borderButton = "1px  solid #fff "
	}
	short4.onmouseleave = function () {
		list4.style.display = "none"
		dt4.style.backgroundColor = " transparent"
		dt4.style.borderLeft = "1px  solid transparent"
		dt4.style.borderTop = "1px  solid transparent"
		dt4.style.borderRight = "1px  solid transparent"
		dt4.style.borderButton = "1px  solid transparent "
	}
	// 二维码
	let short5 = document.getElementsByClassName("short_an")[6]
	let list5 = document.getElementsByClassName("erweiyiru")[0]
	short5.onmouseenter = function () {
		list5.style.display = "block"
	}
	short5.onmouseleave = function () {
		list5.style.display = "none"
	}
	// 购物车
	let shopli = document.getElementsByClassName("shopping_car")[0]
	let shopbox = document.getElementsByClassName("shopping_car_box")[0]
	let shoplis = document.getElementsByClassName("sp_carli")[0]
	shopli.onmouseenter = function () {
		shoplis.style.display = "block"
		shopli.style.borderTop = "1px  solid #ccc"
		shopli.style.borderLeft = "1px  solid #ccc"
		shopli.style.borderRight = "1px  solid #ccc"
		shopli.style.borderBottom = "1px  solid #fff"
	}
	shopli.onmouseleave = function () {
		shoplis.style.display = "none"
		shopli.style.borderTop = "1px  solid #e3e4e5"
		shopli.style.borderLeft = "1px  solid #e3e4e5"
		shopli.style.borderRight = "1px  solid #e3e4e5"
		shopli.style.borderBottom = "1px  solid #e3e4e5"
	}
	// 大选项卡
	let xuanxiang = document.querySelectorAll(".xuanxiang")
	let bigtu = document.querySelectorAll(".gg_lix_bb")
	xuanxiang.forEach(function (n, i) {
		n.onmouseenter = function () {
			bigtu[i].style.display = "block"
		}
		n.onmouseleave = function () {
			bigtu[i].style.display = "none"
		}
	})
    // 排行榜1
    // let activv = document.querySelector(".activv")
    let pais = document.querySelectorAll(".paii .bd_top .box .one")
	let pai = document.querySelectorAll(".bd_top .box")
	console.log(pais)
	let pai_xx = document.querySelectorAll(".paii .bd_bsp")
	// console.log(pai_xx)
    pai_xx[0].style.display = "block"
    pais[0].style.Color = "color: #e33333 !important;"
    // pai_xx.forEach(function(n,i){
    //     // n.style.display = none
    // })
    let sec =0
	pai.forEach(function (n, i) {
        
		n.onmouseenter = function () {
			for (let m = 0; m < pai.length; m++) {
                pai_xx[m].style.display = "none"
                pais[m].style.Color = "color: #666 !important;"
				// n.style.color = "#666"
			}

			// n.style.color = "#e33333"
            pai_xx[i].style.display = "block"
            pais[i].style.Color = "color: #e33333 !important;"
            sec = i
            console.log(sec)


		}
    })
    wufeng10(".paii .box_body .bd_sp",".paii .box_body .yn",".paii .box_body .slid .yn_w","act2", "active4", "390px", "-390px", 390, -390)
    function wufeng10(xxs,dians, smyys, act, active, width1, width2, width3, width4) {
        // let xxa = document.querySelectorAll(xxxd)
		let xx = document.querySelectorAll(xxs)
		let dian = document.querySelectorAll(dians)
        let smyy = document.querySelectorAll(smyys)
        console.log(xx)
		let now = 0
        let next = 0
        
		xx[0].style.left = 0
		dian[0].classList.add(active)
		smyy[0].classList.add(act)
		// 鼠标移入
		for (let i = 0; i < dian.length; i++) {
			dian[i].onmouseenter = function () {
                next = i
                let now1 = (sec*2)
                let next1 = (sec*2+1)
                console.log(sec)
                console.log(now1)
                console.log(next1)
				if (i > now && i != 0) {
					xx[now1].style.left = 0
					xx[next1].style.left = width1
					animate(xx[now1], { left: width4 }, function () {
						dian[now].classList.remove(active);
						smyy[now].classList.remove(act)
					})
					dian[now].classList.add(active);
					animate(xx[next1], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				} else if (i < now && i != dian.length) {
					xx[now1].style.left = 0
					xx[next1].style.left = width2
					animate(xx[now1], { left: width3 }, function () {
						dian[now].classList.remove(active);
						smyy[now].classList.remove(act)
					})
					animate(xx[next1], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				}
			}

		}
	}
	// 排行榜2
	let pai2 = document.querySelectorAll(".bd_top .box")
	// console.log(pai)
	let pai_xx2 = document.querySelectorAll(".bd_sp")
	// console.log(pai_xx)
	// 轮播
	wufeng(".mm .box_body .xxx .body", ".mm .box_body .yn", ".mm .box_body .left", ".mm .box_body .right", ".mm", ".mm .box_body .slid .yn_w", "act2", "active4", "350px", "-350px", 350, -350)
	wufeng(".sec .box_body .bbbbx .body", ".sec .box_body .yn", ".sec .box_body .left", ".sec .box_body .right", ".sec", ".sec .box_body .slid .yn_w", "act2", "active4", "350px", "-350px", 350, -350)
	wufeng(".mid .picture img", ".mid .picture .i .i_box", ".mid .picture .left", ".mid .picture .right", ".mid", ".mid .picture .i .i_box .i_b", "act", "active", "590px", "-590px", 590, -590)
	function wufeng(xxs, dians, lefts, rights, boxx, smyys, act, active, width1, width2, width3, width4) {
		let xx = document.querySelectorAll(xxs)
		let dian = document.querySelectorAll(dians)
		let smyy = document.querySelectorAll(smyys)
		let left = document.querySelector(lefts)
		let right = document.querySelector(rights)
		let box = document.querySelector(boxx)
		console.log(xx)
		console.log(right)
		let t = setInterval(move, 2000)
		let now = 0
		let next = 0
		xx[0].style.left = 0
		dian[0].classList.add(active)
		smyy[0].classList.add(act)
		function move() {
			next++
			if (next == xx.length) {
				next = 0
			}
			xx[now].style.left = 0
			xx[next].style.left = width1
			animate(xx[now], { left: width4 }, function () {
				dian[now].classList.remove(active);
				smyy[now].classList.remove(act)
			})
			animate(xx[next], { left: 0 }, function () {
				for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
					dian[i].classList.remove(active);
					smyy[i].classList.remove(act)
				}
				dian[now].classList.add(active);
				smyy[now].classList.add(act)
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
						smyy[now].classList.remove(act)
					})
					dian[now].classList.add(active);
					animate(xx[i], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				} else if (i < now && i != dian.length) {
					xx[now].style.left = 0
					xx[next].style.left = width2
					animate(xx[now], { left: width3 }, function () {
						dian[now].classList.remove(active);
						smyy[now].classList.remove(act)
					})
					animate(xx[i], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				}
			}

		}
		// 鼠标点击左
		left.onclick = function () {
			if (next == 0) {
				next = xx.length
			}
			next--
			xx[now].style.left = 0
			xx[next].style.left = width2
			animate(xx[now], { left: width3 }, function () {
				dian[now].classList.remove(active);
				smyy[now].classList.remove(act)
			})
			animate(xx[next], { left: 0 }, function () {
				for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
					dian[i].classList.remove(active);
					smyy[i].classList.remove(act)
				}
				dian[next].classList.add(active);
				smyy[next].classList.add(act)
			})
			now = next

		}
		// 右点击
		right.onclick = function () {
			next++
			if (next == xx.length) {
				next = 0
			}
			xx[now].style.left = 0
			xx[next].style.left = width1
			animate(xx[now], { left: -width3 }, function () {
				dian[now].classList.remove(active);
				smyy[now].classList.remove(act)
			})
			dian[now].classList.add(active);
			animate(xx[next], { left: 0 }, function () {
				for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
					dian[i].classList.remove(active);
					smyy[i].classList.remove(act)
				}
				dian[next].classList.add(active);
				smyy[next].classList.add(act)
			})
			now = next
		}
		window.onblur = function () {
			clearInterval(t);
		}
		window.onfocus = function () {
			t = setInterval(move, 1000);
		}
	}
	//闪购
	wufeng1(".shangou_mid_box .shangou_mid", ".shangou_mid_box  .left", ".shangou_mid_box  .right3", "800px", "-800px", 800, -800)
	function wufeng1(xxs, lefts, rights, width1, width2, width3, width4) {
		let xx = document.querySelectorAll(xxs)
		// console.dir(xx)
		// let dian = document.querySelectorAll(dians)
		let left = document.querySelector(lefts)
		let right = document.querySelector(rights)
		// let box = document.querySelector(boxx)

		// console.log(right)
		// let t = setInterval(move,2000)
		let now = 0
		let next = 0
		xx[0].style.left = 0
		// dian[0].classList.add(active)
		// 鼠标点击左
		left.onclick = function () {
			if (next == 0) {
				next = xx.length
			}
			next--
			xx[now].style.left = 0
			xx[next].style.left = width2
			animate(xx[now], { left: width3 }, function () {
				// dian[now].classList.remove(active);
			})
			animate(xx[next], { left: 0 }, function () {
				// for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
				// dian[i].classList.remove(active);
				// }
				// dian[next].classList.add(active);
			})
			now = next

		}
		// 右点击
		right.onclick = function () {
			next++
			if (next == xx.length) {
				next = 0
			}
			xx[now].style.left = 0
			xx[next].style.left = width1
			animate(xx[now], { left: -width3 }, function () {
				// dian[now].classList.remove(active);
			})
			// dian[now].classList.add(active);
			animate(xx[next], { left: 0 }, function () {
				// for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
				// dian[i].classList.remove(active);
				// }
				// dian[next].classList.add(active);
			})
			now = next
		}
	}
	// 自动广告
	wufeng3(".shangou .right .picture-box img", ".shangou .right .lun .ddd")
	function wufeng3(xxs, dians, active = "active3", width1 = "180px", width2 = "-180px", width3 = 180, width4 = -180) {
		let xx = document.querySelectorAll(xxs)
		let dian = document.querySelectorAll(dians)
		let t = setInterval(move, 1500)
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
	}
    // 移入
    
	wufeng5(".ling .box_body .nnn .body", ".ling .box_body .yn", ".ling .box_body .slid .yn_w", "act2", "active4", "350px", "-350px", 350, -350)
	function wufeng5(xxs, dians, smyys, act, active, width1, width2, width3, width4) {
		let xx = document.querySelectorAll(xxs)
		let dian = document.querySelectorAll(dians)
		let smyy = document.querySelectorAll(smyys)
		let now = 0
		let next = 0
		xx[0].style.left = 0
		dian[0].classList.add(active)
		smyy[0].classList.add(act)
		// 鼠标移入
		for (let i = 0; i < dian.length; i++) {
			dian[i].onmouseenter = function () {
				next = i

				if (i > now && i != 0) {
					xx[now].style.left = 0
					xx[next].style.left = width1
					animate(xx[now], { left: width4 }, function () {
						dian[now].classList.remove(active);
						smyy[now].classList.remove(act)
					})
					dian[now].classList.add(active);
					animate(xx[i], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				} else if (i < now && i != dian.length) {
					xx[now].style.left = 0
					xx[next].style.left = width2
					animate(xx[now], { left: width3 }, function () {
						dian[now].classList.remove(active);
						smyy[now].classList.remove(act)
					})
					animate(xx[i], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				}
			}

		}
	}
	// 特色
	wufeng6(".shi .tese .tese_bbb .tese_bd",".shi .tese .yndi .yuandian_box",".shi .tese .bu_lef",".shi .tese .bu_rit",".shi .tese .yndi .yuandian_box .yuan","act2", "active4", "1190px", "1190px",1190, -1190)
	function wufeng6(xxs, dians, lefts, rights, smyys, act, active, width1, width2, width3, width4) {
		let xx = document.querySelectorAll(xxs)
		let dian = document.querySelectorAll(dians)
		let smyy = document.querySelectorAll(smyys)
		let left = document.querySelector(lefts)
		let right = document.querySelector(rights)
		let now = 0
		let next = 0
		xx[0].style.left = 0
		dian[0].classList.add(active)
		smyy[0].classList.add(act)

		// 鼠标移入
		for (let i = 0; i < dian.length; i++) {
			dian[i].onmouseenter = function () {
				next = i

				if (i > now && i != 0) {
					xx[now].style.left = 0
					xx[next].style.left = width1
					animate(xx[now], { left: width4 }, function () {
						dian[now].classList.remove(active);
						smyy[now].classList.remove(act)
					})
					dian[now].classList.add(active);
					animate(xx[i], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				} else if (i < now && i != dian.length) {
					xx[now].style.left = 0
					xx[next].style.left = width2
					animate(xx[now], { left: width3 }, function () {
						dian[now].classList.remove(active);
						smyy[now].classList.remove(act)
					})
					animate(xx[i], { left: 0 }, function () {
						for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
							dian[i].classList.remove(active);
							smyy[i].classList.remove(act)
						}
						dian[i].classList.add(active);
						smyy[i].classList.add(act)
					})
					now = i
					next = i
				}
			}

		}
		// 鼠标点击左
		left.onclick = function () {
			if (next == 0) {
				next = xx.length
			}
			next--
			xx[now].style.left = 0
			xx[next].style.left = width2
			animate(xx[now], { left: width3 }, function () {
				dian[now].classList.remove(active);
				smyy[now].classList.remove(act)
			})
			animate(xx[next], { left: 0 }, function () {
				for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
					dian[i].classList.remove(active);
					smyy[i].classList.remove(act)
				}
				dian[next].classList.add(active);
				smyy[next].classList.add(act)
			})
			now = next

		}
		// 右点击
		right.onclick = function () {
			next++
			if (next == xx.length) {
				next = 0
			}
			xx[now].style.left = 0
			xx[next].style.left = width1
			animate(xx[now], { left: -width3 }, function () {
				dian[now].classList.remove(active);
				smyy[now].classList.remove(act)
			})
			dian[now].classList.add(active);
			animate(xx[next], { left: 0 }, function () {
				for (let i = 0; i < dian.length; i++) {//遍历其他的轮播点移除动画效果
					dian[i].classList.remove(active);
					smyy[i].classList.remove(act)
				}
				dian[next].classList.add(active);
				smyy[next].classList.add(act)
			})
			now = next
		}
	}
	// louceng
	tiao(".ding",".dingbusou")

	// fools,btns,lous,dings)
    function tiao(dings,dingbusou){
        // let fool = document.querySelectorAll(fools)//所有楼层
        // let arr = []
        // fool.forEach((v,i)=>{
        //     let num = v.offsetTop //每一个元素到顶部距离
        //     arr.push(num)//添加到数组
        // })
        // let btn = document.querySelectorAll(btns)
        // let lou = document.querySelector(lous)
        // btn.forEach((v,i)=>{
        //     v.onclick = function(){
        //         animate(document.documentElement, {scrollTop: arr[i]});
        //     }
		// })
		// console.log(dingbusou)
		let ding = document.querySelector(dings)
		let dingsou = document.querySelector(dingbusou)
		dingsou.style.top = "-50px"
		window.onscroll = function(){
			let windowtop = document.documentElement.scrollTop //获取现在滚动条到顶部距离
        // console.log(windowtop)
		
        if(windowtop >= window.innerHeight){
            ding.style.opacity = 1
			// lou.style.opacity = 1
			// dingsou.style.top = 0
			animate(dingsou,{top:0},500)
        }else{
            ding.style.opacity = 0
			// lou.style.opacity = 0
			// dingsou.style.top = "-50px"
			animate(dingsou,{top:-50},500)
        }
        ding.onclick = function(){
            animate(document.documentElement, {scrollTop: 0});
        }
		}
        
    }
}