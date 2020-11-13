
let imgArr = [
  "url(./img/1.jpg)",
  "url(./img/2.jpg)",
  "url(./img/3.jpg)",
  "url(./img/4.jpg)",
  "url(./img/5.jpg)",
]
let banner_1 = document.getElementById("banner_1")
let i = 1
let tab1 = document.getElementById("tab_1")
let tab2 = document.getElementById("tab_2")
let tab3 = document.getElementById("tab_3")
let tab4 = document.getElementById("tab_4")
let tab5 = document.getElementById("tab_5")
let component_1 = document.getElementById("component_1")
let component_2 = document.getElementById("component_2")



let bannerImg = function () {
  if (i < imgArr.length) {
    setTimeout(function () {
      switch (i) {
        case 0:
          banner_1.style.backgroundImage = imgArr[i]
          tab1.classList.add("active")
          tab2.classList.remove("active")
          tab3.classList.remove("active")
          tab4.classList.remove("active")
          tab5.classList.remove("active")
          break;
        case 1:
          banner_1.style.backgroundImage = imgArr[i]
          tab2.classList.add("active")
          tab1.classList.remove("active")
          tab3.classList.remove("active")
          tab4.classList.remove("active")
          tab5.classList.remove("active")
          break;
        case 2:
          banner_1.style.backgroundImage = imgArr[i]
          tab3.classList.add("active")
          tab2.classList.remove("active")
          tab1.classList.remove("active")
          tab4.classList.remove("active")
          tab5.classList.remove("active")
          break;
        case 3:
          banner_1.style.backgroundImage = imgArr[i]
          tab4.classList.add("active")
          tab2.classList.remove("active")
          tab3.classList.remove("active")
          tab1.classList.remove("active")
          tab5.classList.remove("active")
          break;
        case 4:
          banner_1.style.backgroundImage = imgArr[i]
          tab5.classList.add("active")
          tab2.classList.remove("active")
          tab3.classList.remove("active")
          tab4.classList.remove("active")
          tab1.classList.remove("active")
          break;
      }
      i = i + 1
      bannerImg()
    }, 4000)
  } else {
    i = 0
    bannerImg()
  }
}
bannerImg()

tab1.onclick = () => {
  banner_1.style.backgroundImage = imgArr[0]
  tab1.classList.add("active")
  tab2.classList.remove("active")
  tab3.classList.remove("active")
  tab4.classList.remove("active")
  tab5.classList.remove("active")
  i = 0
}

tab2.onclick = () => {
  banner_1.style.backgroundImage = imgArr[1]
  tab2.classList.add("active")
  tab1.classList.remove("active")
  tab3.classList.remove("active")
  tab4.classList.remove("active")
  tab5.classList.remove("active")
  i = 1
}

tab3.onclick = () => {
  banner_1.style.backgroundImage = imgArr[2]
  tab3.classList.add("active")
  tab2.classList.remove("active")
  tab1.classList.remove("active")
  tab4.classList.remove("active")
  tab5.classList.remove("active")
  i = 2
}

tab4.onclick = () => {
  banner_1.style.backgroundImage = imgArr[3]
  tab4.classList.add("active")
  tab2.classList.remove("active")
  tab3.classList.remove("active")
  tab1.classList.remove("active")
  tab5.classList.remove("active")
  i = 3
}

tab5.onclick = () => {
  banner_1.style.backgroundImage = imgArr[4]
  tab5.classList.add("active")
  tab2.classList.remove("active")
  tab3.classList.remove("active")
  tab4.classList.remove("active")
  tab1.classList.remove("active")
  i = 4
}

// let m
  // let n
  // let a = true
  // component_1.onclick = () => {
  //   switch (i) {
  //     case 0:
  //       m = 4
  //       banner_1.style.backgroundImage = imgArr[m]
  //       i = m
  //       break;
  //     case 1:
  //       m = i - 1
  //       banner_1.style.backgroundImage = imgArr[m]
  //       i = m
  //       break;
  //     case 2:
  //       m = i - 1
  //       banner_1.style.backgroundImage = imgArr[m]
  //       i = m
  //       break;
  //     case 3:
  //       m = i - 1
  //       banner_1.style.backgroundImage = imgArr[m]
  //       i = m
  //       break;
  //     case 4:
  //       m = i - 1
  //       banner_1.style.backgroundImage = imgArr[m]
  //       i = m
  //       break;
  //   }
  //   return a = false
  // }
  // component_2.onclick = () => {
  //   switch (i) {
  //     case 0:
  //       n = i + 1
  //       banner_1.style.backgroundImage = imgArr[n]
  //       i = n
  //       break;
  //     case 1:
  //       n = i + 1
  //       banner_1.style.backgroundImage = imgArr[n]
  //       i = n
  //       break;
  //     case 2:
  //       n = i + 1
  //       banner_1.style.backgroundImage = imgArr[n]
  //       i = n
  //       break;
  //     case 3:
  //       n = i + 1
  //       banner_1.style.backgroundImage = imgArr[n]
  //       i = n
  //       break;
  //     case 4:
  //       n = 0
  //       banner_1.style.backgroundImage = imgArr[n]
  //       i = n
  //       break;
  //   }
  //   return a = false
  // }



