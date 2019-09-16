import React from 'react'

const Register = () => {
    return ( 
        <main style={{margin: "12.5vh 0 1vh 0"}}>
            <div className="container p-4">
                <div className="row">
                    <h2 className="w-100 text-center">Register</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <div className="row">
                            <div className="col-12 col-md-6 p-1">
                                <input type="email" className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <input type="email" className="form-control" placeholder="Password" />
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <input type="email" className="form-control" placeholder="Re-Password" /> 
                            </div>
                            <div className="col-12 col-md-12 p-1">
                                <textarea className="form-control" cols="30" rows="10" placeholder="Address"></textarea>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pt-2">
                    <div className="col-12 col-md-7 p-1">
                        <button className="btn background-cream font-weight-bold button-hover" style={{width: "100%"}}>Register</button>                
                    </div>
                </div>
                <div className="row justify-content-center pt-2">
                    <p className="text-center">You have an account? <a href="/login">Login here</a></p>
                </div>
            </div>
        </main>
     );
}
 
export default Register;