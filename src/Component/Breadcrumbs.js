import React from "react";

const breadcrumbs = [
    { value: 'Employee' },
    { value: 'Salary' }
]

const Breadcrumbs = (props) => {
    return (
        <div className="breadcrumbs df">
            {breadcrumbs.map((item, i) =>
                <span>{item.value}</span>
            )}
        </div>
    );
};

export default Breadcrumbs;
