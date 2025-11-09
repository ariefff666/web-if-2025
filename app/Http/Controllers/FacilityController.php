<?php

namespace App\Http\Controllers;

use App\Models\Facilities;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class FacilityController extends Controller
{
    public function index()
    {
        $facilities = Facilities::all();
        return Inertia::render('Admin/Facilities/Index', [
            'facilities' => $facilities,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Facilities/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'facilities_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $facility = new Facilities($request->except('facilities_image'));

        if ($request->hasFile('facilities_image')) {
            $path = $request->file('facilities_image')->store('images/facilities', 'public');
            $facility->facilities_image_path = Storage::url($path);
        }

        $facility->save();

        return Redirect::route('admin.facilities.index')->with('success', 'Fasilitas berhasil ditambahkan.');
    }

    public function edit(Facilities $facility)
    {
        return Inertia::render('Admin/Facilities/Edit', [
            'facility' => $facility,
        ]);
    }

    public function update(Request $request, Facilities $facility)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'facilities_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $facility->fill($request->except('facilities_image'));

        if ($request->hasFile('facilities_image')) {
            if ($facility->facilities_image_path) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $facility->facilities_image_path));
            }
            $path = $request->file('facilities_image')->store('images/facilities', 'public');
            $facility->facilities_image_path = Storage::url($path);
        }

        $facility->save();

        return Redirect::route('admin.facilities.index')->with('success', 'Fasilitas berhasil diperbarui.');
    }

    public function destroy(Facilities $facility)
    {
        if ($facility->facilities_image_path) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $facility->facilities_image_path));
        }
        $facility->delete();

        return Redirect::route('admin.facilities.index')->with('success', 'Fasilitas berhasil dihapus.');
    }
}
