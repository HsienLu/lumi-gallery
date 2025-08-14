# Lumi Gallery 元件使用指南

## 📚 元件概述

本文件詳細介紹了 Lumi Gallery 專案中所有可複用元件的使用方法、屬性和範例程式碼。

## 🧩 基礎元件

### Button 按鈕元件

一個可配置的按鈕元件，支援多種樣式和尺寸。

#### 基本用法
```jsx
import Button from '../components/Button.jsx'

function MyComponent() {
  return (
    <Button onClick={() => console.log('點擊了按鈕')}>
      點擊我
    </Button>
  )
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `variant` | `string` | `'primary'` | 按鈕樣式變體 |
| `size` | `string` | `'md'` | 按鈕尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `fullWidth` | `boolean` | `false` | 是否佔滿容器寬度 |
| `onClick` | `function` | - | 點擊事件處理函數 |
| `children` | `ReactNode` | - | 按鈕內容 |

#### 樣式變體
```jsx
// 主要按鈕
<Button variant="primary">主要按鈕</Button>

// 次要按鈕
<Button variant="secondary">次要按鈕</Button>

// 輪廓按鈕
<Button variant="outline">輪廓按鈕</Button>

// 幽靈按鈕
<Button variant="ghost">幽靈按鈕</Button>
```

#### 尺寸選項
```jsx
// 小按鈕
<Button size="sm">小按鈕</Button>

// 中等按鈕
<Button size="md">中等按鈕</Button>

// 大按鈕
<Button size="lg">大按鈕</Button>
```

#### 完整範例
```jsx
<Button 
  variant="primary" 
  size="lg" 
  fullWidth 
  onClick={handleSubmit}
  disabled={isLoading}
>
  {isLoading ? '提交中...' : '提交表單'}
</Button>
```

### Badge 標籤元件

用於顯示狀態、分類或標記的小標籤元件。

#### 基本用法
```jsx
import Badge from '../components/Badge.jsx'

