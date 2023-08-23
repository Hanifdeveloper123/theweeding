<div class="page-footer 3sm:!px-[10px] fixed bottom-0 xl:w-full 4xl:w-[calc(100%_-_14.375rem)] w-[calc(100%_-_15.8125rem)] ml-auto transition-all duration-300 sm:flex-col flex sm:gap-1 gap-2 items-center justify-between py-[1.1875rem] sm:py-4  shadow-footer bg-white px-body-space mt-card-gap"> 
    <p class="text-xs font-semibold text-center text-content 3sm:text-2xs">Copyright 2023 © Govo theme by pixelstrap</p>
    <div class="flex items-center gap-2 sm:hidden"> 
      <p class="text-xs font-semibold text-center text-content 3sm:text-2xs">Hand crafted & made with</p><i class="stroke-danger h-[18px] 3sm:h-[14px] 3sm:w-[14px] w-[18px] fill-danger" data-feather="heart"></i>
    </div>
  </div>
</div>
<!-- Customizer-->
<div class="bg-white customizer-sidebar dark:bg-sidebar-dark2 dark:border-border-dark">
  <div class="flex rtl:flex items-center text-title bg-primary justify-between  p-[15px] shadow-md"> <span class="text-base font-semibold text-white">Customizer</span>
    <button class="customizer-close"> <i class="w-4 h-4 stroke-white" data-feather="x"></i></button>
  </div>
  <div class="py-[4px] dark:bg-mode-200">
    <div class="px-[15px] py-7  h-[calc(100vh_-_139px)] overflow-auto ">
      <ul class="flex flex-col gap-7 mode-event">
        <li> 
          <div>
            <h5 class="leading-none text-dark text-sm font-semibold dark:text-white">Template Mode</h5><span class="leading-none text-content text-xs font-medium">Choose template mode dark & light</span>
          </div>
          <div class="mt-2"> 
            <ul class="flex items-center gap-3 flex-wrap"> 
              <li class="relative">
                <input class="absolute invisible opacity-0 peer" checked id="light-checked" type="radio" name="mode"><i class="stroke-primary z-[10] transition-all scale-0 opacity-0 absolute peer-checked:opacity-100 peer-checked:scale-100 top-2 right-2 w-4 h-4" data-feather="check-circle"></i>
                <label class="cursor-pointer block overflow-hidden border shadow-md mode-theme-light border-light dark:border-border-dark rounded-5" for="light-checked"> <img class="w-[90px] object-cover" src="../../assets/images/customizer/light.png" alt="light"></label>
              </li>
              <li class="relative">
                <input class="absolute invisible opacity-0 peer" id="dark-checked" type="radio" name="mode"><i class="stroke-white z-[10] transition-all scale-0 opacity-0 absolute peer-checked:opacity-100 peer-checked:scale-100 top-2 right-2 w-4 h-4" data-feather="check-circle"></i>
                <label class="cursor-pointer block overflow-hidden border shadow-md mode-theme-dark border-light dark:border-border-dark rounded-5" for="dark-checked"> <img class="w-[90px] object-cover" src="../../assets/images/customizer/dark.png" alt="dark"></label>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h5 class="leading-none text-dark text-sm font-semibold dark:text-white">Layout Type</h5><span class="leading-none text-content text-xs">Choose layout Ltr & Rtl</span>
          </div>
          <div class="mt-2">
            <ul class="flex items-center gap-3"> 
              <li class="relative">
                <input class="absolute invisible opacity-0 peer" checked id="ltr-checked" type="radio" name="dir"><i class="stroke-primary z-[10] transition-all scale-0 opacity-0 absolute peer-checked:opacity-100 peer-checked:scale-100 top-2 right-2 w-4 h-4" data-feather="check-circle"></i>
                <label class="cursor-pointer block overflow-hidden border shadow-md layout-ltr border-light dark:border-border-dark rounded-5" for="ltr-checked"> <img class="w-[90px] object-cover" src="../../assets/images/customizer/ltr.png" alt="ltr"></label>
              </li>
              <li class="relative"> 
                <input class="absolute invisible opacity-0 peer" id="rtl-checked" type="radio" name="dir"><i class="stroke-white z-[10] transition-all scale-0 opacity-0 absolute peer-checked:opacity-100 peer-checked:scale-100 top-2 right-2 w-4 h-4" data-feather="check-circle"></i>
                <label class="cursor-pointer block overflow-hidden border shadow-md layout-rtl border-light dark:border-border-dark rounded-5" for="rtl-checked"> <img class="w-[90px] object-cover" src="../../assets/images/customizer/rtl.png" alt="rtl"></label>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="flex items-center justify-between"><span class="dark:text-white text-sm font-semibold text-title">Monochrome Mode </span>
            <label class="cursor-pointer inline-flex relative items-center">
              <input class="sr-only peer monochrome toggle toggle-primary" name="monochrome" type="checkbox" id="monochrome"><span class="w-7 h-4 bg-content rounded-full peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:after:content-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-light after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="flex items-center gap-2 p-[15px] border-t border-light dark:bg-primaryLight dark:border-t dark:border-border-dark "> 
    <button class="btn btn-ghost flex-1 reset-customizer dark:!bg-sidebar-dark dark:text-white">Reset </button>
    <button class="btn btn-primary text-white flex-1">Buy Now</button>
  </div>
</div>
</main>
<!-- Feather Icon Js -->
<script src="{{asset('admin')}}/js/feather.min.js"></script>
<script src="{{asset('admin')}}/js/feather-custom.js"></script>
<!-- Select Js -->
<script src="{{asset('admin')}}/js/custom-select.js"></script>
<!-- Chart Js-->
<script src="{{asset('admin')}}/js/chartjs/chart.min.js"></script>
<script src="{{asset('admin')}}/js/chartjs/chartist.js"></script>
<script src="{{asset('admin')}}/js/chartjs/chartist-plugin-tooltip.js"></script>
<!-- Apex Chart Js -->
<script src="{{asset('admin')}}/js/apexchart/apexcharts.js"></script>
<script src="{{asset('admin')}}/js/apexchart/apex-common.js"></script>
<script src="{{asset('admin')}}/js/apexchart/widget-page.js"></script>
<!-- Sidebar Js -->
<script src="{{asset('admin')}}/js/sidebar.js"></script>
<!-- customizer js-->
<script src="{{asset('admin')}}/js/customizer.js"> </script>
<!-- Custom script   -->
<script src="{{asset('admin')}}/js/script.js"> </script>
</body>

<!-- Mirrored from admin.pixelstrap.com/govo/html/template/monochrome-mode.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 21 Aug 2023 03:07:35 GMT -->
</html>