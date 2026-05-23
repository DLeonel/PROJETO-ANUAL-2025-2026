import styles from "./media.module.css";

function Media() {
    return (
        <main className={styles.media}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Mídia</span>
                    <h1>Histórias que conectam nossa missão ao público</h1>
                    <p>
                        Descubra entrevistas, matérias e os principais destaques de imprensa sobre os
                        projetos e iniciativas que estão transformando o presente e o futuro.
                    </p>
                </div>
            </section>

            <section className={styles.highlightSection}>
                <div className={styles.highlightCard}>
                    <h2>Destaque do mês</h2>
                    <p>
                        Nossa iniciativa em educação digital foi capa de reportagem em veículos
                        nacionais, mostrando como tecnologia e inclusão podem gerar impacto real.
                    </p>
                    <a href="#" className={styles.highlightLink}>
                        Leia a matéria completa
                    </a>
                </div>

                <div className={styles.mediaGrid}>
                    <article className={styles.mediaCard}>
                        <div className={styles.mediaTag}>Podcast</div>
                        <h3>Conversa com líderes do impacto</h3>
                        <p>Um episódio sobre investimento responsável e inovação social.</p>
                    </article>
                    <article className={styles.mediaCard}>
                        <div className={styles.mediaTag}>Vídeo</div>
                        <h3>Como nossos projetos mudam comunidades</h3>
                        <p>Depoimentos reais e resultados visíveis em ações sustentáveis.</p>
                    </article>
                    <article className={styles.mediaCard}>
                        <div className={styles.mediaTag}>Artigo</div>
                        <h3>Tendências para o ecossistema de impacto</h3>
                        <p>Análise de mercado, inovação e perspectivas para investimentos sociais.</p>
                    </article>
                </div>
            </section>

            <section className={styles.newsSection}>
                <div className={styles.sectionHeader}>
                    <h2>Últimas notícias</h2>
                    <p>
                        Fique por dentro das aparições mais recentes da marca na imprensa e nas redes.
                    </p>
                </div>

                <div className={styles.newsGrid}>
                    <article className={styles.newsCard}>
                        <span>02/2026</span>
                        <h4>Parceria estratégica anunciada</h4>
                        <p>Lançamos um novo acordo com organizações para ampliar o alcance dos projetos.</p>
                    </article>
                    <article className={styles.newsCard}>
                        <span>01/2026</span>
                        <h4>Evento de inovação social</h4>
                        <p>Participamos de um painel internacional com foco em tecnologia e impacto.</p>
                    </article>
                    <article className={styles.newsCard}>
                        <span>12/2025</span>
                        <h4>Prêmio de sustentabilidade</h4>
                        <p>Recebemos reconhecimento por práticas ambientais e inclusão social.</p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Media;
