import { defineStore } from "pinia";

const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "buy some mil", isFav: false },
            { id: 2, title: "play Gloomhaven", isFav: true },
        ],

    })
});

export default useTaskStore;