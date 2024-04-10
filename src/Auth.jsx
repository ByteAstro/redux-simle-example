import React from 'react'

const Auth = () => {
    return (<form className='flex flex-col gap-2'>
        <h2>Auth</h2>
        <hr />
        <div className='flex justify-between gap-3'>
            <label className=''>EMAIL:</label>
            <input type="text" className='w-full' />
        </div>
        <div className='flex justify-between gap-3'>
            <label>PASSWORD:</label>
            <input type="password" className='w-full' />
        </div>
        <button>Login</button>
        <button>Logout</button>
        <br /><br />
    </form>
    )
}

export default Auth