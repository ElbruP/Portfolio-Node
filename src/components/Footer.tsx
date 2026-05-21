export default function Footer() {
      return (
<footer className="relative bg-black px-6 pt-32 pb-10 before:absolute before:inset-x-0 before:top-0 before:h-32 before:bg-gradient-to-b before:from-transparent before:to-black">
<div className="mx-auto max-w-7xl border-t border-white/10 pt-20">
<div className="grid grid-cols-1 gap-20 md:grid-cols-[6fr_1fr_1fr]">
  <div className="-ml-18 md:-ml-70">
    <div>
      <span className="text-4xl font-extralight tracking-[0.2em]">
        E
      </span>

      <span className="text-4xl font-extralight tracking-[0.2em]">
        P
      </span>
    </div>

    <p className="max-w-sm text-lg leading-9 text-white/45">
      Creative Developer & Digital Designer.
      Engineering intelligence between realities
    </p>
  </div>
          <div>
            <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.45em] text-[#d7b98c]">
              Navigation
            </h3>

            <ul className="space-y-6">
              <li>
                <a href="#" className="nav-link text-lg">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="nav-link text-lg">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="nav-link text-lg">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="nav-link text-lg">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.45em] text-[#d7b98c]">
              Connect
            </h3>

  
          </div>
        </div>

        <div className="mt-24 border-t border-white/5 pt-10 md:-ml-70">
           <p className="text-sm tracking-[0.08em] text-white/35">
            © 2026 Elbrus Prokopets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}