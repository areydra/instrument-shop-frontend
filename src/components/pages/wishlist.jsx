import React, { Component } from 'react'

class Wishlist extends Component {
    state = {}
    render() {
        return (
            <div className="container p-4">
                <h3>Wishlist Lists :</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="w-5 text-center">#</th>
                            <th scope="col" className="w-75 text-center">Product</th>
                            <th scope="col" className="w-5 text-center">Quantity</th>
                            <th scope="col" className="w-25 text-center">Price</th>
                            <th scope="col" className="w-5 text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <img src="https://i.imgur.com/3W4bCSh.png" className="img-fluid" width="50px" alt="..." />
                                <span>Guitar</span>
                            </td>
                            <td>
                                <input type="number" className="form-control" value="1" />
                            </td>
                            <td className="text-center">
                                Rp. 2500000
                            </td>
                            <td>
                                <a href="/">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>
                                <img src="https://i.imgur.com/3W4bCSh.png" className="img-fluid" width="50px" alt="..." />
                                <span>Guitar</span>
                            </td>
                            <td>
                                <input type="number" className="form-control" value="1" />
                            </td>
                            <td className="text-center">
                                Rp. 2500000
                            </td>
                            <td>
                                <a href="/">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>
                                <img src="https://i.imgur.com/3W4bCSh.png" className="img-fluid" width="50px" alt="..." />
                                <span>Guitar</span>
                            </td>
                            <td>
                                <input type="number" className="form-control" value="1" />
                            </td>
                            <td className="text-center">
                                Rp. 2500000
                            </td>
                            <td>
                                <a href="/">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>
                                <img src="https://i.imgur.com/3W4bCSh.png" className="img-fluid" width="50px" alt="..." />
                                <span>Guitar</span>
                            </td>
                            <td>
                                <input type="number" className="form-control" value="1" />
                            </td>
                            <td className="text-center">
                                Rp. 2500000
                            </td>
                            <td>
                                <a href="/">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-7 col-md-6 align-self-center" style={{ paddingTop: '1vh' }}>
                        <h5>Total : Rp. 6000000</h5>
                    </div>
                    <div className="col-5 col-md-6 text-right">
                        <button className="btn btn-success">Check out</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wishlist;