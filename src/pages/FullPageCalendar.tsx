import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import Typography from "@mui/material/Typography";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './FullCalendarCustom.css'; // Import the custom CSS
import NavBar from '../Components/NavBar'; // Ensure the import path is correct

interface Event {
  id: string;
  title: string;
  date: string;
}

const FullPageCalendar: React.FC = () => {
  const convertDate = (date:any) => {
    const dateObject = new Date(date); 
    const newDate = dateObject.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})
    const time = dateObject.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    return newDate + " - " + time;
  }

  const sortEvents = (array: any) => {
    let newArray = array;
    newArray.sort(function(a:any, b:any) {
      return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
    });
    //only get future events
    let time = new Date().toISOString().slice(0,-5);
    newArray = newArray.filter((event:any) => event.date > time);
    return newArray;
  }
  const [events, setEvents] = useState<Event[]>([
    { id: '1', title: 'Event 1', date: '2024-07-11T10:00:00' },
    { id: '2', title: 'Event 2', date: '2024-07-12T14:00:00' },
  ]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [newEvent, setNewEvent] = useState({ id: '', title: '', date: '', time: '' });

  const handleDateClick = (arg: any) => {
    const clickedDateTime = arg.date;
    const clickedDate = clickedDateTime.toISOString().split('T')[0];
    const clickedTime = clickedDateTime.toTimeString().split(' ')[0].substring(0, 5);
    setNewEvent({ id: '', title: '', date: clickedDate, time: clickedTime });
    setIsEditing(false);
    setOpen(true);
  };

  const handleEventClick = (arg: any) => {
    const event = arg.event;
    const eventDateTime = new Date(event.start!);
    const eventDate = eventDateTime.toISOString().split('T')[0];
    const eventTime = eventDateTime.toTimeString().split(' ')[0].substring(0, 5);
    setNewEvent({ id: event.id, title: event.title, date: eventDate, time: eventTime });
    setSelectedEvent({ id: event.id, title: event.title, date: event.start!.toISOString() });
    setIsEditing(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddOrUpdateEvent = () => {
    const combinedDateTime = `${newEvent.date}T${newEvent.time}`;
    if (isEditing) {
      // Update event
      setEvents(events.map(event => (event.id === newEvent.id ? { ...event, title: newEvent.title, date: combinedDateTime } : event)));
    } else {
      // Add new event
      const newId = events.length ? (parseInt(events[events.length - 1].id) + 1).toString() : '1';
      setEvents([...events, { id: newId, title: newEvent.title, date: combinedDateTime }]);
    }
    setOpen(false);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter(event => event.id !== selectedEvent.id));
      setOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <NavBar />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="70px" marginBottom="10px">
        <Box width="90%" height="100vh">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            initialDate={new Date()}
            dayHeaderContent={(arg) => {
              return <span>{arg.date.toLocaleDateString(undefined, { weekday: 'long' })}</span>;
            }}
            height="100%"
          />
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{isEditing ? 'Edit Event' : 'Add Event'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {isEditing ? 'Edit the details for the event.' : 'Enter the details for the new event.'}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              label="Event Title"
              type="text"
              fullWidth
              value={newEvent.title}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="date"
              label="Event Date"
              type="date"
              fullWidth
              value={newEvent.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'black',
                },
              }}
            />
            <TextField
              margin="dense"
              name="time"
              label="Event Time"
              type="time"
              fullWidth
              value={newEvent.time}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'black',
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {isEditing && (
              <Button onClick={handleDeleteEvent} color="secondary">
                Delete Event
              </Button>
            )}
            <Button onClick={handleAddOrUpdateEvent} color="primary">
              {isEditing ? 'Update Event' : 'Add Event'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box sx={{display:"flex", justifyContent:"center", width:"100%", margin:"0px"}} >
      <Box sx={{ backgroundColor: "rgba(41, 97, 134)", minHeight:"100px", width: "90vw", padding:"5px", borderRadius:"15px",margin:"0px" }}>
        <Typography className="overview" variant="h5">Upcoming Events Overview : </Typography>
          <List
      sx={{
        width: '100%',
            position: 'relative',
        color:"black",
        overflow: 'auto',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
          {sortEvents(events).map((event:any, index:any) => (
          <ListItem key={index} sx={{display:"block"}}>
              <Typography className="overview">{`${convertDate(event.date)} : ${event.title}`}</Typography>
              </ListItem>
        ))}
        </List>
        </Box>
        </Box>
    </Container>
  );
};

export default FullPageCalendar;
