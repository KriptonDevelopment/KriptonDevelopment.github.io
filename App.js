import { useEffect, useState } from \"react\";
import \"@/App.css\";

const DISCORD_INVITE = \"gmW6vUP4sv\";
const DISCORD_URL = `https://discord.gg/${DISCORD_INVITE}`;
const GITHUB_URL = \"https://github.com/KriptonDevelopment\";

/* ------------------------------ Icons ------------------------------ */
const Icon = {
  Discord: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" {...p}>
      <path d=\"M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z\" />
    </svg>
  ),
  Github: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" {...p}>
      <path d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\" />
    </svg>
  ),
  Bolt: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/>
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>
    </svg>
  ),
  Cpu: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/>
      <rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"/>
      <path d=\"M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2\"/>
    </svg>
  ),
  Target: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <circle cx=\"12\" cy=\"12\" r=\"10\"/>
      <circle cx=\"12\" cy=\"12\" r=\"6\"/>
      <circle cx=\"12\" cy=\"12\" r=\"2\"/>
    </svg>
  ),
  Layers: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <polygon points=\"12 2 2 7 12 12 22 7 12 2\"/>
      <polyline points=\"2 17 12 22 22 17\"/>
      <polyline points=\"2 12 12 17 22 12\"/>
    </svg>
  ),
  Sparkles: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <path d=\"M12 3l1.9 5.8L20 10.5l-5.7 1.9L12 18l-2.3-5.6L4 10.5l6.1-1.7L12 3z\"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/>
      <polyline points=\"12 5 19 12 12 19\"/>
    </svg>
  ),
  Crown: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <path d=\"M2 4l5 6 5-8 5 8 5-6-2 16H4L2 4z\"/>
    </svg>
  ),
  Code: (p) => (
    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...p}>
      <polyline points=\"16 18 22 12 16 6\"/>
      <polyline points=\"8 6 2 12 8 18\"/>
    </svg>
  ),
};

/* ------------------------------ NAV ------------------------------ */
const Nav = ({ online, total }) => (
  <nav className=\"nav-wrap glass\" data-testid=\"kript-navbar\">
    <a href=\"#top\" className=\"nav-brand\" data-testid=\"nav-brand\">
      <div className=\"nav-brand-mark\">
        <img src=\"/logo-kripton.png\" alt=\"Kriptón logo\" />
      </div>
      <span>
        <span className=\"nav-brand-name\">Kriptón</span>
        <span className=\"nav-brand-dot\">.</span>
      </span>
    </a>
    <div className=\"nav-links\">
      <a href=\"#features\" className=\"nav-link\" data-testid=\"nav-link-features\">
        Features
      </a>
      <a href=\"#founders\" className=\"nav-link\" data-testid=\"nav-link-founders\">
        Fundadores
      </a>
      <a
        href={GITHUB_URL}
        target=\"_blank\"
        rel=\"noreferrer\"
        className=\"nav-link\"
        data-testid=\"nav-link-github\"
      >
        GitHub
      </a>
    </div>
    <a
      href={DISCORD_URL}
      target=\"_blank\"
      rel=\"noreferrer\"
      className=\"nav-discord\"
      data-testid=\"nav-discord-pill\"
    >
      <span className=\"nav-discord-dot\" />
      <b data-testid=\"nav-online\">{online ?? \"—\"}</b> online
      <span className=\"nav-discord-sep\">·</span>
      <b data-testid=\"nav-total\">{total ?? \"—\"}</b>
    </a>
  </nav>
);

