// src/pages/CalendarPage.tsx

import React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Container, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth={false} disableGutters>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
          <Typography variant="h4" gutterBottom>
            Full Page Calendar
          </Typography>
          <DateCalendar
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            views={['day']}
          />
        </Box>
      </Container>
    </LocalizationProvider>
  );
};

export default CalendarPage;
