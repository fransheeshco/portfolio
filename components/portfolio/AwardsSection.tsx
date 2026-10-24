export type Recognition = {
  title: string;
  organizer: string;
  date: string;
  kind: string;
  description: string;
};

export function AwardsSection({ recognitions }: { recognitions: Recognition[] }) {
  return (
    <div className="recognition-list">
      {recognitions.map((recognition) => (
        <article className="recognition-item" key={recognition.title}>
          <div className="recognition-meta">
            <span>{recognition.kind}</span>
            <time>{recognition.date}</time>
          </div>
          <h3>{recognition.title}</h3>
          <p className="recognition-organizer">{recognition.organizer}</p>
          <p>{recognition.description}</p>
        </article>
      ))}
    </div>
  );
}