/* ------------------------------ HERO ------------------------------ */
const Hero = ({ online, total }) => (
  <section className=\"hero\" id=\"top\">
    <div className=\"hero-glow\" />
    <div className=\"hero-logo-mark\">
      <img src=\"/logo-kripton.png\" alt=\"Kriptón\" />
    </div>

    <div className=\"hero-badge\" data-testid=\"hero-badge\">
      <span className=\"hero-badge-tag\">v2.0</span>
      Addon · Meteor Client · Fabric 1.21.x
    </div>

    <h1 className=\"hero-title\" data-testid=\"hero-title\">
      El addon que <em>domina</em>
      <br />
      sin pedir permiso.
    </h1>

    <p className=\"hero-sub\" data-testid=\"hero-sub\">
      Kriptón es un addon de Meteor Client diseñado para PvP de élite.
      Cada línea de código pensada para precisión, velocidad y ventaja real
      en cualquier servidor.
    </p>

    <div className=\"hero-cta\">
      <a
        href={DISCORD_URL}
        target=\"_blank\"
        rel=\"noreferrer\"
        className=\"btn btn-primary\"
        data-testid=\"hero-discord-btn\"
      >
        <Icon.Discord width=\"15\" height=\"15\" />
        Únete al Discord
      </a>
      <a
        href={GITHUB_URL}
        target=\"_blank\"
        rel=\"noreferrer\"
        className=\"btn btn-glass\"
        data-testid=\"hero-github-btn\"
      >
        <Icon.Github width=\"15\" height=\"15\" />
        Ver en GitHub
        <Icon.Arrow width=\"13\" height=\"13\" />
      </a>
    </div>

    <div className=\"stats-row\">
      <div className=\"stats-pill\" data-testid=\"hero-stats\">
        <div className=\"stat-seg\">
          <div className=\"stat-val accent\" data-testid=\"stat-total\">
            {total ?? \"—\"}
          </div>
          <div className=\"stat-lbl\">Miembros</div>
        </div>
        <div className=\"stat-seg\">
          <div className=\"stat-val\" data-testid=\"stat-online\">
            {online ?? \"—\"}
          </div>
          <div className=\"stat-lbl\">Online</div>
        </div>
        <div className=\"stat-seg\">
          <div className=\"stat-val serif\">Fabric</div>
          <div className=\"stat-lbl\">Loader</div>
        </div>
        <div className=\"stat-seg\">
          <div className=\"stat-val\">1.21.x</div>
          <div className=\"stat-lbl\">Minecraft</div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------ MARQUEE ------------------------------ */
const Marquee = () => {
  const items = [
    { t: \"Predicción de movimiento\", em: false },
    { t: \"ventaja real\", em: true },
    { t: \"Anti-Mace\", em: false },
    { t: \"Fabric 1.21.x\", em: false },
    { t: \"PvP de élite\", em: true },
    { t: \"Code-first\", em: false },
    { t: \"Chat cifrado\", em: false },
    { t: \"Open source\", em: true },
  ];
  const loop = [...items, ...items];
  return (
    <div className=\"marquee\" data-testid=\"kript-marquee\">
      <div className=\"marquee-label\">Diseñado para dominar</div>
      <div className=\"marquee-track\">
        {loop.map((it, i) => (
          <div className=\"marquee-item\" key={i}>
            {it.em ? <em>{it.t}</em> : <span>{it.t}</span>}
            <span className=\"marquee-dot\" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------ FEATURES ------------------------------ */
const Features = () => {
  const feats = [
    {
      icon: <Icon.Bolt width=\"20\" height=\"20\" />,
      tag: \"01\",
      title: \"Predicción al frame\",
      desc: \"Algoritmos que calculan trayectorias enemigas antes de que ocurran. Cada interacción ocurre en el instante correcto.\",
      cls: \"span-2-rows\",
      glyph: \"K\",
    },
    {
      icon: <Icon.Shield width=\"20\" height=\"20\" />,
      tag: \"02\",
      title: \"Defensa activa\",
      desc: \"Contramedidas en tiempo real frente a mazas, totems y exploits comunes en PvP.\",
    },
    {
      icon: <Icon.Cpu width=\"20\" height=\"20\" />,
      tag: \"03\",
      title: \"Bajo consumo\",
      desc: \"Optimizado al milisegundo. Sin lag, sin micro-stutters, sin compromiso.\",
    },
    {
      icon: <Icon.Target width=\"20\" height=\"20\" />,
      tag: \"04\",
      title: \"Combate de élite\",
      desc: \"Aura predictiva, KriptonMace y FlyTarget trabajan juntos para garantizar cada golpe.\",
      cls: \"span-2-cols\",
    },
    {
      icon: <Icon.Layers width=\"20\" height=\"20\" />,
      tag: \"05\",
      title: \"Modular\",
      desc: \"Cada módulo es independiente. Activa solo lo que necesitas.\",
    },
  ];
  return (
    <section className=\"section feat-section\" id=\"features\">
      <div className=\"kript-reveal\">
        <div className=\"section-eyebrow\">
          <span className=\"section-eyebrow-num\">F</span> Features
        </div>
        <h2 className=\"section-title\">
          Diseñado para <em>ganar</em>.
        </h2>
        <p className=\"section-sub\">
          Cinco principios fundamentales. Cero compromisos. Todo está
          construido para que tengas la ventaja antes de que el enemigo
          siquiera reaccione.
        </p>
      </div>

      <div className=\"feat-grid\">
        {feats.map((f, i) => (
          <div
            key={i}
            className={`feat-card glass kript-reveal ${f.cls || \"\"}`}
            style={{ transitionDelay: `${i * 60}ms` }}
            data-testid={`feat-card-${i}`}
          >
            {f.glyph && <span className=\"feat-bg-glyph\">{f.glyph}</span>}
            <span className=\"feat-tag\">{f.tag}</span>
            <div className=\"feat-icon\">{f.icon}</div>
            <div className=\"feat-title\">{f.title}</div>
            <div className=\"feat-desc\">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ------------------------------ FOUNDERS ------------------------------ */
const Founders = () => {
  const founders = [
    {
      initial: \"L\",
      name: \"Luis_Darck11\",
      role: \"Co-Founder · Lead Dev\",
      desc: \"Arquitecto del núcleo de Kriptón. Diseña la lógica predictiva y la optimización de cada módulo crítico.\",
      tags: [\"Combat\", \"Predictive AI\", \"Core\"],
    },
    {
      initial: \"M\",
      name: \"XMIhai_\",
      role: \"Co-Founder · PvP Engineer\",
      desc: \"Especialista en mecánicas PvP de Minecraft. Define el comportamiento de los módulos para que cada interacción sea decisiva.\",
      tags: [\"PvP\", \"Engineering\", \"Strategy\"],
    },
  ];
  return (
    <section className=\"section founders-section\" id=\"founders\">
      <div className=\"founders-head kript-reveal\">
        <div>
          <div className=\"section-eyebrow\">
            <span className=\"section-eyebrow-num\">02</span> Fundadores
          </div>
          <h2 className=\"section-title\">
            Las mentes detrás de <em>Kriptón</em>.
          </h2>
        </div>
        <p className=\"section-sub\" style={{ maxWidth: 360, marginTop: 0 }}>
          Dos desarrolladores. Una sola obsesión: construir el addon más
          preciso, rápido y técnicamente brutal de la escena de Meteor.
        </p>
      </div>

      <div className=\"founders-grid\">
        {founders.map((f, i) => (
          <div
            key={i}
            className=\"founder-card glass kript-reveal\"
            style={{ transitionDelay: `${i * 80}ms` }}
            data-testid={`founder-card-${i}`}
          >
            <div className=\"founder-top\">
              <div className=\"founder-avatar\">{f.initial}</div>
              <div className=\"founder-badge\">Founder</div>
            </div>
            <div className=\"founder-body\">
              <div className=\"founder-name\" data-testid={`founder-name-${i}`}>
                {f.name}
              </div>
              <div className=\"founder-role\">{f.role}</div>
              <div className=\"founder-desc\">{f.desc}</div>
            </div>
            <div className=\"founder-meta\">
              {f.tags.map((t) => (
                <span className=\"founder-tag\" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ------------------------------ CTA ------------------------------ */
const CTA = () => (
  <section className=\"cta-section\">
    <div className=\"cta-card glass kript-reveal\" data-testid=\"cta-card\">
      <h2 className=\"cta-title\">
        ¿Listo para <em>dominar</em>?
      </h2>
      <p className=\"cta-sub\">
        Únete a la comunidad de Kriptón. Soporte directo, actualizaciones y
        ventaja antes que cualquiera.
      </p>
      <div className=\"cta-actions\">
        <a
          href={DISCORD_URL}
          target=\"_blank\"
          rel=\"noreferrer\"
          className=\"btn btn-primary\"
          data-testid=\"cta-discord-btn\"
        >
          <Icon.Discord width=\"15\" height=\"15\" />
          Entrar al Discord
        </a>
        <a
          href={GITHUB_URL}
          target=\"_blank\"
          rel=\"noreferrer\"
          className=\"btn btn-glass\"
          data-testid=\"cta-github-btn\"
        >
          <Icon.Code width=\"14\" height=\"14\" />
          Ver código
        </a>
      </div>
    </div>
  </section>
);

/* ------------------------------ FOOTER ------------------------------ */
const Footer = () => (
  <footer className=\"footer\" data-testid=\"kript-footer\">
    <div className=\"footer-top\">
      <div className=\"footer-brand\">
        <div className=\"footer-brand-row\">
          <div className=\"footer-brand-mark\">
            <img src=\"/logo-kripton.png\" alt=\"Kriptón logo\" />
          </div>
          <div className=\"footer-brand-name\">
            Kriptón<em>.</em>
          </div>
        </div>
        <div className=\"footer-brand-desc\">
          Addon de alto rendimiento para Meteor Client. Construido con
          obsesión por el detalle.
        </div>
        <div className=\"footer-founders-line\" data-testid=\"footer-founders\">
          Fundado por <span>Luis_Darck11</span> &nbsp;·&nbsp;{\" \"}
          <span>XMIhai_</span>
        </div>
      </div>

      <div className=\"footer-col\">
        <h4>Producto</h4>
        <ul>
          <li>
            <a href=\"#features\">Features</a>
          </li>
          <li>
            <a href=\"#founders\">Fundadores</a>
          </li>
          <li>
            <a href={GITHUB_URL} target=\"_blank\" rel=\"noreferrer\">
              Releases
            </a>
          </li>
        </ul>
      </div>

      <div className=\"footer-col\">
        <h4>Comunidad</h4>
        <ul>
          <li>
            <a href={DISCORD_URL} target=\"_blank\" rel=\"noreferrer\">
              Discord
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target=\"_blank\" rel=\"noreferrer\">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className=\"footer-col\">
        <h4>Recursos</h4>
        <ul>
          <li>
            <a href=\"https://meteorclient.com\" target=\"_blank\" rel=\"noreferrer\">
              Meteor Client
            </a>
          </li>
          <li>
            <a
              href=\"https://fabricmc.net\"
              target=\"_blank\"
              rel=\"noreferrer\"
            >
              Fabric
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className=\"footer-bottom\">
      <div className=\"footer-copy\">
        © 2026 KriptonDevelopment · Todos los derechos reservados
      </div>
      <div className=\"footer-version\">v2.0 · estable</div>
    </div>
  </footer>
);

/* ------------------------------ APP ------------------------------ */
function App() {
  const [online, setOnline] = useState(null);
  const [total, setTotal] = useState(null);

  // Discord live stats
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const r = await fetch(
          `https://discord.com/api/v9/invites/${DISCORD_INVITE}?with_counts=true`
        );
        const d = await r.json();
        if (!mounted) return;
        setOnline((d.approximate_presence_count || 0).toLocaleString(\"es-ES\"));
        setTotal((d.approximate_member_count || 0).toLocaleString(\"es-ES\"));
      } catch (_e) {
        if (mounted) {
          setOnline(\"—\");
          setTotal(\"—\");
        }
      }
    };
    load();
    const t = setInterval(load, 60000);
    return () => {
      mounted = false;
      clearInterval(t);
    };
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(\"in\");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: \"0px 0px -40px 0px\" }
    );
    document.querySelectorAll(\".kript-reveal\").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Floating sparks
  useEffect(() => {
    const spawn = () => {
      const el = document.createElement(\"div\");
      el.className = \"kript-spark\";
      const red = Math.random() > 0.55;
      const size = Math.random() * 2 + 1;
      const dur = Math.random() * 10 + 8;
      el.style.cssText = `
        left:${Math.random() * 100}vw;
        width:${size}px;height:${size}px;
        opacity:${Math.random() * 0.5 + 0.2};
        animation-duration:${dur}s;
        background:${red ? \"rgba(233,30,62,.75)\" : \"rgba(255,255,255,.35)\"};
        box-shadow:${red ? \"0 0 6px rgba(233,30,62,.6)\" : \"none\"};
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000 + 500);
    };
    const t = setInterval(spawn, 320);
    for (let i = 0; i < 14; i++) spawn();
    return () => clearInterval(t);
  }, []);

  return (
    <div className=\"App\" data-testid=\"kript-app\">
      <div className=\"kript-grid-bg\" aria-hidden=\"true\" />
      <div className=\"kript-noise\" aria-hidden=\"true\" />
      <Nav online={online} total={total} />
      <Hero online={online} total={total} />
      <Marquee />
      <Features />
      <Founders />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
