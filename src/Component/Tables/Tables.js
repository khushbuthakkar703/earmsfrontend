import './Tables.scss';
import React from 'react';
import { Card } from 'reactstrap';
import { Styles } from './TablesStyles';
import TableBody from './TableBody';

const Tables = ({ recievedColumns = [], recievedData = [], closeicon }) => {
  // const columns = React.useMemo(() => recievedColumns, []);
  const columns = recievedColumns
  // const data = React.useMemo(
  //   () => recievedData,
  //   []
  // );

  const data = recievedData;

  return (
    <Styles>
      <TableBody columns={columns} data={data} closeicon={closeicon} />
    </Styles>
  );
};

export default Tables;
