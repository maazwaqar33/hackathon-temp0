import Link from 'next/link'
import React from 'react'


export default function Checkout() {
  return (
    <div className="bg-white h-auto flex flex-col md:flex-row justify-between p-8 space-y-6 md:space-y-0 md:space-x-6">
  {/* Product Table */}
  <div className="w-full md:w-2/3 space-y-6">
    <table className="w-full table-auto border-collapse text-left">
      <thead className="bg-[#FFF9E5] text-gray-800">
        <tr>
          <th className="py-3 px-4">Product</th>
          <th className="py-3 px-4">Price</th>
          <th className="py-3 px-4">Quantity</th>
          <th className="py-3 px-4">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-3 px-4 flex items-center gap-6">
            <div className="w-32 h-32 bg-[#FFF9E5] flex items-center justify-center rounded">
              <img
                src="/asgaard-sofa.png" 
                alt="Asgaard Sofa"
                className="w-24 h-24 object-contain"
              />
            </div>
            <span className="text-gray-800">Asgaard Sofa</span>
          </td>
          <td className="py-3 px-4 text-gray-800">Rs. 250,000.00</td>
          <td className="py-3 px-4">
            <input
              type="number"
              defaultValue={1}
              className="w-16 border border-gray-300 text-center rounded"
            />
          </td>
          <td className="py-3 px-4 text-gray-800">Rs. 250,000.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Cart Totals */}
  <div className="w-full md:w-1/3 bg-[#FFF9E5] p-6 md:p-8 rounded space-y-8 flex flex-col items-center mx-auto md:mx-0 max-w-full">
    <h2 className="text-black font-bold text-lg mb-4">Cart Totals</h2>
    <div className="flex justify-between items-center mb-4 w-full">
      <span className="text-gray-600">Subtotal</span>
      <span className="text-gray-800">Rs. 250,000.00</span>
    </div>
    <div className="flex justify-between items-center mb-6 w-full">
      <span className="text-gray-800 font-bold">Total</span>
      <span className="text-yellow-600 font-bold">Rs. 250,000.00</span>
    </div>
    <Link href="/checkout">
    <button
      type="submit"
      className="w-full sm:w-48 py-2 text-black border border-black rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
    >
      Check Out
    </button>
    </Link>
  </div>
</div>
  );
};
