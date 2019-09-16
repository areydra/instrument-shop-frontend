import React from 'react'

const Sidebar = () => {
    return ( 
        <aside className="d-none d-md-block col-md-2 background-cream" style={{ height: "78vh" }}>
            <h3 className="text-white text-center pt-5">Sidebar</h3>
            <div className="d-flex flex-column">
                <span className="align-self-center pt-3"><a href="/admin">Products</a></span>
                <span className="align-self-center pt-3"><a href="/admin">Category</a></span>
                <span className="align-self-center pt-3"><a href="/admin">Transactions</a></span>
            </div>
        </aside>
     );
}
 
export default Sidebar;