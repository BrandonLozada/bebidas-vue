import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBebidasStore = defineStore('bebidas', () => {

    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })

    // function (), no es necesario callback y se manda a llamar en auto por el hook onMounted.
    onMounted(async () => {
        const { data: {drinks}} = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')

        categorias.value = drinks
    })

    function obtenerRecetas() {
        console.log('Consultando API...')
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
    }
})