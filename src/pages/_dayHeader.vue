<template>
  <div>
    <TodoNav
      class="todoNav-style"
    />
    <Input />
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
</style>