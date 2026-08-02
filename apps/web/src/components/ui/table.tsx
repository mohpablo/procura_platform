import type { ReactNode } from "react";

export interface ColumnDef<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => ReactNode;
  className?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  pagination?: PaginationProps;
}

export function Table<T>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No results found.",
  pagination,
}: TableProps<T>) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-low">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`px-6 py-4 text-label-sm uppercase text-on-surface-variant font-medium whitespace-nowrap ${
                    col.className || ""
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {isLoading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-body-md text-on-surface-variant"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full rounded-full bg-secondary animate-pulse-ring" />
                      <span className="relative inline-flex size-2 rounded-full bg-secondary" />
                    </span>
                    Loading data...
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-body-md text-on-surface-variant"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="transition-colors hover:bg-surface-container/50"
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 text-body-md text-on-surface ${
                        col.className || ""
                      }`}
                    >
                      {col.cell
                        ? col.cell(row)
                        : col.accessorKey
                          ? (row[col.accessorKey] as ReactNode)
                          : null}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination && pagination.totalPages > 0 && (
        <div className="flex items-center justify-between border-t border-outline-variant bg-surface-container-low px-6 py-3 mt-auto">
          <span className="text-label-sm text-on-surface-variant">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() =>
                pagination.onPageChange(pagination.currentPage - 1)
              }
              disabled={pagination.currentPage === 1 || isLoading}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-1.5 text-label-sm font-medium text-on-surface transition-colors hover:bg-surface-container disabled:opacity-50 disabled:pointer-events-none"
            >
              Previous
            </button>
            <button
              onClick={() =>
                pagination.onPageChange(pagination.currentPage + 1)
              }
              disabled={
                pagination.currentPage === pagination.totalPages || isLoading
              }
              className="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-1.5 text-label-sm font-medium text-on-surface transition-colors hover:bg-surface-container disabled:opacity-50 disabled:pointer-events-none"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
