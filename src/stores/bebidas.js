import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBebidasStore = defineStore('bebidas', () => {

    const categorias = ref([])

    onMounted(async() => {
        const data = await axios.get('www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        console.log(data)
    })


    return {
        categorias,
    }
})