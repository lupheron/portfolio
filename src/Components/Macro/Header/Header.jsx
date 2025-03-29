import React from 'react';
import css from '../../../asset/css/index.module.css'

function Header() {
    return (
        <div className={css.header}>
            <header className={css.header_itself}>
                <div className={css.header_title}>
                    <h1>Sukhrob Nuriddinov</h1>
                </div>

                <ul className={css.link_menu}>
                    <li><a className={css.link} href="/">Home</a></li>
                    <li><a className={css.link} href="#about">About</a></li>
                    <li><a className={css.link} href="#clients">Clients</a></li>
                    <li><a className={css.link} href="#work">Work</a></li>
                    <li><a className={css.link} href="#contact">Contact</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;