import React from "react";
import styled from "styled-components";
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  padding: 20px;
  table {
  }
  thead {
    font-size: 24px;
  }
  th,
  td {
    vertical-align: middle;
    white-space: nowrap;
    font-size: 20px;
  }
  th {
    padding: 20px 30px;
    font-weight: 600;
    border: 1px solid #ccc;
    text-align: left;
    background-color: #2980b9;
    color: white;
  }
  td {
    padding: 15px 30px;
    border: 1px solid #ccc;
  }
  tbody {
  }
`;
const Table = ({ children, className = "" }) => {
  return (
    <TableStyles>
      <table className={className}>{children}</table>
    </TableStyles>
  );
};

export default Table;
