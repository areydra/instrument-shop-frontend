import React from 'react'

import Header from './layouts/header'
import Sidebar from './layouts/sidebar'
import Product from './pages/product'
import Footer from '../footer'

const Main = () => {
    return ( 
        <React.Fragment>
            <Header />
            <main className="row ml-1 ml-md-0 w-100" style={{ marginTop: "11vh" }}>
                <Sidebar />
                <Product />
            </main>
            <Footer />
        </React.Fragment>
     );
}
 
export default Main;