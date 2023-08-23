var kanban1 = new jKanban({
   element: '.kanab-1',
   boards: [{
         id: '_todo',
         title: 'Todo Taks',
         gutter: '.9375rem',
         widthBoard: '15.625rem',
         responsive: '700',
         item: [{
               title: `
               <div class="kanban-box w-full">  
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                     <div class="flex justify-between"> 
                           <div class="badge border border-primary text-primary rounded">Design</div>
                           <svg class="w-6 h-6 stroke-primary">
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                     </div>
                     <div class="flex items-center gap-2"> 
                        <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Design landing page for support team Don't because is make dome bigger </h5>
                     </div>
                     <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                        <span class=text-content ">15 Apr 2020</span>
                           <div class="flex items-center gap-2"> 
                              <span class="text-content leading-loose">25</span>
                              <svg class="w-5 h-5 stroke-content">
                                 <use href="../../assets/svg/sprite.svg#Chat"></use>
                              </svg>
                              <div class="avatar-group -space-x-6"> 
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/4.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                                 </div>
                              </div>
                           </div>
                     </div>
                  </div>
               </div>
               `,
            },
            {
               title: ` 
            <div class="kanban-box w-full">  
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-warning text-warning rounded">Research</div>                      
                        <svg class="w-6 h-6 stroke-warning">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg> 
                  </div> 
                  <div class="flex items-center gap-2"> 
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Final Test For the Design Issues</h5>
                  </div> 
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                      <span class="text-content ">22 Feb 2019</span> 
                        <div class="flex items-center gap-2"> 
                           <span class="text-content leading-loose">120</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/16.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/18.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/19.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                  </div>
               </div>  
            </div> 
                            `,
            },
            {
               title: `  
            <div class="kanban-box w-full">  
              <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                 <div class="flex justify-between"> 
                       <div class="badge border border-danger text-danger rounded">Update</div> 
                        <svg class="w-6 h-6 stroke-danger">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                 </div> 
                 <div class="flex items-center gap-2"> 
                    <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">  Research for solve problem in smooth way & update now </h5>
                 </div> 
                 <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                        <span class="text-content ">27 Jun 2020</span> 
                       <div class="flex items-center gap-2"> 
                           <span class="text-content leading-loose">25</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                          <div class="avatar-group -space-x-6"> 
                             <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                             </div>
                             <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/16.jpg" alt="avatar"></div>
                             </div> 
                             <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                             </div>
                             <div class="avatar">
                                <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/18.jpg" alt="avatar"></div>
                             </div>
                          </div>
                       </div>
                  </div>
               </div>  
            </div> `,
            },
         ],
      },
      {
         id: '_doing',
         title: 'In Progress',
         item: [{
               title: `
           <div class="kanban-box w-full">  
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-info text-info rounded">Reference</div>
                        <svg class="w-6 h-6 stroke-info">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div> 
                  <div class="flex items-center gap-2"> 
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">  How to manage event planing  </h5>
                  </div> 
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">24 Jun 2020</span> 
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">25</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/16.jpg" alt="avatar"></div>
                              </div> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/18.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                  </div>
               </div>   
            </div>
                            `,
            },
            {
               title: `
               <div class="kanban-box w-full">  
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                     <div class="flex justify-between"> 
                           <div class="badge border border-info text-info rounded">Code</div> 
                           <svg class="w-6 h-6 stroke-info">
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg> 
                     </div> 
                     <div class="flex items-center gap-2"> 
                        <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Refresh company website </h5>
                     </div>
                     <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                            <span class="text-content ">24 Jun 2020</span> 
                           <div class="flex items-center gap-2"> 
                              <span class="text-content leading-loose">61</span>
                              <svg class="w-5 h-5 stroke-content">
                                 <use href="../../assets/svg/sprite.svg#Chat"></use>
                              </svg>
                              <div class="avatar-group -space-x-6"> 
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/20.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/21.jpg" alt="avatar"></div>
                                 </div> 
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/23.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/24.jpg" alt="avatar"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                  </div>   
               </div>
                            `,
            },
         ],
      },
      {
         id: '_done',
         title: 'Done',
         item: [{
               title: `
             <div class="kanban-box w-full">  
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-warning text-warning rounded">Release</div>
                        <svg class="w-6 h-6 stroke-warning">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div> 
                  <div class="flex items-center gap-2"> 
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> test paid ad perfomance fix system</h5>
                  </div> 
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">22 Feb 2019</span> 
                        <div class="flex items-center gap-2"> 
                           <span class="text-content leading-loose">120</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/23.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/24.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/29.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/30.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                  </div>
               </div>   
            </div>
                            `,
            },
            {
               title: `
            <div class="kanban-box w-full">  
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                    <div class="flex justify-between"> 
                          <div class="badge border border-primary text-primary rounded">Design</div>
                           <svg class="w-6 h-6 stroke-primary">
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                    </div>
                    <div class="flex items-center gap-2"> 
                       <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Gather key resources </h5>
                    </div>
                    <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <span class="text-content leading-loose">15 Dec 2021</span>
                          <div class="flex items-center gap-2"> 
                              <span class="text-content leading-loose">1k</span> 
                              <svg class="w-5 h-5 stroke-content">
                                 <use href="../../assets/svg/sprite.svg#Chat"></use>
                              </svg>
                             <div class="avatar-group -space-x-6"> 
                                <div class="avatar">
                                   <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/22.jpg" alt="avatar"></div>
                                </div>
                                <div class="avatar">
                                   <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                                </div>
                                <div class="avatar">
                                   <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/4.jpg" alt="avatar"></div>
                                </div>
                                <div class="avatar">
                                   <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                                </div>
                             </div>
                          </div>
                       </div>
                 </div> 
            </div>
                            `,
            },
            {
               title: `
           <div class="kanban-box w-full">  
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-primary text-primary rounded">Creativity</div>  
                        <svg class="w-6 h-6 stroke-primary">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div>
                  <div class="flex items-center gap-2"> 
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Finalize project scope </h5>
                  </div>
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between">
                         <span class="text-content ">16 Jan 2022</span>
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">134</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/12.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/13.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/14.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                  </div>
               </div> 
            </div> 
                            `,
            },
         ],
      },
   ],
});

