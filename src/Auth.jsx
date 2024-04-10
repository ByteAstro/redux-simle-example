import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './store/store';

const Auth = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    }

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.logout());
    }

    return (<form className='flex flex-col gap-2'
        onSubmit={loginHandler}
    ><h2>Auth</h2>
        <hr />
        {isAuth ? (
            <h2 className='bg-white text-black text-3xl p-4 rounded-xl my-1'>
                My User Profile
            </h2>
        ) : (<>
            <div className='flex justify-between gap-3'>
                <label className=''>EMAIL:</label>
                <input type="text" className='w-full' />
            </div >
            <div className='flex justify-between gap-3'>
                <label>PASSWORD:</label>
                <input type="password" className='w-full' />
            </div>
        </>)}
        {
            isAuth ? (
                <button onClick={logoutHandler}>Logout</button>
            ) : (
                <button>Login</button>
            )
        }
        <br /><br />
    </form >
    )
}

export default Auth