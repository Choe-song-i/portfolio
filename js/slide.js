//All data
let baseData = [
  {
    number: "1",
    title: "시작은 프리캠프",
    detail:
      "퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력이 있는 모바일 웹 제작 능력을 향상할 수 있습니다. 퍼블리셔로서 웹을 제작하기 위한 거의 모든 제작 방법과 노하우를 다질수 있습니다.",
    slide_img: "item1_s",
    cont_img: "item1_b",
    price: "Free",
    rating: 23,
  },
  {
    number: "1",
    title: "비전공자를 위한 진짜 입문",
    detail:
      "왕초보도 할수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의!! 개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요.",
    slide_img: "item2_s",
    cont_img: "item2_b",
    price: "3.2 $",
    rating: 425,
  },
  {
    number: "1",
    title: "애플 웹사이트 인터랙션",
    detail:
      "퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력이 있는 모바일 웹 제작 능력을 향상할 수 있습니다. 퍼블리셔로서 웹을 제작하기 위한 거의 모든 제작 방법과 노하우를 다질수 있습니다.",
    slide_img: "item3_s",
    cont_img: "item3_b",
    price: "Free",
    rating: 1,
  },
  {
    number: "1",
    title: "웹 애니메이션을 위한  GSAP",
    detail:
      "왕초보도 할수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의!! 개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요.",
    slide_img: "item4_s",
    cont_img: "item4_b",
    price: "1 $",
    rating: 545,
  },
  {
    number: "1",
    title: "반응형 웹사이트 포트폴리오",
    detail:
      "퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력이 있는 모바일 웹 제작 능력을 향상할 수 있습니다. 퍼블리셔로서 웹을 제작하기 위한 거의 모든 제작 방법과 노하우를 다질수 있습니다.",
    slide_img: "item5_s",
    cont_img: "item5_b",
    price: "2.3 $",
    rating: 13,
  },
  {
    number: "1",
    title: "포트폴리오 실전 퍼블리싱",
    detail:
      "왕초보도 할수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의!! 개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요.",
    slide_img: "item0_s",
    cont_img: "item0_b",
    price: "Free",
    rating: 31,
  },
  {
    number: "1",
    title: "프로그래밍 시작하기",
    detail:
      "퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력이 있는 모바일 웹 제작 능력을 향상할 수 있습니다. 퍼블리셔로서 웹을 제작하기 위한 거의 모든 제작 방법과 노하우를 다질수 있습니다.",
    slide_img: "item1_s",
    cont_img: "item1_b",
    price: "Free",
    rating: 2,
  },
  {
    number: "1",
    title: "최고의 프론트엔드",
    detail:
      "왕초보도 할수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의!! 개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요.",
    slide_img: "item2_s",
    cont_img: "item2_b",
    price: "9 $",
    rating: 4555,
  },
  {
    number: "1",
    title: "자바스크립트 제대로 배우기",
    detail:
      "퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력이 있는 모바일 웹 제작 능력을 향상할 수 있습니다. 퍼블리셔로서 웹을 제작하기 위한 거의 모든 제작 방법과 노하우를 다질수 있습니다.",
    slide_img: "item3_s",
    cont_img: "item3_b",
    price: "Free",
    rating: 5,
  },
  {
    number: "1",
    title: "모바일 웹 퍼블리싱 포트폴리오",
    detail:
      "왕초보도 할수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의!! 개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요.",
    slide_img: "item4_s",
    cont_img: "item4_b",
    price: "1 $",
    rating: 444,
  },
  {
    number: "2",
    title: "실전! 스프링 부트",
    detail:
      "이번 강좌는 스프링 부트를 사용하며 스프링 핵심 기술을 학습합니다. 따라서 스프링 부트기반의 프로젝트를 사용하고 있는 개발자 또는 학생에게 유용한 스프링 강좌입니다.",
    slide_img: "item5_s",
    cont_img: "item5_b",
    price: "Free",
    rating: 31,
  },
  {
    number: "2",
    title: "자바 개발자를 위한 코틀린 입문",
    detail:
      "스프링 입문자가 예제를 만들어가면서 스프링 웹 애플리케이션 개발 전반을 빠르게 학습할 수 있습니다.",
    slide_img: "item0_s",
    cont_img: "item0_b",
    price: "Free",
    rating: 0,
  },
  {
    number: "2",
    title: "스프링 시큐리티",
    detail:
      "이번 강좌는 스프링 부트를 사용하며 스프링 핵심 기술을 학습합니다. 따라서 스프링 부트기반의 프로젝트를 사용하고 있는 개발자 또는 학생에게 유용한 스프링 강좌입니다.",
    slide_img: "item1_s",
    cont_img: "item1_b",
    price: "4 $",
    rating: 41,
  },
  {
    number: "2",
    title: "스프링 부트 개념과 활용",
    detail: "자바 개발자를 위한 코틀린 입문",
    detail:
      "스프링 입문자가 예제를 만들어가면서 스프링 웹 애플리케이션 개발 전반을 빠르게 학습할 수 있습니다.",
    slide_img: "item2_s",
    cont_img: "item2_b",
    price: "Free",
    rating: 13,
  },
  {
    number: "2",
    title: "실전! 스프링 데이터",
    detail:
      "이번 강좌는 스프링 부트를 사용하며 스프링 핵심 기술을 학습합니다. 따라서 스프링 부트기반의 프로젝트를 사용하고 있는 개발자 또는 학생에게 유용한 스프링 강좌입니다.",
    slide_img: "item3_s",
    cont_img: "item3_b",
    price: "Free",
    rating: 235,
  },
  {
    number: "2",
    title: "백엔드 프레임워크 만들기",
    detail: "자바 개발자를 위한 코틀린 입문",
    detail:
      "스프링 입문자가 예제를 만들어가면서 스프링 웹 애플리케이션 개발 전반을 빠르게 학습할 수 있습니다.",
    slide_img: "item4_s",
    cont_img: "item4_b",
    price: "Free",
    rating: 30,
  },
  {
    number: "2",
    title: "스프링 부트 업데이트",
    detail:
      "이번 강좌는 스프링 부트를 사용하며 스프링 핵심 기술을 학습합니다. 따라서 스프링 부트기반의 프로젝트를 사용하고 있는 개발자 또는 학생에게 유용한 스프링 강좌입니다.",
    slide_img: "item5_s",
    cont_img: "item5_b",
    price: "Free",
    rating: 51,
  },
  {
    number: "2",
    title: "더 자바, 코드를 조작하는 다양한 방법",
    detail: "자바 개발자를 위한 코틀린 입문",
    detail:
      "스프링 입문자가 예제를 만들어가면서 스프링 웹 애플리케이션 개발 전반을 빠르게 학습할 수 있습니다.",
    slide_img: "item0_s",
    cont_img: "item0_b",
    price: "6.2 $",
    rating: 3,
  },
  {
    number: "2",
    title: "스프링 웹 MVC",
    detail:
      "이번 강좌는 스프링 부트를 사용하며 스프링 핵심 기술을 학습합니다. 따라서 스프링 부트기반의 프로젝트를 사용하고 있는 개발자 또는 학생에게 유용한 스프링 강좌입니다.",
    slide_img: "item1_s",
    cont_img: "item1_b",
    price: "Free",
    rating: 14,
  },
  {
    number: "2",
    title: "스프링 프레임워크 핵심 기술",
    detail: "자바 개발자를 위한 코틀린 입문",
    detail:
      "스프링 입문자가 예제를 만들어가면서 스프링 웹 애플리케이션 개발 전반을 빠르게 학습할 수 있습니다.",
    slide_img: "item2_s",
    cont_img: "item2_b",
    price: "Free",
    rating: 0,
  },
  {
    number: "3",
    title: "자바 알고리즘 문제풀이 입문",
    detail:
      "이 강좌를 통해 문법을 보다 명확하게 이해하시고, 문제 풀이에 대한 자신감을 얻으시길 바랍니다.",
    slide_img: "item3_s",
    cont_img: "item3_b",
    price: "Free",
    rating: 1425,
  },
  {
    number: "3",
    title: "취업을 위한 알고리즘",
    detail:
      "본강의는 1급 시험을 준비하는 분을 위한 과정으로 시험 주관사인 와이비엠에서 공개한 1급 샘플 문제풀이 과정입니다.",
    slide_img: "item4_s",
    cont_img: "item4_b",
    price: "Free",
    rating: 22,
  },
  {
    number: "3",
    title: "자바스크립트 알고리즘 문제풀이",
    detail:
      "이 강좌를 통해 문법을 보다 명확하게 이해하시고, 문제 풀이에 대한 자신감을 얻으시길 바랍니다.",
    slide_img: "item5_s",
    cont_img: "item5_b",
    price: "Free",
    rating: 55,
  },
  {
    number: "3",
    title: "눈떠보니 코딩 테스트 전날",
    detail:
      "본강의는 1급 시험을 준비하는 분을 위한 과정으로 시험 주관사인 와이비엠에서 공개한 1급 샘플 문제풀이 과정입니다.",
    slide_img: "item0_s",
    cont_img: "item0_b",
    price: "Free",
    rating: 3,
  },
  {
    number: "3",
    title: "파이썬 알고리즘 문제풀이",
    detail:
      "이 강좌를 통해 문법을 보다 명확하게 이해하시고, 문제 풀이에 대한 자신감을 얻으시길 바랍니다.",
    slide_img: "item1_s",
    cont_img: "item1_b",
    price: "Free",
    rating: 2343,
  },
  {
    number: "3",
    title: "떠먹는 알고리즘 코딩 테스트",
    detail:
      "본강의는 1급 시험을 준비하는 분을 위한 과정으로 시험 주관사인 와이비엠에서 공개한 1급 샘플 문제풀이 과정입니다.",
    slide_img: "item2_s",
    cont_img: "item2_b",
    price: "Free",
    rating: 4,
  },
  {
    number: "3",
    title: "코딩 테스트 실전 모의고사",
    detail:
      "이 강좌를 통해 문법을 보다 명확하게 이해하시고, 문제 풀이에 대한 자신감을 얻으시길 바랍니다.",
    slide_img: "item3_s",
    cont_img: "item3_b",
    price: "0.5 $",
    rating: 11,
  },
  {
    number: "3",
    title: "제주 코딩 베이스 캠프 100제",
    detail:
      "본강의는 1급 시험을 준비하는 분을 위한 과정으로 시험 주관사인 와이비엠에서 공개한 1급 샘플 문제풀이 과정입니다.",
    slide_img: "item4_s",
    cont_img: "item4_b",
    price: "2 $",
    rating: 20,
  },
  {
    number: "3",
    title: "성공적인 코딩 인터뷰를 위한 코딩 인터뷰 정복하기",
    detail:
      "이 강좌를 통해 문법을 보다 명확하게 이해하시고, 문제 풀이에 대한 자신감을 얻으시길 바랍니다.",
    slide_img: "item5_s",
    cont_img: "item5_b",
    price: "Free",
    rating: 5,
  },
  {
    number: "3",
    title: "파이썬 1급 예상 문제 풀이",
    detail:
      "본강의는 1급 시험을 준비하는 분을 위한 과정으로 시험 주관사인 와이비엠에서 공개한 1급 샘플 문제풀이 과정입니다.",
    slide_img: "item0_s",
    cont_img: "item0_b",
    price: "Free",
    rating: 2,
  },
];
//main slide
const slide = document.querySelector(".slide");
const slide_wrap = document.querySelector(".slide_wrap");
const maxCont = baseData.length;
let o = 0;
for (o; o <= 5; o++) {
  let slideCunt = baseData[o];
  slide_wrap.innerHTML += `<div class="item${[
    o,
  ]} slide_item"><img src="./images/${
    slideCunt.slide_img
  }.jpg"><span class="ir_pm">${slideCunt.slide_img} 이미지</span></div>`;
}
let slideWidth = slide.clientWidth;
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");
let slideItems = document.querySelectorAll(".slide_item");
const maxSlide = slideItems.length;
let currSlide = 1;
const pagination = document.querySelector(".slide_pagination");
for (let i = 0; i < maxSlide; i++) {
  let slideChip = baseData[i];
  if (i === 0)
    pagination.innerHTML += `<li class="active"><div class="chip">#${slideChip.title}</div></li>`;
  else
    pagination.innerHTML += `<li><div class="
  chip">#${slideChip.title}</div></li>`;
}
const paginationItems = document.querySelectorAll(".slide_pagination > li");
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");
endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;
startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);
slideItems = document.querySelectorAll(".slide_item");
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});
function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
nextBtn.addEventListener("click", () => {
  nextMove();
});
prevBtn.addEventListener("click", () => {
  prevMove();
});
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});
for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}
let startPoint = 0;
let endPoint = 0;
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX;
});
slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);
slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
});
//cont slide
const cont_slide1 = document.querySelector(".cont1");
const cont_slide2 = document.querySelector(".cont2");
const cont_slide3 = document.querySelector(".cont3");
let j = 0;
for (j; j < maxCont; j++) {
  let contCunt = baseData[j];
  let cla = contCunt.number;
  let title = contCunt.title;
  let cont_img = contCunt.cont_img;
  let detail = contCunt.detail;
  let price = contCunt.price;
  var rating = contCunt.rating;
  if (cla == 1) {
    cont_slide1.innerHTML += `<div class="cont_Item">
  <div class="cont_Item_img"><img src="./images/${cont_img}.jpg" class="cont_Item_img_src"><span class="ir_pm">${cont_img} 이미지</span> </div> <div class="cont_Item_Tit">${title} </div> <div  class="cont_Item_Detail">${detail}</div><div class="cont_Item_Footer"><div class="flex">
  <div class="cont_Item_price">${price}</div>
  <div class="cont_Item_rating"><span><div class='like'></div><span class='ir_pm'>좋음</span></span>${rating}</div></div><a href="javascript:void(0);" class="footer_menu"><div class="footer_menu_open"><ul><li>수강바구니에 추가<div class="icon addCart"></div></li><li>좋아요에 추가<div class="icon addLike"></div></li><li>내 폴더에 추가<div class="icon addFolder"></div></li></ul></div><span class='ir_pm'>콘텐츠 메뉴</span></span></a></div></div>`;
  } else if (cla == 2) {
    cont_slide2.innerHTML += `<div class="cont_Item">
    <div class="cont_Item_img"><img src="./images/${cont_img}.jpg" class="cont_Item_img_src"><span class="ir_pm">${cont_img} 이미지</span> </div> <div class="cont_Item_Tit">${title} </div> <div  class="cont_Item_Detail">${detail}</div><div class="cont_Item_Footer"><div class="flex">
    <div class="cont_Item_price">${price}</div>
    <div class="cont_Item_rating"><span><div class='like'></div><span class='ir_pm'>좋음</span></span>${rating}</div></div><a href="javascript:void(0);" class="footer_menu"><div class="footer_menu_open"><ul><li>수강바구니에 추가<div class="icon addCart"></div></li><li>좋아요에 추가<div class="icon addLike"></div></li><li>내 폴더에 추가<div class="icon addFolder"></div></li></ul></div><span class='ir_pm'>콘텐츠 메뉴</span></span></a></div></div>`;
  } else {
    cont_slide3.innerHTML += `<div class="cont_Item">
    <div class="cont_Item_img"><img src="./images/${cont_img}.jpg" class="cont_Item_img_src"><span class="ir_pm">${cont_img} 이미지</span> </div> <div class="cont_Item_Tit">${title} </div> <div  class="cont_Item_Detail">${detail}</div><div class="cont_Item_Footer"><div class="flex">
    <div class="cont_Item_price">${price}</div>
    <div class="cont_Item_rating"><span><div class='like'></div><span class='ir_pm'>좋음</span></span>${rating}</div></div><a href="javascript:void(0);" class="footer_menu"><div class="footer_menu_open"><ul><li>수강바구니에 추가<div class="icon addCart"></div></li><li>좋아요에 추가<div class="icon addLike"></div></li><li>내 폴더에 추가<div class="icon addFolder"></div></li></ul></div><span class='ir_pm'>콘텐츠 메뉴</span></span></a></div></div>`;
  }
}
let curPos1 = 0;
let curPos2 = 0;
let curPos3 = 0;
let position1 = 0;
let position2 = 0;
let position3 = 0;
const cont_prevBtn1 = document.querySelector(".prev1");
const cont_prevBtn2 = document.querySelector(".prev2");
const cont_prevBtn3 = document.querySelector(".prev3");
const cont_nextBtn1 = document.querySelector(".next1");
const cont_nextBtn2 = document.querySelector(".next2");
const cont_nextBtn3 = document.querySelector(".next3");
const cont_list1 = document.querySelector(".cont1");
const cont_list2 = document.querySelector(".cont2");
const cont_list3 = document.querySelector(".cont3");
const cont_Item1 = document.querySelectorAll(".cont1> .cont_Item");
const cont_Item2 = document.querySelectorAll(".cont2> .cont_Item");
const cont_Item3 = document.querySelectorAll(".cont3> .cont_Item");
const ITEM_WIDTH = document.querySelector(".cont_Item").clientWidth;
console.log(ITEM_WIDTH);
function prev1() {
  if (curPos1 > 0) {
    cont_nextBtn1.removeAttribute("disabled");
    cont_nextBtn1.classList.remove("disabled");
    position1 += ITEM_WIDTH;
    cont_list1.style.transform = `translateX(${position1}px)`;
    curPos1--;
  }
  if (curPos1 == 0) {
    cont_prevBtn1.setAttribute("disabled", "true");
    cont_prevBtn1.classList.add("disabled");
  }
}
function prev2() {
  if (curPos2 > 0) {
    cont_nextBtn2.removeAttribute("disabled");
    cont_nextBtn2.classList.remove("disabled");
    position2 += ITEM_WIDTH;
    cont_list2.style.transform = `translateX(${position2}px)`;
    curPos2--;
  }
  if (curPos2 == 0) {
    cont_prevBtn2.setAttribute("disabled", "true");
    cont_prevBtn2.classList.add("disabled");
  }
}
function prev3() {
  if (curPos3 > 0) {
    cont_nextBtn3.removeAttribute("disabled");
    cont_nextBtn3.classList.remove("disabled");
    position3 += ITEM_WIDTH;
    cont_list3.style.transform = `translateX(${position3}px)`;
    curPos3--;
  }
  if (curPos3 == 0) {
    cont_prevBtn3.setAttribute("disabled", "true");
    cont_prevBtn3.classList.add("disabled");
  }
}
function next1() {
  if (curPos1 < cont_Item1.length) {
    cont_prevBtn1.removeAttribute("disabled");
    cont_prevBtn1.classList.remove("disabled");
    position1 -= ITEM_WIDTH;
    cont_list1.style.transform = `translateX(${position1}px)`;
    curPos1++;
  }
  if (curPos1 == cont_Item1.length - 1) {
    cont_nextBtn1.setAttribute("disabled", "true");
    cont_nextBtn1.classList.add("disabled");
  }
}
function next2() {
  if (curPos2 < cont_Item2.length) {
    cont_prevBtn2.removeAttribute("disabled");
    cont_prevBtn2.classList.remove("disabled");
    position2 -= ITEM_WIDTH;
    cont_list2.style.transform = `translateX(${position2}px)`;
    curPos2++;
  }
  if (curPos2 == cont_Item2.length - 1) {
    cont_nextBtn2.setAttribute("disabled", "true");
    cont_nextBtn2.classList.add("disabled");
  }
}
function next3() {
  if (curPos3 < cont_Item3.length) {
    cont_prevBtn3.removeAttribute("disabled");
    cont_prevBtn3.classList.remove("disabled");
    position3 -= ITEM_WIDTH;
    cont_list3.style.transform = `translateX(${position3}px)`;
    curPos3++;
  }
  if (curPos3 == cont_Item3.length - 1) {
    cont_nextBtn3.setAttribute("disabled", "true");
    cont_nextBtn3.classList.add("disabled");
  }
}
cont_prevBtn1.setAttribute("disabled", "true");
cont_prevBtn2.setAttribute("disabled", "true");
cont_prevBtn3.setAttribute("disabled", "true");
cont_prevBtn1.addEventListener("click", prev1);
cont_prevBtn2.addEventListener("click", prev2);
cont_prevBtn3.addEventListener("click", prev3);
cont_nextBtn1.addEventListener("click", next1);
cont_nextBtn2.addEventListener("click", next2);
cont_nextBtn3.addEventListener("click", next3);
