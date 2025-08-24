export default function CashierPage() {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
              </button>
              <a className="flex ms-2 md:me-24">
                <img
                  src="/img/SFAC_LOGO_Edited.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  THE FRANCISCanteen Admin{" "}
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div
   className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:border-gray-700"
        aria-label="Sidebar"
        style={{ backgroundColor: "#670E10", color: "#fff" }}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* Transaction History */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-[#8B1C20]"
                style={{ color: "#fff" }}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Transaction History
                </span>
              </a>
            </li>

            {/* Users */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-[#8B1C20]"
                style={{ color: "#fff" }}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>

            {/* Sign Out */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-[#8B1C20]"
                style={{ color: "#fff" }}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main className="sm:ml-64">
        <div>
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/img/SWASTIKA.png"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
        <button className="flex mx-auto mt-6 text-white bg-red-900 border-0 py-2 px-5 focus:outline-none  hover:bg-[#a64949] rounded">Button</button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/img/SWASTIKA.png"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
        <button className="flex mx-auto mt-6 text-white bg-red-900 border-0 py-2 px-5 focus:outline-none  hover:bg-[#a64949] rounded">Button</button>
      </div>
    </div>
  </div>
</section>
        </div>
      </main>
    </div>
  );
}
