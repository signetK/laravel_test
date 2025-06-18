import {defineStore} from 'pinia';
import router from '../router';
import axios from "axios";
import Swal from 'sweetalert2';

export const useTodoStore = defineStore('todo', {
    state: () => {
        return { 
            todos: [],
            id:  null,
            name: '',
            date: '',
        };
    },

    actions: {
        async addTodo() {
            try { 
                await axios.post('/add-todos', {
                    name: this.name,
                    date: this.date,
                })
                .then((response) => {
                    console.log(response)
                    alert(response.data.msg);
                    router.push('/')
                    this.name = ''
                    this.date = ''
                })
            } catch (err) {
                console.error('Failed to add todo:', err)
            }
        },

        async getTodos() {
            try {
                var response = await axios.post("/todos");
                this.todos = response.data;
            } catch (error){
                console.log(error);
            }
        },

        async delTodo(id) {
            Swal.fire({
                title: "Delete this list?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Don't`,
                customClass: {
                confirmButton: 'ml-5 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700',
                denyButton: 'ml-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
                cancelButton: 'ml-5 bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500',
                },
                buttonsStyling: false
            })
            .then((result) => {
            if (result.isConfirmed) {
                axios.post('/delete-todos/' + id).then (() => {
                    Swal.fire("Deleted!", "", "success");
                    this.getTodos();
                })
            } else if (result.isDenied) {
                Swal.fire("List not Deleted.", "", "info");
            }
            }); 
            
        },

        async editTodos(id) {
            Swal.fire({
                title: "Update this list?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Update",
                denyButtonText: `Don't`,
                customClass: {
                    confirmButton: 'ml-5 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700',
                    denyButton: 'ml-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
                    cancelButton: 'ml-5 bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500',
                },
                buttonsStyling: false
            })
            .then((result) => {
            if (result.isConfirmed) {
                    axios.post('/edit/' + id, {
                    name: this.name,
                    date: this.date,
                });
                Swal.fire("Updated!", "", "success");
                router.push('/');
                this.name = ''
                this.date = ''
            } else if (result.isDenied) {
                Swal.fire("List not updated.", "", "info");
            }
            });
        }
    },
})