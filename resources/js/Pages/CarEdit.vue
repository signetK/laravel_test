<script setup>
import {useRoute} from 'vue-router';
import {useRouter} from 'vue-router';
import {useCarStore} from '../Stores/car';
import axios from "axios";

const route = useRoute();
const router = useRouter();
const car = useCarStore();

async function getCar() {
    try {
        var response = await axios.get("/cars/" + route.params.carId);
        car.id = response.data.id;
        car.manufacturer = response.data.manufacturer;
        car.modelname = response.data.modelname;
        car.modelyear = response.data.modelyear;
    } catch (error){
        console.log(error);
    }
}

getCar();

</script>

<template>
    <h1 class="text-white text-center py-10 font-bold w-full bg-green-400 text-4xl ">EDIT TO-DO LIST</h1>
    <div class="mb-2 justify-items-center mt-25">
        <table class="text-center border-b shadow-lg bg-gray-100 ">
             <tr>    
                <td class="px-2 py-4 border"> 
                    Select Manufacturer:  <select class="border" v-model="car.manufacturer"> 
                        <option value="Toyota"> Toyota </option>
                        <option value="Ford"> Ford </option>
                        <option value="Honda"> Honda </option>
                        <option value="Chevrolet"> Chevrolet </option>
                    </select>
                </td>

                <td class="px-2 py-4 border"> 
                    Model Name:  <input type="text" class="border" v-model="car.modelname"> 
                </td>

                <td class="px-2 py-4 border"> 
                    Model Year:  <input type="date" class="border" v-model="car.modelyear"> 
                </td>

                <!-- Submit Button -->
                <td class="px-2 py-4 border"> 
                    <button @click="car.editCars(car.id)" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900">Submit</button>
                </td>
            </tr>
            
        </table>
        <button @click="router.push('/')" class="mt-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-purple-900">Back</button>
    </div>
     <footer>
        <div class="absolute inset-x-0 bottom-0 text-white text-center py-10 font-bold w-full bg-green-400 text-4xl "></div>
    </footer>
    
    </template>