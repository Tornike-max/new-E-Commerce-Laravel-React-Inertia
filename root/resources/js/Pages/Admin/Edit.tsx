import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Product } from "@/types";
import React from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

interface EditProps {
    product: Product;
}

const Edit = ({ product }: EditProps) => {
    const { data, setData, errors, processing, reset } = useForm({
        name: product.name,
        price: product.price,
        count: product.count,
        status: product.status,
    });
    return (
        <AdminPanelLayout header="Edit Product">
            <Head title={`Product Details - ${product.name}`} />

            <div className="py-10 bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border-t-4 border-indigo-500">
                        <div className="bg-indigo-600 text-white text-center py-4">
                            <h2 className="text-3xl font-extrabold">
                                {product.name}
                            </h2>
                            <p className="text-sm italic">Product Edit</p>
                        </div>

                        <form className="p-8 w-full flex  flex-col justify-center items-center gap-4">
                            <div className="w-full flex flex-col gap-2 justify-start">
                                <InputLabel>Name</InputLabel>
                                <TextInput
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <InputError message={errors.name} />
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-start">
                                <InputLabel>Price</InputLabel>
                                <TextInput
                                    type="text"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData(
                                            "price",
                                            parseFloat(e.target.value)
                                        )
                                    }
                                />
                                {errors.price && (
                                    <InputError message={errors.price} />
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-start">
                                <InputLabel>Count</InputLabel>
                                <TextInput
                                    type="text"
                                    value={data.count}
                                    onChange={(e) =>
                                        setData(
                                            "count",
                                            parseFloat(e.target.value)
                                        )
                                    }
                                />
                                {errors.count && (
                                    <InputError message={errors.count} />
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-start">
                                <InputLabel>Status</InputLabel>
                                <TextInput
                                    type="text"
                                    value={data.count}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                />
                                {errors.status && (
                                    <InputError message={errors.status} />
                                )}
                            </div>
                        </form>

                        <div className="bg-gray-50 p-4 text-right flex gap-2 items-center justify-end">
                            <button
                                onClick={() => {
                                    reset();
                                }}
                                className="inline-block px-6 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition transform hover:scale-105"
                            >
                                Clear
                            </button>
                            <Link
                                href={route("admin.product.edit", product.id)}
                                className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 hover:shadow-lg transition transform hover:scale-105"
                            >
                                Update
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    );
};

export default Edit;
