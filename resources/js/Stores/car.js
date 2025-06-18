import {defineStore} from 'pinia';
import router from '../router';
import axios from "axios";
import Swal from 'sweetalert2';

export const useCarStore = defineStore('car', {
    state: () => {
        return { 
            cars: [],
            id:  null,
            manufacturer: '',
            modelname: '',
            modelyear: '',
            search: '',
        };
    },

    actions: {
        async addCar() {

            if (!this.manufacturer || !this.modelname || !this.modelyear) {
                Swal.fire({
                    icon: 'warning',
                    title: 'All fields are required',
                });
                return;
            }

            try { 
                await axios.post('/add-cars', {
                    manufacturer: this.manufacturer,
                    modelname: this.modelname,
                    modelyear: this.modelyear,
                })
                .then((response) => {
                    console.log(response)
                    Swal.fire({
                        title: "Car Added!",
                        icon: 'success'
                    });
                    router.push('/')
                    this.manufacturer = ''
                    this.modelname = ''
                    this.modelyear = ''
                });
            } catch (err) {
                console.error('Failed to add car:', err);
            }
        },

        async getCars(search = null) {
            try {
                var response = await axios.post("/cars", {search});
                this.cars = response.data;
            } catch (error){
                console.log(error);
            }
        },

        async delCar(id) {
            Swal.fire({
                title: "Delete this car?",
                showDenyButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Don't`,
                customClass: {
                confirmButton: 'ml-5 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700',
                denyButton: 'ml-5 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600',
                },
                buttonsStyling: false
            })
            .then((result) => {
            if (result.isConfirmed) {
                axios.post('/delete-cars/' + id).then (() => {
                    Swal.fire("Deleted!", "", "success");
                    this.getCars();
                })
            } else if (result.isDenied) {
                Swal.fire("Car not Deleted.", "", "info");
            }
            }); 
            
        },

        async editCars(id) {
            Swal.fire({
                title: "Update this list?",
                showDenyButton: true,   
                confirmButtonText: "Update",
                denyButtonText: `Don't`,
                customClass: {
                    confirmButton: 'ml-5 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700',
                    denyButton: 'ml-5 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600',
                },
                buttonsStyling: false
            })
            .then((result) => {
            if (result.isConfirmed) {
                    axios.post('/edit-car/' + id, {
                    manufacturer: this.manufacturer,
                    modelname: this.modelname,
                    modelyear: this.modelyear,
                });
                Swal.fire("Updated!", "", "success");
                router.push('/');
                this.manufacturer = ''
                this.modelname = ''
                this.modelyear = ''
            } else if (result.isDenied) {
                Swal.fire("List not updated.", "", "info");
            }
            });
        }
    },
})