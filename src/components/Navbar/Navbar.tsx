import React from 'react';

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = React.useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <header className={`header ${isActive ? 'active' : ''}`}>
            <div className="hamburger" onClick={toggleNavbar}>
                {/* Add your hamburger icon here */}
            </div>
            <nav>
                {/* Your navigation links */}
            </nav>
        </header>
    );
};

export default Navbar;