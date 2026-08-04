export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="bg-blue-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold">
            A&amp;K Dynamics
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="hover:text-green-300">
              Services
            </a>

            <a href="#about" className="hover:text-green-300">
              About
            </a>

            <a href="#contact" className="hover:text-green-300">
              Contact
            </a>

            <a
              href="https://www.linkedin.com/in/abimbola-adeyemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-lg font-semibold text-green-300">
            Data Quality and Microsoft Business Solutions
          </p>

          <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Helping Businesses Trust Their Data
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            A&amp;K Dynamics LLC helps organizations clean inaccurate data,
            remove duplicate records, improve Microsoft Dynamics 365,
            organize Dataverse, and build Power BI reports that support
            better business decisions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-green-500 px-8 py-4 text-center text-lg font-semibold text-white hover:bg-green-600"
            >
              Get a FREE Data Health Check
            </a>

            <a
              href="tel:+18169159221"
              className="inline-block rounded-lg border border-white px-8 py-4 text-center text-lg font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              Call (816) 915-9221
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-center font-semibold text-blue-700">
            What We Do
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Data Cleanup</h3>

              <p className="leading-7 text-gray-600">
                Remove duplicate records, correct errors, standardize
                information, and improve the quality of your business data.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Dynamics 365</h3>

              <p className="leading-7 text-gray-600">
                Improve CRM forms, views, processes, customer records,
                reporting, and daily business operations.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Dataverse</h3>

              <p className="leading-7 text-gray-600">
                Build and manage secure business tables, relationships,
                applications, and dependable data structures.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Power BI</h3>

              <p className="leading-7 text-gray-600">
                Create interactive dashboards, KPI reports, and clear
                business insights from your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-blue-700">
              About A&amp;K Dynamics
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Practical Data Solutions for Growing Organizations
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              We help organizations improve data quality, simplify business
              processes, and create reports they can trust.
            </p>

            <p className="leading-8 text-gray-600">
              Our services support businesses using Excel, Microsoft
              Dynamics 365, Dataverse, Power BI, SQL Server, and other
              business systems.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-bold">Meet the Founder</h3>

            <p className="mb-2 text-xl font-semibold">
              Abimbola Adeyemi
            </p>

            <p className="mb-5 text-blue-700">
              Founder and Data Solutions Consultant
            </p>

            <p className="mb-6 leading-7 text-gray-600">
              Abimbola helps organizations improve data integrity,
              optimize Microsoft Dynamics 365, organize Dataverse solutions,
              and develop meaningful Power BI reports.
            </p>

            <a
              href="https://www.linkedin.com/in/abimbola-adeyemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              View Abimbola&apos;s LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose A&amp;K Dynamics?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-7 shadow">
              <h3 className="mb-3 text-xl font-bold">Reliable Data</h3>

              <p className="leading-7 text-gray-600">
                Reduce errors and build confidence in the information your
                organization uses every day.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-7 shadow">
              <h3 className="mb-3 text-xl font-bold">
                Practical Solutions
              </h3>

              <p className="leading-7 text-gray-600">
                Save time, improve reporting, and make business processes
                easier to manage.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-7 shadow">
              <h3 className="mb-3 text-xl font-bold">
                Personalized Support
              </h3>

              <p className="leading-7 text-gray-600">
                We take time to understand your needs and recommend solutions
                that fit your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Get Your FREE Data Health Check
          </h2>

          <p className="mb-10 text-center leading-7 text-gray-600">
            Complete the form below and we will contact you to discuss your
            data cleanup, reporting, Dynamics 365, or Dataverse needs.
          </p>

          <form
            action="https://formspree.io/f/maqrzrqa"
            method="POST"
            className="space-y-6 rounded-xl bg-white p-8 shadow-lg"
          >
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 p-4"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block font-semibold">
                Company Name
              </label>

              <input
                id="company"
                type="text"
                name="company"
                placeholder="Enter your company name"
                className="w-full rounded-lg border border-gray-300 p-4"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-semibold">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-gray-300 p-4"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-300 p-4"
              />
            </div>

            <div>
              <label htmlFor="system" className="mb-2 block font-semibold">
                What system do you currently use?
              </label>

              <select
                id="system"
                name="system"
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
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
              <label htmlFor="service" className="mb-2 block font-semibold">
                What service do you need?
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Data Cleanup">Data Cleanup</option>
                <option value="Duplicate Removal">Duplicate Removal</option>
                <option value="Dynamics 365 Support">
                  Dynamics 365 Support
                </option>
                <option value="Dataverse Solution">Dataverse Solution</option>
                <option value="Power BI Dashboard">
                  Power BI Dashboard
                </option>
                <option value="Data Migration">Data Migration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-semibold">
                Tell Us About Your Project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Describe your data problem or project"
                className="w-full rounded-lg border border-gray-300 p-4"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-900 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-800"
            >
              Request My FREE Data Health Check
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-12 rounded-xl bg-white p-8 text-center shadow">
            <h3 className="mb-6 text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@ak-dynamics.com"
                className="text-blue-700 hover:underline"
              >
                info@ak-dynamics.com
              </a>
            </p>

            <p className="mb-4">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+18169159221"
                className="text-blue-700 hover:underline"
              >
                (816) 915-9221
              </a>
            </p>

            <p className="mb-4">
              <strong>Website:</strong>{" "}
              <a
                href="https://ak-dynamics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                ak-dynamics.com
              </a>
            </p>

            <p className="mb-4">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/abimbola-adeyemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Abimbola Adeyemi
              </a>
            </p>

            <p>
              <strong>Location:</strong> Fortville, Indiana, USA
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-10 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-3 text-2xl font-bold">
            A&amp;K Dynamics LLC
          </h2>

          <p className="mb-6 text-blue-200">
            Data Cleanup • Dynamics 365 • Dataverse • Power BI
          </p>

          <div className="mb-6 flex flex-wrap justify-center gap-5">
            <a
              href="mailto:info@ak-dynamics.com"
              className="hover:text-green-300"
            >
              Email
            </a>

            <a
              href="tel:+18169159221"
              className="hover:text-green-300"
            >
              Phone
            </a>

            <a
              href="https://www.linkedin.com/in/abimbola-adeyemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-blue-200">
            © 2026 A&amp;K Dynamics LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}