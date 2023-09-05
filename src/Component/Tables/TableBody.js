import { useTable, usePagination } from 'react-table';
import { IoMdClose } from "react-icons/io";

const TableBody = ({ columns, data, closeicon, initialState }) => {
  const {
    getTableProps,
    getTableBodyProps, 
    headerGroups, 
    page, 
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    prepareRow
  } =
    useTable({
      columns,
      data,
      initialState
    },usePagination);

  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers?.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells?.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
              {closeicon ? <IoMdClose class="icon-close" /> : null}
            </tr>
          );
        })}
      </tbody>
    </table>

<div className="pagination">
<button className='pagination-button' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
  {"<<"}
</button>{" "}
<button className='pagination-button' onClick={() => previousPage()} disabled={!canPreviousPage}>
  {"<"}
</button>{" "}

<span className='pagiation-pageof'>
  Page{" "}
  <strong>
    {pageIndex + 1} of {pageOptions.length}
  </strong>{" "}
</span>
<span className='pagiation-pageof-1'>
  Go to page:{" "}
  <input className='page-control'
    type="number"
    defaultValue={pageIndex + 1}
    onChange={(e) => {
      const page = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(page);
    }}
    style={{ width: "100px" }}
  />
</span>{" "}
<select
 className='page-dropdown'
  value={pageSize}
  onChange={(e) => {
    setPageSize(Number(e.target.value));
  }}
>
  {[10, 20, 30, 40, 50].map((pageSize) => (
    <option key={pageSize} value={pageSize}>
      Show {pageSize}
    </option>
  ))}
</select>
<button className='pagination-button' onClick={() => nextPage()} disabled={!canNextPage}>
  {">"}
</button>{" "}
<button className='pagination-button' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
  {">>"}
</button>{" "}


</div>
</>
  );
}
export default TableBody;