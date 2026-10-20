<template>

    <div>
    <h2 class=" mt-9 text-center mb-4 text-xl font-semibold">Privacy</h2>

  <form class="w-[500px] mx-auto space-y-4" @submit.prevent>
    <label class="flex items-center gap-1 text-bg">
      <input type="checkbox"  v-model="privacy.searchIndexing">
      Search engine indexing 
    </label>


    <h2 class=" mt-9  mb-4 text-xl font-semibold">Visibility</h2>
      <label>
      <select class="w-full rounded-lg border border-gray-200 bg-transparent p-2" v-model="privacy.visibility">
        <option value="public"> Public </option>
        <option value="private"> Private </option>
       
     </select>
     </label>
    

    <button @click="save" class="w-full mt-4 rounded-md bg-blue-700 p-2 text-white hover:bg-blue-800">
      Save
    </button>


    </form>
   </div>

</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const {privacy} = useSettings();

import { useToastNotifications } from '@/composables/useToastNotifications';



const {addToastNotifications} = useToastNotifications();
const save =()=>{
  addToastNotifications('General Settings Saved')
}



</script>