var kanban2 = new jKanban({
   element: '.kanab-2',
   gutter: '.9375rem',
   click: function (el) {
      alert(el.innerHTML);
   },
   boards: [{
         id: '_todo',
         title: 'To Do (Item only in Working)',
         class: 'bg-info',
         dragTo: ['_working'],
         item: [{
               title: ` 
               <div class="kanban-box w-full">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                     <div class="flex justify-between"> 
                           <div class="badge border border-primary text-primary rounded">Technology</div> 
                           <svg class="w-6 h-6 stroke-primary">
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                     </div>
                     <div class="flex items-center gap-2"> 
                        <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Set user flow</h5>
                     </div>
                     <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                            <span class="text-content ">16 Feb 2023</span>
                           <div class="flex items-center gap-2">
                              <span class="text-content leading-loose">121</span> 
                              <svg class="w-5 h-5 stroke-content">
                                 <use href="../../assets/svg/sprite.svg#Chat"></use>
                              </svg>
                              <div class="avatar-group -space-x-6"> 
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/13.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/18.jpg" alt="avatar"></div>
                                 </div>
                                 <div class="avatar">
                                    <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/19.jpg" alt="avatar"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                  </div> 
               </div> 
               `,
            },
            {
               title: ` 
            <div class="kanban-box w-full">
                <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-warning text-warning rounded">Testing</div>  
                        <svg class="w-6 h-6 stroke-warning">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div>
                  <div class="flex items-center gap-2"> 
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Add web specific content</h5>
                  </div> 
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">22 Jan 2023</span>
                        <div class="flex items-center gap-2"> 
                           <span class="text-content leading-loose">361</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/21.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/22.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/23.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/24.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div> 
          `,
            },
            {
               title: ` 
            <div class="kanban-box w-full">
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-secondary text-secondary rounded">Finish Book</div>  
                        <svg class="w-6 h-6 stroke-secondary">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg> 
                  </div>
                  <div class="flex items-center gap-2"> 
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Plan Join's birthday</h5>
                  </div>
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">14 Jan 2023</span>
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">151</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/25.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/26.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/27.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/28.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div> 
                            `,
            },
         ],
      },
      {
         id: '_working',
         title: 'Working',
         class: 'bg-warning',
         item: [{
               title: `
            <div class="kanban-box w-full">
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-info text-info rounded">Finish Book</div>  
                        <svg class="w-6 h-6 stroke-info">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div>
                  <div class="flex items-center gap-2">
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Sand rent payment for October</h5>
                  </div>
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">23 Jan 2023</span>
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">611</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/30.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/31.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/32.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/33.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div> 
                            `,
            },
            {
               title: `
            <div class="kanban-box w-full">
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-info text-info rounded">Design System</div>  
                        <svg class="w-6 h-6 stroke-info">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div>
                  <div class="flex items-center gap-2">
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Research for solve</h5>
                  </div>
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">16 Jan 2023</span>
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">141</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/31.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/26.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/1.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                              </div> 
                           </div>
                        </div>
                     </div>
               </div>
            </div> 
                            `,
            },
         ],
      },
      {
         id: '_done',
         title: 'Done (Item only in Working)',
         class: 'bg-success',
         dragTo: ['_working'],
         item: [{
               title: `
            <div class="kanban-box w-full">
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-warning text-warning rounded">Gather team</div>  
                        <svg class="w-6 h-6 stroke-warning">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div>
                  <div class="flex items-center gap-2">
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Social media campaign</h5>
                  </div>
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">26 Otc 2023</span>
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">141</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/1.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div> 
                            `,
            },
            {
               title: `
            <div class="kanban-box w-full">
               <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-primary text-primary rounded">HI-FI Design</div>  
                        <svg class="w-6 h-6 stroke-primary">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div>
                  <div class="flex items-center gap-2">
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> The company design</h5>
                  </div>
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">23 Feb 2022</span>
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">141</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/12.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/26.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
                            `,
            },
            {
               title: `
          <div class="kanban-box w-full">
            <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                  <div class="flex justify-between"> 
                        <div class="badge border border-primary text-primary rounded">NFT Design</div>  
                        <svg class="w-6 h-6 stroke-primary">
                              <use href="../../assets/svg/sprite.svg#Plus"></use> 
                        </svg>
                  </div>
                  <div class="flex items-center gap-2">
                     <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Looking for NFT design services?</h5>
                  </div>
                  <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                         <span class="text-content ">26 Jan 2022</span>
                        <div class="flex items-center gap-2">
                           <span class="text-content leading-loose">841</span> 
                           <svg class="w-5 h-5 stroke-content">
                              <use href="../../assets/svg/sprite.svg#Chat"></use>
                           </svg>
                           <div class="avatar-group -space-x-6"> 
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/9.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/10.jpg" alt="avatar"></div>
                              </div>
                              <div class="avatar">
                                 <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/12.jpg" alt="avatar"></div>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
                            `,
            },
         ],
      },
   ],
});

