import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import {
  format,
  parse,
  startOfWeek,
  getDay,
} from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function AppointmentCalendar({ appointments }) {
  const events = appointments.map((item) => ({
    title: `${item.patient?.name} - Dr. ${item.doctor?.name}`,
    start: new Date(item.appointmentDate),
    end: new Date(item.appointmentDate),
  }));

  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </div>
  );
}

export default AppointmentCalendar;