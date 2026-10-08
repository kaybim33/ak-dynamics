import DataPlanner from "./components/data-planner";

const services = [
  
  {
    title: "Custom Software & Business Applications",
    short: "SOFTWARE",
    description:
      "Build custom business applications, financial workflow systems, and internal management platforms using Python, Django, and PostgreSQL.",
    bullets: [
      "Python & Django development",
      "Loan management applications",
      "Approval workflow automation",
      "Enterprise dashboards",
    ],
    icon: "code",
  },
  {
    title: "Database & Cloud Solutions",
    short: "DATABASE",
    description:
      "Design, manage, migrate, back up, and restore business databases using PostgreSQL, SQL, and cloud technologies.",
    bullets: [
      "PostgreSQL administration",
      "Database backup & restoration",
      "Cloud deployment",
      "Database migration",
    ],
    icon: "database",
  },
  {
    title: "Corporate IT Training",
    short: "TRAINING",
    description:
      "Provide practical technology training to help employees improve their digital skills, reporting, and productivity.",
    bullets: [
      "Microsoft 365 & Excel",
      "Power BI & SQL training",
      "Python programming",
      "AI workplace productivity",
    ],
    icon: "education",
  },

  {
    title: "Data Cleanup & Quality",
    short: "DATA QUALITY",
    description:
      "Turn duplicate, incomplete, inconsistent, and outdated records into clean, reliable information your team can trust.",
    bullets: ["Duplicate removal", "Data standardization", "Integrity reviews", "Data quality improvement"],
    icon: "database",
  },
  {
    title: "Microsoft Dynamics 365",
    short: "CRM",
    description:
      "Improve CRM usability, forms, views, workflows, data quality, reporting, and everyday Dynamics 365 administration.",
    bullets: ["CRM optimization", "Forms & views", "Process improvement", "User support"],
    icon: "settings",
  },
  {
    title: "Dataverse Solutions",
    short: "PLATFORM",
    description:
      "Organize secure business data with well-designed tables, relationships, business rules, and dependable application structures.",
    bullets: ["Table design", "Relationships", "Business rules", "Data modeling"],
    icon: "layers",
  },
  {
    title: "Power BI Reporting",
    short: "ANALYTICS",
    description:
      "Transform operational data into dashboards, KPI reports, and clear insights that support better business decisions.",
    bullets: ["Interactive dashboards", "KPI reporting", "Data visualization", "Business insights"],
    icon: "chart",
  },
  {
    title: "Web Design & Development",
    short: "WEB",
    description:
      "Create modern, responsive, professional websites that present your organization clearly and help generate new inquiries.",
    bullets: ["Business websites", "Responsive design", "Website redesign", "Contact forms"],
    icon: "code",
  },
  {
    title: "Website Management",
    short: "WEB SUPPORT",
    description:
      "Keep your website current, dependable, and professional with content updates, troubleshooting, maintenance, and ongoing support.",
    bullets: ["Content updates", "Maintenance", "Troubleshooting", "Ongoing management"],
    icon: "globe",
  },
];

const industries = [
  {
    title: "Churches & Ministries",
    text: "Member, minister, congregation, registration, reporting, website, and operational technology needs.",
    icon: "community",
  },
  {
    title: "Nonprofits & Associations",
    text: "Contact data, member records, CRM processes, dashboards, websites, and administrative systems.",
    icon: "heart",
  },
  {
    title: "Small & Growing Businesses",
    text: "Customer data, reporting, business systems, automation, and professional websites that support growth.",
    icon: "business",
  },
  {
    title: "Professional Services",
    text: "Client records, reporting, CRM organization, process improvement, and polished digital presence.",
    icon: "briefcase",
  },
  {
    title: "Education & Training",
    text: "Data organization, reporting, technology support, and websites for learning and training organizations.",
    icon: "education",
  },
  {
    title: "Membership Organizations",
    text: "Member databases, registrations, communications, reporting, data quality, and web experiences.",
    icon: "users",
  },
];

