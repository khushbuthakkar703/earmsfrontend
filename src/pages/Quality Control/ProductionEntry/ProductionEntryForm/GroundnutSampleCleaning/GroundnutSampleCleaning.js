import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../../../Component/Tables/Tables';
import OutputTab from './Outputproductstab'
import { useState } from 'react'

const recievedColumns2 = [
    {
        Header: "Product Name",
        accessor: "productname",


    },
    {
        Header: "Godown",
        accessor: "godown"
    },
    {
        Header: "Bin No",
        accessor: "binno"
    },
    {
        Header: "Batch No",
        accessor: "batchno"
    },
    {
        Header: "Input Quantity",
        accessor: "inputquan"
    },
    {
        Header: "Input Lot",
        accessor: "inputlot"
    },
    {
        Header: "Inventory Type",
        accessor: "inventrytype"
    },


]

const recievedData2 = [
    {
        productname: "Sesame seed",
        godown: "Godown 1",
        binno: "Bin 1",
        batchno: "Batch 1",
        inputquan: '',
        inputlot: '1000',
        inventrytype: 'Raw Material'

    },






]

const recievedColumns = [
    {
        Header: "Machinery",
        accessor: "machinery",

    },
    {
        Header: "Temp Dryer A( C)",
        accessor: "tempdryera",

    },
    {
        Header: "Temp Dryer B( C)",
        accessor: "tempdryerb"
    },
    {
        Header: "PI Generator Energy Meter(Hours)",
        accessor: "pigeneratorener"
    },
    {
        Header: "HR Meter(Hours)",
        accessor: "hrhours"
    },
    {
        Header: "PI Generator Hours Meter(Hours)",
        accessor: "pigeneratorhours"
    },
    {
        Header: "BuhlerEnergy Meter(Unit)",
        accessor: "buhlerenergy"
    },
]

const recievedData = [
    {
        machinery: "Prodn-982992",
        tempdryera: "",
        tempdryerb: "",
        pigeneratorener: "",
        hrhours: '',
        pigeneratorhours: '',
        buhlerenergy: '',

    },



]
const recievedColumns1 = [
    {
        Header: "Clasifier A Top Seperation",
        accessor: "clasifisepera",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }

    },
    {
        Header: "Clasifier B Top Seperation",
        accessor: "clasifiseperb",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
    },
    {
        Header: "Aspiratior A Seperation",
        accessor: "aspiratiorsepera",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
    },
    {
        Header: "Aspiratior B Seperation",
        accessor: "aspiratiorseperb",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
    },
    {
        Header: "Aspiratior C Seperation",
        accessor: "aspiratiorseperc",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <select className="form-control  form-select table-select">
                    <option></option>
                </select>
            )
        }
    },
]

const recievedData1 = [
    {
        clasifisepera: "",
        clasifiseperb: "",
        aspiratiorsepera: "",
        aspiratiorseperb: "",
        aspiratiorseperc: '',


    },

]
const GroundnutSampleCleaning = () => {
    let [tabactive, setTabactive] = useState("products")
    return (
        <>
            <div className='custom-tab '>

                <Tabs
                    activeKey={tabactive}
                    id="uncontrolled-tab-example"
                    className="mb-3 first-tab"
                    onSelect={(key) => setTabactive(key)}
                >
                    <Tab eventKey="products" title=" Input Products">
                        <Table recievedColumns={recievedColumns2} recievedData={recievedData2} />
                    </Tab>
                    <Tab eventKey="processdetails" title="Process details" className='tab-2'>
                        <Table recievedColumns={recievedColumns1} recievedData={recievedData1} />
                    </Tab>
                    <Tab eventKey="machinerydetails" title="Machinery Details" className='tab-2'>
                        <Table recievedColumns={recievedColumns} recievedData={recievedData} />
                    </Tab>
                </Tabs>


            </div>
            {tabactive === "products" && <OutputTab />}
        </>

    );
};

export default GroundnutSampleCleaning;