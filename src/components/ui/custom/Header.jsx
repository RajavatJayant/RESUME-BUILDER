import React from 'react'
import { Button } from '../Button.jsx'
import { Link } from 'react-router-dom'
import { useUser, UserButton } from '@clerk/clerk-react'
function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
            <img src='/logo.svg' width={100} height={100} />
            {isSignedIn ?
                <div>
                    <Button>Dashboard</Button>
                    <UserButton />
                </div>
                :

                <Link to={'/auth/sign-in'}>
                    <button>start</button>
                </Link>
            }
    </div>
    )
}
export default Header
