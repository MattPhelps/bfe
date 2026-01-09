export default function Footer() {
    return (
        <footer className="footer bg-[#18181b] text-white p-10">
            <aside>
                <div className="flex items-center gap-2">
                    <img
                    src="/favicon.ico"
                    alt="Body Fat Estimator Logo"
                    className="w-6 h-6"
                    />
                    <b className="font-heading text-lg">
                    Body Fat Estimator
                    </b>
                </div>

                <span className="text-xs text-gray-400 mt-2 block">
                    © 2026 — All rights reserved.
                </span>
                </aside>

            <nav>
                <h6 className="footer-title text-base font-heading uppercase tracking-wide">
                Links
                </h6>
                <p><a className="link link-hover" href="/about">About</a></p>
                <p><a className="link link-hover" href="/pricing">Pricing</a></p>
            </nav>
              <nav>
                <h6 className="footer-title text-base font-heading uppercase tracking-wide">
                Support
                </h6>
                <p><a className="link link-hover" href="/#faqs">FAQs</a></p>
                <p><a className="link link-hover" href="/contact">Contact</a></p>
            </nav>
              <nav>
                <h6 className="footer-title text-base font-heading uppercase tracking-wide">
                Tools
                </h6>
            </nav>
            <nav>
                <h6 className="footer-title text-base font-heading uppercase tracking-wide">
                Legal
                </h6>
             {/*   <p><a className="link link-hover" href="/blog">Legal</a></p> */} 
                <p><a className="link link-hover" href="/terms">Terms</a></p>
                <p><a className="link link-hover" href="/privacy">Privacy</a></p>
                <p><a className="link link-hover" href="/cookies">Cookies</a></p>
            </nav>
        </footer>
    );
}
