<script setup>
import {useRouter} from 'vue-router';
import {useRoute} from 'vue-router';
import { ref } from 'vue';
import axios from "axios";

const router = useRouter();
const route = useRoute();

const carValues = ref([]);

const goCarHome = () => {
    router.push('/')
}

async function getCar() {
        try {
            var response = await axios.get("/cars/" + route.params.carId);
            carValues.value = response.data;
        } catch (error){
            console.log(error);
        }
}

getCar();

</script>

<template>
    <h1 class="text-white text-center py-10 font-bold w-full bg-green-400 text-4xl">VIEW TO-DO LIST</h1>

    <div class="justify-items-center">    

        <table class="text-center border-b shadow-lg bg-gray-100 mt-18">
            <tr class="border">
                <th class="px-30 py-4 "> Manufacturer </th>
                <th class="px-30 py-4 "> Model Name </th>
                <th class="px-30 py-4 "> Model Year </th>
            </tr>
            <tbody class="border">
                <tr >    
                    <td class="px-2 py-4 border">{{ carValues.manufacturer }} </td>
                    <td class="px-2 py-4 border">{{ carValues.modelname }}  </td>
                    <td class="px-2 py-4 border">{{ carValues.modelyear }}  </td>
                </tr>

            </tbody>

            <tbody>
                <tr class="border">
                    <th class="px-30 py-4 "> Created At </th>
                    <th class="px-30 py-4 "> Updated At </th>
                </tr>
                <tr>
                    <td class="px-2 py-4 border">{{ carValues.created_at }}  </td>
                    <td class="px-2 py-4 border">{{ carValues.updated_at }}  </td>
                </tr>
            </tbody>
        </table>
        <button @click="goCarHome" class="mt-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900">Back</button>
    </div>
     <footer>
        <div class="absolute inset-x-0 bottom-0 text-white text-center py-10 font-bold w-full bg-green-400 text-4xl "></div>
    </footer>
    
    </template>