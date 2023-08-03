import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'

export const useBebidasStore = defineStore('bebidas', () => {

    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    const recetas = ref([])

    // "function ()", no es necesario callback "() =>" y se manda a llamar en auto por el hook onMounted.
    onMounted(async () => {
        const { data: {drinks}} = await APIService.obtenerCategorias()
        categorias.value = drinks
    })

    async function obtenerRecetas() {
        const { data: {drinks}} = await APIService.buscarRecetas(busqueda)
        recetas.value = drinks
    }

    async function seleccionarBebida(id) {
        const { data: {drinks}} = await APIService.buscarReceta(id)
        console.log(drinks[0])
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas,
        seleccionarBebida,
    }
})