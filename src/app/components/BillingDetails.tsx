import React from 'react'

export default function BillingDetails() {
  return (
<section className="bg-white h-auto p-8 flex justify-center">
  <div className="flex flex-col lg:flex-row w-full max-w-6xl">
    {/* Left Column: Billing Details */}
    <div className="lg:w-2/3 w-full lg:pr-8 mb-8 lg:mb-0">
      <h2 className="text-2xl font-bold mb-6">Billing details</h2>
      <form className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Last Name"
            />
          </div>
        </div>
        {/* Company Name */}
        <div>
          <label className="block text-gray-700 mb-2">Company Name (Optional)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Company Name"
          />
        </div>
        {/* Country/Region Dropdown */}
        <div>
          <label className="block text-gray-700 mb-2">Country / Region</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Sri Lanka</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>United States</option>
          </select>
        </div>
        {/* Street Address */}
        <div>
          <label className="block text-gray-700 mb-2">Street address</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Street Address"
          />
        </div>
        {/* Town / City */}
        <div>
          <label className="block text-gray-700 mb-2">Town / City</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Town / City"
          />
        </div>
        {/* Province Dropdown */}
        <div>
          <label className="block text-gray-700 mb-2">Province</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Western Province</option>
            <option>Central Province</option>
            <option>Southern Province</option>
            <option>Northern Province</option>
          </select>
        </div>
        {/* ZIP Code */}
        <div>
          <label className="block text-gray-700 mb-2">ZIP Code</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="ZIP Code"
          />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Phone"
          />
        </div>
        {/* Email Address */}
        <div>
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Email Address"
          />
        </div>
        {/* Additional Information */}
        <div>
          <label className="block text-gray-700 mb-2">Additional Information</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Additional Information"
            rows={4}
          ></textarea>
        </div>
      </form>
    </div>

    {/* Right Column: Order Summary */}
    <div className="lg:w-1/3 w-full">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <div className="flex justify-between mb-4">
          <span>Asgaard sofa × 1</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total</span>
          <span className="text-[#B88E2F]">Rs. 250,000.00</span>
        </div>

        {/* Payment Options */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input type="radio" id="bank-transfer" name="payment" className="mr-2" defaultChecked />
            <label htmlFor="bank-transfer">Direct Bank Transfer</label>
          </div>
          <div className="text-sm text-gray-500 mb-4">
            You will receive our bank details once you select this payment option.
          </div>
          <div className="flex items-center">
            <input type="radio" id="cash-on-delivery" name="payment" className="mr-2" />
            <label htmlFor="cash-on-delivery">Cash On Delivery</label>
          </div>
        </div>

        {/* Line separator */}
        <div className="border-t-2 my-4"></div>

        <p className="text-sm text-gray-500 mt-4">
          Your personal data will be used to support your experience throughout this website, to
          manage access to your account, and for other purposes described in our{" "}
          <a href="#" className="text-black-00">privacy policy</a>.
        </p>

        <button
          type="submit"
          className="w-full sm:w-48 py-2 mt-4 items-center text-black border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</section>



  )
}
