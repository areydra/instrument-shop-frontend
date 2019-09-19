import React, { Component } from 'react'
import localStorage from 'local-storage'
import { connect } from 'react-redux'
import moment from 'moment'

import { getTransactionsByUser } from '../../publics/redux/actions/transactions'


class Checkout extends Component {
    state = { 
        transactions : {}
     }

     componentDidMount = async() => {
         let id_user = localStorage.get('user').id
         await this.props.dispatch(getTransactionsByUser(id_user))
         await this.setState({ transactions: this.props.transactions })
     }

    render() { 
        let { transactions } = this.state  
        return ( 
            <div className="container p-4">
                <h3>Transactions Lists :</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="w-5 text-center">#</th>
                            <th scope="col" className="w-25 text-center">Product</th>
                            <th scope="col" className="w-5 text-center">Quantity</th>
                            <th scope="col" className="w-25 text-center">Price</th>
                            <th scope="col" className="w-25 text-center">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (transactions.length) ?
                                transactions.map((transaction, index) => (
                                    <tr key={ index }>
                                        <td>{ index+1 }</td>
                                        <td className="text-center">
                                            <img src={ transaction.image } className="img-fluid mr-3" width="50px" alt="..." />
                                            <a href={"/product-details/" + transaction.product.toLowerCase()} style={{ textDecoration: 'none', color: 'black' }}>
                                                { (transaction.product.length > 18) ? transaction.product.substr(0, 19) + '...' : transaction.product }
                                            </a>
                                        </td>
                                        <td>
                                            <input type="number" className="form-control" readOnly value={ transaction.qty } />
                                        </td>
                                        <td className="text-center">
                                            Rp. { (transaction.price * transaction.qty).toLocaleString(3) }
                                        </td>
                                        <td className="text-center">
                                            { moment(transaction.created_at).format('LLL') }
                                        </td>
                                    </tr>
                                ))
                            : null
                        }
                    </tbody>
                </table>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        transactions : state.transactions.transactions
    }
}

export default connect(mapStateToProps)(Checkout);