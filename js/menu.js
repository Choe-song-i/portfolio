//1단 메뉴 checkbox 중복금지
function NoMultiChk(chk) {
  var obj = document.getElementsByName("item-link");
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] != chk) {
      obj[i].checked = false;
    }
  }
}
//2단 메뉴 checkbox 중복금지
function SubNoMultiChk(chk2) {
  var obj = document.getElementsByName("sub-item-link");
  for (let j = 0; j < obj.length; j++) {
    if (obj[j] != chk2) {
      obj[j].checked = false;
    }
  }
}
