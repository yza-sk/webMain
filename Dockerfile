# 使用本地构建的生产版本
FROM nginx:alpine

# 安装curl（用于健康检查）
RUN apk add --no-cache curl

# 复制自定义Nginx配置
COPY nginx.conf /etc/nginx/nginx.conf

# 复制构建产物到Nginx默认目录
COPY dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]