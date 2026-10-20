

<template>
   <div>
      <nav>
         <ul class="flex justify-center">
            <li v-for="tab in tabs" :key ="tab.key">
               <TabButton @click="currentTab =tab.key" :tab="tab" :current-tab="currentTab"></TabButton>
            </li>
         </ul>
      </nav>
      
      <FadeTransition>
         <KeepAlive>
         <component :is="currActiveComponent"  :key="currentTab"></component>
         </KeepAlive>
      </FadeTransition>
      <ToastNotifications></ToastNotifications>
   </div>
  
</template>







<script setup lang="ts">
import {computed, ref} from 'vue';
import { Tab,Tabkey } from './type';
import TabButton from './components/TabButton.vue';
import GeneralSettings from './components/GeneralSettings.vue';
import NotificationsSeettings from './components/NotificationsSeettings.vue';
import PrivacySettings from './components/PrivacySettings.vue';
import FadeTransition from './components/FadeTransition.vue';
import ToastNotifications from './components/ToastNotifications.vue';

const currentTab = ref<Tabkey>('General')

const tabs:Tab[]=[
   {
      key:'General',
      lable:'General',
      component:GeneralSettings
   },
    {
      key:'Notifications',
      lable:'Notifications',
      component:NotificationsSeettings
   },
    {
      key:'Privacy',
      lable:'Privacy',
      component:PrivacySettings

   },
]

const currActiveComponent = computed(() => {
  const activeTab = tabs.find((tab) => {
    return tab.key === currentTab.value
  })

  return activeTab?.component
})

</script>







<style scoped>
  

</style>