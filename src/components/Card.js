import styles from '../styles/Card.module.css'; // Importe o arquivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Exemplo de ícone

const Card = ({ title, description }) => (
    <div className={styles.card}>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faStar} /> {/* Substitua pelo ícone desejado */}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Saiba Mais</button>
    </div>
);

export default Card;
