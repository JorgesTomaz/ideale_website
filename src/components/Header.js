import {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'; // Ícone de hambúrguer

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    Ideale.io
                </Link>
            </div>
            <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={toggleMenu}/>
            <nav className={`${styles.navbar} ${isMenuOpen ? styles.showMenu : ''}`}>
                <Link href="/">Home</Link>
                <Link href="/solucoes">Soluções</Link>
                <Link href="/quem-somos">Quem Somos</Link>
                <Link href="/blog">Blog</Link>
                <a href="#contato">Contato</a>
                <a className={styles.clientArea} href="https://ideale.atlassian.net/servicedesk/customer/portal/3">Área
                    do Cliente</a>
            </nav>
        </header>
    );
};

export default Header;
