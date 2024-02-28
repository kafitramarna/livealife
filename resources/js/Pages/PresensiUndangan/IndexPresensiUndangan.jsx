import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import useQRCodeScanner from "../../hooks/useQRCodeScanner";
import axios from "axios";
import { useEffect, useState } from "react";

export default function IndexPresensiUndangan({ auth, undangan }) {
    const qrCodeValue = useQRCodeScanner();
    const [data, setData] = useState(null);
    const [isSuccess, setIsSuccess] = useState();
    const [visible, setVisible] = useState(false);
    const handleScan = async (qrCodeValue) => {
        try {
            const response = await axios.put(
                route("presensi-undangan.update", [undangan.slug, qrCodeValue])
            );
            setData(response.data.data_daftar_tamu.nama);
            setIsSuccess(true);
        } catch (error) {
            setIsSuccess(false);
        }
        setVisible(true);
    };
    useEffect(() => {
        if (qrCodeValue) {
            handleScan(qrCodeValue);
            setTimeout(() => {
                setVisible(false);
            },3000)
        }

    }, [qrCodeValue]);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Presensi Undangan" />
            <div className="py-12">
                
                <section className="bg-white flex items-center justify-center">
                    <div className="w-3/12 bg-white rounded-xl overflow-hidden p-6 shadow-md space-y-4   ">
                        <div className="w-full">
                            <div id="reader" className="w-full"></div>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-semibold">QR Scanner</p>
                            <p className="text-gray-500">
                                Arahkan QR code ke kamera
                            </p>
                        </div>
                    </div>
                </section>
                {visible && (
                    <div
                    className={`p-4 mb-4 text-sm mt-6 text-center transition-all duration-500 ${isSuccess ? 'text-green-800 bg-green-50' : 'text-red-800 bg-red-50'}`}

                        role="alert"
                    >
                        {isSuccess ? `Selamat Datang bapak/ibu ${data}` : data}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
