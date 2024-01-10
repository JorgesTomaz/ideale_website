import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css'; // Importando o arquivo CSS

const Footer = () => (
    <footer className={styles.footer}>
            <div className={styles.contactInfo}>
                    <p>Telefone: +55 (11) 98930-6070, +55 (21) 99884-4459</p>
                    <p>Email: contato@ideale.io</p>
                    <p>Endereço: Av. Gustavo Adolfo, 1441 - Vila Gustavo São Paulo - SP, 02209-001</p>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/company/ideale-io/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                    <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                    <Link href="/politica-de-cookies">Política de Cookies</Link>
            </div>
    </footer>
);

export default Footer;
