import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function FirstComponent({ onDateChange }) {
    const handleDateChange = (date) => {
        // console.log('Selected Date in FirstComponent:', date);

        if (date && date.$d) {
            const formattedDate = dayjs(date.$d).format('MM/DD/YYYY');
            // console.log('Formatted Date:', formattedDate);

            onDateChange(formattedDate);
        } else {
            console.log('Unknown date object structure:', date);
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={handleDateChange} />
        </LocalizationProvider>
    );
}
