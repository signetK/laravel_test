<script setup>
    import axios from "axios";
    import { ref , watch } from "vue";
    import { useRouter } from "vue-router"; 
    import { useCarStore } from "../Stores/car";
    import moment from 'moment';
    import { storeToRefs } from "pinia";
    
    const carValues = useCarStore();
    const {search} = storeToRefs(carValues);
    
    watch(search, async(searchVal) => {
        if (searchVal){
            console.log(searchVal);
            carValues.getCars(searchVal);
        } else {
            carValues.getCars();
        }

    })

    const router = useRouter();  

    const goAdd = () => {
        router.push("/addcar");
    };

    const goView = (id) => {
        router.push({path: '/viewcar/' + id});
    };

    const goEdit = (id) => {
        router.push({path: '/editcar/' + id});
    };
    

    carValues.getCars();
</script>

<template>
    <h1 class="text-white text-center py-10 font-bold w-full bg-green-400 text-4xl">CAR MANAGER</h1>
   
    <div class="justify-items-center">    
        <button @click="goAdd()" class='mt-3  mb-3 mr-5 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900'>Add Car </button>
       
        Search:<input type="text" class="ml-1 border" v-model="search"> 


        <table class="border-b shadow-lg bg-gray-100 mb-30">
            <tr class="border">
                <th class="px-30 py-4 "> Manufacturer </th>
                <th class="px-30 py-4 "> Model </th>
                <th class="px-30 py-4 "> Model Year</th>
                <th class="px-30 py-4 "> Action </th>
            </tr>
            
            <tbody class="text-center border">
                <tr v-for="todo in carValues.cars" :key="todo.id" class="flex-wrap">    
                    <td class="px-2 py-4 border"> {{ todo.manufacturer}}</td>
                    <td class="px-2 py-4 border"> {{ todo.modelname }} </td>
                    <td class="px-2 py-4 border"> {{ moment(todo.modelyear).year()}} </td>
                    <td class="px-2 py-4 border">   
                        <!-- view Button -->
                        <button @click="goView(todo.id)" type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900 ml-5">View</button>
                        <!-- Del Button -->
                        <button @click="carValues.delCar(todo.id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-5">Delete</button>
                        <!-- Edit Button -->
                        <button  @click="goEdit(todo.id)" type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ml-5">Edit</button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    <footer>
        <div class="fixed inset-x-0 bottom-0 text-white text-center py-10 font-bold w-full bg-green-400 text-4xl "></div>
    </footer>
</template>