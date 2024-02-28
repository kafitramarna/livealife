<?php

use App\Http\Controllers\DaftarTamuController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PresensiUndanganController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UndanganController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/my-undangan', [UndanganController::class, 'index'])->name('my-undangan.index');
    Route::get('/my-undangan/create', [UndanganController::class, 'create'])->name('my-undangan.create');
    Route::post('/my-undangan/store', [UndanganController::class, 'store'])->name('my-undangan.store');
    Route::get('/my-undangan/{undangan:slug}/edit',[UndanganController::class,'edit'])->name('my-undangan.edit');
    Route::put('/my-undangan/{undangan:slug}/update',[UndanganController::class,'update'])->name('my-undangan.update');
    Route::delete('/my-undangan/{undangan:slug}/delete',[UndanganController::class,'destroy'])->name('my-undangan.destroy');
    Route::get('/my-undangan/{undangan:slug}',[UndanganController::class,'show'])->name('my-undangan.show');

    Route::get('/my-undangan/{undangan:slug}/daftar-tamu', [DaftarTamuController::class, 'index'])->name('daftar-tamu.index');
    Route::get('/my-undangan/{undangan:slug}/daftar-tamu/create', [DaftarTamuController::class, 'create'])->name('daftar-tamu.create');
    Route::post('/my-undangan/{undangan:slug}/daftar-tamu/store', [DaftarTamuController::class, 'store'])->name('daftar-tamu.store');
    Route::get('/my-undangan/{undangan:slug}/daftar-tamu/{daftar_tamu:slug}/edit', [DaftarTamuController::class, 'edit'])->name('daftar-tamu.edit');
    Route::put('/my-undangan/{undangan:slug}/daftar-tamu/{daftar_tamu:slug}/update', [DaftarTamuController::class, 'update'])->name('daftar-tamu.update');
    Route::delete('/my-undangan/{undangan:slug}/daftar-tamu/{daftar_tamu:slug}/delete', [DaftarTamuController::class, 'destroy'])->name('daftar-tamu.destroy');

    Route::get('/my-undangan/{undangan:slug}/presensi-undangan',[PresensiUndanganController::class, 'index'])->name('presensi-undangan.index');
    Route::put('/my-undangan/{undangan:slug}/presensi-undangan/{daftar_tamu:slug}',[PresensiUndanganController::class, 'update'])->name('presensi-undangan.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/tes', function () {
        return Inertia::render('Tes');
    })->name('tes');
});
require __DIR__.'/auth.php';