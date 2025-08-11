# Lumi Gallery 設計系統

## 🎨 設計理念

Lumi Gallery 的設計理念是「簡約而不簡單」，注重用戶體驗和視覺美感。我們追求優雅、專業的設計風格，讓用戶能夠專注於攝影作品本身。

## 🌈 色彩系統

### 主色調
- **品牌色 (Brand)**: `#EADFCF` - 溫暖的米色，體現專業和親和力
- **主色 (Primary)**: `#8B7355` - 深棕色，用於重要元素和強調
- **輔助色 (Secondary)**: `#D4C4A8` - 淺米色，用於背景和分隔

### 功能色彩
- **成功色 (Success)**: `#10B981` - 綠色，用於成功狀態
- **警告色 (Warning)**: `#F59E0B` - 橙色，用於警告提示
- **錯誤色 (Error)**: `#EF4444` - 紅色，用於錯誤狀態
- **資訊色 (Info)**: `#3B82F6` - 藍色，用於資訊提示

### 中性色彩
- **文字主色**: `#111111` - 深色文字
- **文字次要色**: `#6B7280` - 次要文字
- **背景色**: `#FFFFFF` - 純白背景
- **邊框色**: `#E5E7EB` - 淺灰邊框

## 🔤 字體系統

### 字體族
- **主要字體**: `'Noto Sans TC', sans-serif` - 支援中文顯示
- **備用字體**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### 字體大小
```css
/* 標題 */
.text-4xl  /* 36px - 主標題 */
.text-3xl  /* 30px - 副標題 */
.text-2xl  /* 24px - 章節標題 */
.text-xl   /* 20px - 小標題 */
.text-lg   /* 18px - 強調文字 */

/* 正文 */
.text-base /* 16px - 正文 */
.text-sm   /* 14px - 小字 */
.text-xs   /* 12px - 註釋 */
```

### 字體權重
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **SemiBold**: 600
- **Bold**: 700

## 📐 間距系統

### 基礎間距單位
- **4px** - 最小間距單位
- **8px** - 小間距
- **16px** - 標準間距
- **24px** - 中等間距
- **32px** - 大間距
- **48px** - 超大間距
- **64px** - 章節間距

### 響應式間距
```css
/* 行動端 */
.p-4    /* 16px */
.p-6    /* 24px */

/* 平板端 */
.md:p-8 /* 32px */
.md:p-12 /* 48px */

/* 桌面端 */
.lg:p-16 /* 64px */
.lg:p-20 /* 80px */
```

## 🧩 元件系統

### 按鈕元件 (Button)

#### 主要按鈕
```jsx
<Button variant="primary" size="lg">
  立即預約
</Button>
```

#### 按鈕變體
- **primary**: 主要按鈕，使用品牌色
- **secondary**: 次要按鈕，使用輔助色
- **outline**: 輪廓按鈕，透明背景
- **ghost**: 幽靈按鈕，無背景無邊框

#### 按鈕尺寸
- **sm**: 小按鈕 (32px 高度)
- **md**: 中等按鈕 (40px 高度)
- **lg**: 大按鈕 (48px 高度)

### 標籤元件 (Badge)

#### 使用範例
```jsx
<Badge variant="success">已完成</Badge>
<Badge variant="warning">進行中</Badge>
```

#### 標籤變體
- **default**: 預設標籤
- **success**: 成功標籤
- **warning**: 警告標籤
- **error**: 錯誤標籤

### 容器元件 (Container)

#### 使用範例
```jsx
<Container>
  <h1>頁面內容</h1>
</Container>
```

#### 容器變體
- **default**: 標準容器，最大寬度1200px
- **wide**: 寬容器，最大寬度1400px
- **narrow**: 窄容器，最大寬度800px

### 章節標題元件 (SectionTitle)

#### 使用範例
```jsx
<SectionTitle 
  title="精選作品" 
  subtitle="展現光影之美"
  alignment="center"
/>
```

#### 屬性說明
- **title**: 主標題文字
- **subtitle**: 副標題文字
- **alignment**: 對齊方式 (left, center, right)

## 📱 響應式設計

### 斷點系統
```css
/* 行動端優先 */
/* 預設樣式適用於所有裝置 */

/* 平板端 */
@media (min-width: 768px) {
  /* md: 樣式 */
}

/* 桌面端 */
@media (min-width: 1024px) {
  /* lg: 樣式 */
}

/* 大螢幕 */
@media (min-width: 1280px) {
  /* xl: 樣式 */
}
```

### 網格系統
```css
/* 12列網格 */
.grid-cols-1   /* 1列 */
.grid-cols-2   /* 2列 */
.grid-cols-3   /* 3列 */
.grid-cols-4   /* 4列 */
.grid-cols-6   /* 6列 */
.grid-cols-12  /* 12列 */

/* 響應式網格 */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

## 🎭 動畫和過渡

### 過渡效果
```css
/* 基礎過渡 */
transition: all 0.3s ease-in-out

/* 快速過渡 */
transition: all 0.15s ease-in-out

/* 慢速過渡 */
transition: all 0.5s ease-in-out
```

### 懸停效果
```css
/* 按鈕懸停 */
hover:scale-105 hover:shadow-lg

/* 卡片懸停 */
hover:shadow-xl hover:-translate-y-1
```

### 載入動畫
```css
/* 淡入動畫 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 滑入動畫 */
@keyframes slideInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

## 🖼️ 圖片規範

### 圖片尺寸
- **縮圖**: 300x200px
- **中等圖**: 600x400px
- **大圖**: 1200x800px
- **全螢幕圖**: 1920x1080px

### 圖片格式
- **JPEG**: 用於照片和複雜圖像
- **PNG**: 用於需要透明背景的圖像
- **WebP**: 現代瀏覽器支援的優化格式
- **SVG**: 用於圖示和簡單圖形

### 圖片優化
- 使用適當的壓縮比例
- 提供多種尺寸的響應式圖片
- 使用懶載入提升效能
- 添加適當的alt屬性

## 📋 使用指南

### 設計原則
1. **一致性**: 保持設計元素的一致性
2. **可讀性**: 確保文字清晰易讀
3. **可存取性**: 考慮不同用戶的需求
4. **響應式**: 適配各種裝置尺寸
5. **效能**: 優化載入速度和用戶體驗

### 最佳實踐
1. 使用設計系統提供的元件和樣式
2. 遵循間距和字體規範
3. 保持色彩搭配的和諧
4. 測試各種裝置和瀏覽器
5. 定期更新和維護設計系統

### 常見問題
1. **如何添加新的元件變體？**
   - 在元件檔案中添加新的variant選項
   - 更新設計系統文件
   - 添加相應的樣式類

2. **如何自訂主題色彩？**
   - 修改CSS變數
   - 更新Tailwind配置
   - 確保所有相關元件同步更新

3. **如何保持設計一致性？**
   - 使用預定義的元件
   - 遵循間距和字體規範
   - 定期進行設計審查

---

**注意**: 本設計系統會隨著專案發展持續更新，請定期查看最新版本。 