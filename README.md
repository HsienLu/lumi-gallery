# Lumi Gallery - 攝影畫廊網站

一個現代化的攝影畫廊網站，展示專業攝影作品和服務。

## 🚀 專案概述

Lumi Gallery 是一個專業的攝影畫廊網站，提供作品展示、服務介紹和聯絡方式等功能。網站採用現代化的設計理念，注重用戶體驗和視覺呈現。

## ✨ 主要功能

- **首頁展示** - 精選作品和品牌介紹
- **作品集** - 完整的攝影作品展示
- **關於我們** - 攝影師背景和理念介紹
- **服務項目** - 詳細的攝影服務說明
- **聯絡方式** - 客戶諮詢和預約功能

## 🛠️ 技術棧

- **前端框架**: React 19.1.1
- **建構工具**: Vite 7.1.0
- **樣式框架**: Tailwind CSS 4.1.11
- **路由管理**: React Router DOM 7.8.0
- **程式碼規範**: ESLint 9.32.0

## 📁 專案結構

```
lumi-gallery/
├── src/
│   ├── components/          # 可複用元件
│   │   ├── Button.jsx      # 按鈕元件
│   │   ├── Badge.jsx       # 標籤元件
│   │   ├── Container.jsx   # 容器元件
│   │   ├── SectionTitle.jsx # 章節標題元件
│   │   ├── Lightbox.jsx    # 圖片燈箱元件
│   │   ├── FloatingCTA.jsx # 浮動行動按鈕
│   │   └── ScrollToTop.jsx # 回到頂部元件
│   ├── pages/              # 頁面元件
│   │   ├── Home.jsx        # 首頁
│   │   ├── Portfolio.jsx   # 作品集頁面
│   │   ├── About.jsx       # 關於我們頁面
│   │   ├── Services.jsx    # 服務頁面
│   │   └── Contact.jsx     # 聯絡頁面
│   ├── layout/             # 佈局元件
│   │   ├── Navbar.jsx      # 導航欄
│   │   └── Footer.jsx      # 頁尾
│   ├── assets/             # 靜態資源
│   ├── App.jsx             # 主應用元件
│   └── main.jsx            # 應用入口
├── public/                 # 公共資源
├── index.html              # HTML模板
├── vite.config.js          # Vite配置
├── tailwind.config.js      # Tailwind配置
└── package.json            # 專案依賴
```

## 🚀 快速開始

### 環境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 套件管理器

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

### 建構生產版本

```bash
npm run build
```

### 預覽建構結果

```bash
npm run preview
```

### 程式碼檢查

```bash
npm run lint
```

## 🎨 設計系統

專案採用統一的設計系統，包括：

- **色彩方案**: 以米色(#EADFCF)為主色調的品牌色彩
- **字體**: Noto Sans TC 中文字體
- **元件庫**: 可複用的UI元件
- **響應式設計**: 支援各種裝置尺寸

詳細的設計規範請參考 [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)

## 📱 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 🤝 貢獻指南

1. Fork 專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權條款

本專案採用 MIT 授權條款 - 查看 [LICENSE](LICENSE) 檔案了解詳情

## 📞 聯絡方式

如有問題或建議，請透過以下方式聯絡：

- 專案維護者: [您的姓名]
- 電子郵件: [您的電子郵件]
- 專案地址: [專案GitHub地址]

---

**Lumi Gallery** - 用光影記錄美好瞬間 ✨
