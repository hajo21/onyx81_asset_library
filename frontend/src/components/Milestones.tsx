import React, { useEffect, useState } from "react";
import "./Milestones.css";

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
}

function Milestones() {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <section className="milestones-section">
      <h4>Upcoming Committee Milestones</h4>
      {events.length === 0 ? (
        <p>No upcoming milestones.</p>
      ) : (
        <ul>
          {events.map((evt) => (
            <li key={evt.id}>
              <strong>{evt.title}</strong> <br />
              <small>{evt.date} at {evt.time}</small>
              <p>{evt.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Milestones;