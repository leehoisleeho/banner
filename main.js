
let imgArr = [
  "url(./img/1.jpg)",
  "url(./img/2.jpg)",
  "url(./img/3.jpg)",
  "url(./img/4.jpg)",
  "url(./img/5.jpg)",
]

//获取class为“tab1”的元素
let tab_1 = document.getElementsByClassName("tab1")
let index = 0
let goPre = document.getElementById("component_1")
let goNext = document.getElementById("component_2")
let banner = document.getElementById("banner_1")

// 下面圈的样式，点那个就加上样式，并且清除其他圈的样式
function add_tab() {
  for (let i = 0; i < tab_1.length; i++) {
    tab_1[i].className = "tab1"
  }
  tab_1[index].className = "tab1 active"
}

function neXt() {
  index++
  if (index < imgArr.length) {
    banner.style.backgroundImage = imgArr[index]
  } else {
    index = 0
    banner.style.backgroundImage = imgArr[index]
  }

}

function preVious() {
  if (index === 0) {
    index = 4
    banner.style.backgroundImage = imgArr[index]
  } else {
    index--
    banner.style.backgroundImage = imgArr[index]
  }
}

goNext.onmousedown = () => {
  goNext.style.transform = "scale(0.7)"
  neXt()
  add_tab()
}
goNext.onmouseup = () => {
  goNext.style.transform = "scale(1)"
}

goPre.onmousedown = () => {
  goPre.style.transform = "scale(0.7)"
  preVious()
  add_tab()
}
goPre.onmouseup = () => {
  goPre.style.transform = "scale(1)"
}


let aaa = setInterval(() => {
  neXt()
  add_tab()
}, 4000);

function start() {
  aaa = setInterval(() => {
    neXt()
    add_tab()
  }, 4000);
}

function end() {
  clearInterval(aaa)
}


//给没个tab添加监听事件，然后获取每个标签的data-index数据
for (let i = 0; i < tab_1.length; i++) {
  tab_1[i].addEventListener("click", function () {
    let n = this.getAttribute("data-index")
    index = n
    banner.style.backgroundImage = imgArr[index]
    add_tab()
  })
}

//监听banner的鼠标事件
//1. 鼠标放在banner上，计时器停止
//2. 出现左右按钮
banner.addEventListener("mouseover", function () {
  document.getElementById("component").style.opacity = "1"
  end()
})
banner.addEventListener("mouseleave", function () {
  document.getElementById("component").style.opacity = "0"
  start()
})


let hot_tab_1 = document.getElementsByClassName("hot_tab_1")
hot_tab_1[0].onmousedown = () => {
  document.getElementById("hot_2").style.transform = "translateX(0px)"
  for (let i = 0; i < 2; i++) {
    console.log("2")
    hot_tab_1[i].className = "hot_tab_1"
  }
  hot_tab_1[0].className = "hot_tab_1 tab1_no"
}


hot_tab_1[1].onmousedown = () => {
  document.getElementById("hot_2").style.transform = "translateX(-1200px)"
  for (let i = 0; i < 2; i++) {
    console.log("2")
    hot_tab_1[i].className = "hot_tab_1"
  }
  hot_tab_1[1].className = "hot_tab_1 tab1_no"
}


