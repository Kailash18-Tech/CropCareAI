import "./Table.css";
import Loader from "./Loader";
import EmptyState from "./EmptyState";

const Table = ({ columns = [], data = [], loading = false, emptyMessage = "No records found" }) => {
  if (loading) {
    return <Loader label="Loading data..." />;
  }

  if (!data || data.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className="cc-table-wrapper">
      <table className="cc-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.label}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;