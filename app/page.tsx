const services = [
  {
    title: "Data Cleanup & Quality",
    description:
      "Clean duplicate, incomplete, and inconsistent records so your team can work with reliable information.",
    label: "DATA",
    icon: "database",
  },
  {
    title: "Microsoft Dynamics 365",
    description:
      "Improve CRM forms, views, workflows, reporting, user experience, and day-to-day administration.",
    label: "CRM",
    icon: "settings",
  },
  {
    title: "Dataverse Solutions",
    description:
      "Build organized tables, relationships, business rules, and dependable structures for business applications.",
    label: "PLATFORM",
    icon: "layers",
  },
  {
    title: "Power BI Reporting",
    description:
      "Turn business data into clear dashboards, KPIs, and reports that make decisions easier.",
    label: "ANALYTICS",
    icon: "chart",
  },
  {
    title: "Web Design & Development",
    description:
      "Create modern, responsive websites that clearly present your organization and work beautifully on every device.",
    label: "WEB",
    icon: "code",
  },
  {
    title: "Website Management",
    description:
      "Keep your website current with content updates, maintenance, troubleshooting, and ongoing support.",
    label: "SUPPORT",
    icon: "globe",
  },
];

const industries = [
  "Churches & Ministries",
  "Nonprofits & Associations",
  "Small Businesses",
  "Professional Services",
  "Education & Training",
  "Membership Organizations",
];

