import React from 'react';
import Tables from '../../../../../Component/Tables/Tables';
const recievedColumns = [
    {
        Header: "Initial Seed Moisture(%)",
        accessor: "initialmoi",
    },

    {
        Header: "Final Seed Moisture(%)",
        accessor: "finalmoi"
    },
    {
        Header: "Initial Seed FFA(%)",
        accessor: "initialffa"
    },
    {
        Header: "Final Seed FFA(%)",
        accessor: "finalffa"
    },
]

const recievedData = [
    {
        initialmoi: "Sesame seed",
        finalmoi: "Godown 1",
        initialffa: "Bin 1",
        finalffa: "Batch 1",
    },

]
const SeedProperties = () => {
    return (
        <>
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />

        </>
    );
};

export default SeedProperties;