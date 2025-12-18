<template>
  <div class="website-grid">
    <div 
      v-for="website in websites" 
      :key="website.id"
      :class="['website-card', { 'my-website': website.isMy }]"
      @click="openWebsite(website.url)"
    >
      <div class="website-icon">{{ website.icon }}</div>
      <div class="website-name">{{ website.name }}</div>
      <div v-if="website.isMy" class="my-badge">我的</div>
    </div>
  </div>
  
  <div v-if="websites.length === 0" class="no-results">
    <div class="no-results-icon">🔍</div>
    <div class="no-results-text">暂无相关网址</div>
    <div class="no-results-tip">试试其他关键词或分类</div>
  </div>
</template>

<script setup>
defineProps({
  websites: {
    type: Array,
    required: true
  }
})

const openWebsite = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.website-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.website-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.website-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: white;
}

.website-card.my-website {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  border-color: #fdcb6e;
}

.website-card.my-website:hover {
  background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%);
  box-shadow: 0 8px 25px rgba(253, 203, 110, 0.4);
}

.website-icon {
  font-size: 40px;
  margin-bottom: 12px;
  line-height: 1;
}

.website-name {
  font-size: 14px;
  font-weight: 500;
  color: #2d3436;
  line-height: 1.3;
  word-break: break-word;
}

.my-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e17055;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: bold;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 255, 255, 0.8);
}

.no-results-icon {
  font-size: 60px;
  margin-bottom: 16px;
  opacity: 0.7;
}

.no-results-text {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
}

.no-results-tip {
  font-size: 14px;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .website-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
  }
  
  .website-card {
    padding: 15px;
  }
  
  .website-icon {
    font-size: 32px;
    margin-bottom: 8px;
  }
  
  .website-name {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .website-grid {
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
    gap: 12px;
  }
  
  .website-card {
    padding: 12px;
  }
  
  .website-icon {
    font-size: 28px;
  }
  
  .website-name {
    font-size: 11px;
  }
}
</style>