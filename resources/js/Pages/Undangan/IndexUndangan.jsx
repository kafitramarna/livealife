import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
export default function IndexUndangan({ auth, listUndangan }) {
    const hasUndangan = listUndangan.length > 0;
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Dashboard
            //     </h2>
            // }
        >
            <Head title="My Undangan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="text-end">
                        <Link href={route("my-undangan.create")}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Tambah Undangan
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {hasUndangan ? (
                            listUndangan.map((item) => (
                                <div
                                    className="max-w-sm relative overflow-hiddenborder border-gray-200 rounded-lg shadow overflow-hidden"
                                    key={item.slug}
                                >
                                    <div
                                        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top bg-[url('https://i.pinimg.com/originals/75/39/dc/7539dcbb80fd2e552f53c2d48bccf2a5.jpg')]"
                                        style={{
                                            filter: "brightness(0.5)",
                                        }}
                                    ></div>
                                    <div className="p-5 relative h-full flex flex-col justify-between">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">
                                            {`${item.pengantin_pria} & ${item.pengantin_wanita}`}
                                        </h5>
                                        <div>
                                            <p className="mt-10 font-normal text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam minima repellendus culpa maiores autem! Eveniet est cum similique? Ex nam tempore est cum facilis corporis doloremque amet nisi magni!
                                            </p>
                                            <div className="text-end">
                                                <Link
                                                    href={route("my-undangan.show", item.slug)}
                                                    className="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                                >
                                                    Lihat Detail
                                                    <svg
                                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 14 10"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                // <div key={item.slug}>
                                //     <Link
                                //         href={route("my-undangan.show", item.slug)}
                                //         title="Lihat Detail Undangan"
                                //     >
                                //         <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4">
                                //             <div className="p-6 text-gray-900 flex justify-between">
                                //                 <p>{`Wedding : ${item.pengantin_pria} & ${item.pengantin_wanita}`}</p>
                                //                 <div>
                                //                     <div className="flex items-center gap-2">
                                //                         <p>Lihat tamu</p>
                                //                         <svg
                                //                             xmlns="http://www.w3.org/2000/svg"
                                //                             fill="none"
                                //                             viewBox="0 0 24 24"
                                //                             strokeWidth={1.5}
                                //                             stroke="currentColor"
                                //                             className="w-6 h-6"
                                //                         >
                                //                             <path
                                //                                 strokeLinecap="round"
                                //                                 strokeLinejoin="round"
                                //                                 d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                //                             />
                                //                         </svg>
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     </Link>
                                //     <Link
                                //         href={route("my-undangan.edit", item.slug)}
                                //     >
                                //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                //             Edit
                                //         </button>
                                //     </Link>
                                //     <button
                                //         onClick={() => handleDelete(item.slug)}
                                //         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                //     >
                                //         Hapus
                                //     </button>
                                // </div>
                            ))
                        ) : (
                            <p>
                                You haven't created any invitation yet. Start
                                creating one now!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
