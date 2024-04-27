"use client";
import React from "react";
import { Plus } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { IProject } from "@/server/data/types/project";
import { Heading } from "@/app/(admin)/admin/@components/table-heading";
import { CellAction } from "./project-action";
import Link from "next/link";

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
          title={`Blogs (${data.length})`}
          description="Manage blogs (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/admin/blog/create`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <DataTable searchKey="title" columns={columns} data={data} />
    </React.Fragment>
  );
};
