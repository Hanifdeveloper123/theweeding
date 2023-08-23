
/*=====================
  Chat App Js 
  ==========================*/

const rightSidebarHeaderToggle = document.querySelector('.right-sidebar-toggle-btn');
const rightSidebarBtn = document.querySelector('.right-sidebar-toggle');
const rightSidebar = document.querySelector('.right-sidebar-aside');
const rightSidebarHideLogoShow = document.querySelector('.chat-main')
const rightHeaderLogoShowOptions = document.querySelector('.right-sidebar-hide-logo-show');
rightSidebarBtn?.addEventListener('click', function (e) {
  rightSidebar.classList.toggle('right-hide-show-sidebar');
  rightSidebarHeaderToggle.classList.toggle('hide');
  rightHeaderLogoShowOptions?.classList.toggle('hide');
  rightSidebarHideLogoShow.classList.toggle('col-span-6');
  rightSidebarHideLogoShow.classList.toggle('col-span-9');

});
rightSidebarHeaderToggle?.addEventListener('click', function (e) {
  rightSidebar.classList.toggle('right-hide-show-sidebar');
  rightSidebarHeaderToggle.classList.toggle('hide');
  this.closest('.right-sidebar-hide-logo-show')?.classList.toggle('hide');
  rightSidebarHideLogoShow.classList.toggle('col-span-6');
  rightSidebarHideLogoShow.classList.toggle('col-span-9');
});

const leftSidebarHeaderToggle = document.querySelector('.left-sidebar-toggle-btn');
const leftSidebarBtn = document.querySelector('.left-sidebar-toggle');
const leftSidebar = document.querySelector('.left-sidebar-aside');
const leftSidebarHideLogoShow = document.querySelector('.chat-main');
const leftHeaderLogoShowOptions = document.querySelector('.left-sidebar-hide-logo-show');
leftSidebarBtn?.addEventListener('click', function (e) {
  leftSidebar.classList.toggle('left-hide-show-sidebar');
  leftSidebarHeaderToggle.classList.toggle('hide');
  leftHeaderLogoShowOptions?.classList.toggle('hide');
});
leftSidebarHeaderToggle?.addEventListener('click', function (e) {
  leftSidebar.classList.toggle('left-hide-show-sidebar');
  leftSidebarHeaderToggle.classList.toggle('hide');
  this.closest('.left-sidebar-hide-logo-show')?.classList.toggle('hide');
});

/*=====================
  Time Countdown Js 
  ==========================*/

var minutesLabel = document.getElementById("callminutes");
var secondsLabel = document.getElementById("callseconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}



