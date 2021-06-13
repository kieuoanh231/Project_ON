import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'
const Register = () => {
    const initialState = {name:'', email:'', password:'', cf_password:''}
    // console.log(initialState);

    const [userData, setUserData] = useState(initialState)
    var [name, email, password, cf_password] = userData(name,email,password,cf_password)
    console.log(userData);


    // const handleChangeInput=e=>{
    //     const [name,value] = e.target.value
    //     setUserData({...userData, [name]:value})
    // }

    return (
        <div>
            <Head>
                <title>Sign up Page</title>
            </Head>
            <form className="formlogin mx-auto my-4" style={{maxWidth:'500px'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Number Phone</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Address</label>
                    <input type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up</button>
            </form>
        </div>
    )
}
  
  export default Register