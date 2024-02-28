import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function CreateUndangan({ auth}) {
    const { data, setData, post, processing, errors} = useForm({
        pengantin_pria: "",
        pengantin_wanita: "",
        tempat_acara: "rumah",
        nama_gedung: "",
        alamat: "",
        kota: "",
        provinsi: "",
        tanggal_acara: "",
        jam_mulai_acara: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("my-undangan.store"), data);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Dashboard
            //     </h2>
            // }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                    Invitation Details
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Provide information for your invitation.
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="pengantin_pria"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nama Pengantin Pria
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pengantin_pria"
                                                id="pengantin_pria"
                                                value={data.pengantin_pria}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="ex. John Doe"
                                            />
                                            {errors.pengantin_pria && (
                                                <p className="text-red-500 text-sm">
                                                    The nama pengantin pria
                                                    field is required.
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="pengantin_wanita"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nama Pengantin Wanita
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pengantin_wanita"
                                                id="pengantin_wanita"
                                                value={data.pengantin_wanita}
                                                onChange={handleChange}
                                                placeholder="ex. Jane Doe"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.pengantin_wanita && (
                                                <p className="text-red-500 text-sm">
                                                    The nama pengantin wanita
                                                    field is required.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Tempat Acara
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="tempat_acara"
                                                name="tempat_acara"
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value="rumah">Rumah</option>
                                                <option value="gedung">Gedung</option>
                                            </select>
                                        </div>
                                    </div>
                                    {data.tempat_acara === "gedung" && (
                                           <div className="sm:col-span-3">
                                           <label
                                               htmlFor="country"
                                               className="block text-sm font-medium leading-6 text-gray-900"
                                           >
                                               Nama Gedung
                                           </label>
                                           <div className="mt-2">
                                           <input
                                                   type="text"
                                                   name="nama_gedung"
                                                   id="nama_gedung"
                                                   value={data.nama_gedung}
                                                   onChange={handleChange}
                                                   placeholder="ex. Hotel Sriwijaya"
                                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                               />
                                               {errors.nama_gedung && (
                                                   <p className="text-red-500 text-sm">The nama gedung
                                                   field is required.</p>
                                               )}
                                            </div>
                                       </div>   
                                    )}
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="alamat"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Alamat
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="alamat"
                                                id="alamat"
                                                value={data.alamat}
                                                onChange={handleChange}
                                                placeholder="ex. Jl. Raya No. 1"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.alamat && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.alamat}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="kota"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Kota/Kabupaten
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="kota"
                                                id="kota"
                                                value={data.kota}
                                                onChange={handleChange}
                                                placeholder="ex. Kota Semarang/Kab. Semarang"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.kota && (
                                                <p className="text-red-500 text-sm">
                                                    The kota/kabupaten field is
                                                    required.
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="provinsi"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Provinsi
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="provinsi"
                                                id="provinsi"
                                                value={data.provinsi}
                                                onChange={handleChange}
                                                placeholder="ex. Jawa Tengah"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.provinsi && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.provinsi}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="date"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Tanggal Acara
                                        </label>
                                        <input
                                            id="tanggal_acara"
                                            name="tanggal_acara"
                                            type="date"
                                            value={data.tanggal_acara}
                                            min={new Date().toISOString().split("T")[0]}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        {errors.tanggal_acara && (
                                            <p className="text-red-500 text-sm">
                                                {errors.tanggal_acara}
                                            </p>
                                        )}
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="time"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Jam Mulai Acara
                                        </label>
                                        <input
                                            id="jam_mulai_acara"
                                            name="jam_mulai_acara"
                                            type="time"
                                            value={data.jam_mulai_acara}
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                        {errors.jam_mulai_acara && (
                                            <p className="text-red-500 text-sm">
                                                {errors.jam_mulai_acara}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <Link href={route('dashboard')}><button
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Cancel
                            </button>
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
