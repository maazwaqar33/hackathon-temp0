'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthSection() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [loginError, setLoginError] = useState('');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

   // Check login status on component mount
   useEffect(() => {
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('userEmail');
    if (token && email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const result = await response.json();

      if (!response.ok) {
        setLoginError(result.message || 'Login failed. Please try again.');
      } else {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('userEmail', loginEmail);
        setUserEmail(loginEmail);
        router.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An unexpected error occurred.');
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: registerEmail }),
      });

      const result = await response.json();

      if (!response.ok) {
        setRegisterError(result.message || 'Registration failed. Please try again.');
      } else {
        setRegisterSuccess('An email with a new password has been sent to your email.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setRegisterError('An unexpected error occurred.');
    }
  };

//lougout 
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    setUserEmail(null);
    setLoginEmail('');
    setLoginPassword('');
    setRegisterEmail('');
    router.push('/');
  };

  return (
    <section className="bg-white flex justify-center items-center py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Conditional rendering: If logged in, show Profile Section */}
        {userEmail ? (
          <div className="flex flex-col w-full max-w-md">
            <h2 className="text-2xl font-bold text-black mb-4">Profile</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="w-full px-4 py-2 border border-gray-300 rounded-md">{userEmail}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-48 py-2 text-black bg-white border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Login Section */}
            <div className="flex flex-col w-full max-w-md">
              <h2 className="text-2xl font-bold text-black mb-4">Log In</h2>
              <form className="space-y-6 w-full" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="login-email">
                    Username or email address
                  </label>
                  <input
                    type="text"
                    id="login-email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  {loginError && <p className="text-sm text-red-500 mt-1">{loginError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="login-password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-48 py-2 text-black bg-white border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Log In
                </button>
              </form>
            </div>

            {/* Register Section */}
            <div className="flex flex-col w-full max-w-md">
              <h2 className="text-2xl font-bold text-black mb-4">Register</h2>
              <form className="space-y-6 w-full" onSubmit={handleRegister}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="register-email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                    placeholder="Enter your email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                  {registerError && <p className="text-sm text-red-500 mt-1">{registerError}</p>}
                  {registerSuccess && <p className="text-sm text-green-500 mt-1">{registerSuccess}</p>}
                </div>
                <p className="text-sm text-gray-500">
                  An email with a new password will be sent to your email address. Please check the spam folder in your email.
                </p>
                <button
                  type="submit"
                  className="w-48 py-2 text-black bg-white border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
                >
                  Register
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
