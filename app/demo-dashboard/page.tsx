
"use client";

import { useState } from "react";

const projects = [
  { name: "Website Development", client: "ABC Company", status: "Completed" },
  { name: "Database Migration", client: "XYZ Organization", status: "In Progress" },
  { name: "CRM Automation", client: "Demo Business", status: "Pending" },
  { name: "Business Dashboard", client: "Sample Client", status: "Completed" },
];

export default function DemoDashboard() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    `${project.name} ${project.client} ${project.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const metrics = [
    { label: "Total Projects", value: projects.length },
    { label: "Completed", value: projects.filter(p => p.status === "Completed").length },
    { label: "In Progress", value: projects.filter(p => p.status === "In Progress").length },
    { label: "Pending", value: projects.filter(p => p.status === "Pending").length },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold text-cyan-700">A&K Dynamics LLC</p>
            <h1 className="mt-2 text-3xl font-black">
              Business Management Dashboard
            </h1>
            <p className="mt-2 text-slate-600">
              Interactive demonstration using fictional business data.
            </p>
          </div>

          <a
            href="/"
            className="rounded-lg bg-cyan-700 px-5 py-3 font-bold text-white"
          >
            Back to Website
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl bg-white p-6 shadow">
              <p className="text-sm font-semibold text-slate-500">
                {metric.label}
              </p>
              <p className="mt-3 text-4xl font-black text-cyan-700">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold">Project Management</h2>

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4">Project</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.name} className="border-b">
                    <td className="p-4">{project.name}</td>
                    <td className="p-4">{project.client}</td>
                    <td className="p-4">
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800">
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredProjects.length === 0 && (
                  <tr>
                    <td colSpan={3} className="p-6 text-center text-slate-500">
                      No matching projects found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Demo only. All project names and customer information are fictional.
        </p>
      </div>
    </main>
  );
}
