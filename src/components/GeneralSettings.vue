<template>
    <div>
     <h2 class="mt-3 mb-3 text-center text-xl font-semibold">General</h2>

  <form class="w-full max-w-[700px] mx-auto  space-y-6" @submit.prevent>
    <div>
      <label>Username</label>
      <input type="text" class="  mt-2 w-full rounded-lg border border-gray-200 p-2" v-model="general.username">
    </div>

    <div>
      <label>Email</label>
      <input type="email" class=" mt-2 w-full rounded-lg border border-gray-200 p-2" v-model="general.email">
    </div>

    <div>
      <label>About Me</label>
      <textarea rows="2" class=" mt-2 w-full rounded-lg border border-gray-200 p-2" v-model="general.about"></textarea>
    </div>

    <div>
      <p>Gender</p>
      <label class="block"><input type="radio" name="gender" value="male" v-model="general.gender"> Male</label>
      <label class="block"><input type="radio" name="gender" value="female" v-model="general.gender"> Female</label>
      <label class="block"><input type="radio" name="gender" value="other" v-model="general.gender"> Other</label>
    </div>

    <div>
      <label>Country</label>
      <select class="w-full rounded-lg border border-gray-200 bg-transparent p-2" v-model="general.country">
        <option>Bangladesh</option>
        <option >USA</option>
        <option >India</option>
      </select>
    </div>

    <button @click="save" class="w-full rounded-md bg-blue-700 p-2 text-white hover:bg-blue-800">
      Save
    </button>
  </form>
  </div>


</template>

<script setup ="ts">
import {ref} from 'vue';
import { useSettings } from '@/composables/useSettings';
import { useToastNotifications } from '@/composables/useToastNotifications';

const {general} = useSettings();

const {addToastNotifications} = useToastNotifications();
const save =()=>{
  addToastNotifications('General Settings Saved')
}



</script>