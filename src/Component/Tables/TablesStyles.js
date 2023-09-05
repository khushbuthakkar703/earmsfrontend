import styled from 'styled-components';

export const Styles = styled.div`
  margin-top: 20px;
  background: white;
  overflow: scroll;
  table {
    border-spacing: 0;
    width: 100%;
    thead {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }
    td {
      font-size: 13px;
      text-align: center;
    }
    td:first-child {
      text-align: left;
    }
    th:first-child {
      text-align: left;
    }
    tbody tr {
      border-bottom: 0.5px solid #bcbcbc;
    }
    th,
    td {
      margin: 0;
      padding: 15px;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
