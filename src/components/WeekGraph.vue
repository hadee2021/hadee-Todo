<template>
  <div>
    <div class="graph-subject">이번주 남은 Todo</div>
    <div class="graph-container">
      <div class="day-bar">
        <span>{{ todos.mon.length - todos.mon.filter(todo => todo.completed).length }}</span>
        <div :style="{ height: (todos.mon.length - todos.mon.filter(todo => todo.completed).length)*20 + 'px'}"></div>
        <div>월</div>
      </div>
      <div class="day-bar">
        <span>{{ todos.tue.length - todos.tue.filter(todo => todo.completed).length }}</span>
        <div :style="{ height: (todos.tue.length - todos.tue.filter(todo => todo.completed).length)*20 + 'px'}"></div>
        <div>화</div>
      </div>
      <div class="day-bar">
        <span>{{ todos.wed.length - todos.wed.filter(todo => todo.completed).length }}</span>
        <div :style="{ height: (todos.wed.length - todos.wed.filter(todo => todo.completed).length)*20 + 'px'}"></div>
        <div>수</div>
      </div>
      <div class="day-bar">
        <span>{{ todos.thu.length - todos.thu.filter(todo => todo.completed).length }}</span>
        <div :style="{ height: (todos.thu.length - todos.thu.filter(todo => todo.completed).length)*20 + 'px'}"></div>
        <div>목</div>
      </div>
      <div class="day-bar">
        <span>{{ todos.fri.length - todos.fri.filter(todo => todo.completed).length }}</span>
        <div :style="{ height: (todos.fri.length - todos.fri.filter(todo => todo.completed).length)*20 + 'px'}"></div>
        <div>금</div>
      </div>
      <div class="day-bar">
        <span>{{ todos.sat.length - todos.sat.filter(todo => todo.completed).length }}</span>
        <div :style="{ height: (todos.sat.length - todos.sat.filter(todo => todo.completed).length)*20 + 'px'}"></div>
        <div>토</div>
      </div>
      <div class="day-bar">
        <span>{{ todos.sun.length - todos.sun.filter(todo => todo.completed).length }}</span>
        <div :style="{ height: (todos.sun.length - todos.sun.filter(todo => todo.completed).length)*20 + 'px'}"></div>
        <div>일</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodos } from '@/composables/todos.js'
export default {
  setup() {
    const { todos } = useTodos()
    console.log(todos.value)
    return {
      todos
    }
  }
}
</script>

<style scpoed>
  .graph-subject {
    text-align: center;
    margin-bottom: 10px;
  }
  .graph-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    background-color: var(--white);
    width: 700px;
    height: 300px;
  }
  .day-bar {
    display: flex;
    flex-flow: column;
  }
  .day-bar > span {
    text-align: center;
  }
  .day-bar > div:nth-child(2) {
    background-color: var(--skyblue);
  }
</style>