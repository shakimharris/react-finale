import React from 'react';
import SHOP_DATA from './shop.data';
import '../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collection: SHOP_DATA
        }
    }
render () {
    return (
        <div>SHOP PAGE</div>
    );
 }
}

export default ShopPage;