/*=====================
    Todo App js
   ==========================*/

// Left sidebar Js
const leftSidebarHeaderToggle = document.querySelector('.left-sidebar-toggle-btn');
const leftSidebarBtn = document.querySelector('.left-sidebar-toggle');
const leftSidebar = document.querySelector('.left-sidebar-aside');
leftSidebarBtn?.addEventListener('click', function (e) {
  leftSidebar.classList.toggle('left-hide-show-sidebar');
  leftSidebarHeaderToggle.classList.toggle('hide');
});
leftSidebarHeaderToggle?.addEventListener('click', function (e) {
  leftSidebar.classList.toggle('left-hide-show-sidebar');
  leftSidebarHeaderToggle.classList.toggle('hide');
});

// Todo Form modal Js 
const todoForm = document.querySelector('.todo-form');
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get('title');
  const status = formData.get('status');
  const priority = formData.get('priority');
  if (title !== '' && status !== '' && priority !== '') {
    const todoApp = document.querySelector('.todo-app');

    const html = `
           <li class="todo-item flex items-center gap-2 justify-between pt-[13px] mt-[13px] border-t border-light first:mt-0 first:pt-0 first:border-none"> 
                  <div class="flex items-center justify-center">                      
                    <div class="check-custom flex items-center justify-center relative pl-[calc(10px_+_(15_-_10)_*_((100vw_-_320px)_/_(1920_-_320)))] pr-[calc(7px_+_(12_-_7)_*_((100vw_-_320px)_/_(1920_-_320)))] py-[3px]"><span class="absolute top-0 bottom-0 ltr:left-0 rtl:right-0 w-[3px] line h-full rounded-5"></span>
                      <div class="relative w-5 h-5">
                        <input class="w-full h-full relative z-[2] opacity-0" type="checkbox"><span class="check absolute inset-0 flex items-center justify-center rounded-5 w-full h-full z-[1] p-[3px] bg-gray-200 dark:bg-mode-100"><i class="check-icon w-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(22_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] transition-all opacity-0" data-feather="check"></i></span>
                      </div>
                    </div>
                    <div class="max-w-[calc(48px_+_(650_-_48)_*_((100vw_-_320px)_/_(1920_-_320)))] min-lg:min-w-[calc(66px_+_(650_-_66)_*_((100vw_-_320px)_/_(1920_-_320)))] min-w-[calc(120px_+_(650_-_120)_*_((100vw_-_320px)_/_(1920_-_320)))] edit-div">
                      <h5 class="font-medium text-dark truncate text-sm 2xl:text-xs focus:border focus:border-light dark:focus:border-mode-200 focus:outline-none focus:px-2 focus:rounded-5">${title}</h5>
                    </div>
                  </div>
                  <div> 
                    <ul class="flex gap-3 todo-sublist">
                      <li class="cursor-pointer">
                        <div class="badge badge-xs px-3 font-bold rounded-full bg-primary-extralight !text-3xs text-primary">${priority}</div>
                      </li> 
                      <li class="cursor-pointer"> 
                        <div class="badge badge-xs px-3 font-bold rounded-full bg-success-light dark:bg-sidebar-dark2 !text-3xs text-success">${status}</div>
                      </li>
                      <li class="cursor-pointer"> <i class="transition-all stroke-twitter opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] edit" data-feather="edit"></i></li>
                      <li class="cursor-pointer"><i class="transition-all stroke-danger opacity-50 hover:opacity-100 w-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] h-[calc(16px_+_(18_-_16)_*_((100vw_-_320px)_/_(1920_-_320)))] delete" data-feather="trash"></i></li>
                    </ul>
                  </div>
           </li>
    `;
    todoApp.insertAdjacentHTML('afterbegin', html);
    todoForm.reset();
    feather.replace();
  }
});

