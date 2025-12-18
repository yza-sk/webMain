export const categories = [
  { id: 'all', name: '全部', icon: '🌟' },
  { id: 'my', name: '我的', icon: '❤️' },
  { id: 'game', name: '游戏', icon: '🎮' },
  { id: 'tool', name: '工具', icon: '🔧' },
  { id: 'social', name: '社交', icon: '👥' },
  { id: 'office', name: '办公', icon: '📊' },
  { id: 'study', name: '学习', icon: '📚' },
  { id: 'entertainment', name: '娱乐', icon: '🎬' },
  { id: 'news', name: '资讯', icon: '📰' }
]

export const websites = [
  // 游戏类
  { id: 1, name: 'Steam', url: 'https://store.steampowered.com', category: 'game', icon: '🎮', isMy: false },
  { id: 2, name: '英雄联盟', url: 'https://lol.qq.com', category: 'game', icon: '⚔️', isMy: false },
  { id: 3, name: '我的世界', url: 'https://www.minecraft.net', category: 'game', icon: '🧱', isMy: false },
  
  // 工具类
  { id: 4, name: 'Photopea', url: 'https://www.photopea.com', category: 'tool', icon: '🎨', isMy: false },
  { id: 5, name: 'Canva', url: 'https://www.canva.com', category: 'tool', icon: '🖼️', isMy: false },
  { id: 6, name: '草料二维码', url: 'https://cli.im', category: 'tool', icon: '📱', isMy: false },
  { id: 7, name: '在线工具箱', url: 'https://tool.lu', category: 'tool', icon: '🛠️', isMy: false },
  
  // 社交类
  { id: 8, name: '微信网页版', url: 'https://wx.qq.com', category: 'social', icon: '💬', isMy: false },
  { id: 9, name: '微博', url: 'https://weibo.com', category: 'social', icon: '📱', isMy: false },
  { id: 10, name: '抖音网页版', url: 'https://www.douyin.com', category: 'social', icon: '🎵', isMy: false },
  
  // 办公类
  { id: 11, name: '腾讯文档', url: 'https://docs.qq.com', category: 'office', icon: '📄', isMy: false },
  { id: 12, name: '飞书', url: 'https://www.feishu.cn', category: 'office', icon: '🚀', isMy: false },
  { id: 13, name: '石墨文档', url: 'https://shimo.im', category: 'office', icon: '📝', isMy: false },
  
  // 学习类
  { id: 14, name: '慕课网', url: 'https://www.imooc.com', category: 'study', icon: '💻', isMy: false },
  { id: 15, name: '知网研学', url: 'https://x.cnki.net', category: 'study', icon: '🎓', isMy: false },
  { id: 16, name: '哔哩哔哩', url: 'https://www.bilibili.com', category: 'study', icon: '📺', isMy: false },
  { id: 17, name: '知乎', url: 'https://www.zhihu.com', category: 'study', icon: '❓', isMy: false },
  
  // 娱乐类
  { id: 18, name: '爱奇艺', url: 'https://www.iqiyi.com', category: 'entertainment', icon: '🎭', isMy: false },
  { id: 19, name: '腾讯视频', url: 'https://v.qq.com', category: 'entertainment', icon: '🎪', isMy: false },
  { id: 20, name: '网易云音乐', url: 'https://music.163.com', category: 'entertainment', icon: '🎵', isMy: false },
  
  // 资讯类
  { id: 21, name: '今日头条', url: 'https://www.toutiao.com', category: 'news', icon: '📰', isMy: false },
  { id: 22, name: '腾讯新闻', url: 'https://news.qq.com', category: 'news', icon: '📡', isMy: false },
  { id: 23, name: '新浪新闻', url: 'https://news.sina.com.cn', category: 'news', icon: '🌐', isMy: false },
  
  // 我的自研网址示例
  { id: 24, name: '个人博客', url: 'https://myblog.example.com', category: 'my', icon: '📝', isMy: true },
  { id: 25, name: '项目展示', url: 'https://projects.example.com', category: 'my', icon: '🚀', isMy: true },
  { id: 26, name: '在线工具', url: 'https://tools.example.com', category: 'my', icon: '🔨', isMy: true }
]