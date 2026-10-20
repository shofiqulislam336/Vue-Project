<template>
<div>
    <h2 class=" mt-9 text-center mb-4 text-xl font-semibold">Notifications</h2>

  <form class="w-[500px] mx-auto space-y-4" @submit.prevent>
    <label class="flex items-center gap-1 text-bg">
      <input type="checkbox" name="email" v-model="notifications.email">
      Email notifications
    </label>

    <label class="flex items-center gap-1 text-bg">
      <input type="checkbox" name="sms" v-model="notifications.sms">
      SMS Notifications
    </label>

    <button @click="save" type="submit"  class="w-full rounded-md bg-blue-700 p-2 text-bg text-white hover:bg-blue-800">
      Save
    </button>
  </form>

</div>
</template>


<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const {notifications} = useSettings();

import { useToastNotifications } from '@/composables/useToastNotifications';


const {addToastNotifications} = useToastNotifications();
const save =()=>{
  addToastNotifications('General Settings Saved')
}



</script>