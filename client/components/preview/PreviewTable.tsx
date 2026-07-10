type Props = {
  data: any[];
};

export default function PreviewTable({ data }: Props) {
  if (!data.length) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-auto rounded-lg border mt-8">
      <table className="min-w-full text-sm">
        <thead className="sticky top-0 bg-gray-200">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border px-4 py-2 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td
                  key={header}
                  className="border px-4 py-2"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}