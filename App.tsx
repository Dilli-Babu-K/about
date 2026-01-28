import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { RECOVA_CONTENT } from './constants';

const App: React.FC = () => {
  const { intro, audience, howItWorks, philosophy, disclaimer } = RECOVA_CONTENT;

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans">
      <Header title={RECOVA_CONTENT.header} />

      <main className="flex-grow w-full max-w-xl mx-auto px-6 py-8">
        
        {/* Main Title Area */}
        <div className="mb-10 pt-4">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {RECOVA_CONTENT.title}
          </h1>
          <div className="h-1 w-12 bg-zinc-800 rounded-full"></div>
        </div>

        {/* What is Recova? */}
        <Section title={intro.heading}>
          {intro.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {intro.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="italic text-zinc-500 text-sm border-l-2 border-zinc-800 pl-4 py-1">
            {intro.conclusion}
          </p>
        </Section>

        {/* Who is Recova for? */}
        <Section title={audience.heading}>
          <p>{audience.body}</p>
          <ul className="grid grid-cols-1 gap-2 mt-2">
            {audience.list.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-zinc-300">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* How Recova Works */}
        <Section title={howItWorks.heading}>
          <p>{howItWorks.body[0]}</p>
          <p>{howItWorks.body[1]}</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {howItWorks.inputs.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">{howItWorks.explanation}</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {howItWorks.factors.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="bg-zinc-900/50 p-4 rounded-lg mt-4 border border-zinc-800">
             <p className="text-sm text-zinc-400">{howItWorks.note}</p>
          </div>
        </Section>

        {/* Why Perceived Recovery Matters */}
        <Section title={philosophy.heading}>
          {philosophy.body.map((paragraph, idx) => (
             <p key={idx} className={idx === philosophy.body.length - 1 ? "font-medium text-zinc-300" : ""}>
               {paragraph}
             </p>
          ))}
        </Section>

        {/* Disclaimer - Distinct Styling */}
        <section className="mb-12 pt-6 border-t border-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-500 mb-4 uppercase tracking-wider text-xs">
            {disclaimer.heading}
          </h2>
          <div className="text-zinc-500 text-sm space-y-3">
             {disclaimer.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;