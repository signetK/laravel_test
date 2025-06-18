<script setup>
    import axios from "axios";
    import { ref } from "vue";
    import { useRouter } from "vue-router"; 
    import { useTodoStore } from "../Stores/student";

    const counter = useTodoStore();

    const router = useRouter();  

    counter.getTodos();

    const goForm = () => {
        router.push("/form");
    };

    const goView = (id) => {
        router.push({path: '/view/' + id});
    };

    const goEdit = (id) => {
        router.push({path: '/edit/' + id});
    };

    
</script>

<template>
    <h1 class="text-center py-10 font-bold w-full bg-blue-400 text-4xl">HOMEPAGE TO-DO LIST</h1>
   
    <body>
    <div class="justify-items-center">    
        <button @click="goForm" class='mt-5 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900 mb-10'>Add To-do </button>
       
        <table class="border-b shadow-lg bg-gray-100 ">
            <tr class="border">
                <th class="px-30 py-4 "> Name </th>
                <th class="px-30 py-4 "> Date </th>
                <th class="px-30 py-4 "> Action</th>
            </tr>
            
            <tbody class="text-center border">
                <tr v-for="todo in counter.todos" :key="todo.id" class="flex-wrap">    
                    <td class="px-2 py-4 border"> {{ todo.name }}</td>
                    <td class="px-2 py-4 border"> {{ todo.date }} </td>
                    <td class="px-2 py-4 border">
                        <!-- view Button -->
                        <button @click="goView(todo.id)" type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900 ml-5">View</button>
                        <!-- Del Button -->
                        <button @click="counter.delTodo(todo.id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-5">Delete</button>
                        <!-- Edit Button -->
                        <button @click="goEdit(todo.id)" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ml-5">Edit</button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    </body>
</template>