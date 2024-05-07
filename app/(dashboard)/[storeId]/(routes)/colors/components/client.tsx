"use client"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Billboard } from "@prisma/client"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { ColorsColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface ColorsClientProps {
    data : ColorsColumn[]
}

export const ColorsClient : React.FC<ColorsClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();
    return(
        <>
            <div className="flex items-center justify-between">
                 <Heading title= {`Color (${data.length})`} description="Manage color for your store" />
                 <Button onClick={()=>router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New
                 </Button>
            </div>
            <Separator /> 
            <DataTable searchKey="name"  columns={columns} data={data} />
            <Heading title="API" description="API calls for Colors" />
            <Separator /> 
            <ApiList  entityName="colors" entityIdName="colorId" />
            
        </>
    )
}