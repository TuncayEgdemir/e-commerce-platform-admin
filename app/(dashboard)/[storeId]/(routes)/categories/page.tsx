import {format} from 'date-fns'
import React from 'react'
import { CategoryClient } from './components/client'
import prismadb from '@/lib/prismadb'
import { CategoryColumn } from './components/columns'

const CategoriesPage = async({params} : {params: {storeId : string}}) => {

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId
    },
    include:{
        bilboard: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedCategories : CategoryColumn[] = categories.map((item) => ({
    id : item.id,
    name : item.name,
    bilboardLabel : item.bilboard.label, 
    createdAt : format(new Date(item.createdAt), 'dd/MM/yyyy')
  }))
  
  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
                <CategoryClient data = {formattedCategories}  />
        </div>
    </div>
  )
}

export default CategoriesPage