import { Product } from '@/types'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'

const ProductsTable = ({products}:{products:Product[]}) => {
    const { delete: destroy, processing } = useForm();
        const onSubmit = (id: number) => {
            if (confirm("Are you sure you want to delete this product?")) {
                destroy(route("admin.product.delete", id));
            }
        };
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                    <div className="w-full flex justify-end items-center my-4">
                        <Link href={route('admin.create.product')} className="py-2 px-3 rounded-md border-[1px] border-slate-300 hover:bg-indigo-500 hover:text-slate-100 duration-200 transition-all">Create New Product</Link>
                    </div>
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
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "admin.show.product",
                                                            product.id
                                                        )}
                                                        className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        Show
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "admin.product.edit",
                                                            product.id
                                                        )}
                                                        className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        Edit
                                                    </Link>
                                                    <form
                                                        onSubmit={() =>
                                                            onSubmit(product.id)
                                                        }
                                                    >
                                                        <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                                                            {processing ? 'Deleting' : "Delete"}
                                                        </button>
                                                    </form>
                                                </div>
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
  )
}

export default ProductsTable