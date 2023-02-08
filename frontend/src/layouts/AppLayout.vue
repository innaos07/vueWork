<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup>
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppLayoutDefault from './AppLayoutDefault.vue'

const route = useRoute()
const layout = shallowRef(null)
console.log(' start layout', layout.value  )
console.log('route',route, route.meta.layout)

// Наблюдаем за изменением маршрута
watch(
  () => route.meta,
    async meta => {
      try {
        // Пробуем найти компонент из свойства meta и динамически импортировать его
        const component = await import(`./${meta.layout}.vue`) 

        layout.value = component?.default || AppLayoutDefault

      } catch (e) {
        console.log(meta.layout)
        // Если компонент не найден, добавляем шаблон по умолчанию
        layout.value = AppLayoutDefault
      }
    }
)

console.log('layout', layout )

</script>

<style lang="scss" scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>