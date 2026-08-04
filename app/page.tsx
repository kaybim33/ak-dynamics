export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="text-cyan-400">A&amp;K</span> Dynamics
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#services"
              className="transition hover:text-cyan-300"
            >
              Services
            </a>

            <a
              href="#about"
              className="transition hover:text-cyan-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-300"
            >
              Contact
            </a>

            <a
              href="https://www.linkedin.com/company/a-k-dynamics-llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold transition hover:bg-blue-500"
            >
              Company LinkedIn
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-white md:hidden"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-28 text-white">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="mb-5 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-200">
              DATA CLEANUP • DYNAMICS 365 • DATAVERSE • POWER BI
            </p>

            <h1 className="mb-7 text-5xl font-bold leading-tight md:text-7xl">
              Turn Messy Data Into
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Trusted Business Intelligence
              </span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
              A&amp;K Dynamics LLC helps organizations clean inaccurate
              data, remove duplicate records, improve Microsoft Dynamics
              365, organize Dataverse, and build Power BI reports that
              support better business decisions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-emerald-500 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-400"
              >
                Get a FREE Data Health Check
              </a>

              <a
                href="tel:+18169159221"
                className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-white hover:text-blue-950"
              >
                Call (816) 915-9221
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Strip */}
      <section className="bg-white py-9 shadow-sm">
        <div className="mx-auto grid max-w-6xl gap-7 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-blue-800">Clean</p>
            <p className="mt-1 text-sm text-slate-500">
              Accurate and reliable records
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cyan-700">Organize</p>
            <p className="mt-1 text-sm text-slate-500">
              Structured business data
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-indigo-700">Improve</p>
            <p className="mt-1 text-sm text-slate-500">
              Better systems and processes
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-emerald-700">Report</p>
            <p className="mt-1 text-sm text-slate-500">
              Clear and useful insights
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-center font-bold uppercase tracking-widest text-cyan-700">
            What We Do
          </p>

          <h2 className="mb-5 text-center text-4xl font-bold md:text-5xl">
            Professional Data Services
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-center leading-7 text-slate-600">
            Practical solutions that improve data quality, reporting,
            customer records, and daily business operations.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-blue-100 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                ✓
              </div>

              <h3 className="mb-4 text-2xl font-bold text-blue-950">
                Data Cleanup
              </h3>

              <p className="leading-7 text-slate-600">
                Remove duplicates, correct errors, standardize information,
                and improve the overall quality of business data.
              </p>
            </article>

            <article className="rounded-2xl border border-cyan-100 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-2xl">
                ⚙
              </div>

              <h3 className="mb-4 text-2xl font-bold text-cyan-950">
                Dynamics 365
              </h3>

              <p className="leading-7 text-slate-600">
                Improve CRM forms, views, processes, customer records,
                reporting, and daily system use.
              </p>
            </article>

            <article className="rounded-2xl border border-indigo-100 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                ◫
              </div>

              <h3 className="mb-4 text-2xl font-bold text-indigo-950">
                Dataverse
              </h3>

              <p className="leading-7 text-slate-600">
                Build secure business tables, relationships, data models,
                applications, and dependable data structures.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-100 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                ▥
              </div>

              <h3 className="mb-4 text-2xl font-bold text-emerald-950">
                Power BI
              </h3>

              <p className="leading-7 text-slate-600">
                Create interactive dashboards, KPI reports, and clear
                insights that support confident business decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-blue-700">
              About A&amp;K Dynamics
            </p>

            <h2 className="mb-7 text-4xl font-bold leading-tight md:text-5xl">
              Data Solutions Built Around Your Business
            </h2>

            <p className="mb-5 leading-8 text-slate-600">
              We help organizations improve data quality, simplify
              business processes, and create reports they can trust.
            </p>

            <p className="mb-8 leading-8 text-slate-600">
              Our services support organizations using Excel, Microsoft
              Dynamics 365, Dataverse, Power BI, SQL Server, Salesforce,
              and other business systems.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-5">
                <p className="font-bold text-blue-900">
                  Data-first approach
                </p>
              </div>

              <div className="rounded-xl bg-cyan-50 p-5">
                <p className="font-bold text-cyan-900">
                  Practical solutions
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-5">
                <p className="font-bold text-indigo-900">
                  Personalized support
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-5">
                <p className="font-bold text-emerald-900">
                  Clear reporting
                </p>
              </div>
            </div>
          </div>

          {/* Founder */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-cyan-900 p-9 text-white shadow-2xl">
            <p className="mb-3 font-semibold text-cyan-300">
              Meet the Founder
            </p>

            <h3 className="mb-2 text-3xl font-bold">
              Abimbola Adeyemi
            </h3>

            <p className="mb-6 text-blue-200">
              Founder and Data Solutions Consultant
            </p>

            <p className="mb-8 leading-8 text-blue-100">
              Abimbola helps organizations improve data integrity,
              optimize Microsoft Dynamics 365, organize Dataverse
              solutions, and develop meaningful Power BI reports.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/abimbola-adeyemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-500"
              >
                Founder LinkedIn
              </a>

              <a
                href="https://www.linkedin.com/company/a-k-dynamics-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-blue-950"
              >
                Company LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 text-center text-4xl font-bold md:text-5xl">
            Why Choose A&amp;K Dynamics?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-lg">
              <div className="mb-5 text-4xl text-blue-700">✓</div>

              <h3 className="mb-3 text-2xl font-bold text-blue-950">
                Reliable Data
              </h3>

              <p className="leading-7 text-slate-600">
                Reduce errors and build confidence in the information your
                organization uses every day.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-8 shadow-lg">
              <div className="mb-5 text-4xl text-cyan-700">⚡</div>

              <h3 className="mb-3 text-2xl font-bold text-cyan-950">
                Practical Solutions
              </h3>

              <p className="leading-7 text-slate-600">
                Save time, improve reporting, and make business processes
                easier to manage.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-lg">
              <div className="mb-5 text-4xl text-emerald-700">◆</div>

              <h3 className="mb-3 text-2xl font-bold text-emerald-950">
                Personalized Support
              </h3>

              <p className="leading-7 text-slate-600">
                Receive thoughtful recommendations and support designed
                around the needs of your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-center font-bold uppercase tracking-widest text-cyan-300">
            Let&apos;s Work Together
          </p>

          <h2 className="mb-5 text-center text-4xl font-bold md:text-5xl">
            Get Your FREE Data Health Check
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center leading-7 text-slate-300">
            Tell us about your data challenge and we will contact you to
            discuss your needs and recommend the next step.
          </p>

          <form
            action="https://formspree.io/f/maqrzrqa"
            method="POST"
            className="space-y-6 rounded-3xl bg-white p-8 text-slate-900 shadow-2xl md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block font-semibold"
                >
                  Company Name
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-semibold"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="system"
                className="mb-2 block font-semibold"
              >
                What system do you currently use?
              </label>

              <select
                id="system"
                name="system"
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="" disabled>
                  Select a system
                </option>

                <option value="Microsoft Dynamics 365">
                  Microsoft Dynamics 365
                </option>

                <option value="Excel">Excel</option>

                <option value="Dataverse">Dataverse</option>

                <option value="Salesforce">Salesforce</option>

                <option value="SQL Server">SQL Server</option>

                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block font-semibold"
              >
                What service do you need?
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="Data Cleanup">Data Cleanup</option>

                <option value="Duplicate Removal">
                  Duplicate Removal
                </option>

                <option value="Dynamics 365 Support">
                  Dynamics 365 Support
                </option>

                <option value="Dataverse Solution">
                  Dataverse Solution
                </option>

                <option value="Power BI Dashboard">
                  Power BI Dashboard
                </option>

                <option value="Data Migration">Data Migration</option>

                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-semibold"
              >
                Tell Us About Your Project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Describe your data problem or project"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:from-blue-600 hover:to-cyan-500"
            >
              Request My FREE Data Health Check
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <a
              href="mailto:info@ak-dynamics.com"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <p className="mb-2 text-sm text-cyan-300">
                Business Email
              </p>

              <p className="font-bold">info@ak-dynamics.com</p>
            </a>

            <a
              href="mailto:akdynamicsllc.us@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <p className="mb-2 text-sm text-cyan-300">
                Gmail
              </p>

              <p className="break-words font-bold">
                akdynamicsllc.us@gmail.com
              </p>
            </a>

            <a
              href="tel:+18169159221"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <p className="mb-2 text-sm text-cyan-300">
                Phone
              </p>

              <p className="font-bold">(816) 915-9221</p>
            </a>

            <a
              href="https://ak-dynamics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <p className="mb-2 text-sm text-cyan-300">
                Website
              </p>

              <p className="font-bold">ak-dynamics.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/abimbola-adeyemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <p className="mb-2 text-sm text-cyan-300">
                Founder LinkedIn
              </p>

              <p className="font-bold">Abimbola Adeyemi</p>
            </a>

            <a
              href="https://www.linkedin.com/company/a-k-dynamics-llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <p className="mb-2 text-sm text-cyan-300">
                Company LinkedIn
              </p>

              <p className="font-bold">A&amp;K Dynamics LLC</p>
            </a>
          </div>

          <p className="mt-8 text-center text-slate-300">
            Fortville, Indiana, USA
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-3 text-2xl font-bold">
            <span className="text-cyan-400">A&amp;K</span> Dynamics LLC
          </h2>

          <p className="mb-6 text-slate-400">
            Data Cleanup • Dynamics 365 • Dataverse • Power BI
          </p>

          <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="mailto:info@ak-dynamics.com"
              className="transition hover:text-cyan-300"
            >
              Business Email
            </a>

            <a
              href="mailto:akdynamicsllc.us@gmail.com"
              className="transition hover:text-cyan-300"
            >
              Gmail
            </a>

            <a
              href="tel:+18169159221"
              className="transition hover:text-cyan-300"
            >
              Phone
            </a>

            <a
              href="https://www.linkedin.com/in/abimbola-adeyemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              Founder LinkedIn
            </a>

            <a
              href="https://www.linkedin.com/company/a-k-dynamics-llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              Company LinkedIn
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 A&amp;K Dynamics LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}