import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Young Tech Innovators Academy | A&K Dynamics",
  description: "Explore weekly IT, coding and AI classes for ages 4 and above at A&K Young Tech Innovators Academy. Three-month learning levels and hands-on projects.",
  alternates: { canonical: "/academy" },
};

const tracks = [
  {
    age: "Ages 4–6", title: "Little Tech Explorers",
    topics: ["Computer basics and digital skills", "Keyboard and mouse activities", "Digital art and creativity", "Coding games and logical thinking", "Basic digital safety"],
  },
  {
    age: "Ages 7–9", title: "Junior Tech Creators",
    topics: ["Computer fundamentals", "Scratch programming", "Animations and game creation", "Introduction to AI", "Internet safety"],
  },
  {
    age: "Ages 10–12", title: "Young Programmers",
    topics: ["Python programming foundations", "HTML and CSS website design", "Game development", "AI tools and responsible use", "Cybersecurity basics"],
  },
  {
    age: "Ages 13–15", title: "Future Tech Developers",
    topics: ["Python and JavaScript", "Web and application development", "Artificial intelligence applications", "Database and data analytics basics", "Practical development projects"],
  },
  {
    age: "Ages 16+", title: "Advanced Tech Innovators",
    topics: ["Advanced programming and software projects", "AI and machine learning foundations", "SQL and database management", "Analytics and workflow automation", "Technology entrepreneurship and portfolios"],
  },
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <a href="/" className="text-xl font-black">A&amp;K Dynamics</a>
          <nav aria-label="Academy navigation" className="flex flex-wrap items-center gap-5 text-sm font-bold">
            <a href="/" className="hover:underline">Home</a>
            <a href="#curriculum" className="hover:underline">Curriculum</a>
            <a href="#structure" className="hover:underline">How It Works</a>
            <a href="#inquiry" className="rounded-lg bg-orange-500 px-4 py-2 hover:bg-orange-600">Parent Inquiry</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#075d73] via-[#087c8f] to-[#1453a2] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">Powered by A&amp;K Dynamics LLC</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">A&amp;K Young Tech <span className="text-orange-300">Innovators Academy</span></h1>
          <p className="mt-5 text-xl font-semibold">IT • Coding • Artificial Intelligence</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50">Building tomorrow’s technology leaders today. Age-appropriate, hands-on technology education for learners ages 4 and above—from first computer skills to building real projects.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#inquiry" className="rounded-lg bg-orange-500 px-7 py-4 font-extrabold shadow-lg hover:bg-orange-600">Ask About Enrollment</a>
            <a href="#curriculum" className="rounded-lg border border-white/50 px-7 py-4 font-extrabold hover:bg-white/10">Explore the Curriculum</a>
          </div>
        </div>
      </section>

      <section id="structure" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black">How the academy works</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">Students learn through games, guided practice, creative challenges, and projects. No prior technology or coding experience is required for beginner levels.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Ages 4 and above", "Age-appropriate starting groups and activities"],
            ["Once a week", "Weekly lessons and practical learning"],
            ["Three months per level", "Students progress based on skills and completed activities"],
          ].map(([heading, description]) => (
            <div key={heading} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-7">
              <h3 className="text-xl font-black text-cyan-900">{heading}</h3>
              <p className="mt-3 leading-6 text-slate-700">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-slate-600">Age groups guide placement, but students can continue to the next learning level without waiting to reach a new age bracket. Class dates, fees, and enrollment details will be announced.</p>
      </section>

      <section id="curriculum" className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black">Our curriculum</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">Five age-based pathways introduce learners to digital literacy, coding, AI, problem-solving, and responsible technology use.</p>
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <article key={track.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-black uppercase tracking-wider text-cyan-700">{track.age}</span>
                <h3 className="mt-2 text-2xl font-black">{track.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-700">
                  {track.topics.map((topic) => (
                    <li key={topic} className="flex gap-3"><span aria-hidden="true" className="font-black text-cyan-600">✓</span><span>{topic}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black">Learning beyond the screen</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {[
            ["Create", "Students build age-appropriate animations, games, websites, and practical technology projects."],
            ["Think", "Activities develop creativity, critical thinking, teamwork, and problem-solving."],
            ["Grow", "Progress is reviewed each level so learners can build skills and confidence step by step."],
          ].map(([heading, description]) => (
            <div key={heading} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-black">{heading}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="inquiry" className="bg-[#eef9fa] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">Interested in enrolling your child?</h2>
            <p className="mt-5 leading-8 text-slate-700">Send us a parent or guardian inquiry, and we’ll share details as they become available. This is an expression of interest, not a confirmed registration or payment.</p>
            <p className="mt-5 text-sm text-slate-600">For your child’s privacy, please do not include their full name, date of birth, school, or other sensitive information in this form.</p>
            <a href="mailto:info@ak-dynamics.com?subject=Young%20Tech%20Innovators%20Academy" className="mt-6 inline-block font-bold text-cyan-800 underline">info@ak-dynamics.com</a>
          </div>
          <form action="https://formspree.io/f/maqrzrqa" method="POST" className="rounded-2xl border border-cyan-100 bg-white p-7 shadow-xl">
            <input type="hidden" name="inquiry_type" value="Young Tech Innovators Academy Parent Inquiry" />
            <div className="space-y-5">
              <div><label htmlFor="parent-name" className="mb-2 block font-bold">Parent or guardian name *</label><input id="parent-name" name="name" autoComplete="name" required className="w-full rounded-lg border border-slate-300 px-4 py-3" /></div>
              <div><label htmlFor="parent-email" className="mb-2 block font-bold">Email address *</label><input id="parent-email" name="email" type="email" autoComplete="email" required className="w-full rounded-lg border border-slate-300 px-4 py-3" /></div>
              <div><label htmlFor="parent-phone" className="mb-2 block font-bold">Phone number (optional)</label><input id="parent-phone" name="phone" type="tel" autoComplete="tel" className="w-full rounded-lg border border-slate-300 px-4 py-3" /></div>
              <div><label htmlFor="age-range" className="mb-2 block font-bold">Child&apos;s age group *</label><select id="age-range" name="age_group" required defaultValue="" className="w-full rounded-lg border border-slate-300 px-4 py-3"><option value="" disabled>Select age group</option>{tracks.map((track) => <option key={track.age} value={track.age}>{track.age}</option>)}</select></div>
              <div><label htmlFor="parent-message" className="mb-2 block font-bold">Questions (optional)</label><textarea id="parent-message" name="message" rows={4} placeholder="Tell us what you'd like to know. Please don't include personal details about your child." className="w-full rounded-lg border border-slate-300 px-4 py-3" /></div>
              <button type="submit" className="w-full rounded-lg bg-orange-500 px-6 py-4 font-black text-white hover:bg-orange-600">Send Parent Inquiry</button>
            </div>
          </form>
        </div>
      </section>
      <footer className="bg-slate-950 px-6 py-9 text-center text-sm text-slate-300">© 2026 A&amp;K Dynamics LLC. All rights reserved. <a href="/" className="ml-3 font-bold text-cyan-300 hover:underline">Back to main website</a></footer>
    </main>
  );
}
