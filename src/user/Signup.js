import React, {useState} from 'react'
import Layout from '../core/Layout'
// import {API} from '../config'

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <lable htmlFor="text-muted">Name</lable>
                <input onChange={handleChange('name')} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <lable htmlFor="text-muted">Email</lable>
                <input onChange={handleChange('email')} type="email" className="form-control" />
            </div>
            <div className="form-group">
                <lable htmlFor="text-muted">Password</lable>
                <input onChange={handleChange('password')} type="password" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
        </form>
    )

    return (
        <Layout className="container col-md-8 offset-md-2" title="Signup" description="Signup to Node React E-Commerce App"> 
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    )
}

export default Signup
