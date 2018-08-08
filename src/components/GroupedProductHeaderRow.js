import React from 'react';

class GroupedProductHeaderRow extends React.Component {

    render() {
        return (
            <tr> 
                <th className="GroupHeader" colSpan={4}>Заголовок: {this.props.product.Type}</th>
            </tr>   
        );
    }
}

export default GroupedProductHeaderRow; 