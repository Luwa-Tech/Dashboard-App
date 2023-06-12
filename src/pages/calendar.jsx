import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import { useContext } from "react"
import { createEventId } from "../data"
import { initialEventsContext } from "../../storeContext"

const Calendar = () => {
    const {events, setEvents} = useContext(initialEventsContext)

    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a title for the event')
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();


        if (title) {
            setEvents(events => ([
                ...events,
                calendarApi.addEvent({
                    id: createEventId(),
                    title,
                    start: selectInfo.start,
                    end: selectInfo.end,
                    allDay: selectInfo.allDay
                })
            ]))
        }
    }

    const handleEventClick = (clickInfo) => {
        const checkEvent = events.find(event => event.id === clickInfo.event.id)

        if (confirm('Are you sure you want to delete this event?')) {
            if(checkEvent) {
                const filteredEvents = events.filter(event => event.id !== clickInfo.event.id)
                setEvents([...filteredEvents])
                clickInfo.event.remove()
            }
        }
    }


    return (
        <main className="calendar-container">
            <div>
                <FullCalendar 
                plugins = {[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar= {
                    {
                        left: "prev, next, today",
                        center: "title",
                        right: "dayGridMonth, timeGridWeek, timeGridDay"
                    }
                }

                allDaySlot = {false}
                initialView="timeGridWeek"
                slotDuration={"01:00:00"}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                nowIndicator={true}
                initialEvents={events}
                select={handleDateSelect}
                eventClick={handleEventClick}

                />
            </div>
        </main>
    )
}

export default Calendar