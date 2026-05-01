import './App.css'

const WHATSAPP_URL = 'https://wa.me/553388996752'
const LINKEDIN_URL = 'https://www.linkedin.com/company/112269969/'

const PROBLEMS = [
  ['01', 'Tecnologia vista como custo', 'e não como alavanca real de crescimento e resultado.'],
  ['02', 'Soluções desconectadas do negócio', 'Ferramentas implementadas sem considerar o contexto real da empresa.'],
  ['03', 'Dependência excessiva de fornecedores', 'Falta de autonomia sobre sistemas críticos do negócio.'],
  ['04', 'Confusão sobre IA', 'Dificuldade em separar hype de aplicação real e estratégica.'],
  ['05', 'Times sobrecarregados', 'Processos manuais e repetitivos que consomem tempo e energia produtiva.'],
]

const SERVICES = [
  ['Software Robusto', 'Sistemas sob medida com arquiteturas claras e extensíveis. Sem soluções frágeis ou descartáveis.'],
  ['IA Aplicada', 'Inteligência artificial como camada estratégica sobre seus processos — não como enfeite tecnológico.'],
  ['Automação Inteligente', 'Fluxos com decisão, integrações entre sistemas e eliminação de retrabalho com n8n e outras ferramentas.'],
  ['Consultoria Estratégica', 'Diagnóstico real, clareza sobre o que fazer e o que não fazer, na ordem certa para o seu negócio.'],
]

const STEPS = [
  ['Educação', 'Clareza sobre tecnologia e IA antes de qualquer decisão.'],
  ['Diagnóstico', 'Entendemos o contexto real e mapeamos os gargalos do negócio.'],
  ['Decisão', 'Definimos o que fazer, o que não fazer e a ordem correta.'],
  ['Execução', 'Software, IA e automação com responsabilidade técnica.'],
  ['Evolução', 'Ajustes contínuos, escala e maturidade ao longo do tempo.'],
]

const VALUES = [
  'Resultados reais e mensuráveis',
  'Tecnologia sólida e responsável',
  'Estratégia acima da ferramenta',
  'Inovação com propósito',
  'Transparência e verdade direta',
  'Crescimento contínuo',
]

export default function App() {
  return (
    <>
      <nav className="nav">
        <img src="/logo.png" alt="Aureum Softwares" className="nav-logo" />
        <div className="nav-links">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            WhatsApp
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            LinkedIn
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <img src="/logo-completa.png" alt="Aureum Softwares" className="hero-logo" />
          <h1>
            Tecnologia que gera resultado,<br />
            <span>não despesa.</span>
          </h1>
          <p className="hero-sub">
            Transformamos tecnologia em ativo estratégico para empresas que querem crescer com controle, clareza e previsibilidade.
          </p>
          <div className="cta-inline">
            <p className="cta-inline-title">Pronto para transformar tecnologia em resultado?</p>
            <p className="cta-inline-sub">Sem enrolação, sem promessas vazias. Só resultado real.</p>
            <div className="cta-buttons">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
                Falar pelo WhatsApp
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-large">
                Acessar LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="problema">
          <h2>O problema que resolvemos</h2>
          <div className="problems-grid">
            {PROBLEMS.map(([num, title, desc]) => (
              <div key={num} className="problem-card">
                <span className="problem-num">{num}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="servicos">
          <h2>O que fazemos</h2>
          <div className="services-grid">
            {SERVICES.map(([title, desc]) => (
              <div key={title} className="service-card">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="como">
          <h2>Como trabalhamos</h2>
          <p className="section-sub">Uma sequência que evita projetos fracassados.</p>
          <div className="steps">
            {STEPS.map(([title, desc], i) => (
              <div key={title} className="step">
                <span className="step-num">{i + 1}</span>
                <div className="step-content">
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="quem-somos">
          <h2>Quem somos</h2>
          <div className="mvv-grid">
            <div className="mvv-card">
              <h3>Missão</h3>
              <p>
                Capacitar e viabilizar o crescimento das empresas por meio de tecnologia sólida e evolutiva,
                sustentada por decisões estratégicas responsáveis, como base para eficiência, faturamento e
                bem-estar organizacional.
              </p>
            </div>
            <div className="mvv-card">
              <h3>Visão</h3>
              <p>
                Ser referência na transformação de empresas por meio de tecnologia confiável e inovadora,
                com inteligência artificial aplicada de forma estratégica a negócios, gerando resultados reais.
              </p>
            </div>
            <div className="mvv-card">
              <h3>Valores</h3>
              <ul>
                {VALUES.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contato">
          <h2>Pronto para transformar tecnologia em resultado?</h2>
          <p className="cta-sub">Sem enrolação, sem promessas vazias. Só resultado real.</p>
          <div className="cta-buttons">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
              Falar pelo WhatsApp
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-large">
              Acessar LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Aureum Softwares. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
