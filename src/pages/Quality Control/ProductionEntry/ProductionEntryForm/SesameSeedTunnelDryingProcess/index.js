import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from '../../../../../Component/Tables/Tables';
import MachineryDetails from './MachineryDetails';
import SeedProperties from './SeedProperties';

const recievedColumns = [
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

const recievedData = [
    {
        productname: "Sesame seed",
        godown: "Godown 1",
        binno: "Bin 1",
        batchno: "Batch 1",
        inputquan: '',
        inputlot: '1000',
        inventrytype: 'Raw Material'

    },

    {
        productname: "Sesame seed",
        godown: "Godown 1",
        binno: "Bin 1",
        batchno: "Batch 1",
        inputquan: '',
        inputlot: '1000',
        inventrytype: 'Raw Material'

    }, {
        productname: "Sesame seed",
        godown: "Godown 1",
        binno: "Bin 1",
        batchno: "Batch 1",
        inputquan: '',
        inputlot: '1000',
        inventrytype: 'Raw Material'

    }, {
        productname: "Sesame seed",
        godown: "Godown 1",
        binno: "Bin 1",
        batchno: "Batch 1",
        inputquan: '',
        inputlot: '1000',
        inventrytype: 'Raw Material'

    }, {
        productname: "Sesame seed",
        godown: "Godown 1",
        binno: "Bin 1",
        batchno: "Batch 1",
        inputquan: '',
        inputlot: '1000',
        inventrytype: 'Raw Material'

    }, {
        productname: "Sesame seed",
        godown: "Godown 1",
        binno: "Bin 1",
        batchno: "Batch 1",
        inputquan: '',
        inputlot: '1000',
        inventrytype: 'Raw Material'

    },




]
const SesameSeedTunnelDryingProcess = () => {
    return (
        <div className='custom-tab'>

            <Tabs
                defaultActiveKey="inputproducts"
                id="uncontrolled-tab-example"
                className="mb-3 first-tab"
            >
                <Tab eventKey="inputproducts" title="Input Products">
                    <Tables recievedColumns={recievedColumns} recievedData={recievedData} />
                </Tab>
                <Tab eventKey="details" title="Machinery Details">
                    <MachineryDetails />
                </Tab>
                <Tab eventKey="Seed" title="Seed Properties">
                    <SeedProperties />
                </Tab>
            </Tabs>




        </div>
    );
};

export default SesameSeedTunnelDryingProcess; 