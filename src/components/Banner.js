import styles from '../styles/Banner.module.css'; // Importando o arquivo CSS

const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.title}>Tecnologia para gerar e manter os clientes de nossos clientes</h1>
            <p className={styles.description}>
                Nosso trabalho é desenvolver tecnologias, sob alto rigor de qualidade e automação, para garantir que nossos clientes utilizem o que há mais moderno, performático e auto gerenciável, na geração de leads e manutenção de suas bases de clientes.
            </p>
        </div>
    );
};

export default Banner;
