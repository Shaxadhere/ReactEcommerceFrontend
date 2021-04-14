import React from 'react'
import Layout from '../core/Layout'
// import {API} from '../config'

const Signup = () => {
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <lable htmlFor="text-muted">Name</lable>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <lable htmlFor="text-muted">Email</lable>
                <input type="email" className="form-control" />
            </div>
            <div className="form-group">
                <lable htmlFor="text-muted">Password</lable>
                <input type="password" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
        </form>
    )

    return (
        <Layout className="container col-md-8 offset-md-2" title="Signup" description="Signup to Node React E-Commerce App"> 
            {signUpForm()}
        </Layout>
    )
}

export default Signup