var kanban3 = new jKanban({
   element: '.kanab-3',
   gutter: '.9375rem',
   click: function (el) {
      alert(el.innerHTML);
   },
   boards: [{
         id: '_todo',
         title: 'To Do',
         class: 'info',
         item: [{
               title: `
            <div class="kanban-box">
                  <div class="border-l-4 border-l-success border border-light">
                        <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                              <div class="flex justify-between">  
                                    <div class="badge border border-primary text-primary rounded">Research</div>  
                                    <svg class="w-6 h-6 stroke-primary">
                                          <use href="../../assets/svg/sprite.svg#Plus"></use> 
                                    </svg>
                              </div>
                              <div class="flex items-center gap-2">
                                 <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Step of Research Design</h5>
                              </div>
                              <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                                     <span class="text-content ">23 Feb 2023</span>
                                    <div class="flex items-center gap-2"> 
                                       <span class="text-content leading-loose">261</span> 
                                       <svg class="w-5 h-5 stroke-content">
                                          <use href="../../assets/svg/sprite.svg#Chat"></use>
                                       </svg>
                                    <div class="avatar-group -space-x-6"> 
                                       <div class="avatar">
                                          <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/9.jpg" alt="avatar"></div>
                                       </div>
                                       <div class="avatar">
                                          <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/19.jpg" alt="avatar"></div>
                                       </div>
                                       <div class="avatar">
                                          <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                                       </div>
                                       <div class="avatar">
                                          <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/30.jpg" alt="avatar"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                        </div>
                  </div> 
             </div>
               `,
            },
            {
               title: ` 
          <div class="kanban-box">
            <div class="border-l-4 border-l-warning border border-light">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between"> 
                           <div class="badge border border-warning text-warning rounded">Code</div>  
                           <svg class="w-6 h-6 stroke-warning"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Research for Order</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                             <span class="text-content ">5 Jan 2023</span>
                            <div class="flex items-center gap-2">
                                 <span class="text-content leading-loose">21</span> 
                                 <svg class="w-5 h-5 stroke-content">
                                    <use href="../../assets/svg/sprite.svg#Chat"></use>
                                 </svg>
                            <div class="avatar-group -space-x-6"> 
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/19.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/20.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/21.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/22.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                      </div>
                </div>
             </div> 
         </div>
                            `,
            },
            {
               title: ` 
          <div class="kanban-box">
            <div class="border-l-4 border-l-danger border border-light ">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between"> 
                           <div class="badge border border-danger text-danger rounded">Redesign</div>  
                           <svg class="w-6 h-6 stroke-danger"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Redesign for home page</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                             <span class="text-content ">25 Feb 2022</span>
                            <div class="flex items-center gap-2"> 
                                 <span class="text-content leading-loose">251</span> 
                                 <svg class="w-5 h-5 stroke-content">
                                    <use href="../../assets/svg/sprite.svg#Chat"></use>
                                 </svg> 
                            <div class="avatar-group -space-x-6"> 
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/26.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/27.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/28.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
             </div>
         </div>
                            `,
            },
         ],
      },
      {
         id: '_working',
         title: 'Working',
         class: 'warning',
         item: [{
               title: `
         <div class="kanban-box">
             <div class="border-l-4 border-l-info border border-light">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between"> 
                           <div class="badge border border-info text-info rounded">Service</div>  
                           <svg class="w-6 h-6 stroke-info"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg> 
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Form Builder Making</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                             <span class="text-content ">16 Feb 2022</span>
                            <div class="flex items-center gap-2"> 
                                 <span class="text-content leading-loose">61</span> 
                                 <svg class="w-5 h-5 stroke-content">
                                    <use href="../../assets/svg/sprite.svg#Chat"></use>
                                 </svg> 
                            <div class="avatar-group -space-x-6"> 
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/20.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/21.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/23.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/24.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                      </div> 
                   </div>
             </div> 
         </div>
                            `,
            },
            {
               title: `
         <div class="kanban-box">
            <div class="border-l-4 border-l-info border border-light ">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between">  
                           <div class="badge border border-info text-info rounded">Marketing</div>  
                           <svg class="w-6 h-6 stroke-info"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Here, let's explore the purposes of marketing</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                             <span class="text-content ">16 Feb 2022</span>
                            <div class="flex items-center gap-2"> 
                                 <span class="text-content leading-loose">151</span> 
                                 <svg class="w-5 h-5 stroke-content">
                                    <use href="../../assets/svg/sprite.svg#Chat"></use>
                                 </svg> 
                            <div class="avatar-group -space-x-6"> 
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/26.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/27.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/28.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/9.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                   </div>
                </div>
            </div> 
         </div>                     

                            `,
            },
         ],
      },
      {
         id: '_done',
         title: 'Done',
         class: 'success',
         item: [{
               title: `
         <div class="kanban-box">
            <div class="border-l-4 border-l-warning border border-light ">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between">  
                           <div class="badge border border-warning text-warning rounded">Prototyping</div>  
                           <svg class="w-6 h-6 stroke-warning"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">The 4 types of project prototyping are prototypes</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                             <span class="text-content ">5 Feb 2022</span>
                            <div class="flex items-center gap-2"> 
                              <span class="text-content leading-loose">261</span> 
                              <svg class="w-5 h-5 stroke-content">
                                 <use href="../../assets/svg/sprite.svg#Chat"></use>
                              </svg>
                            <div class="avatar-group -space-x-6"> 
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/13.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/18.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                      </div> 
                </div>
            </div>
         </div>

                            `,
            },
            {
               title: `
         <div class="kanban-box">
            <div class="border-l-4 border-l-warning border border-light">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between">  
                           <div class="badge border border-warning text-warning rounded">Growth hacking</div>  
                           <svg class="w-6 h-6 stroke-warning"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg> 
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Experiments and processes</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between">
                             <span class="text-content ">15 Jan 2022</span>
                            <div class="flex items-center gap-2"> 
                              <span class="text-content leading-loose">191</span> 
                              <svg class="w-5 h-5 stroke-content">
                                 <use href="../../assets/svg/sprite.svg#Chat"></use>
                              </svg> 
                            <div class="avatar-group -space-x-6"> 
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/7.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/18.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                      </div> 
                </div>
             </div>
          </div>
                            `,
            },
            {
               title: `
          <div class="kanban-box">
            <div class="border-l-4 border-l-success border border-light">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between">  
                           <div class="badge border border-success text-success rounded">Video Campaign</div>  
                           <svg class="w-6 h-6 stroke-success"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Application Concept</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                             <span class="text-content ">5 Feb 2023</span>
                            <div class="flex items-center gap-2"> 
                                  <span class="text-content leading-loose">161</span> 
                                  <svg class="w-5 h-5 stroke-content">
                                     <use href="../../assets/svg/sprite.svg#Chat"></use>
                                  </svg> 
                            <div class="avatar-group -space-x-6"> 
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/9.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/10.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                      </div> 
                </div>
             </div> 
         </div>
                            `,
            },
         ],
      },
   ],
});

