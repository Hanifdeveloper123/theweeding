
/*! -----------------------------------------------------------------------------------

    Template Name: Govo Admin
    Template URI: http://admin.pixelstrap.com/govo/theme
    Description: This is Admin theme
    Author: Pixelstrap
    Author URI: https://themeforest.net/user/pixelstrap

-----------------------------------------------------------------------------------

        01. Hex Code Convert To Rgba Number Js
        02. Search Js
        03. Language Select Js
        04. Header Drop Down Toggle
        05. Plus Minus Item Js 
        06. Cart Item Remove js
        07. Tabs Js
        08. Copy Js
        09. Collapse Js
        10. Countdown Js
        11. Todo List Edit Delete Js 
        12. Password Show hide js
        13. Close alert js 
        14. Wishlist Remove js
        15. List-item Remove js
        16. Following js
        17. Add Friends js
        18. suggestion js
        19. Fill svg js
        20. Accept voice call js
        21. Blog sidebar js

 --------------------------------------------------------------------------------- */

/*========================
  1. Hex Code Convert To Rgba Number Js
 ==============================*/

'use strict';
window.addEventListener('load', () => {
  const bgImg = document.querySelectorAll('.bg-img');
  for (i = 0; i < bgImg.length; i++) {
    let bgImgEl = bgImg[i];
    /// Optional Class Add ///
    if (bgImgEl.classList.contains('bg-top')) {
      bgImgEl.parentNode.classList.add('b-top');
    } else if (bgImgEl.classList.contains('bg-bottom')) {
      bgImgEl.parentNode.classList.add('b-buttom');
    } else if (bgImgEl.classList.contains('bg-center')) {
      bgImgEl.parentNode.classList.add('b-center');
    } else if (bgImgEl.classList.contains('bg-left')) {
      bgImgEl.parentNode.classList.add('b-left');
    } else if (bgImgEl.classList.contains('bg-right')) {
      bgImgEl.parentNode.classList.add('b-right');
    }

    /// Lazyloader Class Add ///
    if (bgImgEl.classList.contains('blur-up')) {
      bgImgEl.parentNode.classList.add('blur-up', 'lazyload');
    }

    /// Size Class Add ///
    if (bgImgEl.classList.contains('bg_size_content')) {
      bgImgEl.parentNode.classList.add('b_size_content');
    }

    /// Ratio Style ///
    bgImgEl.parentNode.classList.add('bg-size');
    const bgSrc = bgImgEl.src;
    bgImgEl.style.display = 'none';
  }
});

/*========================
  2. Search Js
 ==============================*/

const searchShow = document.querySelector('.search-show');
const searchClose = document.querySelector('.search-close');
const searchBoxWrapper = document.querySelector('.search-box-wrapper');
searchShow?.addEventListener('click', function () {
  searchBoxWrapper.classList.remove('lg:scale-0', 'lg:opacity-0', 'lg:invisible');
});
searchClose?.addEventListener('click', function () {
  searchBoxWrapper.classList.add('lg:scale-0', 'lg:opacity-0', 'lg:invisible');
});

/*========================
  3. Language Select Js
 ==============================*/

const languageSelect = document.querySelector('.language-select');
const languageSelectBtn = document.getElementById('language-select');
const languageList = document.querySelector('.language-menu');
languageList?.addEventListener('click', function (e) {
  const language = e.target.closest('.language-option');
  if (!language) return;
  const languageValue = language.dataset.value;
  const flagImage = language.querySelector('img').src;
  languageSelectBtn.querySelector('img').src = flagImage;
  languageSelectBtn.querySelector('span').textContent = languageValue;
});

/*=====================
  4. Header Drop Down Toggle
==========================*/
const headerDropdownMenu = document.querySelectorAll('.dropdown');
document.body.addEventListener('click', function (event) {
  const dropdownEl = event.target.closest('.dropdown');
  const visible = dropdownEl?.closest('.dropdown')?.classList.contains('show');
  const dropdownMenuElement = event.target.closest('.dropdown-menu');
  headerDropdownMenu.forEach((item) => {
    if (!dropdownMenuElement) {
      item.classList.remove('show');
    }
  });
  if (!dropdownEl) return;

  if (!visible && !dropdownEl.classList.contains('on-hover-show')) dropdownEl?.classList.add('show');
});

