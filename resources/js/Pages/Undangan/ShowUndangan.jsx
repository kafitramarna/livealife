import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
export default function ShowUndangan({ auth, undangan }) {
    const fitur = [
        {
            id: 1,
            judul: "Daftar Tamu Undangan",
            deskripsi:
                "Anda dapat memilih tamu yang ingin anda undang pada acara spesial anda.",
            link: route("daftar-tamu.index", undangan.slug),
        },
        {
            id: 2,
            judul: "Layout Undangan",
            deskripsi:
                "Anda dapat memilih layout undangan yang akan anda gunakan.",
            // link: route("my-undangan.edit", undangan.slug),
        },
        {
            id: 3,
            judul: "Presensi Undangan",
            deskripsi: "Anda dapat mengelola absensi undangan dengan QR code.",
            link: route("presensi-undangan.index", undangan.slug),
        },
        {
            id: 4,
            judul: "Pengaturan Undangan",
            deskripsi: "Anda dapat mengatur undangan secara lengkap.",
        },
    ];
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
            <div className="pt-12 h-full">
                <section className="bg-white flex items-center h-full">
                    <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="grid gap-8 lg:grid-cols-2">
                            {fitur.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.link}
                                    className="group p-6 bg-white rounded-lg border border-gray-200 shadow-md block hover:border-primary-500 focus:outline-none focus:border-primary-500"
                                >
                                    <div className="flex items-center mb-2">
                                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary-500">
                                            {item.judul}
                                        </h2>
                                        <span className="flex items-center">
                                            <svg
                                                className="ml-2 w-4 h-4 text-gray-500 group-hover:text-primary-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="mb-5 font-light text-gray-500">
                                        {item.deskripsi}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