var toDoButton = document.getElementById('addToDo');
toDoButton.addEventListener('click', function () {
   kanban3.addElement('_todo', {
      title: `  
      <div class="kanban-box w-full">  
      <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
         <div class="flex justify-between"> 
               <div class="badge border border-primary text-primary rounded">Design</div>
               <svg class="w-6 h-6 stroke-primary">
                     <use href="../../assets/svg/sprite.svg#Plus"></use> 
               </svg>
         </div>
         <div class="flex items-center gap-2"> 
            <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium"> Design landing page for support team Don't because is make dome bigger </h5>
         </div>
         <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
            <span class=text-content ">15 Apr 2020</span>
               <div class="flex items-center gap-2"> 
                  <span class="text-content leading-loose">25</span>
                  <svg class="w-5 h-5 stroke-content">
                     <use href="../../assets/svg/sprite.svg#Chat"></use>
                  </svg>
                  <div class="avatar-group -space-x-6"> 
                     <div class="avatar">
                        <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                     </div>
                     <div class="avatar">
                        <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                     </div>
                     <div class="avatar">
                        <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/4.jpg" alt="avatar"></div>
                     </div>
                     <div class="avatar">
                        <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                     </div> 
                  </div>
               </div>
         </div>
      </div>
   </div>
                            `,
   });
});

