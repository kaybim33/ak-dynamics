"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { modules } from "./course";
import styles from "./training.module.css";

const email = "mailto:info@ak-dynamics.com?subject=Learn%20AI%20with%20Abi%20%E2%80%94%20Enrollment%20inquiry";
const phone = "tel:+18169159221";
const storageKey = "ak-abi-ai-learning-v1";
const empty = '{"done":[],"notes":{},"drafts":{}}';
type Progress = { done: number[]; notes: Record<string, string>; drafts: Record<string, string> };
type Tab = "Overview" | "Lessons" | "Assignments" | "Prompt library";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("abi-learning-change", callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener("abi-learning-change", callback); };
}
function snapshot() { try { return localStorage.getItem(storageKey) || empty; } catch { return empty; } }
function parseProgress(value: string): Progress {
  try {
    const parsed = JSON.parse(value);
    const strings = (x: unknown): Record<string, string> => x && typeof x === "object"
      ? Object.fromEntries(Object.entries(x).filter(([, v]) => typeof v === "string")) : {};
    return {
      done: Array.isArray(parsed.done) ? [...new Set<number>(parsed.done.filter((i: unknown) => Number.isInteger(i) && Number(i) >= 0 && Number(i) < modules.length))] : [],
      notes: strings(parsed.notes), drafts: strings(parsed.drafts),
    };
  } catch { return { done: [], notes: {}, drafts: {} }; }
}
const prompts = [
  ["Write a professional email", "Write a polite email to [audience] about [task]. Context: [details]. Use a [tone] tone and keep it under [length] words. Do not invent facts or commitments."],
  ["Summarize a meeting", "Summarize these fictional notes using headings: Decisions, Actions, and Open questions. Include owners and deadlines only when supplied. Notes: [paste fictional notes]."],
  ["Understand a new concept", "Explain [topic] to a beginner. Use plain language, a familiar example, and three practice questions. Flag uncertainty and suggest how to verify important claims."],
  ["Create business content", "Write three social posts for [business], aimed at [audience]. Our offer is [truthful details]. Use a [tone] tone. Do not invent prices, testimonials, results, or guarantees."],
];

