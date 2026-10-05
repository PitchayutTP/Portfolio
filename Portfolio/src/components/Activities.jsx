import { activities } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import ActivityGallery from "./ActivityGallery";
import "./Activities.css";

export default function Activities() {
  return (
    <section id="activities" className="section activities-section">
      <div className="container">
        <SectionHeading
          number="04"
          label="ACTIVITIES"
          title="Learning beyond the classroom."
        >
          <p className="section-description">
            Teaching and hands-on learning at KMITL.
          </p>
        </SectionHeading>

        <ol className="activity-list">
          {activities.map((activity, index) => (
            <li className="activity-item" key={activity.id}>
              <div className="activity-marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <article className="activity-content">
                <div className="activity-meta">
                  <span>{activity.category}</span>
                  {activity.date && <time dateTime={activity.date}>{activity.dateLabel}</time>}
                  {activity.cohort && <span>{activity.cohort}</span>}
                </div>
                <h3>{activity.title}</h3>
                <p className="activity-role">
                  {activity.role} · {activity.organizer}
                </p>
                <p className="activity-description">{activity.description}</p>
                <ActivityGallery images={activity.images} title={activity.title} />
                <div className="tags">
                  {activity.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {activity.highlights?.length > 0 && (
                  <details className="activity-details">
                    <summary>
                      Contributions <span aria-hidden="true">+</span>
                    </summary>
                    <ul>
                      {activity.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </details>
                )}
                {activity.url && (
                  <a
                    className="activity-link"
                    href={activity.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View activity ↗
                  </a>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
