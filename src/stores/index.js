import { defineStore, storeToRefs } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        collapsed: false,
        SIDEBAR_WIDTH: 180,
        SIDEBAR_WIDTH_COLLAPSED: 38,
    }),
    getters: {
        sidebarWidth() {
            return `${this.collapsed ? this.SIDEBAR_WIDTH_COLLAPSED : this.SIDEBAR_WIDTH}px`
        }
    },
    actions: {
        toggleSidebar() {
            this.collapsed = !this.collapsed
        }
    }
})