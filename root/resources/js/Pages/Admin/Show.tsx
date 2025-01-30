import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { Head, Link } from "@inertiajs/react";
import { Product } from "@/types";
import React from "react";

interface ShowProps {
    product: Product;
}

const Show = ({ product }: ShowProps) => {
    return (
        <AdminPanelLayout>
            <Head title={`Product Details - ${product.name}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Product Details
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    ID
                                </h3>
                                <p className="text-gray-900">{product.id}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Name
                                </h3>
                                <p className="text-gray-900">{product.name}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Description
                                </h3>
                                <p className="text-gray-900">
                                    {product.description}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Price
                                </h3>
                                <p className="text-gray-900">
                                    ${product.price}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Count
                                </h3>
                                <p className="text-gray-900">{product.count}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    Vendor
                                </h3>
                                <p className="text-gray-900">
                                    {product.vendor?.name || "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Link
                                href={route("admin.product.edit", product.id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
