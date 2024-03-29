import React from 'react';

const Navigation = ({onRouteChange, isSignin}) => {
    if (isSignin) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f4 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f4 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f4 link dim black underline pa3 pointer'>Sign Up</p>
            </nav>
        )
    }
}

export default Navigation;