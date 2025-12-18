<template>
  <div class="search-container">
    <div class="search-box">
      <div class="search-icon">🔍</div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索网址名称..."
        class="search-input"
        @input="handleSearch"
        @keyup.enter="handleSearch"
      />
      <button 
        v-if="searchQuery" 
        class="clear-btn" 
        @click="clearSearch"
      >
        ✕
      </button>
    </div>
    <div class="search-stats" v-if="searchQuery">
      找到 {{ resultCount }} 个相关网址
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  resultCount: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['search'])

const searchQuery = ref('')

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const clearSearch = () => {
  searchQuery.value = ''
  handleSearch()
}

// 监听搜索词变化，实现实时搜索
watch(searchQuery, () => {
  handleSearch()
})
</script>

<style scoped>
.search-container {
  margin-bottom: 24px;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.search-box:focus-within {
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.search-icon {
  font-size: 18px;
  margin-right: 12px;
  opacity: 0.6;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  color: #2d3436;
  font-weight: 500;
}

.search-input::placeholder {
  color: rgba(45, 52, 54, 0.5);
}

.clear-btn {
  background: rgba(45, 52, 54, 0.1);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: #636e72;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.clear-btn:hover {
  background: rgba(45, 52, 54, 0.2);
  transform: scale(1.1);
}

.search-stats {
  margin-top: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

@media (max-width: 768px) {
  .search-box {
    padding: 10px 14px;
  }
  
  .search-input {
    font-size: 14px;
  }
  
  .search-icon {
    font-size: 16px;
    margin-right: 10px;
  }
  
  .clear-btn {
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
  
  .search-stats {
    font-size: 12px;
  }
}
</style>