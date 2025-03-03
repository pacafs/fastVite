export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-docs-bg text-docs-text">
        {/* Navbar */}
        <nav className="navbar bg-docs-bg-alt">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-docs-title">fastVite</a>
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">Menu</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
              </ul>
            </div>     
        </nav>

        {/* Main Content */}
        <main className="flex-grow flex justify-center items-start">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-7xl p-4">
                {/* Sidebar */}
                <aside className="col-span-2 bg-docs p-4 flex flex-col items-center">
                    <h1 className="text-5xl font-bold text-docs-title mb-4">Tasks</h1>
                    <ul className="list bg-base-100 rounded-box shadow-md">
                      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
                      
                      <li className="list-row">
                        <div className="list-row-title">
                          <div>Dio Lupa</div>
                          <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                      </li>
                      
                      <li className="list-row">
                        <div className="list-row-title">
                          <div>Ellie Beilish ajkajsfakjfkajsfkjaskfjakjsfsjk</div>
                          <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                      </li>
                      
                      <li className="list-row">
                        <div className="list-row-title">
                          <div>Sabrino Gardener</div>
                          <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                        <button className="btn btn-square btn-ghost">
                          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                      </li>
                    </ul>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-4">New Task</button>
                </aside>

                {/* Main Container */}
                <section className="col-span-2 bg-docs-bg p-4">
                    <h1 className="text-2xl font-bold text-docs-title">Main Content</h1>
                    <p className="text-docs-text">This is where the main content goes.</p>
                </section>
            </div>
        </main>

        {/* Footer */}
        <footer className="footer bg-docs-bg-alt text-center p-4">
            <div>
                <p className="text-docs-text">© 2025 fastVite. All rights reserved.</p>
            </div>
        </footer>
    </div>
);
} 

export default App;