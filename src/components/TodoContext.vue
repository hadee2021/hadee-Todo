<template>
  <div 
    class="todo-card-container" 
    @click.stop="DivCheckRequest(index)"
  >
    <div class="todo-card-item">
      <input 
        type="checkbox" 
        :checked="todo.completed"
        @change="CheckRequest(index, $event)"
      />
      <span
        :class="{ todoCheck : todo.completed }"
        @dblclick="updateFieldOn(index)"
        v-if="!updateField"
      >
        {{ todo.subject }}
      </span>
      <div 
        v-if="updateField"
        v-click-outside="onClickOutside"
      >
        <input type="text" v-model="subjectField" @click.stop>
        <i class="fa-solid fa-pen" id="fieldOff" @click.stop="updateFieldOff(index)"></i>
      </div>
    </div>
    <i class="fa-solid fa-xmark" @click.stop="deleteTodoRequest(index)"></i>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useTodos } from '@/composables/todos'
import { ref } from 'vue'
import vClickOutside from 'click-outside-vue3'
export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    todo: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  setup() {
    const route = useRoute()
    const {
      todos,
      checkTodo,
      deleteTodo,
      updateTodo
    } = useTodos()

    const CheckRequest = (index, event) => {
      const dayId = route.params.dayId
      const checked = event.target.checked
      checkTodo({ index, checked, dayId })
    }

    const DivCheckRequest = (index) => {
      const dayId = route.params.dayId
      const checked = !todos.value[dayId][index].completed
      console.log(checked)
      checkTodo({ index, checked, dayId })
    }

    const deleteTodoRequest = (index) => {
      const dayId = route.params.dayId
      deleteTodo({ index, dayId })
    }

    const subjectField = ref('')
    const updateField = ref(false)
    
    const updateFieldOn = (index) => {
      const dayId = route.params.dayId
      updateField.value = true
      subjectField.value = todos.value[dayId][index].subject
    }

    const updateFieldOff = (index) => {
      const dayId = route.params.dayId
      const subject = subjectField.value
      updateTodo({ index, dayId, subject })
      updateField.value = false
    }
    
    const onClickOutside = (event) => {
      const $fieldOff = document.querySelector('#fieldOff')
      $fieldOff.click()
    }

    return {
      CheckRequest,
      DivCheckRequest,
      deleteTodoRequest,
      updateField,
      updateFieldOn,
      subjectField,
      updateFieldOff,
      onClickOutside
    }
  }
}
</script>

<style scoped>
  .todo-card-container {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .todo-card-item {
    display: flex;
  }
  span {
    padding: 0px 5px;
  }
  .todoCheck {
    color: gray;
    text-decoration: line-through;
  }
  i {
    cursor: pointer;
  }
</style>