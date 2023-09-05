import React from 'react';
import Tables from '../../../Component/Tables/Tables';

const recievedColumns = [
    {
        Header: "Master",
        accessor: "master"
    },
    {
        Header: "Select Field",
        accessor: "selectfield",
        // Cell: ({ row }) => {
        //     console.log(row.values);
        //     return (
        //         <select className="form-control  form-select table-select">
        //             <option>Master 1</option>
        //         </select>
        //     )
        // }
    },
    {
        Header: "Field Order",
        accessor: "fieldorder",
        // Cell: ({ row }) => {
        //     console.log(row.values);
        //     return (
        //         <select className="form-control  form-select table-select">
        //             <option></option>
        //         </select>
        //     )
        // }
    },
    {
        Header: "Field Added By",
        accessor: "addedby"
    },
    {
        Header: "Field Added On",
        accessor: "addedon"
    },
   
]

const recievedData = [
    {
        master: "Master 1",
        selectfield: "Master 1",
        fieldorder: "",
        addedby: "",
        addedon: ""
      
    }
]

const MasterPageCreation = () => {
    return (
        <Tables recievedColumns={recievedColumns} recievedData={recievedData} />

    );
};

export default MasterPageCreation;