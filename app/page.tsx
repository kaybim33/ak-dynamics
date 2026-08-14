const services = [
  {
    title: "Data Cleanup & Quality",
    description:
      "Turn incomplete, duplicated, and inconsistent records into reliable data your team can trust.",
    bullets: ["Duplicate removal", "Data standardization", "Integrity reviews"],
    icon: "database",
  },
  {
    title: "Microsoft Dynamics 365",
    description:
      "Improve CRM usability, data quality, workflows, forms, views, reporting, and everyday administration.",
    bullets: ["CRM optimization", "Forms & views", "User support"],
    icon: "settings",
  },
  {
    title: "Dataverse Solutions",
    description:
      "Build dependable tables, relationships, business rules, and secure structures for your applications.",
    bullets: ["Data modeling", "Business rules", "Secure structures"],
    icon: "layers",
  },
  {
    title: "Power BI Reporting",
    description:
      "Transform business data into clear dashboards, KPI reporting, and decision-ready insights.",
    bullets: ["Interactive dashboards", "KPI reporting", "Executive insights"],
    icon: "chart",
  },
  {
    title: "Web Design & Development",
    description:
      "Create professional, responsive websites designed to build trust, showcase your services, and generate inquiries.",
    bullets: ["Business websites", "Responsive design", "Website redesign"],
    icon: "code",
  },
  {
    title: "Website Management",
    description:
      "Keep your website current, dependable, and professional with ongoing updates, maintenance, and support.",
    bullets: ["Content updates", "Maintenance", "Troubleshooting"],
    icon: "globe",
  },
];

const industries = [
  "Churches & Ministries",
  "Nonprofits & Associations",
  "Small & Growing Businesses",
  "Professional Services",
  "Education & Training",
  "Membership Organizations",
];

