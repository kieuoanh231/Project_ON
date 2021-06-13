import Head from 'next/head'
import Link from 'next/link'
const Singin = () => {
    return (
        <div>
            <Head>
                <title>Sign in Page</title>
            </Head>
            <form className="formlogin mx-auto my-4" style={{maxWidth:'500px'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <Link href="/"><button type="submit" className="btn btn-primary w-100">Login</button></Link>
                
                <p style={{textAlign:'center'}}>You dont't have an account? <Link href="/signup"><a style={{color:'crimson'}}>Register</a></Link></p>
            </form>
        </div>
       
      
        
    )
  }
  
  export default Singin