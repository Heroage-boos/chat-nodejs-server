const arrRoutes = [
  {
    path: '/',
    component: './controller/web/index'
  },
  {
    path: '/api/bank-card',
    component: './controller/bank-card'
  },
  {
    path: '/api/jwt',
    component: './controller/jwt'
  },
  {
    path: '/api/wx-login',
    component: './controller/we-app/getUserInfo'
  },
  {
    path: '/api/icon-list',
    component: './controller/icon-list'
  },
  {
    path: '/api/idiom',
    component: './controller/idiom'
  },
  {
    path: '/api/star-detail',
    component: './controller/star-detail/star-detail'
  },
  {
    path: '/api/juhe-star-detail',
    component: './controller/star-detail/juhe-star-detail'
  },
  {
    path: '/api/idcard-info',
    component: './controller/idcard-info'
  },
  {
    path: '/api/lunar-calendar',
    component: './controller/lunar-calendar'
  },
  {
    path: '/api/university',
    component: './controller/university/university'
  },
  {
    path: '/api/history-today',
    component: './controller/history-today/history-today'
  },
  {
    path: '/api/history-today-detail',
    component: './controller/history-today/history-today-detail'
  },
  {
    path: '/api/down-img',
    component: './controller/down-img'
  },
  {
    path: '/api/tang300',
    component: './controller/tang300'
  },
  {
    path: '/api/music/new-songs',
    component: './controller/music/new-songs'
  },
  {
    path: '/api/music/rank-list',
    component: './controller/music/rank-list'
  },
  {
    path: '/api/rank-list-info',
    component: './controller/music/rank-list-info'
  },
  {
    path: '/api/music/search',
    component: './controller/music/search'
  },
  {
    path: '/api/music/plist',
    component: './controller/music/plist'
  },
  {
    path: '/api/music/song-lrc',
    component: './controller/music/song-lrc'
  },
  {
    path: '/api/music/plist-songs',
    component: './controller/music/plist-songs'
  },
  {
    path: '/api/music/song-info',
    component: './controller/music/song-info'
  },
  {
    path: '/api/music/singer-info',
    component: './controller/music/singer-info'
  },
  {
    path: '/api/music/singer-list',
    component: './controller/music/singer-list'
  },
  {
    path: '/api/music/singer-classify',
    component: './controller/music/singer-classify'
  },
  {
    path: '/api/job/lagou-positionsearch',
    component: './controller/job/lagou-positionsearch'
  },
  {
    path: '/api/job/position-info',
    component: './controller/job/position-info'
  },
  {
    path: '/api/163/joke',
    component: './controller/163/joke'
  },
  {
    path: '/api/163/video-list',
    component: './controller/163/video-list'
  },
  {
    path: '/api/163/video-detail',
    component: './controller/163/video-detail'
  },
  {
    path: '/api/tt-news-list',
    component: './controller/163/tt-news-list'
  },
  {
    path: '/api/tt-news-detail',
    component: './controller/163/tt-news-detail'
  },

  //csdn热搜
  {
    path: '/api/resou/v1/csdn',
    component: './controller/csdn/v1-csdn'
  },

  //微信热搜 https://www.juhe.cn/box/index/id/737
  {
    path: '/api/wxhottopic',
    component: './controller/wx/wxhottopic'
  },
  //头条热榜
  {
    path: '/api/toutiao-hot',
    component: './controller/tout/hot-board'
  },
  //24k导航网
  {
    path: '/api/24k/hot',
    component: './controller/24k/hot'
  },
  //数据库图标管理
  {
    path: '/api/web-nav',
    component: './controller/web-nav'
  },
  //网易云
  {
    path: '/api/wangyiyun',
    component: './controller/wangyiyun/duanzi'
  },
  {
    path: '/api/chat_nav_login',
    component: './controller/chat_nav/login'
  },
  //同步知乎内容
  {
    path: '/api/dataManange/zhihu_content',
    component: './controller/crawling/zhihu/index.js'
  },
  //获取知乎内容
  {
    path: '/api/dataManage/select_zhihu_content',
    component: './controller/crawling/zhihu/selectZhiHuContent.js'
  },
  {
    path: '*',
    component: './controller/web/404'
  }
];
module.exports = arrRoutes;
