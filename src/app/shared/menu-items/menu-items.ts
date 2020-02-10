import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [{
      state: '/',
      name: 'Dashboard',
      type: 'link',
      icon: 'ti-home'
    },
    {
      state: 'users',
      name: 'Users',
      type: 'link',
      icon: 'ti-user'
    },
    {
      state: 'claps',
      name: 'Claps',
      type: 'link',
      icon: 'ti-thumb-up'
    },
    {
      state: 'thoughts',
      name: 'Thoughts',
      type: 'link',
      icon: 'icofont icofont-light-bulb'
    },
    {
      state: 'posts',
      name: 'Posts',
      type: 'link',
      icon: 'ti-layout-list-post'
    },
    {
      state: 'comments',
      name: 'Comments',
      type: 'link',
      icon: 'ti-comment-alt'
    },
    {
      state: 'groups',
      name: 'Groups',
      type: 'link',
      icon: 'icofont icofont-group'
    },
    {
      state: 'shares',
      name: 'Shares',
      type: 'link',
      icon: 'icofont icofont-share-alt'
    },
    {
      state: 'campaigns',
      name: 'Campaigns',
      type: 'link',
      icon: 'icofont icofont-network'
    },
    {
      state: 'channels',
      name: 'Channels',
      type: 'link',
      icon: 'icofont icofont-ui-video-play'
    },
    {
      state: 'notifications',
      name: 'Notifications',
      type: 'link',
      icon: 'ti-bell'
    },
    {
      state: 'jobs',
      name: 'Jobs',
      type: 'link',
      icon: 'icofont icofont-ui-office'
    },
    {
      state: 'polls',
      name: 'Polls',
      type: 'link',
      icon: 'ti-bar-chart'
    }
    ],
  },
  {
    label: 'CMS',
    main: [
      {
        state: 'cms',
        name: 'CMS',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'privacy',
            name: 'Privacy Policy'
          },
          {
            state: 'newsletter',
            name: 'Newsletter'
          },
          {
            state: 'blog',
            name: 'Blog'
          },
          {
            state: 'terms',
            name: 'Terms & Conditions'
          },
          {
            state: 'questions',
            name: 'Questions & Answers'
          },
          {
            state: 'about',
            name: 'About Us'
          }
        ]
      }]
    },{
      label: 'Navigation',
    main: [{
      state: 'login',
      name: 'Logout',
      type: 'link',
      icon: 'ti-layout-sidebar-left'
    }]
    }
  //     {
  //       state: 'advance',
  //       name: 'Advance Components',
  //       type: 'sub',
  //       icon: 'ti-crown',
  //       children: [
  //         {
  //           state: 'modal',
  //           name: 'Modal'
  //         },
  //         {
  //           state: 'notifications',
  //           name: 'Notifications'
  //         },
  //         {
  //           state: 'notify',
  //           name: 'PNOTIFY',
  //           badge: [
  //             {
  //               type: 'info',
  //               value: 'New'
  //             }
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       state: 'animations',
  //       name: 'Animations',
  //       type: 'link',
  //       icon: 'ti-reload rotate-refresh'
  //     }
  //   ]
  // },
  // {
  //   label: 'Forms',
  //   main: [
  //     {
  //       state: 'forms',
  //       name: 'Form Components',
  //       type: 'sub',
  //       icon: 'ti-layers',
  //       children: [
  //         {
  //           state: 'basic-elements',
  //           name: 'Form Components'
  //         }, {
  //           state: 'add-on',
  //           name: 'Form-Elements-Add-On'
  //         }, {
  //           state: 'advance-elements',
  //           name: 'Form-Elements-Advance'
  //         }, {
  //           state: 'form-validation',
  //           name: 'Form Validation'
  //         }
  //       ]
  //     }, {
  //       state: 'picker',
  //       main_state: 'forms',
  //       name: 'Form Picker',
  //       type: 'link',
  //       icon: 'ti-pencil-alt',
  //       badge: [
  //         {
  //           type: 'warning',
  //           value: 'New'
  //         }
  //       ]
  //     }, {
  //       state: 'select',
  //       main_state: 'forms',
  //       name: 'Form Select',
  //       type: 'link',
  //       icon: 'ti-shortcode'
  //     }, {
  //       state: 'masking',
  //       main_state: 'forms',
  //       name: 'Form Masking',
  //       type: 'link',
  //       icon: 'ti-write'
  //     }
  //   ]
  // },
  // {
  //   label: 'Tables',
  //   main: [
  //     {
  //       state: 'bootstrap-table',
  //       name: 'Bootstrap Table',
  //       type: 'sub',
  //       icon: 'ti-receipt',
  //       children: [
  //         {
  //           state: 'basic-bootstrap',
  //           name: 'Basic Table'
  //         }, {
  //           state: 'sizing',
  //           name: 'Sizing Table'
  //         }, {
  //           state: 'border',
  //           name: 'Border Table'
  //         }, {
  //           state: 'styling',
  //           name: 'Styling Table'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'data-table',
  //       name: 'Data Table',
  //       type: 'sub',
  //       icon: 'ti-widgetized',
  //       children: [
  //         {
  //           state: 'basic-datatable',
  //           name: 'Basic Table'
  //         }, {
  //           state: 'editable',
  //           name: 'Editable'
  //         }, {
  //           state: 'row-details',
  //           name: 'Row Details Table'
  //         }, {
  //           state: 'paging',
  //           name: 'Paging Table'
  //         }, {
  //           state: 'selection',
  //           name: 'Selection Table'
  //         }, {
  //           state: 'other',
  //           name: 'Other Table'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Chart And Map',
  //   main: [
  //     {
  //       state: 'charts',
  //       name: 'Charts',
  //       type: 'sub',
  //       icon: 'ti-bar-chart-alt',
  //       children: [
  //         {
  //           state: 'google',
  //           name: 'Google'
  //         }, {
  //           state: 'echart',
  //           name: 'E-Chart'
  //         }, {
  //           state: 'chart-js',
  //           name: 'ChartJS'
  //         }, {
  //           state: 'list-chart',
  //           name: 'Chartist'
  //         }, {
  //           state: 'knob',
  //           name: 'Knob'
  //         }, {
  //           state: 'morris-js',
  //           name: 'MorrisJS'
  //         }, {
  //           state: 'nvd3',
  //           name: 'NVD3'
  //         }, {
  //           state: 'peity',
  //           name: 'Peity'
  //         }, {
  //           state: 'radial',
  //           name: 'Radial'
  //         }, {
  //           state: 'sparklines',
  //           name: 'Sparklines'
  //         }, {
  //           state: 'c3-js',
  //           name: 'C3 JS'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'map',
  //       name: 'Maps',
  //       type: 'sub',
  //       icon: 'ti-map-alt',
  //       children: [
  //         {
  //           state: 'google',
  //           name: 'Google'
  //         }, {
  //           state: 'vector',
  //           name: 'Vector'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'landing',
  //       external: 'http://html.codedthemes.com/flat-able/dark/landingpage/index.html',
  //       name: 'Landing Page',
  //       type: 'external',
  //       icon: 'ti-mobile',
  //       target: true
  //     }
  //   ]
  // },
  // {
  //   label: 'Pages',
  //   main: [
  //     {
  //       state: 'auth',
  //       short_label: 'A',
  //       name: 'Authentication',
  //       type: 'sub',
  //       icon: 'ti-id-badge',
  //       children: [
  //         {
  //           state: 'login',
  //           type: 'sub',
  //           name: 'Login Pages',
  //           children: [
  //             {
  //               state: 'simple',
  //               name: 'Simple',
  //               target: true
  //             }, {
  //               state: 'header-footer',
  //               name: 'Header & Footer',
  //               target: true
  //             }, {
  //               state: 'social',
  //               name: 'Social Icon',
  //               target: true
  //             }, {
  //               state: 'social-header-footer',
  //               name: 'Social Header & Footer',
  //               target: true
  //             }
  //           ]
  //         }, {
  //           state: 'registration',
  //           type: 'sub',
  //           name: 'Registration Pages',
  //           children: [
  //             {
  //               state: 'simple',
  //               name: 'Simple',
  //               target: true
  //             }, {
  //               state: 'header-footer',
  //               name: 'Header & Footer',
  //               target: true
  //             }, {
  //               state: 'social',
  //               name: 'Social',
  //               target: true
  //             }, {
  //               state: 'social-header-footer',
  //               name: 'Social Header & Footer',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'forgot',
  //           name: 'Forgot Password',
  //           target: true
  //         },
  //         {
  //           state: 'lock-screen',
  //           name: 'Lock Screen',
  //           target: true
  //         },
  //       ]
  //     },
  //     {
  //       state: 'maintenance',
  //       name: 'Maintenance',
  //       type: 'sub',
  //       icon: 'ti-settings',
  //       children: [
  //         {
  //           state: 'error',
  //           name: 'Error'
  //         },
  //         {
  //           state: 'coming-soon',
  //           name: 'Coming Soon'
  //         },
  //         {
  //           state: 'offline-ui',
  //           name: 'Offline UI',
  //           target: true
  //         }
  //       ]
  //     }, {
  //       state: 'user',
  //       name: 'User Profile',
  //       type: 'sub',
  //       icon: 'ti-user',
  //       children: [
  //         {
  //           state: 'profile',
  //           name: 'User Profile'
  //         }, {
  //           state: 'card',
  //           name: 'User Card'
  //         }
  //       ]
  //     }, {
  //       state: 'email',
  //       name: 'E-Email',
  //       type: 'sub',
  //       icon: 'ti-email',
  //       children: [
  //         {
  //           state: 'compose-email',
  //           name: 'Compose Email'
  //         },
  //         {
  //           state: 'email-inbox',
  //           name: 'Inbox'
  //         },
  //         {
  //           state: 'email-read',
  //           name: 'Read Mail'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'App',
  //   main: [
  //     {
  //       state: 'crm-contact',
  //       name: 'CRM Contact',
  //       type: 'link',
  //       icon: 'ti-layout-list-thumb'
  //     }, {
  //       state: 'task',
  //       name: 'Task',
  //       type: 'sub',
  //       icon: 'ti-check-box',
  //       children: [
  //         {
  //           state: 'list',
  //           name: 'Task List'
  //         }, {
  //           state: 'board',
  //           name: 'Task Board'
  //         }, {
  //           state: 'details',
  //           name: 'Task Details'
  //         }, {
  //           state: 'issue',
  //           name: 'Issue List'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Extension',
  //   main: [
  //     {
  //       state: 'editor',
  //       name: 'Editor',
  //       type: 'sub',
  //       icon: 'ti-pencil-alt',
  //       children: [
  //         {
  //           state: 'froala-edit',
  //           name: 'Froala WYSIWYG'
  //         }, {
  //           state: 'quill-edit',
  //           name: 'Quill'
  //         }
  //       ]
  //     }, {
  //       state: 'invoice',
  //       name: 'Invoice',
  //       type: 'sub',
  //       icon: 'ti-layout-media-right',
  //       children: [
  //         {
  //           state: 'basic-invoice',
  //           name: 'Invoice'
  //         }, {
  //           state: 'summary',
  //           name: 'Invoice Summary'
  //         }, {
  //           state: 'list',
  //           name: 'Invoice List'
  //         }
  //       ]
  //     }, {
  //       state: 'file-upload',
  //       name: 'File Upload',
  //       type: 'link',
  //       icon: 'ti-cloud-up'
  //     }, {
  //       state: 'change-log',
  //       name: 'Change Log',
  //       type: 'link',
  //       icon: 'ti-list',
  //       badge: [
  //         {
  //           type: 'warning',
  //           value: '1.0'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Other',
  //   main: [
  //     {
  //       state: '',
  //       name: 'Menu Levels',
  //       type: 'sub',
  //       icon: 'ti-direction-alt',
  //       children: [
  //         {
  //           state: '',
  //           name: 'Menu Level 2.1',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.2',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.2',
  //               target: true
  //             }
  //           ]
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.3',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.4',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.2',
  //               target: true
  //             }
  //           ]
  //         }
  //       ]
  //     }, {
  //       state: 'simple-page',
  //       name: 'Simple Page',
  //       type: 'link',
  //       icon: 'ti-layout-sidebar-left'
  //     }
  //   ]
  // }, {
  //   label: 'Support',
  //   main: [
  //     {
  //       state: 'documentation',
  //       name: 'Documentation',
  //       external: 'http://flatable.phoenixcoded.net/doc/',
  //       type: 'external',
  //       icon: 'ti-file',
  //       target: true
  //     }, {
  //       state: 'submit-issue',
  //       external: 'http://phoenixcoded.net/',
  //       name: 'Submit Issue',
  //       type: 'external',
  //       icon: 'ti-layout-list-post',
  //       target: true
  //     }
  //   ]
  // }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
