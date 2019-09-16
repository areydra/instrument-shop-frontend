import React from 'react'

const Login = () => {
    return ( 
        <main style={{ margin: "30.5vh 0 25vh 0"}}>
            <div className="container p-4">
                <div className="row">
                    <h2 className="w-100 text-center">Login</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9 col-md-5">
                        <input type="email" className="form-control mb-2" placeholder="Email" />
                        <input type="email" className="form-control mt-2" placeholder="Password" />
                    </div>
                    <button className="btn background-cream font-weight-bold button-hover" style={{width: "5rem"}}>Login</button>
                </div>
                <div className="row justify-content-center pt-2">
                    <p className="text-center">You don't have an account? <a href="/register">Register here</a></p>
                </div>
            </div>
        </main>
     );
}
 
export default Login;