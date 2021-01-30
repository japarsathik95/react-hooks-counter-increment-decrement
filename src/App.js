import React, { useState, useEffect } from "react";

export default function Counter() {
  const [tableData, setTableData] = useState([
    {
      data: 1,
      increment: "+",
      decrement: "-"
    },
    {
      data: 2,
      increment: "+",
      decrement: "-"
    },
    {
      data: 3,
      increment: "+",
      decrement: "-"
    }
  ]);

  const increment = i => {
    const updatedData = [...tableData];
    updatedData[i].data++;
    setTableData(updatedData);
  };

  const decrement = i => {
    const updatedData = [...tableData];
    updatedData[i].data--;
    setTableData(updatedData);
  };

  const renderTable = () => {
    return tableData.map((data, i) => {
      return (
        <tr>
          <td>{data.data}</td>
          <td>
            <button onClick={() => increment(i)}>{data.increment}</button>
          </td>
          <td>
            <button onClick={() => decrement(i)}>{data.decrement}</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table>
        <tr>
          <th>Value</th>
          <th>Increment</th>
          <th>Decrement</th>
        </tr>
        {renderTable()}
      </table>
    </div>
  );
}