function MyComponent() {
  return (
    <div>
      <Badge>預設標籤</Badge>
      <Badge variant="success">成功</Badge>
      <Badge variant="warning">警告</Badge>
      <Badge variant="error">錯誤</Badge>
    </div>
  )
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `variant` | `string` | `'default'` | 標籤樣式變體 |
| `size` | `string` | `'md'` | 標籤尺寸 |
| `children` | `ReactNode` | - | 標籤內容 |

#### 樣式變體
```jsx
<Badge variant="default">預設</Badge>
<Badge variant="success">成功</Badge>
<Badge variant="warning">警告</Badge>
<Badge variant="error">錯誤</Badge>
<Badge variant="info">資訊</Badge>
```

### Container 容器元件

提供統一的頁面內容容器，支援響應式佈局。

#### 基本用法
```jsx
import Container from '../components/Container.jsx'

function MyPage() {
  return (
    <Container>
      <h1>頁面標題</h1>
      <p>頁面內容...</p>
    </Container>
  )
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `variant` | `string` | `'default'` | 容器樣式變體 |
| `className` | `string` | - | 額外的CSS類名 |
| `children` | `ReactNode` | - | 容器內容 |

#### 容器變體
```jsx
// 標準容器 (最大寬度1200px)
<Container variant="default">內容</Container>

// 寬容器 (最大寬度1400px)
<Container variant="wide">內容</Container>

// 窄容器 (最大寬度800px)
<Container variant="narrow">內容</Container>
```

### HeroPicture 首圖元件

用於首頁或橫幅的主視覺圖片，支援 WebP 格式與多尺寸切換。

#### 基本用法
```jsx
import HeroPicture from '../components/HeroPicture.jsx'

const item = {
  webp800: '/images/hero-800.webp',
  webp1200: '/images/hero-1200.webp',
  jpg1200: '/images/hero-1200.jpg',
  w: 1200,
  h: 800,
  alt: '主視覺'
}

function Home() {
  return <HeroPicture item={item} priority />
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `item` | `object` | - | 圖片來源與尺寸資訊 |
| `priority` | `boolean` | `false` | 是否以高優先度載入 |
| `className` | `string` | `''` | 額外的 Tailwind 樣式 |

### SectionTitle 章節標題元件

用於頁面章節的標題顯示，支援主標題和副標題。

#### 基本用法
```jsx
import SectionTitle from '../components/SectionTitle.jsx'

function MySection() {
  return (
    <SectionTitle 
      title="精選作品" 
      subtitle="展現光影之美"
    />
  )
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `title` | `string` | - | 主標題文字 |
| `subtitle` | `string` | - | 副標題文字 |
| `alignment` | `string` | `'left'` | 對齊方式 |
| `className` | `string` | - | 額外的CSS類名 |

#### 對齊方式
```jsx
// 左對齊
<SectionTitle 
  title="左對齊標題" 
  alignment="left" 
/>

// 居中對齊
<SectionTitle 
  title="居中對齊標題" 
  alignment="center" 
/>

// 右對齊
<SectionTitle 
  title="右對齊標題" 
  alignment="right" 
/>
```

## 🎨 互動元件

### ImageCard 圖片卡片元件

用於作品集的縮圖展示，支援鍵盤操作並可搭配 Lightbox 使用。

#### 基本用法
```jsx
import ImageCard from '../components/ImageCard.jsx'

function Portfolio() {
  const onSelect = (item) => console.log(item)
  const item = {
    title: '作品標題',
    webp800: '/images/p1-800.webp',
    webp1200: '/images/p1-1200.webp',
    jpg1200: '/images/p1-1200.jpg'
  }
  return <ImageCard item={item} onSelect={onSelect} />
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `item` | `object` | - | 圖片資料（含標題與多尺寸來源） |
| `onSelect` | `function` | - | 點擊卡片時的回呼函式 |
| `priority` | `boolean` | `false` | 是否優先載入圖片 |

### Lightbox 圖片燈箱元件

用於圖片的放大查看和畫廊瀏覽。

#### 基本用法
```jsx
import Lightbox from '../components/Lightbox.jsx'

function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg'
  ]

  return (
    <div>
      <img 
        src={images[0]} 
        onClick={() => setIsOpen(true)}
        alt="點擊查看大圖"
      />
      
      <Lightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={images}
        currentIndex={currentImage}
        onImageChange={setCurrentImage}
      />
    </div>
  )
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `isOpen` | `boolean` | `false` | 是否顯示燈箱 |
| `onClose` | `function` | - | 關閉燈箱的回調函數 |
| `images` | `array` | `[]` | 圖片陣列 |
| `currentIndex` | `number` | `0` | 當前顯示的圖片索引 |
| `onImageChange` | `function` | - | 圖片切換的回調函數 |

### DmExamplesCard 私訊範例卡片

顯示常用的私訊範例並支援一鍵複製，適合放在聯絡頁面。此元件為示範性質，可視需求移除。

#### 基本用法
```jsx
import DmExamplesCard from '../components/DmExamplesCard.jsx'

function ContactExtras() {
  return <DmExamplesCard igUrl="https://instagram.com/lumi_potraits" />
}
```

#### 屬性說明
| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `igUrl` | `string` | `'https://instagram.com/lumi_potraits'` | IG 連結 |
| `title` | `string` | `'快速聯絡建議'` | 卡片標題 |
| `description` | `string` | `'如想要得到盡快回覆，請直接私我 IG。'` | 描述文字 |
| `examples` | `array` | - | 自訂私訊範例列表 |

### FloatingCTA 浮動行動按鈕

固定在頁面上的行動號召按鈕。

#### 基本用法
```jsx
import FloatingCTA from '../components/FloatingCTA.jsx'

function App() {
  return (
    <div>
      {/* 頁面內容 */}
      <FloatingCTA />
    </div>
  )
}
```

#### 功能特性
- 固定在頁面右下角
- 支援滾動時自動顯示/隱藏
- 點擊可快速聯絡或預約
- 響應式設計，適配行動端

### ScrollToTop 回到頂部元件

提供回到頁面頂部的功能。

#### 基本用法
```jsx
import ScrollToTop from '../components/ScrollToTop.jsx'

function App() {
  return (
    <div>
      {/* 頁面內容 */}
      <ScrollToTop />
    </div>
  )
}
```

#### 功能特性
- 滾動超過一定距離時顯示
- 平滑滾動到頁面頂部
- 支援鍵盤導航
- 可存取性友善

## 🏗️ 佈局元件

### Navbar 導航欄元件

網站的主要導航元件。

#### 基本用法
```jsx
import Navbar from '../layout/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      {/* 其他內容 */}
    </div>
  )
}
```

#### 功能特性
- 響應式導航選單
- 支援行動端漢堡選單
- 當前頁面高亮顯示
- 平滑滾動導航

### Footer 頁尾元件

網站的頁尾資訊元件。

#### 基本用法
```jsx
import Footer from '../layout/Footer.jsx'

function App() {
  return (
    <div>
      {/* 頁面內容 */}
      <Footer />
    </div>
  )
}
```

#### 功能特性
- 聯絡資訊展示
- 社群媒體連結
- 版權資訊
- 響應式佈局

## 📱 響應式設計

### 行動端適配

所有元件都支援響應式設計，使用 Tailwind CSS 的響應式前綴：

```jsx
// 行動端隱藏，桌面端顯示
<div className="hidden lg:block">桌面端內容</div>

// 行動端顯示，桌面端隱藏
<div className="block lg:hidden">行動端內容</div>

// 響應式間距
<div className="p-4 md:p-8 lg:p-12">響應式間距</div>
```

### 斷點系統

- **sm**: 640px 及以上
- **md**: 768px 及以上
- **lg**: 1024px 及以上
- **xl**: 1280px 及以上
- **2xl**: 1536px 及以上

## 🎯 最佳實踐

### 元件使用建議

1. **保持一致性**: 使用預定義的元件變體和尺寸
2. **響應式優先**: 從行動端開始設計，逐步增強
3. **可存取性**: 確保元件支援鍵盤導航和螢幕閱讀器
4. **效能優化**: 避免不必要的重渲染和DOM操作

### 自訂元件

如果需要建立新的元件：

1. 遵循現有的命名規範
2. 使用 TypeScript 或 PropTypes 定義類型
3. 添加適當的預設值和錯誤處理
4. 編寫元件文件和範例
5. 更新元件使用指南

### 元件測試

建議為每個元件編寫測試：

```jsx
// 範例測試
import { render, screen } from '@testing-library/react'
import Button from './Button'

test('按鈕顯示正確的文字', () => {
  render(<Button>點擊我</Button>)
  expect(screen.getByText('點擊我')).toBeInTheDocument()
})
```

## 🔧 故障排除

### 常見問題

1. **元件不顯示**: 檢查是否正確匯入和渲染
2. **樣式不生效**: 確認 Tailwind CSS 配置正確
3. **響應式問題**: 驗證斷點設定和媒體查詢
4. **效能問題**: 檢查元件是否過度重渲染

### 除錯技巧

1. 使用瀏覽器開發者工具檢查元素
2. 查看控制台錯誤資訊
3. 使用 React DevTools 除錯元件狀態
4. 檢查網路請求和資源載入

---

**注意**: 本文件會隨著元件更新持續維護，請定期查看最新版本。 