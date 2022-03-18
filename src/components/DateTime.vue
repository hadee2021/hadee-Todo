<template>
  <div>
    {{ dayString }} <br>
    {{ timeStample }}
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { DateTime } from "luxon"
export default {
  setup() {
    const today = ref(DateTime.now())
    const weekIndex = ['일', '월', '화', '수', '목', '금', '토']
    
    setInterval(() => {
      today.value = DateTime.now()
    }, 1000)
    
    const month = computed(() => {
      return today.value.month
    })
    const day = computed(() => {
      return today.value.day
    })

    const todayLabel = computed(() => {
      return weekIndex[today.value.weekday]
    })

    const dayString = computed(() => {
      return month.value + '월' + day.value + '일  ' + todayLabel.value + '요일'
    })

    const timeStample = computed(() =>  {
      return today.value.toLocaleString(DateTime.TIME_SIMPLE)
    })

    return {
      today,
      month,
      day,
      todayLabel,
      dayString,
      timeStample
    }
  }
}
</script>

<style scoped>
  div {
    color: var(--white);
    font-size: 30px;
  }
</style>