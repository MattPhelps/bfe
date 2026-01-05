export default function Footer() {
    return (
        <footer className="footer bg-[#e3e3e3] text-base-content p-10">
            <aside>
            <img src="/favicon.ico" alt="Body Fat Estimator Logo" className="w-8 h-8 " />
                <p className="text-base">
                    <b className="font-heading">Body Fat Estimator</b>
                    <br />
                    Copyright 2026 - all rights reserved.
                </p>

            </aside>
            <nav>
                <h4 className="footer-title font-heading text-lg">Links</h4>
                <p><a className="link link-hover" href="/faqs">FAQs</a></p>
            </nav>
            <nav>
                <h4 className="footer-title font-heading text-lg">Legal</h4>
                <p><a className="link link-hover" href="/terms">Terms of use</a></p>
                <p><a className="link link-hover" href="/privacy">Privacy policy</a></p>
            </nav>
        </footer>
    );
}