var addBoardDefault = document.getElementById('addDefault');
addBoardDefault.addEventListener('click', function () {
   kanban3.addBoards([{
      id: '_default',
      title: 'Kanban Default',
      item: [{
            title: ` 
            <div class="kanban-box"> 
               <div class="border-l-4 border-l-warning border border-light ">
                   <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                         <div class="flex justify-between">  
                              <div class="badge border border-warning text-warning rounded">Prototyping</div>  
                              <svg class="w-6 h-6 stroke-warning"> 
                                    <use href="../../assets/svg/sprite.svg#Plus"></use> 
                              </svg>
                         </div>
                         <div class="flex items-center gap-2">
                            <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">The 4 types of project prototyping are prototypes</h5>
                         </div>
                         <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                                <span class="text-content ">5 Feb 2022</span>
                               <div class="flex items-center gap-2"> 
                                 <span class="text-content leading-loose">261</span> 
                                 <svg class="w-5 h-5 stroke-content">
                                    <use href="../../assets/svg/sprite.svg#Chat"></use>
                                 </svg>
                               <div class="avatar-group -space-x-6"> 
                                  <div class="avatar">
                                     <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/13.jpg" alt="avatar"></div>
                                  </div>
                                  <div class="avatar">
                                     <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                                  </div>
                                  <div class="avatar">
                                     <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/18.jpg" alt="avatar"></div>
                                  </div>
                                  <div class="avatar">
                                     <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                                  </div>
                               </div>
                            </div>
                         </div> 
                   </div>
               </div>
         </div>
 `,
         },

         {
            title: `

            <div class="kanban-box">
            <div class="border-l-4 border-l-success border border-light">
                <div class="kanab-item-1 p-5 2xl:p-4  bg-white dark:bg-sidebar-dark rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                      <div class="flex justify-between">  
                           <div class="badge border border-success text-success rounded">Video Campaign</div>  
                           <svg class="w-6 h-6 stroke-success"> 
                                 <use href="../../assets/svg/sprite.svg#Plus"></use> 
                           </svg>
                      </div>
                      <div class="flex items-center gap-2">
                         <h5 class="w-[calc(100%_-_.75rem)] 2xl:text-xs text-sm text-dark font-medium">Application Concept</h5>
                      </div>
                      <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                             <span class="text-content ">5 Feb 2023</span>
                            <div class="flex items-center gap-2">
                                  <span class="text-content leading-loose">161</span> 
                                  <svg class="w-5 h-5 stroke-content"> 
                                     <use href="../../assets/svg/sprite.svg#Chat"></use>
                                  </svg> 
                            <div class="avatar-group -space-x-6">
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/9.jpg" alt="avatar"></div>
                               </div>
                               <div class="avatar">
                                  <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/10.jpg" alt="avatar"></div>
                               </div>
                            </div>
                         </div>
                      </div> 
                </div>
             </div> 
         </div>`,
         },
      ],
   }, ]);
});

feather.replace();
var removeBoard = document.getElementById('removeBoard');
removeBoard.addEventListener('click', function () {
   kanban3.removeBoard('_done');
});