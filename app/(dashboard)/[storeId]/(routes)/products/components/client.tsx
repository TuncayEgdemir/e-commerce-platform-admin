"use client"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Billboard } from "@prisma/client"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import {  columns, ProductColumn } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface ProductClientProps {
    data : ProductColumn[]
}

export const ProductClient : React.FC<ProductClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();
    return(
        <>
            <div className="flex items-center justify-between">
                 <Heading title= {`Products (${data.length})`} description="Manage billboards for your store" />
                 <Button onClick={()=>router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New
                 </Button>
            </div>
            <Separator /> 
            <DataTable searchKey="Label"  columns={columns} data={data} />
            <Heading title="API" description="API calls for Products" />
            <Separator /> 
            <ApiList  entityName="products" entityIdName="productId" />
            
        </>
    )
}