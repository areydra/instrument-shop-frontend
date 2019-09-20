import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import Pagination from '../utilities/pagination'
import Search from '../utilities/search'
import Header from '../layouts/header'
import Sidebar from '../layouts/sidebar'
import Footer from '../../footer'

import { getTransactions, getTransactionsPaginate } from '../../../publics/redux/actions/transactions'

require('dotenv/config')

class Transactions extends Component {
    state = {
        transactions: {},
        offset : 0,
        limit: process.env.REACT_APP_LIMIT_PAGE,
        total_data: 0
    }

    componentDidMount = async() => {
        let offset = (this.props.match.params.page - 1) * this.state.limit

        await this.props.dispatch(getTransactions())
        await this.props.dispatch(getTransactionsPaginate(offset,this.state.limit))
        await this.setState({ transactions: this.props.transactionsPaginate, total_data: this.props.transactions.length })
    }

    handlePage = async (currentPage) => {
        let offset = (currentPage - 1) * this.state.limit
        await this.props.dispatch(getTransactionsPaginate(offset, this.state.limit))
        await this.setState({ transactions: this.props.transactionsPaginate })
    }

    render() {
        const totalPages = Math.ceil(this.state.total_data / this.state.limit)
        const pages = _.range(1, totalPages + 1)

        let { transactions } = this.state
        return (
            <React.Fragment >
                <Header />
                <main className="row ml-1 ml-md-0 w-100" style={{ marginTop: "11vh" }}>
                    <Sidebar />
                    <div className="col-12 col-md-10 pt-4 pr-md-4">
                        <Search />

                        <h2 className="mt-3">Transactions</h2>
                        <div className="row p-3 pt-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center w-5">#</th>
                                        <th scope="col" className="text-center" width="100px">User</th>
                                        <th scope="col" className="text-center" width="300px">Product</th>
                                        <th scope="col" className="text-center" width="150px">Price</th>
                                        <th scope="col" className="text-center" width="150px">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (transactions.length) ?
                                            transactions.map((transaction, index) => (
                                                <tr key={ index }>
                                                    <td className="text-center">{index + 1}</td>
                                                    <td className="text-center">{transaction.user}</td>
                                                    <td className="text-center"><img src={transaction.image} alt="..." width="50px" /> <span>{transaction.product}</span></td>
                                                    <td className="text-center">Rp. {transaction.price.toLocaleString(3)}</td>
                                                    <td className="text-center">{moment(transaction.created_at).format('LLL')}</td>
                                                </tr>
                                            ))
                                            : null
                                    }
                                </tbody>
                            </table>
                            {
                                (pages.length > 1) ?
                                    <Pagination pages={ pages } currentPage={ this.props.match.params.page } handlePage={ this.handlePage } link="transactions"/>
                                : null
                            }
                        </div>
                        
                    </div>
                </main>
                <Footer />
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions,
        transactionsPaginate: state.transactions.transactionsPaginate
    }
}

export default connect(mapStateToProps)(Transactions);