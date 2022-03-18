<template>
  <div>
    <input type="text" 
      v-model="todo.subject" 
      placeholder="나의 할일"
    />
    <div class="search-btn" @click.stop="onSave()">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTodos } from '@/composables/todos'
export default {
  setup() {
    const todo = ref({
      no: '',
      subject:'',
      completed: false
    })

    const route = useRoute()
    const { addTodo } = useTodos()

    const onSave = () => {
      const data = {
        no: Date.now(),
        subject: todo.value.subject,
        completed: todo.value.completed
      }
      const dayId = route.params.dayId

      addTodo({ data, dayId })
      todo.value.subject = ''
    }
    
    return {
      todo,
      onSave
    }
  }
}
</script>

<style scoped>
  input {
    width: 500px;
    height: 25px;
    background-color: var(--whiteTransparency);
    border: none;
    margin-top: 45px;
  }
  input:focus {
    outline: none;
  }
  .search-btn {
    width: 25px;
    height: 25px;
    color: var(--vuegreen);
    position: relative;
    top: -25px;
    left: 485px;
    cursor: pointer;
  }
</style>