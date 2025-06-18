<script setup>
import {useRouter} from 'vue-router';
import {useRoute} from 'vue-router';
import { ref } from 'vue';
import axios from "axios";

const router = useRouter();
const route = useRoute();

const todoValues = ref([]);

const goHome = () => {
    router.push('/')
}

async function getTodo() {
        try {
            var response = await axios.get("/todos/" + route.params.viewId);
            todoValues.value = response.data;
        } catch (error){
            console.log(error);
        }
}

getTodo();

</script>

<template>
    <h1 class="text-center py-10 font-bold w-full bg-blue-400 text-4xl">VIEW TO-DO LIST</h1>

    <div class="justify-items-center">    

        <table class="text-center border-b shadow-lg bg-gray-100 mt-10">
            <tr class="border">
                <th class="px-30 py-4 "> Name </th>
                <th class="px-30 py-4 "> Date </th>
                <th class="px-30 py-4 "> Created at </th>
                <th class="px-30 py-4 "> Updated at </th>
            </tr>
            
            <tbody class="border">
                <tr >    
                    <td class="px-2 py-4 border">{{ todoValues.name }} </td>
                    <td class="px-2 py-4 border">{{ todoValues.date }}  </td>
                    <td class="px-2 py-4 border">{{ todoValues.created_at }}  </td>
                    <td class="px-2 py-4 border">{{ todoValues.updated_at }}  </td>
                </tr>

            </tbody>
        </table>
        <button @click="goHome" class="mt-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900">Back</button>
    </div>
    </template>

