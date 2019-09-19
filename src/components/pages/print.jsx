import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";

class ComponentToPrint extends React.Component {
    render() {
        let { products } = this.props
        let total = 0
        if (products.length) products.map(product => total += product.price)

        return (
            <section>
                <h3 className="mb-5">Checkout Lists :</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="w-5 text-center">#</th>
                            <th scope="col" className="w-50 text-center">Product</th>
                            <th scope="col" className="w-5 text-center">Quantity</th>
                            <th scope="col" className="w-25 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (products.length) ?
                                products.map((product, index) => (
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="text-center">
                                            <img src={product.image} className="img-fluid mr-3" width="50px" alt="..." />
                                            <span>{product.product}</span>
                                        </td>
                                        <td><input type="number" className="form-control text-center" value={product.qty} readOnly /></td>
                                        <td className="text-center">Rp. {product.price.toLocaleString(3)}</td>
                                    </tr>
                                ))
                                : null
                        }
                    </tbody>
                </table>
                <h5 className="mt-5">Total : Rp. {total.toLocaleString(3)}</h5>                
            </section>
        );
    }
}

class Print extends React.Component {
    render() {
        return (
            <div className="w-100">
                <ComponentToPrint ref={el => (this.componentRef = el)} products={ this.props.products } />
                <ReactToPrint
                    trigger={() => <button className="btn btn-success">Print</button>}
                    content={() => this.componentRef}
                />
                <button className="ml-3 btn btn-primary" onClick={this.props.handleCheckout}>Checkout</button>
                <button className="ml-3 btn btn-secondary" onClick={ this.props.handleToggle }>Cancel</button>
            </div>
        );
    }
}

export default Print;
