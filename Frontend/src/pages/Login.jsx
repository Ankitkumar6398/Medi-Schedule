import React, {useState} from 'react';

const Login = () => {
    const[state, setState] = useState('Admin')
    return (
        <form action="">
            <div>
                <p><span> {state}</span> Login</p>
            </div>
        </form>
    );
};

export default Login;