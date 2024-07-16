// src/pages/FullPageCalendar.tsx

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
  Typography,
} from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './FullCalendarCustom.css'; // Import the custom CSS

const FullPageCalendar: React.FC = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-07-11T10:00:00' },
    { title: 'Event 2', date: '2024-07-12T14:00:00' },
  ]);
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '' });

  const handleDateClick = (arg: any) => {
    setNewEvent({ ...newEvent, date: arg.dateStr });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEvent = () => {
    const combinedDateTime = `${newEvent.date}T${newEvent.time}`;
    setEvents([...events, { title: newEvent.title, date: combinedDateTime }]);
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" gutterBottom>
          Full Page Calendar
        </Typography>
        <Box width="90%" height="80vh">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            height="100%"
          />
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Event</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the details for the new event.
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
            <Button onClick={handleAddEvent} color="primary">
              Add Event
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default FullPageCalendar;
