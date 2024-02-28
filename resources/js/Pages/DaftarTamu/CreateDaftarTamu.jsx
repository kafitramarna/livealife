import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function CreateDaftarTamu({ auth, undangan }) {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        no_hp: "",
        no_wa: "",
        ceklis: false
        
    });
    // const [isSama,setIsSama] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("daftar-tamu.store", undangan.slug), data);
    };
    const handleCeklis=()=>{
        // setIsSama(!isSama)
        setData('ceklis',!data.ceklis)
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
                                    <div className="sm:col-span-6">
                                        <label
                                            htmlFor="nama"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nama Tamu
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="nama"
                                                id="nama"
                                                value={data.nama}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="ex. John Doe"
                                            />
                                            {errors.nama && (
                                                <p className="text-red-500 text-sm">
                                                    The nama tamu field is
                                                    required.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="no_hp"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nomor Hp
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="no_hp"
                                                id="no_hp"
                                                value={data.no_hp}
                                                onChange={handleChange}
                                                placeholder="ex. 081234567890"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.no_hp && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.no_hp}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="no_wa"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nomor WhatsApp
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="no_wa"
                                                id="no_wa"
                                                value= {data.no_wa}
                                                onChange={handleChange}
                                                placeholder="ex. 081234567890"
                                                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${data.ceklis ? "bg-gray-300" : ""}`}
                                                readOnly={data.ceklis}
                                            />
                                            {errors.no_wa && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.no_wa}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-6 flex gap-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="ceklis"
                                                name="ceklis"
                                                type="checkbox"
                                                checked={data.ceklis}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                onChange={handleCeklis}
                                            />
                                        </div>
                                        <div className="text-sm flex items-center">
                                            <label
                                                htmlFor="ceklis"
                                                className="font-medium text-gray-900"
                                            >
                                                Ceklis jika nomor Hp sama dengan nomor WhatsApp
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <Link href={route('daftar-tamu.index',undangan.slug)}>
                                <button
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
