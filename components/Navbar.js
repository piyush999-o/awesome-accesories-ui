import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-slate-50">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
                            <img src="/logo.svg" alt="Awesome Accesories" width={40} />
                            <span className={`ml-3 text-xl ${styles.brand}`}>
                                Awesome Accesories
                            </span>
                        </a>
                    </Link>
                    <nav
                        className={`md:ml-auto flex flex-wrap items-center text-base justify-center  ${styles.links}`}
                    >
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="mr-5 hover:text-gray-900">About</a>
                        </Link>
                        <Link href="/products">
                            <a className="mr-5 hover:text-gray-900">Products</a>
                        </Link>
                        <Link href="/contact">
                            <a className="mr-5 hover:text-gray-900">Contact us</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
