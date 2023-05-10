import Image from "next/image";

export default function FooterSection({ mainMenu }) {
    const links = mainMenu.map(link => ({
        ...link,
        url: link.url[0] === "#" ? `/${link.url}` : link.url})
    )

    return (
        <footer className="footer pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                        <div className="footer-widget">
                            <div className="logo">
                                <a href="https://itechlink-ng.vercel.app">
                                    <Image
                                        width={500}
                                        height={10}
                                        src="https://pub-56b462e72b3449e5b7390aecd39e35b2.r2.dev/E6887D31-A5E1-49EF-8ACF-B164718C8EF7 2.jpg"
                                        alt="logo"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </a>
                            </div>
                            <p className="desc">Techlink NG | Comprehensive ICT Solutions for Your Business Needs.</p>
                            <ul className="social-links">
                                <li><a href="#0"><i className="lni lni-facebook"></i></a></li>
                                <li><a href="#0"><i className="lni lni-linkedin"></i></a></li>
                                <li><a href="#0"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="#0"><i className="lni lni-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 offset-xl-1">
                        <div className="footer-widget">
                            <h3>About Us</h3>
                            <ul className="links">
                                {links.map((navLink) => (
                                    <li key={navLink.url}>
                                        <a href={navLink.url}>{navLink.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h3>Subscribe Newsletter</h3>
                            <form action="#">
                                <input type="email" placeholder="Email" />
                                <button className="main-btn btn-hover">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}