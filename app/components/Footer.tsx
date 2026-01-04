export default function Footer() {
    return (
        <footer className="footer bg-neutral text-base-content p-10">
            <aside>
            <img src="/favicon.ico" alt="Roast Generator Logo" className="w-12 h-12 " />
                <p className="text-base text-white">
                    <b className="font-heading">Body Fat Estimator</b>
                    <br />
                    Copyright 2025 - all rights reserved.
                </p>

            </aside>
            <nav>
                <h4 className="footer-title font-heading text-lg text-white">Links</h4>
                <p><a className="link link-hover text-white" href="/faqs">FAQs</a></p>
                <p><a className="link link-hover text-white" href="/support">Support</a></p>
            </nav>
            <nav>
                <h4 className="footer-title font-heading text-lg text-white">Legal</h4>
                <p><a className="link link-hover text-white" href="/terms">Terms of use</a></p>
                <p><a className="link link-hover text-white" href="/privacy">Privacy policy</a></p>
            </nav>
        </footer>
    );
}
