import Link from 'next/link';
import CompanionCard from '@/components/companion-card';
import CompanionsList from '@/components/companions-list';
import CTA from '@/components/cta';
import { DUMMY_COMPANIONS, SUBJECT_COLORS } from '@/constants';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge">AI-Powered Coding Mentor</div>
        <h1 className="hero-title">
          Learn to code with your <span className="text-primary">AI companion</span>
        </h1>
        <p className="hero-sub">
          Voice-driven, real-time coding lessons on any tech topic.
          Your personal tutor — available 24/7.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/companions/new">
            <button className="btn-primary">Build a Companion</button>
          </Link>
          <Link href="/companions">
            <button className="btn-outline">Browse Library</button>
          </Link>
        </div>
      </section>

      {/* Popular companions */}
      <section className="home-section">
        <h2 className="section-title">Popular Companions</h2>
        <div className="companions-grid">
          {DUMMY_COMPANIONS.map((c) => (
            <CompanionCard
              key={c.id}
              {...c}
              color={SUBJECT_COLORS[c.subject]}
            />
          ))}
        </div>
      </section>

      {/* Bottom two-col */}
      <section className="home-section">
        <CompanionsList
          title="Recent Sessions"
          companions={[]}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
}