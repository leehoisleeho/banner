
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

//热门商品 两个按钮
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

let container_3 = document.getElementsByClassName("container_3_tab_2")
function add_container_3_tab() {
  for (let i = 0; i < container_3.length; i++) {
    container_3[i].className = "container_3_tab_2"
  }
}

//每次点击，就改变img的src
let container_3_img = document.getElementById("container_3_img")
      for(let i = 0;i<container_3.length;i++){
      container_3[i].addEventListener("click",function(){
      add_container_3_tab()
      container_3[i].className = "container_3_tab_2 active"
      n = i + 1
      container_3_img.src = `./img/${n}.webp`
    })
  }

function add_container_3_tab() {
  for (let i = 0; i < container_3.length; i++) {
    container_3[i].className = "container_3_tab_2"
  }
}


let  container_3_Details_3_tag = document.getElementsByClassName("container_3_Details_3_tag")
function add_container_3_Details_3_tag() {
  for (let i = 0; i < container_3_Details_3_tag.length; i++) {
    container_3_Details_3_tag[i].className = "container_3_Details_3_tag"
  }
}
for(let i = 0;i< container_3_Details_3_tag.length;i++){
  container_3_Details_3_tag[i].addEventListener("click",function(){
    add_container_3_Details_3_tag()
    container_3_Details_3_tag[i].className = "container_3_Details_3_tag active"
    if(i===0){
      console.log("我是黑色")
      black()
      let container_3_img = document.getElementById("container_3_img")
     for(let i = 0;i<container_3.length;i++){
      container_3[i].addEventListener("click",function(){
      add_container_3_tab()
    container_3[i].className = "container_3_tab_2 active"
    n = i + 1
    container_3_img.src = `./img/${n}.webp`
  })
}
    }else{
      console.log("我是白色")
      white()
      let container_3_img = document.getElementById("container_3_img")
      for(let i = 0;i<container_3.length;i++){
      container_3[i].addEventListener("click",function(){
      add_container_3_tab()
      container_3[i].className = "container_3_tab_2 active"
      n = i + 1
      container_3_img.src = `./img/w${n}.webp`
    })
  }
    }
  })
}

let container_3_tab_2_1 = document.getElementsByClassName("container_3_tab_2_1")
function black(){
  for(let i = 0;i<container_3_tab_2_1.length;i++){
    n  = i +1
    container_3_tab_2_1[i].src=`./img/${n}.webp`
    container_3_img.src = `./img/1.webp`
    add_container_3_tab()
    container_3[0].className = "container_3_tab_2 active"
  }
}

function white(){
  for(let i = 0;i<container_3_tab_2_1.length;i++){
    n  = i +1
    container_3_tab_2_1[i].src=`./img/w${n}.webp`
    container_3_img.src = `./img/w1.webp`
    add_container_3_tab()
    container_3[0].className = "container_3_tab_2 active"
  }
}

let container_3_Details_4_1= document.getElementById("container_3_Details_4_1")
let container_3_Details_4_2 = document.getElementById("container_3_Details_4_2")
let container_3_Details_4_3_1 = document.getElementById("container_3_Details_4_3_1")

let z = 0
container_3_Details_4_1.onmousedown = ()=>{
  container_3_Details_4_1.style.transform="scale(0.8)"
  if(z===-225){
    container_3_Details_4_1.classList.add("dis")
  }else{
    container_3_Details_4_2.classList.remove("dis")
    z = z -25
   container_3_Details_4_3_1.style.transform=`translateY(${z}px)`
  }
}

container_3_Details_4_1.onmouseup = function(){
  container_3_Details_4_1.style.transform="scale(1)"
}

container_3_Details_4_2.onmousedown =()=>{  
  container_3_Details_4_2.style.transform="scale(0.8)"
  if(z===0){
    container_3_Details_4_2.classList.add("dis")
  }else{
    container_3_Details_4_1.classList.remove("dis")
    z = z +25
    container_3_Details_4_3_1.style.transform=`translateY(${z}px)`
  }
}

container_3_Details_4_2.onmouseup = function(){
  container_3_Details_4_2.style.transform="scale(1)"
}
