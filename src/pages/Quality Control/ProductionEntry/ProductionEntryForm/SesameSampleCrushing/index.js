import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '../../../../../Component/Tables/Tables';
import OutputTab from './Outputproductstab'
import Products from './Products'

const recievedColumns = [
    {
        Header: "Gear Box Temperature (Deg)",
        accessor: "deg",

    },
    {
        Header: "Motor Amps (Amp)",
        accessor: "amp",

    },
    {
        Header: "Rotary B Energy Meter(Units)",
        accessor: "units"
    }
]

const recievedData = [
    {
        deg: "Prodn-982992",
        amp: "",
        units: "",

    },



]
const SesameSampleCrushing = () => {
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
                    <Tab eventKey="products" title=" Products">
                        < Products />
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

export default SesameSampleCrushing;