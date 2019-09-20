import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return ( 
        <aside className="d-none d-md-block col-md-2 background-cream mh-100">
            <h3 className="text-white text-center pt-5">Sidebar</h3>
            <div className="d-flex flex-column">
                <span className="align-self-center pt-3"><Link to="/admin/products/page/1">Products</Link></span>
                <span className="align-self-center pt-3"><Link to="/admin/categories/page/1">Category</Link></span>
                <span className="align-self-center pt-3"><Link to="/admin/transactions/page/1">Transactions</Link></span>
                <span className="align-self-center pt-3"><Link to="/admin/request-products/page/1">Request Products</Link></span>
            </div>
        </aside>
     );
}
 
export default Sidebar;