const examples = [
  
  {
    label: "FINANCIAL SOFTWARE",
    title: "Loan Management & Financial Operations Platform",
    text:
      "Developed a custom financial operations application using Python, Django, and PostgreSQL. The platform supports loan applications, customer records, multi-level approval workflows, repayment management, and staff access controls.",
    points: [
      "Loan applications and customer management",
      "Multi-level loan approval workflows",
      "Daily, weekly, and monthly loan calculations",
      "Repayment tracking and financial records",
      "Role-based staff access and permissions",
      "PostgreSQL database and cloud deployment",
    ],
  },

  {
    label: "CRM & DATA",
    title: "CRM Data Quality & Cleanup",
    text:
      "Review duplicate records, missing information, inconsistent values, required fields, and data-entry processes to improve the reliability of your CRM.",
    points: ["Duplicate identification", "Data integrity review", "Standardization", "Recommended next steps"],
  },
  {
    label: "REPORTING",
    title: "Power BI Reporting & Dashboards",
    text:
      "Organize business data and turn it into clear dashboards and reports that help teams understand performance and make decisions.",
    points: ["KPI dashboards", "Operational reporting", "Data preparation", "Decision-ready insights"],
  },
  {
    label: "WEB",
    title: "Professional Website Build & Management",
    text:
      "Create or improve a responsive website that presents your organization professionally and makes it easier for customers, members, or donors to connect with you.",
    points: ["Responsive design", "Website redesign", "Content updates", "Ongoing management"],
  },
];

