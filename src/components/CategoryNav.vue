<template>
  <div class="category-nav">
    <div class="nav-container">
      <div 
        v-for="category in categories" 
        :key="category.id"
        :class="['category-item', { active: currentCategory === category.id }]"
        @click="$emit('category-change', category.id)"
      >
        <span class="category-icon">{{ category.icon }}</span>
        <span class="category-name">{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  currentCategory: {
    type: String,
    required: true
  }
})

defineEmits(['category-change'])
</script>

<style scoped>
.category-nav {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid transparent;
}

.category-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.95);
}

.category-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.category-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.category-name {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

@media (max-width: 768px) {
  .nav-container {
    gap: 8px;
  }
  
  .category-item {
    min-width: 70px;
    padding: 10px 12px;
  }
  
  .category-icon {
    font-size: 20px;
  }
  
  .category-name {
    font-size: 12px;
  }
}
</style>