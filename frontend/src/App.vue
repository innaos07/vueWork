<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { normalizeTask } from './common/helpers';
import tasks from './mocks/tasks.json';
import users from './mocks/users.json';
import { AppLayout } from './layouts';
import { useTasksStore, useColumnsStore, useUsersStore } from './store';

const tasksStore = useTasksStore()
const usersStore = useUsersStore()
const columnsStore = useColumnsStore()

void tasksStore.fetchTasks()
// Загружаем пользователей
// void usersStore.fetchUsers()
// Загружаем колонки
void columnsStore.fetchColumns()


// const state = reactive({
//   tasks: tasks.map(task => normalizeTask(task)),
//   filters: {
//     search: '',
//     users: [],
//     statuses: []
//   }
// })

// console.log(state)

// const filteredTasks = computed(() => {
//   const filtersAreEmpty = Object.values(state.filters)
//       .every(value => !value.length)
//   if (filtersAreEmpty) {
//     // Вернуть все задачи, если фильтры не применены
//     return state.tasks
//   }
  
//   // Применить фильтр по поиску
//   const searchFilter = task => {
   
//    return task.title
//       .toLowerCase()
//       .includes(state.filters.search.toLowerCase().trim())
//     }

//   // Применить фильтр по пользователям
//   const usersFilter = task => {
//     // console.log(task)
//     return state.filters.users
//       .some(userId => userId === task.userId)
//     }

//   // Применить фильтр по статусам
//   const statusesFilter = task => state.filters.statuses
//       .some(el => el === task.status || el === task.timeStatus)

//   // Обработать задачи в соответствии с фильтрами
//   return state.tasks.filter(task => {
//     let result = {
//       search: searchFilter,
//       users: usersFilter,
//       statuses: statusesFilter
//     }
//     console.log(Object.entries(result))
//     return Object.entries(result)
//         .every(([key, callback]) => {
//           console.log(task.id,'key', key, 'state.filters[key]' , state.filters[key], 'calback',callback(task))
//            return !state.filters[key].length || callback(task)
//           })
//   })
// })

// console.log('filteredTasks',filteredTasks)

// // Обновить сортировку задач
// function updateTasks (tasksToUpdate) {
//   tasksToUpdate.forEach(task => {
//     const index = state.tasks.findIndex(({ id }) => id === task.id)
//     // findIndex вернёт элемент массива или -1
//     // Используем bitwise not для определения, если index === -1
//     // ~-1 вернёт 0, а значит false
//     if (~index) {
//       state.tasks.splice(index, 1, task)
//     }
//   })
// }

// function applyFilters ({ item, entity }) {
//   console.log('applyFilters',item, entity, state.filters[entity] )
//   if (!Array.isArray(state.filters[entity])) {
//     console.log('lala')
//     state.filters[entity] = item
//   } else {
//     const resultValues = [...state.filters[entity]]
//     console.log('resultValues', resultValues)
//     const itemIndex = resultValues.findIndex(el => el === item)
//     console.log(resultValues, itemIndex, ~itemIndex)
//     ~itemIndex
//         ? resultValues.splice(itemIndex, 1)
//         : resultValues.push(item)
//     state.filters[entity] = resultValues
//     console.log('end', state.filters[entity])
//   }
// }

// function getTaskUserById (id) {
//   return users.find(user => user.id === id)
// }

// // Создаём новую задачу и добавляем в массив задач
// function addTask (task) {
//   // Нормализуем задачу
//   const newTask = normalizeTask(task)
//   // Добавляем идентификатор, последний элемент в списке задач
//   // После подключения сервера идентификатор будет присваиваться сервером
//   newTask.id = state.tasks.length + 1
//   // Добавляем задачу в конец списка задач в бэклоге
//   newTask.sortOrder = state.tasks.filter(task => !task.columnId).length
//   // Если задаче присвоен исполнитель, то добавляем объект пользователя в задачу
//   // Это будет добавлено сервером позже
//   if (newTask.userId) {
//     newTask.user = { ...getTaskUserById(newTask.userId) }
//   }
//   // Добавляем задачу в массив
//   state.tasks = [...state.tasks, newTask]
// }

// function editTask (task) {
//   const index = state.tasks.findIndex(({ id }) => task.id === id)
//   if (~index) {
//     const newTask = normalizeTask(task)
//     if (newTask.userId) {
//       newTask.user = { ...getTaskUserById(newTask.userId) }
//     }
//     state.tasks.splice(index, 1, newTask)
//   }
// }

// function deleteTask (id) {
//   state.tasks = state.tasks.filter(task => task.id !== id)
// }
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>