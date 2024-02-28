import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

export default function IndexDaftarTamu({ auth, undangan }) {
    const hasTamu = undangan.daftar_tamus.length > 0;

    const handleDelete = (e)=>{
        if(confirm('Yakin ingin hapus?')){
            router.delete(route('daftar-tamu.destroy',e))
        }
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Dashboard
            //     </h2>
            // }
        >
            <Head title="Tamu Undangan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <label htmlFor="table-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="table-search"
                                    className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-0"
                                    placeholder="Cari Nama"
                                />
                            </div>
                            <div className="text-end">
                                <Link
                                    href={route(
                                        "daftar-tamu.create",
                                        undangan.slug
                                    )}
                                >
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Tambah Tamu Undangan
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama Tamu
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No Hp
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No Wa
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {hasTamu ? (
                                    undangan.daftar_tamus.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.nama}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.no_hp}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.no_wa}
                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-center">
                                                <Link
                                                    href={route(
                                                        "daftar-tamu.edit",
                                                        [
                                                            undangan.slug,
                                                            item.slug,
                                                        ]
                                                    )}
                                                >
                                                    <button
                                                        type="button"
                                                        className="px-6 py-2 text-xs focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900"
                                                    >
                                                        Edit
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={()=>handleDelete([undangan.slug,item.slug])}
                                                    type="button"
                                                    className="px-6 py-2 text-xs focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            className="px-6 py-4 text-center text-lg font-bold"
                                            colSpan={5}
                                        >
                                            Tidak ada tamu
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
