import {ref,watch} from 'vue'

const init=<T>(key:string ,defaults:T) =>{
    const stored = localStorage.getItem(key)
     return stored != null ? JSON.parse(stored):defaults
}

interface generalSettings{
    username:string,
    email:string,
    about:string,
    gender:'male',
    country:'Bangladesh'

}

const general = ref<generalSettings>(
    init<generalSettings>('general',{
    username:'',
    email:'',
    about:'',
    gender:'male',
    country:'Bangladesh'
}),
)

watch(general,(value)=>localStorage.setItem('general',JSON.stringify(value)),{deep:true})


interface notificationsSettings{
    email:boolean,
    sms:boolean

}

const notifications = ref<notificationsSettings>(
    init<notificationsSettings>('notifications',{
    email:true,
    sms:false  
}),
)

watch(notifications,(value)=>localStorage.setItem('notifications',JSON.stringify(value)),{deep:true})

type Visibility = 'public'| 'private'

interface privacySettings{
    searchIndexing:boolean,
    visibility:Visibility

}

const privacy = ref<privacySettings>(
    init<privacySettings>('privacy',{
      searchIndexing:false,
      visibility:'public'
}),
)


watch(privacy,(value)=>localStorage.setItem('privacy',JSON.stringify(value)),{deep:true})

export function useSettings(){
    return {general,notifications,privacy}
}