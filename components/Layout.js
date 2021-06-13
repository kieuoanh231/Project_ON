import NavBar from './NavBar'
import React from 'react'

function Layout({children}) {
    return (
        <div className="container">
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout
