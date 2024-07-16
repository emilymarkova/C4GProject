// src/pages/FullPageCalendar.tsx

import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const FullPageCalendar: React.FC = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-07-11' },
    { title: 'Event 2', date: '2024-07-12' },
  ]);

  const handleAddEvent = () => {
    const newEvent = { title: `New Event ${events.length + 1}`, date: new Date().toISOString().split('T')[0] };
    setEvents([...events, newEvent]);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" gutterBottom>
          Full Page Calendar
        </Typography>
        <Box mb={2}>
          <Button variant="contained" color="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </Box>
        <Box width="90%" height="80vh">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            height="100%"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default FullPageCalendar;
