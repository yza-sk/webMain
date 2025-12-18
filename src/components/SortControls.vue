<template>
  <div class="sort-controls">
    <div class="sort-label">排序方式：</div>
    <div class="sort-buttons">
      <button 
        v-for="option in sortOptions" 
        :key="option.value"
        :class="['sort-btn', { active: currentSort === option.value }]"
        @click="$emit('sort-change', option.value)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentSort: {
    type: String,
    default: 'default'
  }
})

defineEmits(['sort-change'])

const sortOptions = [
  { value: 'default', label: '默认' },
  { value: 'name', label: '名称' },
  { value: 'category', label: '分类' }
]
</script>

<style scoped>
.sort-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.sort-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 500;
}

.sort-buttons {
  display: flex;
  gap: 8px;
}

.sort-btn {
  padding: 6px 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
}

.sort-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.sort-btn.active {
  background: rgba(255, 255, 255, 0.9);
  color: #2d3436;
  border-color: transparent;
  font-weight: 600;
}

@media (max-width: 768px) {
  .sort-controls {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .sort-buttons {
    width: 100%;
    justify-content: space-between;
  }
  
  .sort-btn {
    flex: 1;
    text-align: center;
  }
}
</style>