import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';

function Logout({ user }) {
    return(
        <>
            <h1>{user.displayName}</h1>
            <button className='bg-red-500 rounded-sm w-20 p-2' onClick={() => signOut(auth)}>Sair</button>
        </>
    )
}

export default Logout;