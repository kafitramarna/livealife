<?php

namespace App\Http\Controllers;

use App\Models\Undangan;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard',[
            'undangan' => Undangan::where('users_id',auth()->id())->get()
        ]);
    }
    // public function create(){
    //     return Inertia::render('Dashboard/CreateUndangan');
    // }
}
