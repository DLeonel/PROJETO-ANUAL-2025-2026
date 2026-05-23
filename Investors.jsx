import styles from "./investors.module.css";

function Investors() {
    return (
        <main className={styles.investors}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Investidores</span>
                    <h1>Uma jornada de crescimento sustentável</h1>
                    <p>
                        Conectamos capital com iniciativas de alto impacto, entregando resultados
                        financeiros e benefícios sociais para o futuro do país.
                    </p>
                </div>
            </section>

            <section className={styles.profileSection}>
                <div className={styles.profileText}>
                    <h2>Por que investir conosco?</h2>
                    <p>
                        Nosso portfólio reúne startups, projetos e ações estratégicas que equilibram
                        retorno e propósito. Cada investimento é construído para escalar com segurança
                        e gerar valor real para a sociedade.
                    </p>
                </div>

                <div className={styles.benefitsGrid}>
                    <article className={styles.benefitCard}>
                        <h3>Retorno responsável</h3>
                        <p>
                            Estrutura de governança e métricas claras para orientar decisões com segurança.
                        </p>
                    </article>
                    <article className={styles.benefitCard}>
                        <h3>Impacto mensurável</h3>
                        <p>
                            Monitoramos resultados sociais e ambientais em cada etapa do investimento.
                        </p>
                    </article>
                    <article className={styles.benefitCard}>
                        <h3>Rede estratégica</h3>
                        <p>
                            Acesso a uma comunidade de parceiros, mentores e mercados em expansão.
                        </p>
                    </article>
                </div>
            </section>

            <section className={styles.calloutSection}>
                <div className={styles.calloutBox}>
                    <h2>Pronto para investir no futuro?</h2>
                    <p>
                        Fale com nosso time para descobrir oportunidades alinhadas ao seu perfil de investimento.
                    </p>
                    <a className={styles.calloutButton} href="#contact">
                        Converse com um especialista
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Investors;