"use client";

import { clinic } from "../data/clinic";

function singaporeDayIndex() {
  const dayName = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "Asia/Singapore",
  }).format(new Date());
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(dayName);
}

export function OpeningHours() {
  const today = singaporeDayIndex();

  return <div className="hours-list" aria-label="Clinic opening hours">
    {clinic.hours.map(item => <div className={item.dayIndex === today ? "today" : ""} key={item.day}>
      <span>{item.day}<small>{item.dayIndex === today ? "Today" : ""}</small></span>
      <strong>{item.periods.length ? item.periods.join(", ") : "Closed"}</strong>
    </div>)}
    <p>Times shown in Singapore time (SGT). Hours may vary on public holidays.</p>
  </div>;
}
