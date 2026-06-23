import Link from 'next/link';
import { SUBJECT_COLORS, SUBJECT_EMOJIS } from '@/constants';
import { Companion } from '@/types';

interface CompanionCardProps extends Companion {
  color?: string;
}

const CompanionCard = ({ id, name, subject, topic, duration, style, color }: CompanionCardProps) => {
  const cardColor = color || SUBJECT_COLORS[subject] || '#64748b';
  const emoji = SUBJECT_EMOJIS[subject] || '💻';

  return (
    <article
      className="companion-card"
      style={{ '--card-color': cardColor } as React.CSSProperties}
    >
      <div className="flex justify-between items-start mb-4">
        <div
          className="subject-badge"
          style={{ background: `${cardColor}22`, color: cardColor }}
        >
          {emoji} {subject}
        </div>
        <button className="bookmark-btn" aria-label="Bookmark">🔖</button>
      </div>

      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{topic}</p>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <span>⏱</span>
        <span>{duration} min · {style}</span>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">▶ Launch Lesson</button>
      </Link>
    </article>
  );
};

export default CompanionCard;