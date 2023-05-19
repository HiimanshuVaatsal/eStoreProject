import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";
import { getCartItems } from "@/utils/cartItems";

function Header() {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const cartItems = getCartItems();
      setCart(cartItems.length) 
    }, 1000)
  },[])

  return (
    <>
      <nav className="navbar navbar-top-bg text-white d-none d-md-block">
        <div className="container-md">
          <i className="nav-item navbar-nav">
            Get up to 70% Discount Only Today
          </i>
          <div className="dropdown p-0">
            <span
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Account
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Register
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Second NavBar */}
      <nav className="navbar navbar-bg text-white">
        <div className="container-md">
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/estore3.png"
              width={100}
              height={50}
              alt="estore logo"
            />
          </Link>
          <Link
            href="/cart"
            className="nav-item nav-link d-flex gap-1 align-items-center text-white"
          >
            <span className="p-2 rounded-circle">
              <FaCartArrowDown size={21} className="pb-1" />
            </span>
                {cart} items
          </Link>
        </div>
      </nav>
      {/* Third navBar */}
      <nav class="navbar navbar-expand-lg shadow-sm mb-2 rounded container px-2">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav d-flex gap-2">
            <Link href="/" className="nav-item nav-link active color-white">
              <b>eStore</b>
            </Link>
            {/* <Link href="/about" className="nav-item nav-link active">
              <b> About</b>
            </Link>
            <Link href="/support" className="nav-item nav-link active">
              <b>Support</b>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
