export default function Footer() {
    return (
        <footer className="footer bg-[#e3e3e3] text-base-content p-10">
            <aside>
                <p className="text-base">
                    <b className="font-heading text-lg">Body Fat Estimator</b>
                    <br />
                    <span className="text-sm">Copyright 2026 - all rights reserved.</span>
                </p>

            </aside>
            <nav>
                <p><a className="link link-hover" href="/about">About</a></p>
                <p><a className="link link-hover" href="/#faqs">FAQs</a></p>
                <p><a className="link link-hover" href="/contact">Contact</a></p>
            </nav>
            <nav>
             {/*   <p><a className="link link-hover" href="/blog">Blog</a></p> */} 
                <p><a className="link link-hover" href="/terms">Terms</a></p>
                <p><a className="link link-hover" href="/privacy">Privacy</a></p>
                <p><a className="link link-hover" href="/cookies">Cookies</a></p>
            </nav>
        </footer>
    );
}
