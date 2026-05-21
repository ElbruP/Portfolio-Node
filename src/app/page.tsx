"use client";

import Footer from "../components/Footer";
import PaletteIcon from "../styles/farbpalette.svg";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="background-effect" />
      <div className="particles" />
      <div className="grid-floor" />
      <div className="glow-center" />
      <div className="energy-line" />

      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <h1 className="nav-link text-sm tracking-[0.45em]">
            PORTFOLIO
          </h1>

          <nav>
            <ul className="flex gap-14 text-sm font-semibold uppercase tracking-[0.3em]">
              <li>
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="nav-link">
                  Über mich
                </a>
              </li>

              <li>
                <a href="#projects" className="nav-link">
                  Projekte
                </a>
              </li>

              <li>
                <a href="#contact" className="nav-link">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="relative z-10">
          <div className="mb-10 flex items-center justify-center gap-12">
            <span className="text-[8rem] font-extralight tracking-[0.2em] text-white/90">
              E
            </span>

            <span className="text-[8rem] font-extralight tracking-[0.2em] text-white/90">
              P
            </span>
          </div>

          <h1 className="mb-8 text-5xl font-extralight uppercase tracking-[0.5em] md:text-7xl">
            ELBRUS PROKOPETS
          </h1>

          <div className="mb-10 flex justify-center">
            <p className="hero-role text-sm uppercase">
              Fachinformatiker · Systemintegration
            </p>
          </div>

          <p className="hero-scroll mb-8 text-xs uppercase tracking-[0.5em]">
            Scroll
          </p>
        </div>
      </section>

      <section id="about" className="relative px-6 py-40">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <h2 className="section-title mb-6 text-xs font-semibold uppercase tracking-[0.5em]">
              Über mich
            </h2>

            <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="about-text text-2xl font-light leading-relaxed">
                Ich entwickle moderne digitale Erlebnisse mit Fokus auf
                minimalistisches Design, Performance und innovative
                Benutzeroberflächen.
              </p>
            </div>

            <div>
              <p className="about-text text-lg leading-9">
                Mein Schwerpunkt liegt auf Frontend-Entwicklung,
                UI/UX Design und modernen Technologien wie Next.js,
                TypeScript und Tailwind CSS. Ich kombiniere technische
                Präzision mit einem hochwertigen visuellen Designansatz.
              </p>
            </div>
          </div>

          <div className="mt-28 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card rounded-3xl p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl">
                &lt;/&gt;
              </div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
                Development
              </h3>

              <p className="card-text text-base leading-8">
                Next.js, TypeScript, React, Node.js und moderne
                Webarchitekturen.
              </p>
            </div>

            <div className="card rounded-3xl p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <img
                  src={PaletteIcon.src || PaletteIcon}
                  alt="Design"
                  className="h-5 w-5 object-contain opacity-80"
                />
              </div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
                Design
              </h3>

              <p className="card-text text-base leading-8">
                Hochwertige UI/UX Konzepte mit Fokus auf Ästhetik,
                Motion und User Experience.
              </p>
            </div>

            <div className="card rounded-3xl p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl">
                ✦
              </div>

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
                Innovation
              </h3>

              <p className="card-text text-base leading-8">
                Moderne digitale Lösungen, kreative Konzepte und
                technologische Innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
  id="technologies"
  className="relative px-6 py-40"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-24 text-center">
      <h2 className="section-title text-xs font-semibold uppercase tracking-[0.55em] text-[#d7b98c]">
        Technologies & Tools
      </h2>
    </div>

    <div className="overflow-hidden rounded-[2px] border border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          "React",
          "TypeScript",
          "Node.js",
          "Next.js",
          "TailwindCSS",
          "Python",
          "PostgreSQL",
          "GraphQL",
          "Docker",
          "AWS",
          "Figma",
          "Motion Design",
        ].map((tech) => (
          <div
            key={tech}
            className="group flex h-44 items-center justify-center border border-white/5 bg-black/20 transition-all duration-500 hover:bg-white/[0.02]"
          >
            <span className="text-sm uppercase tracking-[0.35em] text-white/55 transition-all duration-500 group-hover:text-[#f3d4aa]">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


<section
  id="contact"
  className="relative px-6 py-40"
>
<div className="mx-auto w-full max-w-[2500px] rounded-[40px] border border-white/10 bg-black/70 px-10 py-20 backdrop-blur-xl md:px-20">
    <div className="mb-20 text-center">
      <h2 className="section-title text-xs font-semibold uppercase tracking-[0.55em] text-[#d7b98c]">
        Contact
      </h2>
    </div>

    <div className="grid gap-24 md:grid-cols-2">
      <div>
        <h3 className="mb-10 text-5xl font-extralight tracking-[0.12em] text-white/95">
          Let&apos;s Work Together
        </h3>

        <p className="mb-20 max-w-md text-lg leading-9 text-white/55">
          Haben Sie ein Projekt im Kopf? Kontaktieren Sie mich
          und lassen Sie uns über Ihre Ideen sprechen.
        </p>

        <div className="h-px w-full bg-white/5" />

        <div className="mt-14 space-y-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#d7b98c]/80">
              Email
            </p>

            <p className="text-2xl font-light text-white/90">
              elbrusprokopets11@gmail.com
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#d7b98c]/80">
              Telefon
            </p>

            <p className="text-2xl font-light text-white/90">
              +49 123 456 7890
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#d7b98c]/80">
              Standort
            </p>

            <p className="text-2xl font-light text-white/90">
              Koblenz, Deutschland
            </p>
          </div>
        </div>
      </div>

      <div>
      <form
  className="space-y-16"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Nachricht gesendet");
      form.reset();
    } else {
      alert("Fehler beim Senden");
    }
  }}
>
<div>
  <input
    name="name"
    type="text"
    placeholder="Ihr Name"
    className="w-full border-b border-white/10 bg-transparent pb-5 text-lg text-white/90 outline-none placeholder:text-white/35 focus:border-[#d7b98c]/40"
  />
</div>

<div>
  <input
    name="email"
    type="email"
    placeholder="Ihre Email"
    className="w-full border-b border-white/10 bg-transparent pb-5 text-lg text-white/90 outline-none placeholder:text-white/35 focus:border-[#d7b98c]/40"
  />
</div>

<div>
  <textarea
    name="message"
    placeholder="Ihre Nachricht"
    rows={6}
    className="w-full resize-none border-b border-white/10 bg-transparent pb-5 text-lg text-white/90 outline-none placeholder:text-white/35 focus:border-[#d7b98c]/40"
  />
</div>

          <button
            type="submit"
            className="group relative overflow-hidden border border-[#d7b98c]/20 px-10 py-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#f3d4aa] transition-all duration-500 hover:border-[#f3d4aa]/40 hover:bg-[#f3d4aa]/5"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
<Footer />
    </main>
  );
}