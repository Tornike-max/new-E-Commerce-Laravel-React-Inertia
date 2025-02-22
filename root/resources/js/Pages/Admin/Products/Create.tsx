import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { PageProps } from "@/types";

const Create = ({auth,sizes,colors}:PageProps) => {
    const { data, setData, errors, processing, reset, post } = useForm({
        name:'',
        price:0,
        count:0,
        status:'',
        description:'',
        color:'',
        size:" "
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.product.store"));
    };
    console.log(sizes,colors)
    return (
        <AdminPanelLayout header="Edit Product">
            <Head title={`Create Product`} />

            <div className="py-10 min-h-screen rounded-md">
                    <div className="w-full flex justify-start items-center my-4">
                        <Link href={route('admin')} className="py-2 px-3 rounded-md border-[1px] border-slate-300 hover:bg-indigo-500 duration-200 transition-all hover:text-slate-100">Go Back</Link>
                    </div>
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border-t-4 border-indigo-500">
                        <div className="bg-indigo-600 text-white text-center py-4">
                            <p className="text-sm italic">Create Product</p>
                        </div>

                        <form
                            onSubmit={onSubmit}
                            className="p-8 w-full flex flex-col justify-center items-center gap-4"
                        >
                            <div className="w-full flex justify-center items-center my-4 border-t-2 border-b-2">
                                <h2 className="">
                                    Main Information
                                </h2>
                            </div>
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
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                />
                                {errors.status && (
                                    <InputError message={errors.status} />
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-start">
                                <InputLabel>Description</InputLabel>
                                <textarea
                                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                >
                                    {data.description}
                                </textarea>
                                {errors.description && (
                                    <InputError message={errors.description} />
                                )}
                            </div>

                            <div className="w-full flex justify-center items-center my-4 border-t-2 border-b-2">
                                <h2 className="">
                                    Secondary Information
                                </h2>
                            </div>

                            <div className="w-full flex flex-col gap-2 justify-start">
                                <InputLabel>Color</InputLabel>
                                <TextInput
                                    type="text"
                                    value={data.color}
                                    onChange={(e) =>
                                        setData("color", e.target.value)
                                    }
                                />
                                {errors.color && (
                                    <InputError message={errors.color} />
                                )}
                            </div>

                            <div className="w-full flex flex-col gap-2 justify-start">
                                <InputLabel>Size</InputLabel>
                                <TextInput
                                    type="text"
                                    value={data.size}
                                    onChange={(e) =>
                                        setData("size", e.target.value)
                                    }
                                />
                                {errors.size && (
                                    <InputError message={errors.size} />
                                )}
                            </div>
                            <div className="w-full bg-gray-50 p-4 text-right flex gap-2  items-center justify-end">
                                <button
                                    type="button"
                                    disabled={processing}
                                    onClick={() => {
                                        reset();
                                    }}
                                    className="inline-block px-6 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition transform hover:scale-105"
                                >
                                    Clear
                                </button>
                                <button
                                    disabled={processing}
                                    type="submit"
                                    className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 hover:shadow-lg transition transform hover:scale-105"
                                >
                                    {processing ? 'Creating...' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    );
};

export default Create;
