# Lumi Gallery 開發指南

## 🚀 開發環境設定

### 必要工具

- **Node.js**: 18.0.0 或更高版本
- **npm**: 8.0.0 或更高版本 (或使用 yarn)
- **Git**: 版本控制
- **VS Code**: 推薦的程式碼編輯器

### 推薦的 VS Code 擴充功能

- **ES7+ React/Redux/React-Native snippets**: React 程式碼片段
- **Tailwind CSS IntelliSense**: Tailwind CSS 自動完成
- **ESLint**: 程式碼品質檢查
- **Prettier**（可選）: 程式碼格式化
- **Auto Rename Tag**: 自動重命名標籤
- **Bracket Pair Colorizer**: 括號配對著色

## 📦 專案安裝與設定

### 1. 克隆專案

```bash
git clone https://github.com/yourusername/lumi-gallery.git
cd lumi-gallery
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

開發伺服器將在 `http://localhost:5173` 啟動

## 🏗️ 專案結構說明

```
lumi-gallery/
├── src/                    # 原始碼目錄
│   ├── components/         # 可複用元件
│   ├── pages/             # 頁面元件
│   ├── layout/            # 佈局元件
│   ├── assets/            # 靜態資源
│   ├── App.css            # 主應用樣式
│   ├── App.jsx            # 主應用元件
│   ├── index.css          # 全域樣式
│   └── main.jsx           # 應用入口點
├── public/                 # 公共資源
├── docs/                   # 專案文件
├── eslint.config.js        # ESLint 配置
├── index.html              # HTML 模板
├── vite.config.js         # Vite 建構配置
├── package.json           # 專案依賴和腳本
└── package-lock.json      # 版本鎖定
```

## 🧩 元件開發規範

### 元件命名

- 使用 **PascalCase** 命名元件檔案和函數
- 檔案名與元件名保持一致
- 範例: `Button.jsx`, `UserProfile.jsx`

### 元件結構

```jsx
import React from 'react'
import PropTypes from 'prop-types'

// 元件定義
function ComponentName({ prop1, prop2, children }) {
  // 狀態和邏輯
  
  return (
    <div className="component-class">
      {children}
    </div>
  )
}

// PropTypes 定義
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
  children: PropTypes.node
}

// 預設值
ComponentName.defaultProps = {
  prop2: 0
}

export default ComponentName
```

### 樣式規範

- 優先使用 Tailwind CSS 類別
- 自訂樣式可放在 `src/` 下的 CSS 檔案中（例如 `App.css` 或 `index.css`）
- 使用 CSS 變數定義主題色彩
- 遵循 BEM 命名規範 (如果需要自訂 CSS)

## 📱 響應式設計原則

### 行動端優先

```jsx
// 從行動端開始設計
<div className="p-4 md:p-8 lg:p-12">
  響應式內容
</div>

// 隱藏/顯示策略
<div className="block md:hidden">行動端專用</div>
<div className="hidden md:block">桌面端專用</div>
```

### 斷點使用

```jsx
// 響應式網格
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 內容 */}
</div>

// 響應式文字
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  響應式標題
</h1>
```

## 🎨 設計系統整合

### 色彩使用

```jsx
// 使用預定義的色彩變數
<div className="bg-brand text-primary">
  品牌色彩組合
</div>

// 自訂色彩類別
<div className="bg-custom-color text-custom-text">
  自訂色彩
</div>
```

### 間距系統

```jsx
// 使用標準間距
<div className="p-4 m-2">標準間距</div>
<div className="p-8 m-4">大間距</div>

// 響應式間距
<div className="p-4 md:p-8 lg:p-12">響應式間距</div>
```

## 🔧 開發工作流程

### 1. 功能開發

```bash
# 建立功能分支
git checkout -b feature/new-feature

# 開發完成後提交
git add .
git commit -m "feat: 新增功能描述"

# 推送到遠端
git push origin feature/new-feature
```

### 2. 程式碼檢查

```bash
# 執行 ESLint 檢查
npm run lint

# 自動修復問題
npm run lint -- --fix
```

### 3. 建構測試

```bash
# 建構生產版本
npm run build

# 預覽建構結果
npm run preview
```

## 🧪 測試策略

### 單元測試

```jsx
// 使用 React Testing Library
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('按鈕顯示正確文字', () => {
  render(<Button>點擊我</Button>)
  expect(screen.getByText('點擊我')).toBeInTheDocument()
})
```

### 整合測試

```jsx
// 測試元件互動
test('點擊按鈕觸發事件', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>點擊</Button>)
  
  screen.getByText('點擊').click()
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

## 📝 程式碼品質

### ESLint 規則

專案使用嚴格的 ESLint 配置：

- 強制使用分號
- 強制使用單引號
- 強制使用 2 空格縮排
- 禁止未使用的變數
- 強制使用 === 比較

### Prettier 格式化
目前專案尚未整合 Prettier，如需自動格式化可自行安裝並於開發環境設定。

## 🚀 效能優化

### 圖片優化

```jsx
// 使用適當的圖片格式和尺寸
<img 
  src="/images/photo-300.jpg"
  srcSet="/images/photo-300.jpg 300w, /images/photo-600.jpg 600w"
  sizes="(max-width: 768px) 300px, 600px"
  alt="描述"
  loading="lazy"
/>
```

### 元件優化

```jsx
// 使用 React.memo 避免不必要的重渲染
const OptimizedComponent = React.memo(function Component({ data }) {
  return <div>{data}</div>
})

// 使用 useMemo 和 useCallback 優化效能
const memoizedValue = useMemo(() => expensiveCalculation(data), [data])
const memoizedCallback = useCallback(() => handleClick(id), [id])
```

## 🔍 除錯技巧

### 瀏覽器開發者工具

- **Elements**: 檢查 DOM 結構和樣式
- **Console**: 查看錯誤和日誌
- **Network**: 監控網路請求
- **Performance**: 分析效能問題

### React DevTools

- 安裝 React Developer Tools 擴充功能
- 檢查元件狀態和 props
- 監控元件重渲染
- 分析元件樹結構

## 📚 學習資源

### React 相關

- [React 官方文件](https://react.dev/)
- [React Hooks 文件](https://react.dev/reference/react)
- [React 最佳實踐](https://react.dev/learn)

### Tailwind CSS

- [Tailwind CSS 文件](https://tailwindcss.com/docs)
- [Tailwind UI 元件](https://tailwindui.com/)
- [Tailwind 組件庫](https://flowbite.com/)

### 開發工具

- [Vite 文件](https://vitejs.dev/)
- [ESLint 文件](https://eslint.org/)
- [VS Code 設定](https://code.visualstudio.com/docs)

## 🤝 貢獻指南

### 提交訊息規範

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
feat: 新功能
fix: 錯誤修復
docs: 文件更新
style: 程式碼格式調整
refactor: 程式碼重構
test: 測試相關
chore: 建構過程或輔助工具的變動
```

### 程式碼審查

- 所有變更都需要 Pull Request
- 至少需要一名維護者審查
- 通過所有測試和檢查
- 符合專案程式碼規範

---

**注意**: 本開發指南會持續更新，請定期查看最新版本以獲取最新的開發資訊。 