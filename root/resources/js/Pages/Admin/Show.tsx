import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { Head, Link } from "@inertiajs/react";
import { Product } from "@/types";
import React from "react";

interface ShowProps {
    product: Product;
}

const Show = ({ product }: ShowProps) => {
    return (
        <AdminPanelLayout header="Product Details">
            <Head title={`Product Details - ${product.name}`} />

            <div className="py-10 bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border-t-4 border-indigo-500">
                        <div className="bg-indigo-600 text-white text-center py-4">
                            <h2 className="text-3xl font-extrabold">
                                {product.name}
                            </h2>
                            <p className="text-sm italic">Product Overview</p>
                        </div>

                        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <span className="text-gray-500 uppercase text-sm">
                                    ID
                                </span>
                                <span className="text-xl font-semibold text-gray-800">
                                    {product.id}
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-gray-500 uppercase text-sm">
                                    Price
                                </span>
                                <span className="text-xl font-semibold text-green-600">
                                    ${product.price}
                                </span>
                            </div>

                            <div className="flex flex-col sm:col-span-2">
                                <span className="text-gray-500 uppercase text-sm">
                                    Description
                                </span>
                                <p className="text-gray-700 text-base leading-relaxed mt-1">
                                    {product.description}
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-gray-500 uppercase text-sm">
                                    Count
                                </span>
                                <span className="text-xl font-semibold text-gray-800">
                                    {product.count}
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-gray-500 uppercase text-sm">
                                    Vendor
                                </span>
                                <span className="text-xl font-semibold text-gray-800">
                                    {product.vendor?.name || "N/A"}
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 text-right flex gap-2 items-center justify-end">
                            <Link
                                href={route("admin.product.edit", product.id)}
                                className="inline-block px-6 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition transform hover:scale-105"
                            >
                                Delete Product
                            </Link>
                            <Link
                                href={route("admin.product.edit", product.id)}
                                className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 hover:shadow-lg transition transform hover:scale-105"
                            >
                                Edit Product
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    );
};

export default Show;