function Icon({ name }: { name: string }) {
  const common = "h-7 w-7";

  if (name === "database") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1A1.7 1.7 0 0 0 15.4 4a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.36.3.58.73.6 1.2v.1h1v4h-.1A1.7 1.7 0 0 0 19.4 15Z" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-white shadow-lg shadow-cyan-500/20">
              A&amp;K
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">A&amp;K Dynamics</p>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                Data • Technology • Web
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="text-slate-300 transition hover:text-white">Services</a>
            <a href="#industries" className="text-slate-300 transition hover:text-white">Who We Help</a>
            <a href="#about" className="text-slate-300 transition hover:text-white">About</a>
            <a href="#contact" className="text-slate-300 transition hover:text-white">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              Start a Project
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.22),transparent_35%),linear-gradient(to_bottom_right,#020617,#0f172a,#082f49)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Data, Microsoft Solutions &amp; Professional Websites
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Better data.
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Better systems. Better digital presence.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              A&amp;K Dynamics LLC helps organizations clean and organize data,
              improve Microsoft Dynamics 365 and Dataverse, build meaningful
              Power BI reporting, and create professional websites that support growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-center text-base font-extrabold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Request a Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              {["Dynamics 365", "Dataverse", "Power BI", "Data Cleanup", "Web Design"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-cyan-300">✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">A&amp;K Solutions</p>
                  <p className="mt-1 text-xl font-bold">One partner. Multiple capabilities.</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["CRM & Data", "Clean, consistent records", "database"],
                  ["Dynamics 365", "Smarter CRM operations", "settings"],
                  ["Power BI", "Clear business insights", "chart"],
                  ["Web Services", "Modern digital presence", "globe"],
                ].map(([title, text, icon]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/45 p-5">
                    <div className="mb-5 inline-flex rounded-xl bg-cyan-300/10 p-3 text-cyan-200">
                      <Icon name={icon} />
                    </div>
                    <p className="font-bold text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-400">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">Built around your organization</p>
                    <p className="mt-1 font-bold">Practical solutions. Clear communication.</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-slate-950">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Clean", "Improve data accuracy"],
            ["Optimize", "Strengthen business systems"],
            ["Visualize", "Turn data into insight"],
            ["Build", "Create a stronger web presence"],
          ].map(([title, text]) => (
            <div key={title} className="bg-white px-6 py-7 text-center">
              <p className="text-xl font-black text-slate-950">{title}</p>
              <p className="mt-1 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">What We Do</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Business technology that works together
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              From CRM and data quality to reporting and websites, we help organizations
              improve the systems their teams and customers depend on.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-gradient-to-br from-cyan-50 to-blue-50" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-slate-950 p-3.5 text-cyan-300 shadow-lg shadow-slate-200 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon name={service.icon} />
                  </div>
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">Service {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-2xl font-extrabold text-slate-950">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                  <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-50 text-xs text-cyan-700">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Who We Help</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Built for organizations that need clarity, reliability, and growth
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Whether you manage members, customers, donors, staff, registrations,
                operations, or online services, A&amp;K Dynamics can help simplify the technology behind your work.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-extrabold text-blue-700 hover:text-blue-900">
                Tell us what you need <span>→</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <div key={industry} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-200 hover:bg-cyan-50/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-black text-blue-700 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-950">{industry}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Flexible support tailored to your team, systems, data, and digital needs.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-950 py-24 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">How We Work</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Simple, professional, and focused on results</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We start with the problem, understand your current setup, and recommend a practical path forward.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Discover", "We learn about your goals, challenges, users, data, systems, or website needs."],
              ["02", "Improve", "We clean, configure, design, build, or optimize the solution that fits your organization."],
              ["03", "Support", "We help you move forward with clear handoff, documentation, and ongoing support options."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
                <p className="text-sm font-black tracking-[0.2em] text-cyan-300">{number}</p>
                <h3 className="mt-5 text-2xl font-extrabold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">About A&amp;K Dynamics</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Practical technology support with a personal approach
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A&amp;K Dynamics LLC helps organizations improve data quality, simplify business processes,
              strengthen reporting, and build professional digital experiences.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              Our services support teams working with Microsoft Dynamics 365, Dataverse, Power BI,
              Excel, SQL Server, Salesforce, and modern web technologies.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Data-first thinking", "Clear communication", "Practical solutions", "Responsive support"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 font-bold text-slate-800">
                  <span className="text-cyan-600">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-100 to-blue-100 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 p-9 text-white shadow-2xl sm:p-11">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Meet the Founder</p>
              <h3 className="mt-5 text-4xl font-black">Abimbola Adeyemi</h3>
              <p className="mt-2 font-semibold text-blue-200">Founder &amp; Data Solutions Consultant</p>
              <p className="mt-7 leading-8 text-slate-300">
                Abimbola helps organizations improve data integrity, optimize Microsoft Dynamics 365,
                organize Dataverse solutions, develop meaningful Power BI reports, and create and manage professional websites.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.linkedin.com/in/abimbola-adeyemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-5 py-3 text-center font-extrabold text-slate-950 transition hover:bg-cyan-100"
                >
                  Founder LinkedIn
                </a>
                <a
                  href="https://www.linkedin.com/company/a-k-dynamics-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-center font-extrabold text-white transition hover:bg-white/10"
                >
                  Company LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100">Ready to improve your organization?</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let’s talk about your next project.</h2>
          </div>
          <a href="#contact" className="rounded-xl bg-white px-7 py-4 font-extrabold text-blue-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-50">
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Let’s Work Together</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Tell us what you need
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Share your data, Dynamics 365, reporting, web design, or website management needs.
                We’ll review your request and recommend the next step.
              </p>

              <div className="mt-9 space-y-4">
                <a href="mailto:info@ak-dynamics.com" className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Business Email</p>
                  <p className="mt-2 font-extrabold text-slate-950">info@ak-dynamics.com</p>
                </a>
                <a href="mailto:akdynamicsllc.us@gmail.com" className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Gmail</p>
                  <p className="mt-2 break-words font-extrabold text-slate-950">akdynamicsllc.us@gmail.com</p>
                </a>
                <a href="tel:+18169159221" className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Phone</p>
                  <p className="mt-2 font-extrabold text-slate-950">(816) 915-9221</p>
                </a>
              </div>

              <p className="mt-7 text-sm font-medium text-slate-500">Fortville, Indiana, USA • Serving organizations remotely</p>
            </div>

            <form
              action="https://formspree.io/f/maqrzrqa"
              method="POST"
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">Full Name</label>
                  <input id="name" type="text" name="name" required placeholder="Enter your full name" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-bold text-slate-700">Organization</label>
                  <input id="company" type="text" name="company" placeholder="Organization name" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">Email Address</label>
                  <input id="email" type="email" name="email" required placeholder="name@organization.com" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">Phone Number</label>
                  <input id="phone" type="tel" name="phone" placeholder="Your phone number" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="system" className="mb-2 block text-sm font-bold text-slate-700">Current System</label>
                  <select id="system" name="system" defaultValue="" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100">
                    <option value="" disabled>Select a system</option>
                    <option value="Microsoft Dynamics 365">Microsoft Dynamics 365</option>
                    <option value="Excel">Excel</option>
                    <option value="Dataverse">Dataverse</option>
                    <option value="Salesforce">Salesforce</option>
                    <option value="SQL Server">SQL Server</option>
                    <option value="Website / CMS">Website / CMS</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-bold text-slate-700">Service Needed</label>
                  <select id="service" name="service" defaultValue="" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100">
                    <option value="" disabled>Select a service</option>
                    <option value="Data Cleanup">Data Cleanup</option>
                    <option value="Duplicate Removal">Duplicate Removal</option>
                    <option value="Dynamics 365 Support">Dynamics 365 Support</option>
                    <option value="Dataverse Solution">Dataverse Solution</option>
                    <option value="Power BI Dashboard">Power BI Dashboard</option>
                    <option value="Data Migration">Data Migration</option>
                    <option value="Web Design & Development">Web Design &amp; Development</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Website Management">Website Management</option>
                    <option value="Website Maintenance">Website Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">Tell Us About Your Project</label>
                <textarea id="message" name="message" rows={6} required placeholder="Describe what you would like to improve, build, clean up, or manage" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
              </div>

              <button type="submit" className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl">
                Request a Free Consultation
              </button>
              <p className="mt-4 text-center text-xs leading-5 text-slate-400">No obligation. Tell us what you need and we’ll respond with the best next step.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 md:flex-row">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black">A&amp;K</div>
                <div>
                  <p className="text-lg font-bold">A&amp;K Dynamics LLC</p>
                  <p className="text-sm text-slate-400">Data • Technology • Web</p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
                Helping organizations improve data, business systems, reporting, and digital presence.
              </p>
            </div>

            <div className="grid gap-8 text-sm sm:grid-cols-2">
              <div>
                <p className="font-bold text-white">Contact</p>
                <div className="mt-4 space-y-2 text-slate-400">
                  <p>info@ak-dynamics.com</p>
                  <p>akdynamicsllc.us@gmail.com</p>
                  <p>(816) 915-9221</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-white">Connect</p>
                <div className="mt-4 space-y-2">
                  <a href="https://www.linkedin.com/in/abimbola-adeyemi/" target="_blank" rel="noopener noreferrer" className="block text-slate-400 transition hover:text-cyan-300">Founder LinkedIn</a>
                  <a href="https://www.linkedin.com/company/a-k-dynamics-llc/" target="_blank" rel="noopener noreferrer" className="block text-slate-400 transition hover:text-cyan-300">Company LinkedIn</a>
                  <a href="https://ak-dynamics.com" target="_blank" rel="noopener noreferrer" className="block text-slate-400 transition hover:text-cyan-300">ak-dynamics.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-7 text-sm text-slate-500 sm:flex-row">
            <p>© 2026 A&amp;K Dynamics LLC. All rights reserved.</p>
            <p>Fortville, Indiana, USA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}