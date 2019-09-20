import React, { Component } from 'react'

import Header from './layouts/header'
import Sidebar from './layouts/sidebar'
import Footer from '../footer'

class Home extends Component {
    state = {
    }

    render() {
        return (
            <React.Fragment >
                <Header />
                <main className="row ml-1 ml-md-0 w-100" style={{ marginTop: "11vh" }}>
                    <Sidebar />
                    <div className="col-12 col-md-10 pt-4 pr-md-4">
                        <h1 className="text-center">AREYDRA KUY</h1>
                    </div>
                </main>
                <Footer />
            </React.Fragment >
        );
    }
}

export default Home;