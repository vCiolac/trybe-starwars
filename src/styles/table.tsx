import { styled } from 'styled-components';

export const TableContainer = styled.div`
  margin-top: 2rem;
  justify-content: center;
  overflow-x: auto;
  max-width: 1212px;

  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-family: 'Inter', sans-serif;
    max-width: 1212px;
    

    td {
    text-align: center;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 10px; 
    color: #aeaeae;
    font-family: 'Epilogue', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

    th {
      padding: 10px;
      text-align: center;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
      max-width: 1212px;
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
      padding: 30px 10px 33px 10px; 
      color: #aeaeae;
      font-family: 'Epilogue', sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      background: #2e3035;
      color: white;

    }

    td ul {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    td ul li {
      margin-bottom: 0.25rem;
    }
  }
`;
