export default function CashierPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Cashier Dashboard</h1>
        <a
          href="/login"
          className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Logout
        </a>
      </header>

      {/* Content */}
      <main className="flex flex-1 p-6 gap-6 bg-gray-100">
        {/* Orders List */}
        <section className="flex-1 bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-bold mb-2">Orders</h2>
          <ul className="space-y-2">
            <li className="p-3 border rounded">Order #1001 - ₱150</li>
            <li className="p-3 border rounded">Order #1002 - ₱200</li>
          </ul>
        </section>

        {/* Transaction Summary */}
        <section className="w-1/3 bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-bold mb-2">Summary</h2>
          <p>Total: ₱350</p>
          <button className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Confirm Order
          </button>
        </section>
      </main>
    </div>
  );
}