export default function TrainingDashboard() {
  const [tab, setTab] = useState<Tab>("Overview");
  const [active, setActive] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  const [draft, setDraft] = useState("");
  const [notice, setNotice] = useState("");
  const stored = useSyncExternalStore(subscribe, snapshot, () => empty);
  const progress = useMemo(() => parseProgress(stored), [stored]);
  const percentage = Math.round(progress.done.length / modules.length * 100);
  function persist(next: Progress) {
    try { localStorage.setItem(storageKey, JSON.stringify(next)); window.dispatchEvent(new Event("abi-learning-change")); return true; }
    catch { setNotice("Your browser could not save this work. Copy your notes before leaving."); return false; }
  }
  function openModule(i: number) { setActive(i); setNotes(progress.notes[i] || ""); setDraft(progress.drafts[i] || ""); setNotice(""); }
  function save(complete = false) {
    if (active === null) return;
    const done = complete ? progress.done.includes(active) ? progress.done.filter(i => i !== active) : [...progress.done, active] : progress.done;
    if (persist({ done, notes: { ...progress.notes, [active]: notes }, drafts: { ...progress.drafts, [active]: draft } })) setNotice("Your work is saved in this browser.");
  }
  function navigate(next: Tab) { setTab(next); setActive(null); setNotice(""); }
  const lesson = active === null ? null : modules[active];
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#training-content">Skip to course content</a>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}><span className={styles.mark}>A&amp;K</span><span>A&amp;K Dynamics<small>ABICODE LAB · AI TRAINING</small></span></Link>
        <nav aria-label="Training navigation"><Link href="/">Main website</Link><a className={styles.button} href={email}>Join the course by email ↗</a></nav>
      </header>
      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <p className={styles.label}>Your learning space</p>
          <nav aria-label="Dashboard sections">{(["Overview", "Lessons", "Assignments", "Prompt library"] as Tab[]).map((item, i) => <button key={item} type="button" aria-current={tab === item ? "page" : undefined} onClick={() => navigate(item)}><span aria-hidden="true">{["◈", "▤", "▣", "✧"][i]}</span>{item}</button>)}</nav>
          <div className={styles.instructor}><span className={styles.avatar}>AA</span><strong>Your instructor, Abi</strong><p>Abimbola Adeyemi<br />CEO, A&amp;K Dynamics</p><a href={email}>Ask about classes ↗</a></div>
        </aside>
        <main id="training-content" className={styles.main}>
          <div className={styles.heading}><div><p className={styles.label}>Learn AI with Abi</p><h1>{tab === "Overview" ? "A little practice. A new possibility." : tab}</h1></div><span className={styles.badge}>Beginner friendly</span></div>
          {tab === "Overview" && <>
            <section className={styles.hero}><div className={styles.orbit} aria-hidden="true">✧</div><p className={styles.label}>ABICODE LAB · POWERED BY A&amp;K DYNAMICS</p><h2>Build confidence.<br />Make AI work for you.</h2><p>Practical AI skills for work, business, and everyday life. Start with the basics, one step at a time.</p><div className={styles.actions}><a className={styles.whiteButton} href={email}>Email Abi to get started ↗</a><a className={styles.ghostButton} href={phone}>Call 816-915-9221</a></div><p className={styles.heroNote}>Contact Abi for class dates, fees, and enrollment. No IT background needed.</p></section>
            <div className={styles.stats}><div><span>Your learning path</span><strong>6 <small>weekly modules</small></strong></div><div><span>Lessons completed</span><strong>{progress.done.length} <small>/ 6 modules</small></strong></div><div><span>Course format</span><strong>2 <small>hours per weekly session</small></strong></div></div>
          </>}
          <div className={styles.contentGrid}>
            <div>
              {lesson && active !== null ? <section className={styles.lesson} aria-labelledby="lesson-title"><button className={styles.textButton} onClick={() => setActive(null)}>← Back to {tab.toLowerCase()}</button><p className={styles.label}>Week {active + 1} · {lesson.topic}</p><h2 id="lesson-title">{lesson.title}</h2><p>{lesson.desc}</p><h3>What to learn</h3><ul>{lesson.learn.map(point => <li key={point}>{point}</li>)}</ul><h3>Guided practice</h3><p>{lesson.practice}</p><label htmlFor="lesson-notes">Your notes</label><textarea id="lesson-notes" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Write your ideas and observations here." /><h3>Assignment</h3><p>{lesson.assignment}</p><label htmlFor="assignment-draft">Your assignment draft</label><textarea id="assignment-draft" value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write your assignment draft here." /><div className={styles.actions}><button className={styles.button} onClick={() => save()}>Save my work</button><button className={styles.outlineButton} onClick={() => save(true)}>{progress.done.includes(active) ? "Mark incomplete" : "Mark lesson complete"}</button>{draft.trim() ? <a className={styles.outlineButton} href={`mailto:info@ak-dynamics.com?subject=${encodeURIComponent(`Learn AI with Abi — Week ${active + 1} assignment`)}&body=${encodeURIComponent(draft)}`}>Email assignment ↗</a> : <span className={styles.helper}>Add a draft to email your assignment.</span>}</div><p className={styles.helper}>Saving keeps work in this browser only. Emailing opens your email app; press Send there to submit.</p></section> : tab === "Prompt library" ? <div className={styles.prompts}>{prompts.map(([title, text]) => <article className={styles.card} key={title}><h2>{title}</h2><p>{text}</p><button className={styles.outlineButton} onClick={async () => { try { await navigator.clipboard.writeText(text); setNotice("Prompt copied. Paste it into your preferred AI tool."); } catch { setNotice("Select and copy the prompt text above."); } }}>Copy prompt</button></article>)}</div> : <>
                <div className={styles.sectionHeading}><h2>{tab === "Assignments" ? "Practice makes progress" : "Your course roadmap"}</h2><span>Six weeks of practical learning</span></div>
                {tab === "Assignments" && <p className={styles.intro}>Save your assignment draft here, then email it to Abi for review.</p>}
                {modules.map((module, i) => <article className={styles.module} key={module.title}><div className={styles.number}>{progress.done.includes(i) ? "✓" : `0${i + 1}`}</div><div><p className={styles.label}>Week {i + 1} · {module.topic}</p><h3>{module.title}</h3><p>{tab === "Assignments" ? module.assignment : module.desc}</p></div><button className={styles.textButton} onClick={() => openModule(i)} aria-label={`${tab === "Assignments" ? "Open assignment" : "Open lesson"}: ${module.title}`}>{tab === "Assignments" ? "Write draft" : "View lesson"} →</button></article>)}
              </>}
              <p className={styles.status} role="status">{notice}</p>
            </div>
            <aside className={styles.rail} aria-label="Course information"><section className={styles.card}><h2>Your progress</h2><strong>{percentage}% complete</strong><progress max={6} value={progress.done.length} aria-label="Completed course modules" /><p className={styles.helper}>Progress and drafts are saved only in this browser, not in an instructor account. Use the same device and browser to return to your work.</p></section><section className={`${styles.card} ${styles.tip}`}><p className={styles.label}>A good habit</p><h2>Be curious. Then check.</h2><p>AI can sound confident and still be wrong. Check important facts and keep confidential information out of your prompts.</p></section><section className={styles.card}><h2>Speak with Abi</h2><p>Ask about course fees, class dates, or training for your team.</p><a className={styles.contactLink} href={email}>info@ak-dynamics.com ↗</a><a className={styles.contactLink} href={phone}>816-915-9221 ↗</a><p className={styles.helper}>Email opens your email app. Call opens your phone’s dialer.</p></section></aside>
          </div>
          <footer className={styles.footer}><p>AbiCode Lab · Powered by A&amp;K Dynamics LLC</p><Link href="/">Back to A&amp;K Dynamics ↗</Link></footer>
        </main>
      </div>
    </div>
  );
}
