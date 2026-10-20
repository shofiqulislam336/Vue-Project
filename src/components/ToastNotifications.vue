<template>
<Teleport to="body">
    <ol class="fixed right-4 top-4 z-50 w-100 space-y-2">
        <li v-for="Notification in Notifications" :key="Notification.id"
        class="flex items-center justify-between gap-3 rounded-lg border-l-4  bg-[#b6b6b6] px-4 py-3 shadow-lg">
            <div class="p-6 font-semibold text-[20px]">
                {{ Notification.message }}
            </div>
            <button class="rounded px-2 py-1 text-[20px] font-medium hover:bg-[#eee6e6]" @click="removeToastNotifications(Notification.id)"> ok </button>
        </li>
    </ol>

</Teleport>


</template>

<script setup lang="ts">
import { useToastNotifications } from '@/composables/useToastNotifications';

const {Notifications,removeToastNotifications} = useToastNotifications();


</script>