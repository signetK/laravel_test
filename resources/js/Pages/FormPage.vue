<script setup>
import {useRouter} from 'vue-router';
import {useTodoStore} from '../Stores/student';
const router = useRouter();
const todo = useTodoStore();

</script>

<template>
    <h1 class="text-center py-10 font-bold w-full bg-blue-400 text-4xl ">FORM TO-DO LIST</h1>
    <div class="mb-2 justify-items-center mt-10">
        <table class="text-center border-b shadow-lg bg-gray-100 ">
             <tr>    
                <td class="px-2 py-4 border"> 
                    Add To-do:  <input type="text" class="border" v-model="todo.name"> 
                </td>

                <td class="px-2 py-4 border"> 
                    Add Date:  <input type="date" class="border" v-model="todo.date"> 
                </td>
                
                <!-- Submit Button -->
                <td class="px-2 py-4 border"> 
                    <button @click="todo.addTodo()" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900">Submit</button>
                </td>
            </tr>
            
        </table>
        <button @click="router.push('/')" class="mt-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900">Back</button>
    </div>
    
    </template>



