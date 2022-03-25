<template>
  <div>
    
    <div class="weekGraph">
      <Progress />
      <WeekGraph />
      <div></div>
    </div>
  </div>
</template>

<script>

import Progress from '@/components/Progress.vue'
import WeekGraph from '@/components/WeekGraph.vue'
export default {
  components: {
    Progress,
    WeekGraph
  }
}
</script>

<style scoped>
  .weekGraph {
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
  }
  .weekGraph > div:last-child {
    width: 210px;
  }
</style>