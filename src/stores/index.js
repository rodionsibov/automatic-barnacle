import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        collapsed: false,
        SIDEBAR_WIDTH: 180,
        SIDEBAR_WIDTH_COLLAPSED: 38,
    }),
    getters: {
        sidebarWidth: (state) => {
            return `${state.collapsed ? state.SIDEBAR_WIDTH_COLLAPSED : state.SIDEBAR_WIDTH}px`
        },
    },
    actions: {
        toggleSidebar() {
            this.collapsed = !this.collapsed
        }
    }
})