import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

function NavBar() {
    const router=useRouter()
    const isActive=(r)=>{
        if(r===router.pathname){
            return " active"
        }else{
            return ""
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">Next App</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {/* <li className={"nav-item dropdown" + isActive('/signin')}>
                        <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link href="/signin"><a className="dropdown-item"><i class="fas fa-lock"></i> Sign in</a></Link>
                            <Link href="/signup"><a className="dropdown-item"><i class="fas fa-sign-out-alt"></i> Logout</a></Link>
                        </div>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/cart">
                            <a className={"nav-link" + isActive('/cart')}>
                                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/signin">
                            <a className={"nav-link" + isActive('/signin')}>
                            <i className="fas fa-user" aria-hidden="true"></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <form className="form-inline" action="/search">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <Link href="/search"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
            </form>
        </nav>
    )
}

export default NavBar
