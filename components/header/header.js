import "./header.css";
import Link from "next/link";

export function Header() {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm custom-navbar">
            <div className="container-fluid">
                
                {/* Brand Logo */}
                <Link className="navbar-brand fw-bold text-white" href="/">Furni.</Link>

                {/* Mobile Menu Toggle Button */}
                <button 
                    className="navbar-toggler border-0 text-white" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item"><Link className="nav-link text-white" href="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" href="/shop">Shop</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" href="#">About us</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" href="#">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" href="#">Blog</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" href="#">Contact</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" href="#">Log in</Link></li>
                    </ul>

                    {/* Cart Button - Always Visible */}
                    <Link className="btn btn-warning ms-lg-3 mt-2 mt-lg-0" href="/Cart">
                        Cart
                    </Link>
                </div>
            </div>
        </nav>
    );
}
