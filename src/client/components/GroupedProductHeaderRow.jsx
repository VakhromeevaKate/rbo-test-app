// @flow

import React from 'react';
import * as Type from '../flowtypes/GroupedProductHeaderRowTypes';

const GroupedProductHeaderRow = (props: Type.Props) => {
    return (
        <tr>
            <th className="GroupHeader" colSpan={4}>
                {props.product.Type === null ? props.product.Mark : props.product.Type}
            </th>
        </tr>
    );
};

export default GroupedProductHeaderRow;
