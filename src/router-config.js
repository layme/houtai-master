import monitorData from './page/monitor/data.vue'

import publishIndex from './page/publish/publishIndex.vue'
import dataMapGB from './page/publish/mistake1.vue'
import mistakeGBJY from './page/publish/mistake2.vue'
import mistakeGBDSH from './page/publish/mistake3.vue'
import mistakeGBC from './page/publish/mistake4.vue'
import mistakeGBJ from './page/publish/mistake5.vue'

import announcementIndex from './page/announcement/announcementIndex.vue'
import dataMapGG from './page/announcement/mistake1.vue'
import mistakeGGJY from './page/announcement/mistake1.vue'
import mistakeGGDSH from './page/announcement/mistake2.vue'
import mistakeGGC from './page/announcement/mistake3.vue'

import toolIndex from './page/tool/toolIndex.vue'
import versionAndType from './page/tool/versionAndType.vue'

import settingIndex from './page/setting/settingIndex.vue'
import theme from './page/setting/theme.vue'

export default [
	{
		path:'/monitorData',component:monitorData
	},
	{
		path: '/publishIndex',component:publishIndex,
		children: [
      { path: '/dataMapGB', component: dataMapGB},
			{ path: '/mistakeGBJY', component: mistakeGBJY},
			{ path: '/mistakeGBDSH', component: mistakeGBDSH},
			{ path: '/mistakeGBC', component: mistakeGBC},
			{ path: '/mistakeGBJ', component: mistakeGBJ},
        ]
	},
	{
		path: '/announcementIndex',component:announcementIndex,
		children: [
      { path: '/dataMapGG', component: dataMapGG},
			{ path: '/mistakeGGJY', component: mistakeGGJY},
			{ path: '/mistakeGGDSH', component: mistakeGGDSH},
			{ path: '/mistakeGGC', component: mistakeGGC}
        ]
	},
  {
    path: '/toolIndex',component:toolIndex,
    children: [
      { path: '/versionAndType', component: versionAndType}
    ]
  },
  {
    path: '/settingIndex',component:settingIndex,
    children: [
      { path: '/theme', component: theme}
    ]
  }
]
