<template>
    <task-card-creator
        v-if="task"
        :task-to-edit="task"
    />
  </template>
  
  <script setup>
  import TaskCardCreator from '../modules/tasks/components/TaskCardCreator.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { createNewDate } from '../common/helpers'
  import { useTasksStore } from '@/store'

  const tasksStore = useTasksStore()
  
  const route = useRoute()
  const router = useRouter()
  
  const task = tasksStore.tasks.find(task => +task.id === +route.params.id)

  
  // Находим задачу из массива задач по id из строки URL
  
  if (task) {
    const taskDate = task.dueDate
    task.dueDate = taskDate ? new Date(taskDate) : createNewDate()
  } else {
    // Перенаправляем на главную страницу, если задача не найдена
    router.push('/')
  }
  </script>