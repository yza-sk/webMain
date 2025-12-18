<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">🌟 网址百宝库</h1>
      <p class="app-subtitle">聚合优质网址，快速直达目标</p>
    </header>
    
    <main class="app-main">
      <SearchBox 
        :result-count="filteredWebsites.length"
        @search="handleSearch"
      />
      
      <CategoryNav 
        :categories="categories"
        :current-category="currentCategory"
        @category-change="handleCategoryChange"
      />
      
      <SortControls 
        :current-sort="currentSort"
        @sort-change="handleSortChange"
      />
      
      <WebsiteGrid :websites="sortedWebsites" />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CategoryNav from './components/CategoryNav.vue'
import WebsiteGrid from './components/WebsiteGrid.vue'
import SearchBox from './components/SearchBox.vue'
import SortControls from './components/SortControls.vue'
import { categories, websites } from './data/websites.js'

const currentCategory = ref('all')
const searchQuery = ref('')
const currentSort = ref('default')

const handleCategoryChange = (category) => {
  currentCategory.value = category
}

const handleSearch = (query) => {
  searchQuery.value = query.toLowerCase()
}

const handleSortChange = (sortType) => {
  currentSort.value = sortType
}

const filteredWebsites = computed(() => {
  let filtered = websites
  
  // 按分类筛选
  if (currentCategory.value !== 'all') {
    if (currentCategory.value === 'my') {
      filtered = filtered.filter(site => site.isMy)
    } else {
      filtered = filtered.filter(site => site.category === currentCategory.value)
    }
  }
  
  // 按搜索词筛选
  if (searchQuery.value) {
    filtered = filtered.filter(site => 
      site.name.toLowerCase().includes(searchQuery.value) ||
      site.url.toLowerCase().includes(searchQuery.value)
    )
  }
  
  return filtered
})

const sortedWebsites = computed(() => {
  let sorted = [...filteredWebsites.value]
  
  switch (currentSort.value) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
    case 'category':
      return sorted.sort((a, b) => {
        const categoryA = categories.find(cat => cat.id === a.category)?.name || ''
        const categoryB = categories.find(cat => cat.id === b.category)?.name || ''
        return categoryA.localeCompare(categoryB, 'zh-CN')
      })
    default:
      return sorted
  }
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.app-header {
  text-align: center;
  margin-bottom: 40px;
  color: white;
}

.app-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 8px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.app-subtitle {
  font-size: 18px;
  opacity: 0.9;
  font-weight: 300;
}

.app-main {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .app {
    padding: 15px;
  }
  
  .app-title {
    font-size: 36px;
  }
  
  .app-subtitle {
    font-size: 16px;
  }
  
  .app-main {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .app {
    padding: 10px;
  }
  
  .app-title {
    font-size: 28px;
    margin-bottom: 6px;
  }
  
  .app-subtitle {
    font-size: 14px;
  }
  
  .app-main {
    padding: 20px;
  }
}
</style>