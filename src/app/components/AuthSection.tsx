import React from 'react'

export default function AuthSection() {
  return (
    <section className="bg-white flex justify-center items-center py-16">
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
    {/* Login Section */}
    <div className="flex flex-col justify-between w-full max-w-md">
      <h2 className="text-2xl font-bold text-black mb-4">Log In</h2>
      <form className="space-y-6 w-full">
        
        {/* Username/Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="login-email">
            Username or email address
          </label>
          <input
            type="text"
            id="login-email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="login-password">
            Password
          </label>
          <input
            type="password"
            id="login-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        {/* Remember Me */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember-me"
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
          />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
            Remember me
          </label>
        </div>
        {/* Login Button */}
        <div className="space-y-4">
          <button
            type="submit"
            className="w-48 py-2 text-black border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
          >
            Log In
          </button>
          <a href="#" className="text-sm text-gray-500 hover:underline block mt-2">
            Lost Your Password?
          </a>
        </div>
      </form>
    </div>

    {/* Register Section */}
    <div className="flex flex-col w-full max-w-md">
      <h2 className="text-2xl font-bold text-black mb-4">Register</h2>
      <form className="space-y-6 w-full">
        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="register-email">
            Email address
          </label>
          <input
            type="email"
            id="register-email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        {/* Info Text */}
        <p className="text-sm text-gray-500">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-sm text-gray-500">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for
          other purposes described in our{' '}
          <a href="#" className="text-black underline">
            privacy policy
          </a>.
        </p>
        {/* Register Button */}
        <button
          type="submit"
          className="w-48 py-2 text-black bg-white border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</section>

  )
}
