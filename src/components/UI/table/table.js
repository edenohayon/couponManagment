import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const Table = ({ tableHead, tableBody, clickHandler }) => {


    const columns = useMemo(() => tableHead, [tableHead])
    const data = useMemo(() => tableBody, [tableBody])

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        // apply the table props
        <table
            {...getTableProps()}
            className="w-full table-fixed text-secondary font-medium">
            <thead
                className="w-full bg-bgTableHeader">
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr
                            className=""
                            {...headerGroup.getHeaderGroupProps()}>
                            <th className="w-12"></th>
                            {// Loop over the headers in each row
                                headerGroup.headers.map((column, index) => (
                                    // Apply the header cell props
                                    <th width={column.width} className={`py-4 font-medium text-left ${index === 0 ? 'pl-10' : ''}`}
                                        {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                            <th className="w-12"></th>

                        </tr>
                    ))}
            </thead>
            {/* Apply the table body props */}
            <tbody
                {...getTableBodyProps()} className="">
                {// Loop over the table rows
                    rows.map((row) => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr
                                className="cursor-pointer"
                                onClick={() => clickHandler(row.index)}
                                {...row.getRowProps()}>
                                <td className="w-12"></td>
                                {// Loop over the rows cells
                                    row.cells.map((cell, index) => {
                                        // Apply the cell props
                                        return (
                                            <td
                                                className={` w-full py-10 text-left truncate 
                                                ${index === 0 ? 'pl-10' : ''}
                                                ${row.index === (rows.length - 1) ? 'border-0' : 'border-b border-gray-300'}`}
                                                {...cell.getCellProps()}
                                            >

                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                <td className="w-12"></td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>

    )
}

export default Table
