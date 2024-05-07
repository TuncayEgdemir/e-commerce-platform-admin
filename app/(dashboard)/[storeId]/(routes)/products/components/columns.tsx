"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
  id: string
  name: string
  isFeatured: boolean
  isArchived: boolean
  price: string
  category: string
  size: string
  color: string
  createdAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell : ({row}) => (
      <div className="flex items-center gap-x-2">
          {row.original.color}
          <div
              className="h-6 w-6 rounded-full border"
              style={{backgroundColor: row.original.color}}
          />
      </div>
    )
  },
  {
    id : "actions",
    cell : ({row}) => <CellAction data={row.original} />
  }
]
