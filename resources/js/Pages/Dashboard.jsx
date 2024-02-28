import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link } from "@inertiajs/react";

export default function Dashboard({ auth, undangan }) {
    const hasUndangan = undangan.length > 0;

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
                    <div className="text-end">
                    <Link href={route("my-undangan.create")}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Tambah Undangan
                                </span>
                            </button>
                    </Link>
                        
                    </div>
                    {hasUndangan ? (
                        undangan.map((item) => (
                            <Link
                                        href={route(
                                            "my-undangan.index",
                                            item.slug
                                        )}
                                    >
                            <div
                                key={item.slug}
                                className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4"
                            >
                                <div className="p-6 text-gray-900 flex justify-between">
                                    <p>{`Wedding : ${item.pengantin_pria} & ${item.pengantin_wanita}`}</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                </div>
                            </div>
                                    </Link>
                        ))
                    ) : (
                        <p>
                            You haven't created any invitation yet. Start
                            creating one now!
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
