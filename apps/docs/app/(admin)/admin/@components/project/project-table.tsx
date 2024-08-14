"use client";
import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/react-table";

import { IProject } from "@server/data/types/project";

import { Button } from "@ui/atoms/button";
import { DataTable } from "@ui/organisms/tables/data-table";

import { Heading } from "../table-heading";
import { CellAction } from "./project-action";
interface ProductsClientProps {
  data: IProject[];
}

export const ProjectTable: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const columns: ColumnDef<IProject>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      id: "image_url",
      header: "IMAGE",
      cell: ({ row }) => (
        <Link
          href={row.original.image_url}
          target="_blank"
          className="underline"
        >
          Link
        </Link>
      ),
    },
    {
      accessorKey: "is_published",
      header: "PUBLISHED",
    },
    {
      accessorKey: "is_premium",
      header: "PREMIUM",
    },
    {
      accessorKey: "created_at",
      header: "CREATED",
    },
    {
      accessorKey: "updated_at",
      header: "UPDATED",
    },
    {
      id: "actions",
      cell: ({ row }) => <CellAction data={row.original} />,
    },
  ];
  return (
    <React.Fragment>
      <div className="flex items-start justify-between mb-5">
        <Heading
          title={`Projects (${data.length})`}
          description="Manage projects (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/admin/project/create`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <DataTable searchKey="title" columns={columns} data={data} />
    </React.Fragment>
  );
};
