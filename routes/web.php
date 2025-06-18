<?php
use  App\Http\Controllers\SampleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\todoController;
use App\Http\Controllers\CarController;
// Route::get('/form', [SampleController::class, 'form']);
// Route::get('/test-me', [SampleController::class, 'testme']);

Route::post('/cars', [CarController::class, 'getAllCars']);
Route::post('/add-cars', [CarController::class, 'addRowCars']);
Route::post('/edit-car/{id}', [CarController::class, 'editRowCar']);
Route::get('/cars/{id}', [CarController::class, 'getCar']);
Route::post('/delete-cars/{id}', [CarController::class, 'delCar']);


// Route::post('/todos', [todoController::class, 'getAllTodos']);
// Route::post('/add-todos', [todoController::class, 'addRowTodos']);
// Route::post('/delete-todos/{id}', [todoController::class, 'delTodo']);
// Route::get('/todos/{id}', [todoController::class, 'getTodo']);
// Route::post('/edit/{id}', [todoController::class, 'editRowTodo']);


Route::get('/{vue_capture?}', function () {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');






    