import React from 'react'
import moment from 'moment'

const Table = props => {
    let items = props.items
    return ( 
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
                    (items.length) ? 
                        items.map((item, index) => (
                            <tr>
                                <td className="text-center">{ index+1 }</td>
                                <td className="text-center">{ item.user }</td>
                                <td className="text-center"><img src={ item.image } alt="..." width="50px"/> <span>{ item.product }</span></td>
                                <td className="text-center">Rp. { item.price.toLocaleString(3) }</td>
                                <td className="text-center">{ moment(item.created_at).format('ll') }</td>
                            </tr>
                        ))
                    : null
                }
            </tbody>
        </table>
     );
}
 
export default Table;