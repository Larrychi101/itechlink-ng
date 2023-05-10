import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import MainMenu from "./main-menu/main-menu";

export default function HeaderSection({ mainMenu }) {
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const navbarAreaEl = useRef(null);

    function fixNavBar() {
        if (navbarAreaEl.current) {
            setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fixNavBar);

        return () => {
            window.removeEventListener('scroll', fixNavBar);
        }
    }, []);

    return (
        <header className="header">
            <div ref={navbarAreaEl} className={`navbar-area ${isNavbarSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="https://itechlink-ng.vercel.app">
                                    <Image
                                        src="https://pub-56b462e72b3449e5b7390aecd39e35b2.r2.dev/E6887D31-A5E1-49EF-8ACF-B164718C8EF7.jpg"
                                        alt="Logo"
                                        width={180}
                                        height={45}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </a>
                                <MainMenu mainMenuLinks={mainMenu} />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
