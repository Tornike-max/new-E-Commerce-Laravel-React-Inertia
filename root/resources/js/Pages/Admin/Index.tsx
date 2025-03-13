import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { PageProps, Product } from "@/types";
import ProductsTable from "@/UI/ProductsTable";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, products,categories }: PageProps) => {
    const { delete: destroy, processing } = useForm();
    const onSubmit = (id: number) => {
        if (confirm("Are you sure you want to delete this product?")) {
            destroy(route("admin.product.delete", id));
        }
    };

    console.log(categories)
    return (
        <AdminPanelLayout header="Products">
            <Head title="Admin Panel" />

            <div className="py-2 flex justify-center items-center flex-col gap-8">
                <ProductsTable products={products}/>
                <ProductsTable products={products}/>
            </div>
        </AdminPanelLayout>
    );
};

export default Index;
