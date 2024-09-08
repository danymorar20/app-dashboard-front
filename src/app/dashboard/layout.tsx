import SideNav from "@/app/ui/dashboard/sidenav";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex h-screen bg-gray-900">
                {/* Sidebar */}
                <SideNav />

                {/* main content */}
                <div className="flex-1 flex flex-col">
                    {/* header */}
                    <header className="flex items-center justify-between p-4 bg-gray-800 text-gray-100 shadow">
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-4 py-2 border rounded-lg bg-gray-700 text-gray-300 placeholder-gray-400 border-gray-600"
                            />
                            <div className="relative">
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                                <svg
                                    className="w-6 h-6 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 22c4.418 0 8-3.582 8-8V9.714c0-1.952-1.086-3.742-2.848-4.648A4 4 0 009.595 4h-1.19a4 4 0 00-7.557 1.066C1.314 6.047 1 6.84 1 7.714V14c0 4.418 3.582 8 8 8z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </header>

                    {/* content */}
                    <main className="flex-grow p-6 bg-gray-900 text-gray-300 overflow-y-auto">
                        {children}
                    </main>

                    {/* footer */}
                    <footer className="p-4 bg-gray-800 text-gray-400 shadow">
                        <div className="flex items-center justify-between">
                        <span>{ new Date().getFullYear() } © Your Company Name</span>
                            <span>2024 © Your Company Name</span>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:underline">
                                    About Us
                                </a>
                                <a href="#" className="hover:underline">
                                    Help
                                </a>
                                <a href="#" className="hover:underline">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            {/* toast notifications */}
            <div>
                <ToastContainer
                   position="bottom-right"
                   autoClose={5000}
                   hideProgressBar={false}
                   newestOnTop={true}
                   closeOnClick
                   pauseOnHover
                   draggable
                   theme="colored"
                />
            </div>
        </>
    );
}
