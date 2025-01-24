import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex justify-center items-center flex-col gap-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold">
                                Hello There
                            </h1>
                            <div className="w-96 flex justify-center items-center m-auto">
                                <p className="text-xl text-center">
                                    Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut
                                    repudiandae et a id nisi.
                                </p>
                            </div>
                            <button className="py-2 px-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 duration-100 transition-all text-lg md:text-xl font-serif font-semibold border border-slate-100 text-slate-100">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
