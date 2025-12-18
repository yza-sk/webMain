# 生产环境部署指南

## 🚀 快速部署

### 1. 构建生产版本
```bash
npm run build
```

### 2. 本地预览（可选）
```bash
npm run serve
```

### 3. 部署到服务器
将 `dist/` 目录下的所有文件上传到Web服务器的根目录

## 📋 部署脚本说明

| 脚本命令 | 功能说明 |
|---------|---------|
| `npm run build` | 构建生产版本 |
| `npm run preview` | 本地预览构建结果 |
| `npm run build:analyze` | 构建并分析包大小 |
| `npm run serve` | 本地预览生产版本（端口80） |
| `npm run deploy:local` | 构建并本地预览 |

## 🌐 服务器部署方案

### 方案一：Nginx（推荐）
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /path/to/your/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存优化
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 方案二：Apache
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /path/to/your/dist
    
    <Directory /path/to/your/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # 静态资源缓存
    <FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg)$">
        Header set Cache-Control "max-age=31536000, public, immutable"
    </FilesMatch>
</VirtualHost>
```

### 方案三：Node.js静态服务器
```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### 方案四：静态托管服务
- **GitHub Pages**: 免费，适合开源项目
- **Netlify**: 免费额度充足，支持自动部署
- **Vercel**: 优秀的性能和开发体验
- **阿里云OSS**: 国内访问速度快
- **腾讯云COS**: 稳定可靠，价格合理

## 🔧 构建优化说明

### 当前优化配置
- ✅ 代码压缩（Terser）
- ✅ Console.log移除
- ✅ Vue单独打包优化缓存
- ✅ 相对路径适配
- ✅ Sourcemap关闭（减小体积）

### 构建输出结构
```
dist/
├── index.html          # 主页面
├── assets/            # 静态资源
│   ├── index.css      # 样式文件
│   ├── index.js       # 主JS文件
│   └── vue-xxx.js     # Vue单独打包
└── favicon.ico        # 网站图标
```

## 📊 性能优化建议

### 1. 启用Gzip压缩
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### 2. 设置缓存策略
- HTML文件：不缓存或短时间缓存
- JS/CSS文件：长时间缓存（1年）
- 图片文件：中等时间缓存（1个月）

### 3. CDN加速（可选）
- 将静态资源上传到CDN
- 修改构建配置中的`base`路径

## 🚨 常见问题

### Q1: 构建后页面空白？
检查`base`配置是否正确，确保资源路径正确。

### Q2: 路由刷新404？
配置服务器将所有请求重定向到`index.html`。

### Q3: 样式加载失败？
检查网络请求，确认CSS文件路径正确。

## 🔍 部署验证清单

- [ ] 构建成功，无错误信息
- [ ] 本地预览正常
- [ ] 所有功能正常（搜索、分类、排序）
- [ ] 响应式布局正常
- [ ] 网络请求无404错误
- [ ] 静态资源加载正常
- [ ] 跳转链接正常工作

## 📞 技术支持

如遇到部署问题，请检查：
1. Node.js版本（推荐16+）
2. 构建日志是否有错误
3. 服务器配置是否正确
4. 文件权限是否正确

---

**Happy Deploying!** 🎉