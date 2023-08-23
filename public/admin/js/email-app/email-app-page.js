/*=====================
  Email App js
==========================*/

const leftSidebarBtn = document.querySelector('.left-sidebar-toggle'); // left sidebar close btn
const leftSidebar = document.querySelector('.left-sidebar-aside'); // left sidebar 
const leftHeaderLogoShowOptions = document.querySelector('.left-sidebar-hide-logo-show'); // filter btn parent
const leftSidebarHeaderToggle = document.getElementsByClassName('left-sidebar-toggle-btn'); // filter btn 

leftSidebarBtn?.addEventListener('click', function (e) {
  leftSidebar.classList.toggle('left-hide-show-sidebar');
  for (var i = 0; i < leftSidebarHeaderToggle.length; i++) {
    leftSidebarHeaderToggle[i].classList.toggle('hide');
  }
  leftHeaderLogoShowOptions?.classList.toggle('hide');
});

for (var i = 0; i < leftSidebarHeaderToggle.length; i++) {
  leftSidebarHeaderToggle[i]?.addEventListener('click', function (e) {
    leftSidebar.classList.toggle('left-hide-show-sidebar');
    leftSidebarHeaderToggle[i].classList.toggle('hide');
    this.closest('.left-sidebar-hide-logo-show')?.classList.toggle('hide');
  });
}

/*=====================
  Email hide/show js
==========================*/

const emailList = document.querySelector(".emailList");
const emailRead = document.querySelector(".emailRead");
let listItems = document.querySelectorAll('.btnEmailRead');
const btnEmail = document.querySelector(".btnEmail");

listItems.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    emailRead.classList.add("show");
    emailList.classList.add("hide");
  });
});

btnEmail?.addEventListener('click', function (e) {
  emailRead.classList.remove("show");
  emailList.classList.remove("hide");
});