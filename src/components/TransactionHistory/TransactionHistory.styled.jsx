import styled from 'styled-components';

const Table = styled.table`
  background-color: #ecf1f4;
  width: 680px;
  margin: 0 auto;
`;
const Head = styled.thead`
  tr {
    background-color: #00bed5;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
  th {
    padding: 10px;
    width: calc(680px / 3);
  }
`;
const Body = styled.tbody`
  text-align: center;
`;
const Element = styled.tr`
  td {
    padding: 10px;
  }
  font-size: 12px;
  text-transform: capitalize;
  color: #3f3a3a;
  background-color: #f2f2f2;
  :nth-child(even) {
    background-color: #bab6b6;
  }
`;
export { Table, Head, Body, Element };
