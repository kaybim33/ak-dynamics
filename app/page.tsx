export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-6 text-5xl font-bold">
            A&amp;K Dynamics LLC
          </h1>

          <p className="mb-6 text-2xl">
            Helping Businesses Trust Their Data
          </p>

          <p className="max-w-3xl text-lg leading-8">
            We help businesses clean inaccurate data, remove duplicate
            records, improve Microsoft Dynamics 365, organize Dataverse,
            and build Power BI reports that support better decisions.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-lg bg-green-500 px-8 py-4 text-lg font-semibold text-white hover:bg-green-600"
          >
            Get a FREE Data Health Check
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">
                Data Cleanup
              </h3>

              <p className="leading-7 text-gray-600">
                Remove duplicate records, correct errors, standardize
                information, and improve the quality of your business data.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">
                Dynamics 365
              </h3>

              <p className="leading-7 text-gray-600">
                Improve your CRM forms, views, processes, customer records,
                reporting, and daily business operations.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">
                Dataverse
              </h3>

              <p className="leading-7 text-gray-600">
                Build and manage secure business tables, relationships,
                applications, and dependable data structures.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-bold">
                Power BI
              </h3>

              <p className="leading-7 text-gray-600">
                Create interactive dashboards, KPI reports, and clear
                business insights from your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose A&amp;K Dynamics?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-bold">
                Reliable Data
              </h3>

              <p className="leading-7 text-gray-600">
                We help you reduce errors and build confidence in the
                information your organization uses every day.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-bold">
                Practical Solutions
              </h3>

              <p className="leading-7 text-gray-600">
                We focus on solutions that save time, improve reporting,
                and make business processes easier to manage.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-bold">
                Personalized Support
              </h3>

              <p className="leading-7 text-gray-600">
                Every organization is different. We take time to understand
                your needs and recommend the right solution.
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
            Complete the form below and we will contact you to discuss
            your data cleanup, reporting, Dynamics 365, or Dataverse needs.
          </p>

          <form
            action="https://formspree.io/f/maqrzrqa"
            method="POST"
            className="space-y-6"
          >
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
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
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
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
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
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
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
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
              />
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
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
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
                <option value="Data Migration">
                  Data Migration
                </option>
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
                className="w-full rounded-lg border border-gray-300 bg-white p-4"
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
          <div className="mt-14 rounded-xl bg-white p-8 text-center shadow">
            <h3 className="mb-6 text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:akdynamicsllc.us@gmail.com"
                className="text-blue-700 hover:underline"
              >
                akdynamicsllc.us@gmail.com
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

            <p>
              <strong>Location:</strong> Fortville, Indiana, USA
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-8 text-center text-white">
        <p>
          © 2026 A&amp;K Dynamics LLC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}