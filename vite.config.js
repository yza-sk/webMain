import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 80,
    open: true,
    host: false  // 仅监听localhost，不暴露网络接口
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,  // 生产环境关闭sourcemap，减小文件体积
    minify: 'terser',  // 使用terser进行代码压缩
    terserOptions: {
      compress: {
        drop_console: true,  // 移除console.log
        drop_debugger: true  // 移除debugger语句
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue']  // 将Vue单独打包，优化缓存
        }
      }
    },
    chunkSizeWarningLimit: 1000  // 调整chunk大小警告阈值
  },
  base: './'  // 相对路径，适配各种部署环境
})