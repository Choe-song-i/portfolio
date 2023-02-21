// top popup
let top_popup = document.querySelector("#wrap .ad");
let close = document.querySelector(".ad .icon");
const closeModal = () => {
  top_popup.classList.add("close");
};
close.addEventListener("click", closeModal);
//tab popup
//login, join 
let login = document.querySelector(".login");
let icon_login = document.querySelector(".icon_login");
let join = document.querySelector(".join");
let bg = document.querySelector(".layer-bg");
let popup = document.querySelector(".popup");
let tabClose = document.querySelector(".popup .icon");
let tabBtn = document.querySelectorAll(".sub-tab .tab-btn li");
let tabBox = document.querySelectorAll(".sub-tab .tab-box .tab");
let tabBoxLogin = document.querySelector(".sub-tab .tab-box .tab:nth-child(1)");
let tabBoxJoin = document.querySelector(".sub-tab .tab-box .tab:nth-child(2)");
let tabBtnLogin = document.querySelector(".sub-tab .tab-btn li:nth-child(1)");
let tabBtnJoin = document.querySelector(".sub-tab .tab-btn li:nth-child(2)");
let id = "";
const tabOpenJoinModal = () => {
  bg.classList.add("on");
  popup.classList.add("on");
  tabBoxJoin.classList.add("on");
  tabBoxLogin.classList.remove("on");
  tabBtnJoin.classList.add("on");
  tabBtnLogin.classList.remove("on");
};
const tabOpenLoginModal = () => {
  bg.classList.add("on");
  popup.classList.add("on");
  tabBoxLogin.classList.add("on");
  tabBoxJoin.classList.remove("on");
  tabBtnLogin.classList.add("on");
  tabBtnJoin.classList.remove("on");
};
const tabCloseModal = () => {
  bg.classList.remove("on");
  popup.classList.remove("on");
};
login.addEventListener("click", tabOpenLoginModal);
icon_login.addEventListener("click", tabOpenLoginModal);
join.addEventListener("click", tabOpenJoinModal);
bg.addEventListener("click", tabCloseModal);
tabClose.addEventListener("click", tabCloseModal);
// tab
tabBtn.forEach((tabBtnItem) => {
  tabBtnItem.addEventListener("click", (e) => {
    id = e.currentTarget.dataset.id;
    const el = document.getElementById(id);
    tabBtn.forEach((item) => {
      item.classList.remove("on");
    });
    tabBtnItem.classList.add("on");
    if (id) {
      tabBox.forEach((tabBoxItem) => {
        tabBoxItem.classList.remove("on");
      });
      el.classList.add("on");
    }
  });
});
