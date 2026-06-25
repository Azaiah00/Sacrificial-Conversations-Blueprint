// Simple table wrapper used across the Beverly's brief sections.

type DataTableProps = {
  headers: string[];
  rows: string[][];
  highlightFirst?: boolean;
};

export default function DataTable({ headers, rows, highlightFirst }: DataTableProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-800">
            {headers.map((h) => (
              <th key={h} className="py-3 px-4 text-yellow-500 font-bold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-zinc-800/50 ${highlightFirst && i === 0 ? "bg-yellow-900/10" : ""}`}
            >
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 text-zinc-300 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