function Icon({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "database") {
    return (
      <svg {...props}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1A1.7 1.7 0 0 0 15.4 4a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.36.3.58.73.6 1.2v.1h1v4h-.1A1.7 1.7 0 0 0 19.4 15Z" />
      </svg>
    );
  }

  if (name === "layers") {
    return (
      <svg {...props}>
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...props}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg {...props}>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  if (name === "community" || name === "users") {
    return (
      <svg {...props}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3.4 2.5-5 5.5-5s4.9 1.6 5.5 5" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M15.5 14.5c2.7-.5 4.5.8 5 3.5" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg {...props}>
        <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
      </svg>
    );
  }

  if (name === "business" || name === "briefcase") {
    return (
      <svg {...props}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  if (name === "education") {
    return (
      <svg {...props}>
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M7 13v4c3 2 7 2 10 0v-4" />
      </svg>
    );
  }

  return (
    <svg {...props}>
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
      {/* Top contact bar */}
      <div className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2.5 text-xs sm:text-sm lg:px-8">
          <p className="font-semibold text-slate-300">
            Data • Microsoft Solutions • Reporting • Web
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:info@ak-dynamics.com" className="text-slate-300 transition hover:text-cyan-300">
              info@ak-dynamics.com
            </a>
            <span className="hidden text-slate-600 sm:inline">|</span>
            <a href="tel:+18169159221" className="font-bold text-white transition hover:text-cyan-300">
              (816) 915-9221
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/15 bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-600 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-black text-blue-700 shadow-lg">
              A&amp;K
            </div>
            <div>
              <p className="text-lg font-black leading-none">A&amp;K Dynamics</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-50">
                Data • Technology • Web
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            <a href="#services" className="transition hover:text-blue-950">Services</a>
            <a href="#data-planner" className="transition hover:text-blue-950">Data Planner</a>
            <a href="#why-us" className="transition hover:text-blue-950">Why A&amp;K</a>
            <a href="#industries" className="transition hover:text-blue-950">Who We Help</a>
            <a href="#about" className="transition hover:text-blue-950">About</a>
            <a
              href="#contact"
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Contact Us
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero with form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#075d73] via-[#087c8f] to-[#11a9b9] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_10%,rgba(255,255,255,.35),transparent_26%),radial-gradient(circle_at_90%_70%,rgba(37,99,235,.5),transparent_35%)]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 py-16 lg:grid-cols-[1.06fr_.94fr] lg:px-8 lg:py-20">
          <div className="pt-2 lg:pt-7">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">
              Data • Dynamics 365 • Power BI • Web Development
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.55rem]">
              Technology Solutions Built to Help Your Organization
              <span className="block text-orange-300">Work Smarter and Grow</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-cyan-50">
              
A&amp;K Dynamics LLC provides custom software development,
custom business dashboards and workflow automation, database administration,
Microsoft Dynamics 365, Power BI reporting, cloud solutions,
corporate IT training, and website development for businesses,
financial institutions, nonprofits, and organizations.

            </p>

            <div className="mt-8 space-y-4">
              {[
                
"Custom software and business application development",
"Interactive dashboards and workflow automation",
"Python, Django, PostgreSQL and cloud solutions",
"Microsoft Dynamics 365, Power BI and database services",
"Corporate IT training and technical support",
"Professional website development and management",

              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-cyan-950">
                    ✓
                  </span>
                  <p className="font-bold text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-orange-500 px-7 py-4 text-center font-extrabold text-white shadow-xl shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Request a Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/35 bg-white/10 px-7 py-4 text-center font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-cyan-900"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/maqrzrqa"
            method="POST"
            className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl shadow-cyan-950/30 sm:p-8"
          >
            <div className="border-b border-slate-100 pb-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                Start a Conversation
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Tell us how we can help
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Share a few details and we’ll review your request.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="hero-name" className="mb-1.5 block text-sm font-bold text-slate-700">
                  Full Name *
                </label>
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="hero-email" className="mb-1.5 block text-sm font-bold text-slate-700">
                  Email *
                </label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label htmlFor="hero-phone" className="mb-1.5 block text-sm font-bold text-slate-700">
                  Phone
                </label>
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label htmlFor="hero-company" className="mb-1.5 block text-sm font-bold text-slate-700">
                  Organization
                </label>
                <input
                  id="hero-company"
                  name="company"
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="hero-service" className="mb-1.5 block text-sm font-bold text-slate-700">
                  Service Needed
                </label>
                <select
                  id="hero-service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Data Cleanup">Data Cleanup</option>
                  
<option value="Custom Software Development">
  Custom Software Development
</option>
<option value="Loan Management Software">
  Loan Management Software
</option>
<option value="Financial Dashboard Development">
  Financial Dashboard Development
</option>
<option value="Python & Django Development">
  Python & Django Development
</option>
<option value="PostgreSQL Database Services">
  PostgreSQL Database Services
</option>
<option value="Corporate IT Training">
  Corporate IT Training
</option>
<option value="Cloud Deployment & Migration">
  Cloud Deployment & Migration
</option>

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

              <div className="sm:col-span-2">
                <label htmlFor="hero-message" className="mb-1.5 block text-sm font-bold text-slate-700">
                  How can we help? *
                </label>
                <textarea
                  id="hero-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project or challenge"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-orange-500 px-6 py-3.5 font-extrabold text-white shadow-md transition hover:bg-orange-600"
            >
              Request My Free Consultation
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              No obligation. We’ll review your request and recommend the next step.
            </p>
          </form>
        </div>
      </section>

      {/* Technology strip */}
      <section className="border-b border-slate-200 bg-[#edf8fa]">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <p className="text-center text-xs font-black uppercase tracking-[0.22em] text-slate-500">
            Technologies &amp; Platforms We Support
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 lg:grid-cols-6">
            {["Dynamics 365", "Dataverse", "Power BI", "Excel", "SQL Server", "Web Technologies"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-cyan-100 bg-white px-4 py-3 text-sm font-extrabold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why A&K */}
      <section id="why-us" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Why A&amp;K Dynamics
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Practical technology solutions built around your organization
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Your organization should not have to adapt to confusing technology.
              We focus on solutions that fit your data, systems, team, and goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Practical, Not Cookie-Cutter",
                text: "We begin with your real business problem and recommend a solution that fits your current environment and priorities.",
                icon: "layers",
              },
              {
                title: "Data & Business Focused",
                text: "We understand that clean information, reliable reporting, and usable systems are essential to day-to-day operations.",
                icon: "database",
              },
              {
                title: "One Partner, Multiple Capabilities",
                text: "From CRM and data quality to dashboards, web development, and website management, you can get support in one place.",
                icon: "globe",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
                <div className="mx-auto mt-4 h-0.5 w-12 bg-cyan-400" />
                <p className="mt-5 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <DataPlanner />

      <section id="services" className="border-y border-slate-100 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Data, Microsoft, reporting, and web solutions
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose the support you need today, with room to expand as your organization grows.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                      <Icon name={service.icon} />
                    </div>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-black tracking-[0.14em] text-cyan-700">
                      {service.short}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>

                  <ul className="mt-5 space-y-2.5 text-sm font-semibold text-slate-700">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5">
                        <span className="text-cyan-600">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-700 transition group-hover:gap-3"
                  >
                    Discuss this service <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service approach */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
                Built to Improve Your Operations
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Better technology starts with understanding how your organization works
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We look at the people, processes, data, systems, and digital tools
                behind your work so the solution is useful in practice, not just good on paper.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex rounded-lg bg-orange-500 px-6 py-3.5 font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Book a Strategy Conversation
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Understand", "We learn your goals, users, current process, systems, data, and website needs."],
                ["02", "Recommend", "We identify the most practical path forward and explain the next steps clearly."],
                ["03", "Build & Improve", "We clean, configure, design, develop, report, or optimize based on the agreed scope."],
                ["04", "Support", "We provide clear handoff, documentation, and ongoing support options when needed."],
              ].map(([number, title, text]) => (
                <div key={number} className="rounded-2xl border border-cyan-100 bg-[#f7fcfd] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600 text-sm font-black text-white">
                    {number}
                  </div>
                  <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-[#eef9fa] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Who We Help
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Flexible support for mission-driven and growing organizations
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you manage members, customers, donors, staff, registrations,
              operations, or online services, we can help strengthen the technology behind your work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Icon name={industry.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-950">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{industry.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Example engagements - not fake case studies */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Example Engagements
            </p>
            <h2 className="mt-3 text-3xl font-black text-cyan-700 sm:text-4xl">
              Projects A&amp;K Dynamics Can Support
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Examples of the types of projects we can help your organization plan, build, improve, or manage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {examples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-cyan-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                  {example.label}
                </p>
                <h3 className="mt-4 text-xl font-black text-slate-950">{example.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{example.text}</p>
                <ul className="mt-5 space-y-2.5 text-sm font-semibold text-slate-700">
                  {example.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-orange-500">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex rounded-lg bg-orange-500 px-7 py-3.5 font-extrabold text-white shadow-md transition hover:bg-orange-600"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

{/* Custom Dashboard Development */}
<section className="bg-slate-950 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
        Custom Software Solutions
      </p>

      <h2 className="mt-4 text-3xl font-black sm:text-4xl">
        Business Dashboards & Workflow Automation
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        We develop customized business applications and dashboards
        that help organizations manage records, automate approvals,
        monitor operations, and improve productivity.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Business Management Dashboards",
          text: "Manage customers, employees, projects, and daily operations in one place.",
        },
        {
          title: "Workflow Automation",
          text: "Automate application reviews, approvals, and business processes.",
        },
        {
          title: "Database & Cloud Applications",
          text: "Build applications using Python, Django, PostgreSQL, and cloud technologies.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-cyan-500/20 bg-white/10 p-7"
        >
          <h3 className="text-xl font-bold text-cyan-300">
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-300">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <a
        href="#contact"
        className="inline-block rounded-lg bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600"
      >
        Request a Custom Dashboard
      </a>
      
<a
  href="/demo-dashboard"
  className="mt-4 inline-block rounded-lg border-2 border-cyan-400 px-8 py-4 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 sm:ml-4 sm:mt-0"
>
  View Dashboard Demo →
</a>

    </div>
  </div>
</section>

      {/* Capability metrics */}
      <section className="bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-600 text-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["6", "CORE SERVICE AREAS"],
            ["CRM + DATA", "BUSINESS SYSTEM SUPPORT"],
            ["POWER BI", "REPORTING & INSIGHTS"],
            ["WEB", "DESIGN + MANAGEMENT"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`px-6 py-9 text-center ${
                index < 3 ? "lg:border-r lg:border-white/20" : ""
              }`}
            >
              <p className="text-3xl font-black">{value}</p>
              <div className="mx-auto mt-3 h-0.5 w-10 bg-white/70" />
              <p className="mt-3 text-xs font-black tracking-[0.12em] text-cyan-50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              About A&amp;K Dynamics LLC
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Technology support with a practical, data-first approach
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A&amp;K Dynamics LLC helps organizations improve data quality,
              simplify business processes, strengthen reporting, optimize Microsoft
              business systems, and build professional digital experiences.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              Our work can support teams using Microsoft Dynamics 365, Dataverse,
              Power BI, Excel, SQL Server, Salesforce, and modern web technologies.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Data-first thinking",
                "Clear communication",
                "Practical solutions",
                "Responsive support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
                  <span className="text-cyan-300">✓</span>
                  <span className="font-bold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0d2734] to-[#0b3f4b] p-8 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Meet the Founder
            </p>
            <h3 className="mt-4 text-3xl font-black">Abimbola Adeyemi</h3>
            <p className="mt-2 font-bold text-cyan-200">
              Founder &amp; Data Solutions Consultant
            </p>
            <p className="mt-6 leading-8 text-slate-300">
              Abimbola helps organizations improve data integrity, Microsoft
              Dynamics 365, Dataverse solutions, Power BI reporting, and professional
              websites. A&amp;K Dynamics combines data, technology, and web services
              to help organizations work more efficiently and present themselves professionally.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/abimbola-adeyemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-5 py-3 text-center text-sm font-extrabold text-cyan-950 transition hover:bg-cyan-300"
              >
                Founder LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/company/a-k-dynamics-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                Company LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
            Ready to Get Started?
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Let’s talk about what your organization needs next
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Whether the challenge is data, Dynamics 365, Dataverse, Power BI,
            web development, or website management, we’d be glad to discuss it.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex rounded-lg bg-orange-500 px-8 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Request a Free Consultation
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#eef9fa] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Contact A&amp;K Dynamics
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Share your challenge and we’ll review your needs and recommend a practical next step.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:info@ak-dynamics.com"
                className="block rounded-xl border border-cyan-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-700">
                  Business Email
                </p>
                <p className="mt-1 font-extrabold text-slate-950">info@ak-dynamics.com</p>
              </a>

              <a
                href="mailto:akdynamicsllc.us@gmail.com"
                className="block rounded-xl border border-cyan-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-700">
                  Gmail
                </p>
                <p className="mt-1 break-words font-extrabold text-slate-950">
                  akdynamicsllc.us@gmail.com
                </p>
              </a>

              <a
                href="tel:+18169159221"
                className="block rounded-xl border border-cyan-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-700">
                  Phone
                </p>
                <p className="mt-1 font-extrabold text-slate-950">(816) 915-9221</p>
              </a>

              <div className="rounded-xl border border-cyan-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-700">
                  Location
                </p>
                <p className="mt-1 font-extrabold text-slate-950">
                  Fortville, Indiana, USA
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Serving organizations remotely
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/maqrzrqa"
            method="POST"
            className="rounded-2xl border border-cyan-100 bg-white p-7 shadow-xl sm:p-9"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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
                Tell Us About Your Project *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Describe what you would like to improve, build, clean up, or manage"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-md transition hover:bg-orange-600"
            >
              Send My Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-black text-white">
                  A&amp;K
                </div>
                <div>
                  <p className="text-lg font-black">A&amp;K Dynamics LLC</p>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    Data • Technology • Web
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
                Helping organizations improve data quality, business systems,
                reporting, and digital presence.
              </p>
            </div>

            <div>
              <p className="font-black text-white">Contact</p>
              <div className="mt-4 space-y-2.5 text-sm text-slate-400">
                <p>info@ak-dynamics.com</p>
                <p>akdynamicsllc.us@gmail.com</p>
                <p>+1(816) 915-9221</p>
              
              </div>
            </div>

            <div>
              <p className="font-black text-white">Connect</p>
              <div className="mt-4 space-y-2.5 text-sm">
                <a
                  href="https://www.linkedin.com/in/abimbola-adeyemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 transition hover:text-cyan-300"
                >
                  Founder LinkedIn
                </a>
                <a
                  href="https://www.linkedin.com/company/a-k-dynamics-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 transition hover:text-cyan-300"
                >
                  Company LinkedIn
                </a>
                <a
                  href="https://ak-dynamics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 transition hover:text-cyan-300"
                >
                  ak-dynamics.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-7 text-sm text-slate-500 sm:flex-row">
            <p>© 2026 A&amp;K Dynamics LLC. All rights reserved.</p>
            <p>Professional data, Microsoft, reporting &amp; web solutions</p>
          </div>
        </div>
      </footer>
    </main>
  );
}