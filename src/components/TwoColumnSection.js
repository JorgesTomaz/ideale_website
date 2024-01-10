import Card from '../components/Card';
import styles from '../styles/TwoColumnSection.module.css'; // Importando o arquivo CSS

const TwoColumnSection = () => (
    <section className={styles.twoColumnSection}>
        <div className={styles.leftColumn}>
            <h2 className={styles.title}>O que seu negócio precisa?</h2>
            <p className={styles.description}>
                Com mais de 15 anos de experiência em Portais, Gestão de Qualidade e Apps, somamos experiências que nos habilitam para a missão de braço direto do CTO de nossos clientes, na discussão de hipóteses de inovação.
            </p>
        </div>
        <div className={styles.rightColumn}>
            <Card title="Título 1" description="Lorem ipsum dolor sit amet." />
            <Card title="Título 2" description="Lorem ipsum dolor sit amet." />
            <Card title="Título 3" description="Lorem ipsum dolor sit amet." />
            <Card title="Título 4" description="Lorem ipsum dolor sit amet." />
        </div>
    </section>
);

export default TwoColumnSection;
