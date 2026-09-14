import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Instagram } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SS Intermediações | Soluções financeiras com análise responsável" },
      {
        name: "description",
        content:
          "Intermediação financeira, organização documental, análise de propostas e acompanhamento consultivo para pessoas e empresas.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  ["R$", "Crédito e capital", "Encaminhamento consultivo para análise de crédito, capital de giro e soluções financeiras."],
  ["DOC", "Documentação", "Checklist e organização de documentos para tornar a análise mais objetiva."],
  ["%", "Análise de proposta", "Comparação de custo, prazo, entrada, parcelas e condições comerciais antes da contratação."],
  ["OK", "Acompanhamento", "Suporte durante tratativas, retorno de pendências e formalização com parceiros."],
] as const;

const steps = [
  ["Diagnóstico", "Entendimento do perfil, objetivo, urgência e capacidade de pagamento."],
  ["Preparação", "Conferência dos documentos e ajuste de pendências antes do envio."],
  ["Negociação", "Contato com parceiros e apresentação das condições disponíveis."],
  ["Decisão", "Apoio para comparar alternativas e seguir apenas com proposta formal."],
] as const;

function HomePage() {
  return (
    <main>
      <header className="site-header">
        <nav className="site-container site-nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="SS Intermediações">
            <span className="brand-mark">SS</span>
            <span>Intermediações</span>
          </a>
          <div className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#seguranca">Segurança</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="site-container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="pulse" />
              Intermediação financeira
            </span>
            <h1 className="display-title">SS Intermediações</h1>
            <p className="hero-text">
              Apoio consultivo para organizar documentação, analisar propostas e aproximar pessoas
              e empresas de alternativas de crédito com mais clareza e responsabilidade.
            </p>
            <div className="actions">
              <a
                className="button button-primary"
                href="https://www.instagram.com/ssintermediacoesfinanceiras/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={20} />
                Falar pelo Instagram
                <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#servicos">
                Ver serviços
              </a>
            </div>
            <div className="proof" aria-label="Informações da empresa">
              <Proof title="CNPJ ativo" text="63.923.149/0001-62" />
              <Proof title="Atendimento" text="Consultivo e documentado" />
              <Proof title="Foco" text="PF, PJ e negócios em expansão" />
            </div>
          </div>

          <aside className="hero-panel" aria-label="Resumo de atuação">
            <div className="panel-content">
              <p className="panel-title">Como a SS atua</p>
              <ul className="clean-list">
                {[
                  "Mapeia o perfil financeiro e a finalidade da solicitação.",
                  "Organiza documentos antes do envio para análise.",
                  "Compara propostas, custos, prazos e condições.",
                  "Acompanha a comunicação com parceiros financeiros.",
                ].map((item) => (
                  <li className="check-item" key={item}>
                    <span className="check-icon">
                      <BadgeCheck size={18} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="cnpj-box">
                <span>Identificação</span>
                <strong>SS INTERMEDIAÇÕES LTDA. - CNPJ 63.923.149/0001-62</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="servicos" className="site-section">
        <div className="site-container">
          <SectionHead
            kicker="Serviços"
            title="Intermediação com clareza em cada etapa."
            text="Uma apresentação profissional para reduzir ruído, alinhar expectativas e deixar o cliente seguro sobre documentos, prazos, taxas e próximos passos."
          />
          <div className="cards">
            {services.map(([icon, title, text]) => (
              <article className="card" key={title}>
                <span className="icon">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="site-section band">
        <div className="site-container">
          <SectionHead
            kicker="Processo"
            title="Um fluxo simples, rastreável e profissional."
            text="Cada etapa organiza melhor a conversa e evita que o cliente avance sem entender valores, riscos e documentos."
          />
          <div className="steps">
            {steps.map(([title, text]) => (
              <article className="step" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="seguranca" className="site-section">
        <div className="site-container split">
          <SectionHead
            kicker="Segurança"
            title="Sem promessa de aprovação. Com orientação responsável."
            text="A SS Intermediações posiciona o serviço como ponte entre cliente e parceiros, com análise e documentação. Aprovação, taxas e limites dependem das instituições."
          />
          <div className="note">
            <p>
              <strong>Compromissos de atendimento</strong>
            </p>
            <ul className="clean-list bullets">
              <li>Não apresentar aprovação como garantida.</li>
              <li>Registrar proposta, valores, prazo e condições antes de qualquer decisão.</li>
              <li>Preservar dados pessoais e documentos enviados para análise.</li>
              <li>Manter comunicação clara sobre pendências, riscos e custos envolvidos.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contato" className="site-section">
        <div className="site-container contact">
          <span className="kicker" style={{ color: "#b9f6df" }}>
            Contato
          </span>
          <h2 className="section-title">Vamos avaliar o melhor caminho financeiro para sua necessidade.</h2>
          <p>
            Envie uma mensagem com o tipo de crédito desejado, valor aproximado, perfil PF ou PJ e
            prazo de urgência para receber orientação inicial.
          </p>
          <div className="actions">
            <a
              className="button"
              href="https://www.instagram.com/ssintermediacoesfinanceiras/"
              target="_blank"
              rel="noreferrer"
            >
              Abrir Instagram <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container">
          <span>SS Intermediações - SS INTERMEDIAÇÕES LTDA. - CNPJ 63.923.149/0001-62.</span>
          <br />
          <span>
            <Building2 size={16} style={{ verticalAlign: "text-bottom" }} /> Intermediação
            financeira e apoio consultivo.
          </span>
        </div>
      </footer>
    </main>
  );
}

function Proof({ title, text }: { title: string; text: string }) {
  return (
    <div className="proof-item">
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function SectionHead({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="section-head">
      <span className="kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="muted">{text}</p>
    </div>
  );
}
