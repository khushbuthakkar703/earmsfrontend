import React from 'react';
import Tables from '../../../../../Component/Tables/Tables';
const recievedColumns = [
    {
        Header: "Tunnel Dryer Energy Meter (Unit)",
        accessor: "meter",
    },
    {
        Header: "Tunnel 1 Temperature(Deg)",
        accessor: "tunnel1"
    },
    {
        Header: "Tunnel 2 Temperature(Deg)",
        accessor: "tunnel2"
    },
    {
        Header: "Tunnel 3 Temperature(Deg)",
        accessor: "tunnel3"
    },
    {
        Header: "Tunnel 4 Temperature(Deg)",
        accessor: "tunnel4"
    },
    {
        Header: "Rotation Time (Hours)",
        accessor: "rotationtime"
    },
    {
        Header: "Drying Duration Time (Hours)",
        accessor: "durationttine"
    },
]

const recievedData = [
    {
        meter: "Sesame seed",
        tunnel1: "Godown 1",
        tunnel2: "Bin 1",
        tunnel3: "Batch 1",
        tunnel4: '',
        rotationtime: '1000',
        durationttine: 'Raw Material'

    },

]
const MachineryDetails = () => {
    return (
        <>
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />

        </>
    );
};

export default MachineryDetails;