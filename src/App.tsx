export function App() {
  return (
    <div className="min-h-screen bg-docs-bg text-docs-text font-sans">
      {/* Navigation bar similar to daisyUI docs */}
      <div className="navbar bg-docs-bg-alt text-docs-text shadow-lg">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-docs-title">daisyUI</span>
            <span className="text-docs-text opacity-60 text-xs">DOCS</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-ghost">Components</button>
            <button className="btn btn-sm btn-ghost">Themes</button>
            <button className="btn btn-sm btn-ghost">GitHub</button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-4">
              <div className="menu bg-docs-bg-alt p-4 rounded-box">
                <div className="menu-title text-docs-title">Getting Started</div>
                <ul>
                  <li><a className="active text-docs-title">Installation</a></li>
                  <li><a className="text-docs-text">Themes</a></li>
                  <li><a className="text-docs-text">Configuration</a></li>
                </ul>
                <div className="menu-title mt-4 text-docs-title">Components</div>
                <ul>
                  <li><a className="text-docs-text">Buttons</a></li>
                  <li><a className="text-docs-text">Cards</a></li>
                  <li><a className="text-docs-text">Forms</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div>
            <h1 className="text-4xl font-bold text-docs-title mb-6">Welcome to daisyUI</h1>
            <p className="text-docs-text mb-6">
              daisyUI adds component classes to Tailwind CSS to reduce the need for repetitive class names and provides a cleaner HTML structure.
            </p>

            <div className="mockup-code bg-docs-bg-alt text-docs-text mb-8 border-docs-accent">
              <pre data-prefix="$"><code className="text-docs-title">npm i daisyui</code></pre>
            </div>

            <h2 className="text-2xl font-bold text-docs-title mb-4">Components</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-docs-bg-alt shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-docs-title">Buttons</h3>
                  <p>Pre-styled button components with different colors and sizes.</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
                    <button className="btn btn-accent">Accent</button>
                  </div>
                </div>
              </div>

              <div className="card bg-docs-bg-alt shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-docs-title">Form Elements</h3>
                  <p>Easy to use form components with proper styling.</p>
                  
                  <div className="form-control w-full max-w-xs mt-4">
                    <label className="label">
                      <span className="label-text text-docs-text">Example Input</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered bg-docs-accent w-full max-w-xs" />
                  </div>
                  
                  <div className="form-control mt-4">
                    <label className="label cursor-pointer">
                      <span className="label-text text-docs-text">Remember me</span>
                      <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider text-docs-text my-8">Documentation Example</div>

            <div className="bg-docs-bg-alt p-6 rounded-box">
              <h3 className="text-xl font-bold text-docs-title mb-4">Progress Component</h3>
              <p className="mb-4">Progress bars can be used to show the progress of a task or to show the passing of time.</p>
              
              <div className="mockup-code bg-docs-accent mb-4">
                <pre><code>&lt;progress className="progress progress-primary w-56" value="70" max="100"&gt;&lt;/progress&gt;</code></pre>
              </div>
              
              <div className="flex flex-col gap-2">
                <progress className="progress progress-primary w-full" value="70" max="100"></progress>
                <progress className="progress progress-secondary w-full" value="60" max="100"></progress>
                <progress className="progress progress-accent w-full" value="50" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-docs-bg-alt text-docs-text mt-20 py-10">
        <div className="container mx-auto px-4">
          <div className="footer flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <span className="footer-title text-docs-title">Documentation</span> 
              <a className="link link-hover">Installation</a>
              <a className="link link-hover">Components</a>
              <a className="link link-hover">Themes</a>
              <a className="link link-hover">Customization</a>
            </div> 
            <div>
              <span className="footer-title text-docs-title">Resources</span> 
              <a className="link link-hover">GitHub</a>
              <a className="link link-hover">Discord</a>
              <a className="link link-hover">Tailwind CSS</a>
              <a className="link link-hover">Change Log</a>
            </div> 
            <div>
              <span className="footer-title text-docs-title">Company</span> 
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Sponsors</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 

export default App;