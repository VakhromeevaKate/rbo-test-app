import React, { PureComponent } from 'react';

class GroupedProductHeaderRow extends PureComponent {

    render() {
        return (
            <tr> 
                <th className="GroupHeader" colSpan={4}>
                    {this.props.product.Type === null ? this.props.product.Mark : this.props.product.Type}
                </th>
            </tr>   
        );
    }
}

export default GroupedProductHeaderRow; 