import React from 'react';

const GroupedProductHeaderRow = (props) => {
    return (
        <tr>
            <th className="GroupHeader" colSpan={4}>
                {props.product.Type === null ? props.product.Mark : props.product.Type}
            </th>
        </tr>
    );
}

export default GroupedProductHeaderRow; 