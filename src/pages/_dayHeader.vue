<template>
  <div>
    <TodoNav
      class="todoNav-style"
    />
    <Input />
    <span>( 카드를 더블클릭하여 내용을 수정 할 수 있습니다 )</span>
  </div>
</template>

<script>
import TodoNav from '@/components/TodoNav.vue'
import Input from '@/components/Input.vue'
export default {
  components: {
    TodoNav,
    Input
  }
}
</script>

<style scoped>
  .todoNav-style {
    color: var(--white);
    font-size: 20px;
  }
  span {
    color: var(--white);
    font-size: 20px;
  }
</style>