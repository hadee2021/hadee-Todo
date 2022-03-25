<template>
  <div>
    <div class="weekCount-style">일주일 전적 : {{ totalCompletedCount }} 승 / {{ totalTodoCount }} 전</div>
    <div class="totalprogress-box">
      <div class="totalProgress-bar" :style="{ width: totalProgress*2 + 'px' }">
        <div>진행률 : {{ totalProgress }} %</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodos } from '@/composables/todos.js'
import { computed } from 'vue'
export default {
  setup() {
    const { todos } = useTodos()
    const todoList = Object.values(todos.value)

    const totalTodoCount = computed(() => {
      return todoList.flatMap(x => x).length
    })
    const totalCompletedCount = computed(() => {
      return todoList.flatMap(x => x).filter(todo => todo.completed).length
    })
    const totalProgress = computed(() => Math.ceil(totalCompletedCount.value/totalTodoCount.value*100))

    return {
      todos,
      totalTodoCount,
      totalCompletedCount,
      totalProgress
    }
  }
}
</script>

<style scoped>
  .weekCount-style,
  .totalprogress-box {
    margin: 12px;
  }
  .totalprogress-box {
    width: 200px;
    height: 30px;
    background-color: var(--white);
  }
  .totalProgress-bar {
    height: 30px;
    background-color: var(--skyblue);
  }
  .totalProgress-bar > div {
    width: 120px;
    line-height: 2;
  }
</style>