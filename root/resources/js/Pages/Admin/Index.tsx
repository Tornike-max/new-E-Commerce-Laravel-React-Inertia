import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { PageProps, Product } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, products }: PageProps) => {
    return (
        <AdminPanelLayout>
            <Head title="Admin Panel" />

            <div className="py-12">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                    <div className="relative w-full overflow-x-auto">
                        <table className="w-full text-left table-auto min-w-max border-collapse">
                            <thead className="bg-gray-100">
                                <tr className="text-gray-700">
                                    {[
                                        "ID",
                                        "Name",
                                        "Description",
                                        "Price",
                                        "Count",
                                        "Vendor",
                                        "Actions",
                                    ].map((header) => (
                                        <th
                                            key={header}
                                            className="p-4 border-b"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {products?.length ? (
                                    products.map((product: Product) => (
                                        <tr
                                            key={product.id}
                                            className="border-b hover:bg-gray-50 cursor-pointer"
                                            onClick={() =>
                                                (window.location.href = route(
                                                    "admin.product",
                                                    product.id
                                                ))
                                            }
                                        >
                                            <td className="p-4">
                                                {product.id}
                                            </td>
                                            <td className="p-4">
                                                {product.name}
                                            </td>
                                            <td className="p-4">
                                                {product.description}
                                            </td>
                                            <td className="p-4">
                                                ${product.price}
                                            </td>
                                            <td className="p-4">
                                                {product.count}
                                            </td>
                                            <td className="p-4">
                                                {product.vendor?.name || "N/A"}
                                            </td>
                                            <td className="p-4 text-center">
                                                <Link
                                                    href={route(
                                                        "admin.product",
                                                        product.id
                                                    )}
                                                    className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    } // Prevents tr click
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={7}
                                            className="p-4 text-center text-gray-500"
                                        >
                                            No products found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    );
};

export default Index;
