<template>
  <div class="day-container">
    <div 
      v-for="(menu, index) in menuBar"
      :key="index"
      @click="moveToPage(menu.dayId)" 
      :class="{'active': route.params.dayId === menu.dayId}"
    >
      {{ menu.dayLabel }}
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const menuBar = [
      { dayId: 'mon', dayLabel: '월' },
      { dayId: 'tue', dayLabel: '화' },
      { dayId: 'wed', dayLabel: '수' },
      { dayId: 'thu', dayLabel: '목' },
      { dayId: 'fri', dayLabel: '금' },
      { dayId: 'sat', dayLabel: '토' },
      { dayId: 'sun', dayLabel: '일' }
    ]

    const router = useRouter()

    const moveToPage = (dayId) => {
      router.push({
        name: 'Todo',
        params: {
          dayId: dayId
        }
      })
    }
    const route = useRoute()

    return {
      moveToPage,
      route,
      menuBar
    }
  }
}
</script>

<style scoped>
  .day-container {
    display: flex;
    flex-flow: row nowrap;
    background-color: var(--whiteTransparency);
    margin-top: 5px;
  }
  .day-container > div {
    padding: 5px 15px;
    cursor: pointer;
  }
  .active {
    background-color: var(--skyblueTransparency);
  }
</style>