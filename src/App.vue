<template>
  <div>
    <h1>Todo App</h1>
    <div>
      <label for="todo-control">할 일 작성</label>
      <div>
        <input
          id="todo-control"
          type="text"
          placeholder="할 일을 작성해주세요"
          :value="text"
          @input="handleInput"
        />
        <button type="button" @click="handleClickAddTodo">추가하기</button>
      </div>
    </div>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");

const handleInput = (event) => {
  text.value = event.target.value;
};

const newId = ref(0);
const todoList = ref([]);

const handleClickAddTodo = () => {
  todoList.value.push({
    id: newId.value,
    text: text.value,
  });
  newId.value += 1;
  text.value = "";
};
</script>
