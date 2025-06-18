<?php

namespace App\Http\Controllers;
use App\Models\CarModel;

use Illuminate\Http\Request;

class CarController extends Controller
{
    public function getAllCars(Request $request) {
        if ($request->search){
            return CarModel::
            where('manufacturer', 'like', "%$request->search%")
            ->orWhere('modelname', 'like', "%$request->search%")
            ->orWhere('modelyear', 'like', "%$request->search%")->get();
        }
        else {
            return CarModel::all();
        }
       
    }

    public function addRowCars(Request $request) {
        $validated = $request->validate ([
            'manufacturer' => 'required|string',
            'modelname' => 'required|string',
            'modelyear' => 'required|date',
        ]);

        $car = new CarModel;

        $car->manufacturer = $validated['manufacturer'];
        $car->modelname = $validated['modelname'];
        $car->modelyear = $validated['modelyear'];

        $car -> save();

        return response()->json ([
            'status' => 201,
            'msg' => 'Car created successfully',
        ]);
    }

    public function delCar($id) {
        $car = CarModel::find($id);

        $car -> delete();
    }

    public function getCar($id) {
        $car = CarModel::find($id);

        return $car;
    }

     public function editRowCar($id, Request $request) {
        $validated = $request->validate ([
            'manufacturer' => 'required|string',
            'modelname' => 'required|string',
            'modelyear' => 'required|date',
        ]);

        $car = CarModel::find($id);

        $car->manufacturer = $validated['manufacturer'];
        $car->modelname = $validated['modelname'];
        $car->modelyear = $validated['modelyear'];

        $car -> save();

        return response()->json ([
            'status' => 201,
            'msg' => 'Car edited successfully',
        ]);
    }
}
