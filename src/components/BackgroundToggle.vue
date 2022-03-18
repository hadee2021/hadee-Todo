<template>
  <div class="toggle-container">
    <div class="toggle-line" @click="toggleBtn">
      <div 
        class="toggle-btn"
        :class="toggleObj"
      >
      </div>
    </div>
    <div class="toggle-text">
      <span>주</span>
      <span>야</span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const toggleObj = reactive({
      darkToggle : false
    })
    const toggleBtn = () => {
      toggleObj.darkToggle = !toggleObj.darkToggle
    }
    return {
      toggleObj,
      toggleBtn
    }
  }
}
</script>

<style scoped>
  .toggle-container {
    display: flex;
    flex-flow: column;
    color: var(--white);
  }
  .toggle-line {
    border-radius: 10%;
    background-color: var(--whiteTransparency);
    width: 50px;
  }
  .toggle-btn {
    background-color: var(--vuegreen);
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
  .toggle-text {
    display: flex;
    justify-content: space-between;
  }
  .darkToggle {
    transform: translateX(35px);
  }
</style>