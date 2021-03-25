import React from 'react';
import { Link } from 'react-router-dom';
import Storedata from '../store';


class Products extends React.Component {

    state = { Products: [] };

    componentDidMount() {
        this.setState(
            { Products: Storedata }
        );
    }


    productsList = () => {
        const currentPath = this.props.location.pathname;
        return this.state.Products.map(product => {
            return <Link className='productsTitle' to={{pathname: `${currentPath}/${product.id}`, state: product }} key={product.id}>{product.title}</Link>
        });
    }

    render() {
        return (
            <div>
                {this.productsList()}
            </div>
        )
    }

}
export default Products