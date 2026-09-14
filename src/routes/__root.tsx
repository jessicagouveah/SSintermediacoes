import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="state-page">
      <div className="state-card">
        <p className="kicker">Erro 404</p>
        <h1 className="section-title">Página não encontrada</h1>
        <p className="muted">O endereço acessado não existe ou foi movido.</p>
        <Link to="/" className="button button-primary">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="state-page">
      <div className="state-card">
        <p className="kicker">Instabilidade</p>
        <h1 className="section-title">Esta página não carregou</h1>
        <p className="muted">Tente atualizar a página ou voltar para a tela inicial.</p>
        <div className="actions" style={{ justifyContent: "center" }}>
          <button
            type="button"
            className="button button-primary"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Tentar novamente
          </button>
          <a href="/" className="button button-secondary">
            Ir ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SS Intermediações | Soluções financeiras" },
      {
        name: "description",
        content:
          "Intermediação financeira com análise documental, orientação clara e conexão com parceiros de crédito.",
      },
      { name: "theme-color", content: "#0f6b4e" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SS Intermediações" },
      {
        property: "og:description",
        content:
          "Apoio consultivo para organizar documentos, analisar propostas e acompanhar solicitações financeiras.",
      },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