/*=====================
  5. Plus Minus Item Js 
==========================*/
const plusMinus = document.querySelectorAll('.plus-minus ');
plusMinus.forEach((element) => {
  const addButton = element.querySelector('.add');
  const subButton = element.querySelector('.sub');
  addButton?.addEventListener('click', function () {
    const inputEl = this.parentNode.querySelector("input[type='number']");
    if (inputEl.value < 20) {
      inputEl.value = Number(inputEl.value) + 1;
    }
  });
  subButton?.addEventListener('click', function () {
    const inputEl = this.parentNode.querySelector("input[type='number']");
    if (inputEl.value >= 2) {
      inputEl.value = Number(inputEl.value) - 1;
    }
  });
});

/*=====================
  6. Cart Item Remove js
==========================*/
const cartBagProduct = document.querySelector('.shopping-bag');
const cartRemoveBtn = cartBagProduct?.querySelectorAll('.remove-cart');
cartRemoveBtn?.forEach((el) => {
  el.addEventListener('click', function () {
    this.closest('.cart-item').style.display = 'none';
  });
});

/*=====================
  7. Tabs Js
==========================*/
const tabs = document.querySelectorAll('.tabs');
tabs?.forEach((tab) => {
  tab.addEventListener('click', function (event) {
    const navLink = event.target.closest('.tab-link');
    if (!navLink) return;
    const allNavLinks = navLink.closest('.tab-links')?.querySelectorAll('.tab-link');
    console.log(allNavLinks);
    allNavLinks.forEach((navLink) => {
      navLink.classList.remove('tab-active');
    });
    navLink.classList.add('tab-active');

    const currentTabContent = navLink.dataset.tabfilter;
    const tabContents = navLink.closest('.tabs').parentElement.querySelectorAll('.tab-pan');
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
      setTimeout(() => {
        tabContent.classList.remove('show');
      }, 400);

      tabContent.classList.remove('show');
      if (tabContent.dataset.tabcontent === currentTabContent) {
        tabContent.classList.add('active');
        setTimeout(() => {
          tabContent.classList.add('show');
        }, 400);
      }
    });
  });
});

/*=====================
  8. Copy Js
==========================*/

