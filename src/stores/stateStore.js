import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNewStore } from './NewStore'

export const useStateStore = defineStore('stateStore', () => {
    const NewStore = useNewStore()
    const state = ref({
        activeTab: 'Top',
        type: 'guonei',
    })
    const setActiveTab = (tab) => {
        if(tab === 'Top'){
            NewStore.NewListPage(1, 'top')
        }else if(tab === 'Classify'){
            NewStore.NewListPage(1, state.value.type)
        }
        state.value.activeTab = tab;
    }
    const setType = (type) => {
        if(state.value.activeTab === 'Classify'){
            NewStore.NewListPage(1, type)
        }
        state.value.type = type;
    }
    const getType = () => {
        return state.value.type;
    }
    const getActiveTab = () => {
        return state.value.activeTab;
    }
    return { state, setActiveTab, getActiveTab, setType, getType }
})