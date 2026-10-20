import {ref} from 'vue'

interface ToastNotifications{
    id:number,
    message:string 
}

const Notifications = ref<ToastNotifications[]>([])

const addToastNotifications = (message:string)=>{
    const id = Date.now();

    Notifications.value.push({
        id,
        message,
    })

    setTimeout(()=> removeToastNotifications(id),5000)
}
const removeToastNotifications = (id:number)=>{
    Notifications.value = Notifications.value.filter((n)=>n.id != id)

}

export function useToastNotifications(){
    return {Notifications,addToastNotifications,removeToastNotifications}
}