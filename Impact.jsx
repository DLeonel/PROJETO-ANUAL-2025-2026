import styles from "./impact.module.css";

function Impact() {
    return (
        <main className={styles.impact}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Impacto positivo</span>
                    <h1>Construindo futuros melhores para pessoas e planeta</h1>
                    <p>
                        Nosso trabalho une tecnologia, inovação e responsabilidade social para gerar
                        resultados reais. Veja como nossos projetos transformam comunidades,
                        reduzem impacto ambiental e fortalecem o ecossistema.
                    </p>
                </div>
            </section>

            <section className={styles.statsSection}>
                <div className={styles.statsGrid}>
                    <article className={styles.statCard}>
                        <span className={styles.statNumber}>+120</span>
                        <p>Projetos entregues com foco em impacto</p>
                    </article>
                    <article className={styles.statCard}>
                        <span className={styles.statNumber}>45</span>
                        <p>Comunidades beneficiadas em todo o país</p>
                    </article>
                    <article className={styles.statCard}>
                        <span className={styles.statNumber}>37%</span>
                        <p>Redução média de emissão em soluções ambientais</p>
                    </article>
                </div>
            </section>

            <section className={styles.initiativesSection}>
                <div className={styles.sectionHeader}>
                    <h2>Iniciativas em destaque</h2>
                    <p>
                        Conheça as ações que mais geraram transformação nas últimas fases do nosso
                        projeto anual.
                    </p>
                </div>

                <div className={styles.cardsGrid}>
                    <article className={styles.initiativeCard}>
                        <div className={styles.iconBadge} aria-hidden="true">📘</div>
                        <h3>Educação digital</h3>
                        <p>
                            Programas de capacitação tecnológica para jovens em zonas rurais e
                            periferias, com foco em habilidades práticas e cidadania digital.
                        </p>
                    </article>
                    <article className={styles.initiativeCard}>
                        <div className={styles.iconBadge} aria-hidden="true">🌱</div>
                        <h3>Economia circular</h3>
                        <p>
                            Soluções que reaproveitam recursos, reduzem resíduos e fortalecem
                            negócios locais com práticas sustentáveis.
                        </p>
                    </article>
                    <article className={styles.initiativeCard}>
                        <div className={styles.iconBadge} aria-hidden="true">🌍</div>
                        <h3>Comunidades verdes</h3>
                        <p>
                            Projetos que incentivam espaços públicos mais saudáveis, com boas
                            práticas de gestão ambiental e participação comunitária.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Impact;
