import React from 'react';
import "../Dispatch.scss";
import Breadcrumbs from "../../../Component/Breadcrumbs";
import Threedot from '../../../assets/threedot.svg'
import Tables from '../../../Component/Tables/Tables';

const recievedColumns = [
    {
        Header: "Order Num",
        accessor: "order",

    },
    {
        Header: "Vendor Name",
        accessor: "name"
    },
    {
        Header: "Order Date",
        accessor: "date"
    },
    {
        Header: "Products",
        accessor: "products"
    },
    {
        Header: "Quantity",
        accessor: "qunatity"
    },
    {
        Header: "Entered by",
        accessor: "enteredby"
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
            console.log(row.values);
            return (
                <div class="dropdown">
                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={Threedot} alt="Threedot" title="Threedot" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Something</a>
                    </div>
                </div>
            )
        }
    },
]

const recievedData = [
    {
        order: "32357",
        name: "Vendor 1",
        date: "11 Mar 2022",
        products: "73Kg Ground Nut",
        qunatity: "100",
        enteredby: "Suresh Kumar",
        action: "action"
    },
    {
        order: "32357",
        name: "Vendor 1",
        date: "11 Mar 2022",
        products: "73Kg Ground Nut",
        qunatity: "100",
        enteredby: "Suresh Kumar",
        action: "action"
    },
    {
        order: "32357",
        name: "Vendor 1",
        date: "11 Mar 2022",
        products: "73Kg Ground Nut",
        qunatity: "100",
        enteredby: "Suresh Kumar",
        action: "action"
    }
]
const AgainstOrder = () => {
    return (
        <div>
            <h1 className="panel-header">Dispatch</h1>
            <Breadcrumbs />
            <div className='df salary-filter my-2'>
                <div>
                    <select className="form-control  form-select">
                        <option>Order Num</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Vendor</option>
                    </select>
                </div>
                <div>
                    <select className="form-control  form-select">
                        <option>Products</option>
                    </select>
                </div>
                <div >
                    <input type="time" placeholder="Date From" required className="form-control" />
                </div>
                <div >
                    <input type="time" placeholder="Date To" required className="form-control" />
                </div>
            </div>
            <Tables recievedColumns={recievedColumns} recievedData={recievedData} />

        </div>
    );
};

export default AgainstOrder;