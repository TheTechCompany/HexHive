import React from "react";

export default function Datatable({ data }: { data: any[] }) {
  const column = Object.keys(data[0]);
  return (
    <table cellPadding={12} cellSpacing={0}>
      <thead>
        <tr>
          {column.map((heading) => (
            <th>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {column.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
