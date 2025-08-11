# Lumi Gallery 部署指南

## 🚀 部署概述

本文件詳細說明如何將 Lumi Gallery 專案部署到各種環境，包括開發、測試和生產環境。

## 📋 部署前準備

### 環境檢查清單

- [ ] Node.js 版本符合要求 (18.0.0+)
- [ ] 所有依賴已正確安裝
- [ ] 環境變數已設定
- [ ] 建構測試通過
- [ ] 程式碼品質檢查通過

### 建構測試

```bash
# 安裝依賴
npm install

# 執行測試
npm test

# 程式碼品質檢查
npm run lint

# 建構測試
npm run build

# 預覽建構結果
npm run preview
```

## 🏗️ 建構配置

### Vite 配置

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // 生產環境關閉 sourcemap
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
})
```

### 環境變數

```bash
# .env.production
VITE_API_URL=https://api.lumigallery.com
VITE_APP_TITLE=Lumi Gallery
VITE_APP_VERSION=1.0.0

# .env.development
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Lumi Gallery (Dev)
VITE_APP_VERSION=1.0.0
```

## 🌐 靜態網站部署

### Netlify 部署

#### 1. 自動部署

1. 連接 GitHub 儲存庫
2. 設定建構指令: `npm run build`
3. 設定發布目錄: `dist`
4. 設定環境變數

#### 2. 手動部署

```bash
# 建構專案
npm run build

# 部署到 Netlify
netlify deploy --prod --dir=dist
```

#### 3. Netlify 配置檔案

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel 部署

#### 1. 自動部署

1. 連接 GitHub 儲存庫
2. 框架預設: Vite
3. 建構指令: `npm run build`
4. 輸出目錄: `dist`

#### 2. 手動部署

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

#### 3. Vercel 配置

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### GitHub Pages 部署

#### 1. 設定 GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### 2. 設定儲存庫

1. 前往 Settings > Pages
2. Source 選擇 "GitHub Actions"
3. 推送程式碼到 main 分支觸發部署

## 🐳 Docker 部署

### Dockerfile

```dockerfile
# 多階段建構
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# 生產階段
FROM nginx:alpine

# 複製建構結果
COPY --from=builder /app/dist /usr/share/nginx/html

# 複製 nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  lumi-gallery:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### 建構和執行

```bash
# 建構映像檔
docker build -t lumi-gallery .

# 執行容器
docker run -p 80:80 lumi-gallery

# 使用 Docker Compose
docker-compose up -d
```

## ☁️ 雲端平台部署

### AWS S3 + CloudFront

#### 1. S3 設定

```bash
# 建立 S3 儲存桶
aws s3 mb s3://lumi-gallery-website

# 設定靜態網站託管
aws s3 website s3://lumi-gallery-website \
  --index-document index.html \
  --error-document index.html

# 上傳檔案
aws s3 sync dist/ s3://lumi-gallery-website
```

#### 2. CloudFront 設定

```json
{
  "Origins": {
    "S3Origin": {
      "DomainName": "lumi-gallery-website.s3.amazonaws.com",
      "Id": "S3Origin"
    }
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3Origin",
    "ViewerProtocolPolicy": "redirect-to-https",
    "Compress": true
  }
}
```

### Google Cloud Platform

#### 1. Cloud Storage

```bash
# 建立儲存桶
gsutil mb gs://lumi-gallery-website

# 設定靜態網站託管
gsutil web set -m index.html -e index.html gs://lumi-gallery-website

# 上傳檔案
gsutil -m rsync -r dist/ gs://lumi-gallery-website
```

#### 2. Load Balancer

```yaml
# 設定負載平衡器
apiVersion: v1
kind: Service
metadata:
  name: lumi-gallery
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: lumi-gallery
```

## 🔒 安全性設定

### HTTPS 配置

```nginx
# nginx.conf
server {
    listen 443 ssl http2;
    server_name lumigallery.com;
    
    ssl_certificate /etc/ssl/certs/lumigallery.crt;
    ssl_certificate_key /etc/ssl/private/lumigallery.key;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}

# HTTP 重定向到 HTTPS
server {
    listen 80;
    server_name lumigallery.com;
    return 301 https://$server_name$request_uri;
}
```

### 安全標頭

```javascript
// 在 HTML 中添加安全標頭
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

## 📊 監控和分析

### 效能監控

```javascript
// 使用 Web Vitals API
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // 發送到分析服務
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### 錯誤追蹤

```javascript
// 錯誤邊界
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // 發送到錯誤追蹤服務
    console.error('Error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>發生錯誤，請重新整理頁面。</h1>;
    }
    return this.props.children;
  }
}
```

## 🔄 CI/CD 流程

### GitHub Actions 完整流程

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
    - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - uses: actions/upload-artifact@v3
      with:
        name: dist
        path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/download-artifact@v3
      with:
        name: dist
    - name: Deploy to production
      run: |
        # 部署指令
        echo "Deploying to production..."
```

## 🚨 故障排除

### 常見部署問題

1. **建構失敗**
   - 檢查 Node.js 版本
   - 確認依賴安裝完整
   - 查看建構日誌

2. **路由問題**
   - 確認 SPA 路由配置
   - 檢查伺服器重寫規則
   - 驗證 404 處理

3. **效能問題**
   - 啟用 Gzip 壓縮
   - 設定快取標頭
   - 優化圖片和資源

### 除錯工具

```bash
# 檢查建構結果
npm run preview

# 分析套件大小
npm run build -- --analyze

# 檢查相依性
npm ls

# 清理快取
npm run clean
```

## 📈 部署後檢查

### 功能測試清單

- [ ] 首頁正常載入
- [ ] 導航功能正常
- [ ] 響應式設計正常
- [ ] 圖片和資源載入
- [ ] 表單提交功能
- [ ] 效能指標達標

### 效能檢查

```javascript
// 使用 Lighthouse CI
npm install -g @lhci/cli

// 執行檢查
lhci autorun
```

---

**注意**: 部署前請務必在測試環境中驗證所有功能，確保生產環境的穩定性。 