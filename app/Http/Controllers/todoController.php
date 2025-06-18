<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Todo;

class TodoController extends Controller
{
    public function getAllTodos(Request $request) {
        return Todo::all();
    }

    public function addRowTodos(Request $request) {
        $validated = $request->validate ([
            'name' => 'required|string',
            'date' => 'required|date',
        ]);

        $todo = new Todo;

        $todo->name = $validated['name'];
        $todo->date = $validated['date'];

        $todo -> save();

        return response()->json ([
            'status' => 201,
            'msg' => 'Todo created successfully',
        ]);
    }

    public function delTodo($id) {
        $todo = Todo::find($id);

        $todo -> delete();
    }

    public function getTodo($id) {
        $todo = Todo::find($id);

        return $todo;
    }

    public function editRowTodo($id, Request $request) {
        $validated = $request->validate ([
            'name' => 'required|string',
            'date' => 'required|date',
        ]);

        $todo = Todo::find($id);

        $todo->name = $validated['name'];
        $todo->date = $validated['date'];

        $todo -> save();

        return response()->json ([
            'status' => 201,
            'msg' => 'Todo edited successfully',
        ]);
    }
}
