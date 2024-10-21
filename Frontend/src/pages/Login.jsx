import React, { useState } from 'react';

const Login = () => {
    const[state,setState] = useState('Sign Up')
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError('Please fill in all fields.');
        } else {
            setError('');
            console.log('Account created with:', username, email, password);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">{state ==='Sign Up'? "Create Account":"Login"}</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Input */}
                    {state === "Sign Up" && <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    }

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>



                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
                        >
                            {state ==='Sign Up'? "Create Account":"Login" }
                        </button>
                    </div>
                </form>
                {state === 'Sign Up' ? <p className="mt-4 text-center text-gray-600">
                    Already have an account? <span onClick={()=>setState('Login')}  className="text-green-500 hover:underline">Login</span>
                </p> : <p className="mt-4 text-center text-gray-600">
                    Create Account from here? <span onClick={()=>setState('Create Account')}  className="text-green-500 hover:underline">Create Account</span>
                </p>}
            </div>
        </div>
    );
};

export default Login;
