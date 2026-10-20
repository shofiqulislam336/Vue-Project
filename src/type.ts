import { Component } from "vue";

export type Tabkey = 'General'|'Notifications'|'Privacy';
export interface Tab{
        key:Tabkey,
        lable:string,
        component:Component
}