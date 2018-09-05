import React, { PureComponent } from 'react';

class ProductHeaderRow extends PureComponent {
    render() {
      return 
        <tr>
            <th>{this.props.mark}</th>
            <th>{this.props.model}</th>
            <th>{this.props.type}</th>
            <th>{this.props.year}</th>
        </tr>;
    }
}