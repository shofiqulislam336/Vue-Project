<template>
<button @click="$emit('click')" :class="{'p-4 border-b  -mx-px focus:outline-none': true, 'border-b-transparent':!isActive, 'border-b-blue-500 text-blue-500':isActive}"> {{ tab.lable }}</button>
</template>


<script setup lang="ts">
import { Tab } from '@/type';
import { computed } from 'vue';
const prop = defineProps<{
    currentTab:string,
    tab:Tab
}>()

const isActive = computed(()=>prop.currentTab === prop.tab.key)

defineEmits<{
    click:[]
}>()
</script>
  

