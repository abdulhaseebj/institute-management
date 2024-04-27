import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function ActionAreaCard({ userImg, userName, date, course, gender }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={userImg}
          alt="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Name : {userName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Gender : {gender}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Course : {course}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            DOB : {date}
          </Typography>
          <Button type='submit' variant="contained">Delete</Button>


        </CardContent>
      </CardActionArea>
    </Card>
  );
}
