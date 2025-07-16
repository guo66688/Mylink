import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', {
    state: () => ({
        quecount: localStorage.getItem("quecount")?parseInt(localStorage.getItem('quecount')):0,   
        tokencount: localStorage.getItem("tokencount")?parseInt(localStorage.getItem('tokencount')):0,
        imgcount: localStorage.getItem("imgcount")?parseInt(localStorage.getItem('imgcount')):0    
    }),

    getters: {
        queInfo: (state) => {
            return state.quecount == 0 ? "未开始使用" : state.quecount
        }
    },
    actions: {
        addQue() {
            this.quecount += 1;
            localStorage.setItem("quecount",this.quecount)
        },
        addToken(num) {
            this.tokencount += num;
            localStorage.setItem("tokencount",this.tokencount)
        },
        addImg(num) {
            this.imgcount += num;
            localStorage.setItem("imgcount",this.imgcount)
        }
    }
})