function Icon({ name }: { name: string }) {
  const cls = "h-6 w-6";

  if (name === "database") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M19 12a7 7 0 0 0-.08-1l2-1.55-2-3.46-2.42.98a7.4 7.4 0 0 0-1.72-1L14.42 3h-4l-.36 2.97a7.4 7.4 0 0 0-1.72 1L5.92 6l-2 3.46L6 11a7 7 0 0 0 0 2l-2.08 1.55 2 3.46 2.42-.98a7.4 7.4 0 0 0 1.72 1l.36 2.97h4l.36-2.97a7.4 7.4 0 0 0 1.72-1l2.42.98 2-3.46L18.92 13c.05-.33.08-.66.08-1Z" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-sm font-black text-white shadow-sm">
              A&amp;K
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-tight text-slate-950">
                A&amp;K Dynamics
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                Data • Technology • Web
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-blue-700">
              Services
            </a>
            <a href="#industries" className="transition hover:text-blue-700">
              Who We Help
            </a>
            <a href="#about" className="transition hover:text-blue-700">
              About
            </a>
            <a href="#contact" className="transition hover:text-blue-700">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-blue-700 px-5 py-2.5 font-bold text-white shadow-sm transition hover:bg-blue-800"
            >
              Free Consultation
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-bold text-white md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Practical technology solutions for growing organizations
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Better systems.
              <span className="block text-blue-700">Cleaner data.</span>
              <span className="block">A stronger digital presence.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              A&amp;K Dynamics LLC helps organizations improve Microsoft
              Dynamics 365, clean and organize business data, build useful
              Power BI reporting, and create professional websites.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-blue-700 px-7 py-3.5 text-center font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-center font-bold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
              >
                View Our Services
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              {["Dynamics 365", "Dataverse", "Power BI", "Web Design"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-teal-600">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Clean capability panel */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-25px_rgba(15,23,42,0.20)] sm:p-8">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                  What we help improve
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">
                  Technology that supports your organization
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  ["01", "CRM & Data", "Cleaner records and better processes"],
                  ["02", "Reporting", "Clear dashboards and useful insights"],
                  ["03", "Web", "Professional websites and ongoing management"],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white">
                      {number}
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-950">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-5">
                <p className="text-sm font-bold text-blue-900">
                  One partner for data, Microsoft business systems, reporting,
                  and web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small trust strip */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl border-x border-b border-slate-100 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Data Quality", "Reliable, consistent records"],
            ["CRM", "Practical Dynamics 365 support"],
            ["Reporting", "Clear, decision-ready insights"],
            ["Web", "Professional digital presence"],
          ].map(([title, text], index) => (
            <div
              key={title}
              className={`px-6 py-6 ${
                index < 3 ? "lg:border-r lg:border-slate-100" : ""
              }`}
            >
              <p className="font-extrabold text-slate-950">{title}</p>
              <p className="mt-1 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Solutions designed around real business needs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Flexible support for organizations that need cleaner data,
              stronger systems, better reporting, or a more professional website.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon name={service.icon} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black tracking-[0.14em] text-slate-500">
                    {service.label}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-y border-slate-100 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">
                Who We Help
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Professional support for organizations of many sizes
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                We help teams that manage customers, members, donors, staff,
                registrations, operations, business data, or online services.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-black text-teal-700">
                    ✓
                  </span>
                  <span className="font-bold text-slate-800">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Simple from start to finish
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              ["01", "Understand", "We learn about your organization, goals, current systems, and the problem you want to solve."],
              ["02", "Build & Improve", "We clean, configure, design, develop, or optimize the solution that fits your needs."],
              ["03", "Support", "We provide a clear handoff and can continue supporting your data, systems, reporting, or website."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-2xl border border-slate-200 p-7">
                <p className="text-sm font-black tracking-[0.18em] text-blue-700">
                  {number}
                </p>
                <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              About A&amp;K Dynamics
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Practical technology support with clear communication
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A&amp;K Dynamics LLC helps organizations improve data quality,
              business systems, reporting, and digital presence with solutions
              designed around how they actually work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Data-focused", "Practical", "Responsive", "Professional"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
              Founder
            </p>
            <h3 className="mt-3 text-2xl font-black">Abimbola Adeyemi</h3>
            <p className="mt-1 font-semibold text-slate-400">
              Founder &amp; Data Solutions Consultant
            </p>
            <p className="mt-5 leading-7 text-slate-300">
              Helping organizations improve data integrity, Microsoft Dynamics
              365, Dataverse, Power BI reporting, and professional web solutions.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/abimbola-adeyemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Founder LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/company/a-k-dynamics-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Company LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                Contact Us
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Let’s talk about your project
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tell us what you would like to improve, build, clean up, or
                manage. We’ll review your request and recommend a practical next step.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:info@ak-dynamics.com"
                  className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200"
                >
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                    Business Email
                  </p>
                  <p className="mt-1 font-bold text-slate-950">
                    info@ak-dynamics.com
                  </p>
                </a>

                <a
                  href="mailto:akdynamicsllc.us@gmail.com"
                  className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200"
                >
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                    Gmail
                  </p>
                  <p className="mt-1 break-words font-bold text-slate-950">
                    akdynamicsllc.us@gmail.com
                  </p>
                </a>

                <a
                  href="tel:+18169159221"
                  className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200"
                >
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 font-bold text-slate-950">
                    (816) 915-9221
                  </p>
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Fortville, Indiana, USA • Serving organizations remotely
              </p>
            </div>

            <form
              action="https://formspree.io/f/maqrzrqa"
              method="POST"
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-lg sm:p-9"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-bold text-slate-700">
                    Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Organization name"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@organization.com"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="system" className="mb-2 block text-sm font-bold text-slate-700">
                    Current System
                  </label>
                  <select
                    id="system"
                    name="system"
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
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
                  <label htmlFor="service" className="mb-2 block text-sm font-bold text-slate-700">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
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
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Describe what you would like to improve, build, clean up, or manage"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-blue-700 px-8 py-4 text-base font-extrabold text-white shadow-md transition hover:bg-blue-800"
              >
                Request a Free Consultation
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                No obligation. Tell us what you need and we’ll respond with the best next step.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-xs font-black text-white">
                A&amp;K
              </div>
              <div>
                <p className="font-extrabold text-slate-950">A&amp;K Dynamics LLC</p>
                <p className="text-xs text-slate-500">Data • Technology • Web</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              © 2026 A&amp;K Dynamics LLC. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <a
              href="https://www.linkedin.com/in/abimbola-adeyemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-700"
            >
              Founder LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/company/a-k-dynamics-llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-700"
            >
              Company LinkedIn
            </a>
            <a
              href="https://ak-dynamics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-700"
            >
              ak-dynamics.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
