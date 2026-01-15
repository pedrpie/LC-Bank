import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';

import Footer from './Footer';
import Logout from './Logout';

function Navbar() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    }, [])

    return(

        <>
            <div id="navbar" className="bg-black text-white flex gap-10 justify-between items-center rounded-4xl w-300 p-4 fixed top-7 left-1/2 -translate-x-1/2">
                <h1 id='navbarTitle' className="text-4xl font-bold">LC Bank</h1>

                <nav className="flex gap-5">
                    <Link to="https://github.com/pedrpie" id='githubLink' target='_blank' className='text-2xl'>Github</Link>
                </nav>

                <h1 className='flex items-center gap-5 font-bold'>{user ? <Logout user={user} /> : <Link to='/'>Fazer login</Link>}</h1>
            </div>

            <Footer/>
        </>
    )
}

export default Navbar;