// Copy Function
function copyFunction() {
  const BtnParentEl = this.closest('.copyParent').querySelector('pre').textContent;

  navigator.clipboard.writeText(BtnParentEl);
  this.innerHTML = ` 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>`;
  setTimeout(() => {
    this.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>`;
  }, 1500);
}

const copyBtn = document.querySelectorAll('.copyBtn');
copyBtn?.forEach((copyBtn) => {
  copyBtn.addEventListener('click', copyFunction);
});

/*=====================
  9. Collapse Js
==========================*/

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}

/*=====================
  10. Countdown Js
==========================*/

window.addEventListener('load', () => {
  var countDownDate = new Date('October 05, 2023 15:37:25').getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    const timerEl = document.querySelectorAll('.timer');
    timerEl.forEach((el) => {
      if (el.querySelector('.days')) {
        el.querySelector('.days').innerHTML = days;
      }
      if (el.querySelector('.hours')) {
        el.querySelector('.hours').innerHTML = hours;
      }
      if (el.querySelector('.minutes')) {
        el.querySelector('.minutes').innerHTML = minutes;
      }
      if (el.querySelector('.seconds')) {
        el.querySelector('.seconds').innerHTML = seconds;
      }
    });

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('demo').innerHTML = 'EXPIRED';
    }
  }, 1000);
});

/*=====================
  11. Todo List Edit Delete Js 
  ==========================*/
const todoList = document.querySelectorAll('.todo-list');
todoList?.forEach((el) => {
  const removeAttrFn = () => {
    el.querySelector('[contenteditable]')?.removeAttribute('contenteditable');
  };

  el.addEventListener('click', function (event) {
    const edit = event.target.closest('.edit');
    const remove = event.target.closest('.delete');
    const editRemove = event.target.closest('[contenteditable]');
    if (!editRemove) {
      removeAttrFn();
    }
    if (!edit && !remove) return;

    if (remove) {
      remove.closest('.todo-item').remove();
    }
    if (edit) {
      edit.closest('.todo-item').querySelector('.edit-div').setAttribute('contenteditable', true);
      edit.closest('.todo-item').querySelector('.edit-div').focus();
    }
  });
});

/*=====================
 13. Close alert js
==========================*/

var alert_del = document.querySelectorAll('.alert-del');
alert_del.forEach((x) =>
  x.addEventListener('click', function () {
    x.parentElement.classList.add('hidden');
  })
);

/*=====================
 14. Wishlist Remove js
==========================*/
const wishlistProduct = document.querySelectorAll('.wishlist-box');
wishlistProduct?.forEach((el) => {
  const deleteButton = el.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
    this.closest('.col-span-3').style.display = 'none';
  });
});

/*=====================
  15. List-item Remove js
==========================*/
const invoiceBox = document.querySelector('.invoice , .cart-main, .user-info');
const invoiceRemove = invoiceBox?.querySelectorAll('.remove-invoice , .remove-cart, .remove-user');
invoiceRemove?.forEach((el) => {
  el.addEventListener('click', function () {
    this.closest('.invoice-item , .cart-item, .user-item').style.display = 'none';
  });
});

/*=====================
 16. Following js
==========================*/

const followFriend = document.querySelectorAll('.follow-friend');
followFriend?.forEach((el) => {
  const followButton = el.querySelector('.follow-btn');
  followButton.addEventListener('click', function () {
    followButton.innerHTML = `<btn style="background-color: #44588f; color:white; padding:4px; border-radius:4px">Following<btn>`;
    followButton.style.padding = "0px";
  });
});

/*=====================
 17. Add Friends js
==========================*/

const addFriend = document.querySelectorAll('.add-friend');
addFriend?.forEach((el) => {
  const addButton = el.querySelector('.add-btn');
  addButton.addEventListener('click', function () {
    addButton.innerHTML = `<btn style="background-color: #FF6150; color:white; padding:4px; border-radius:4px">Added<btn>`;
    addButton.style.padding = "0px";

  });
});

/*=====================
 18. suggestion js
==========================*/

const suggest = document.querySelectorAll('.suggest-friend');
suggest?.forEach((el) => {
  const suggestButton = el.querySelector('.suggest-btn');
  suggestButton.addEventListener('click', function () {
    suggestButton.innerHTML = `<svg class="w-6 h-6 stroke-white bg-primary p-1">
                                <use href="../../assets/svg/sprite.svg#Profile"></use> 
                              </svg>`;
    suggestButton.style.padding = "0px";
  });
});

/*=====================
 19. Fill svg js
==========================*/

const postMedia = document.querySelector('.post-media');
const postLike = document.querySelectorAll('.post-like');
const wishLike = document.querySelectorAll('.wish-like');
const postDisLike = document.querySelectorAll('.post-dislike');
postLike?.forEach((el) => {
  el.addEventListener('click', function () {
    this.closest('.post-media')?.classList.add('post-liked');
    this.closest('.post-media')?.classList.remove('post-disliked');
  });
});
postDisLike?.forEach((el) => {
  el.addEventListener('click', function () {
    this.closest('.post-media')?.classList.add('post-disliked');
    this.closest('.post-media')?.classList.remove('post-liked');
  });
});
wishLike?.forEach((el) => {
  el.addEventListener('click', function () {
    this.closest('.post-media')?.classList.toggle('wish-liked');
  });
});

/*=====================
 20. Accept voice call js
==========================*/

const acceptCallEnd = document.querySelector('.accept-call-end');
const acceptCallStart = document.querySelector('.accept-call-start');
const CallStartBtn = document.getElementsByClassName('call-start-btn');
const CallStartShow = document.querySelector('.call-start-show');
const CallEnd = document.querySelector('.call-end');
const CallStartEnd = document.querySelector('.call-start-end');

CallEnd?.addEventListener('click', function () {
  this.closest('.accept-call-end')?.classList.add('hide');
  this.closest('.accept-call-end')?.classList.remove('show');
  acceptCallStart?.classList.remove('show');
  CallStartShow?.classList.remove('show');
});

CallStartShow?.addEventListener('click', function () {
  acceptCallStart?.classList.remove('show');
  acceptCallEnd.classList.add('show');
});

for (var i = 0; i < CallStartBtn.length; i++) {
  CallStartBtn[i]?.addEventListener('click', function (e) {
    acceptCallEnd.classList.remove('hide');
    acceptCallStart.classList.add('show');
  });
}

CallStartEnd?.addEventListener('click', function () {
  acceptCallStart?.classList.remove('show');
});


/*=====================
 21. Blog sidebar js
==========================*/

const blogSidebarToggle = document.querySelector('.blog-toggle');
const blogSidebar = document.querySelector('.blog-sidebar');
const blogCloseBtn = document.querySelector('.blog-close-sidebar');
blogSidebarToggle?.addEventListener('click', function () {
  blogSidebar.classList.toggle('show');
});
blogCloseBtn?.addEventListener('click', function () {
  blogSidebar.classList.remove('show');
});

