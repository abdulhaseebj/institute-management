import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


export default function RecipeReviewCard({ teacherName, days, course }) {
    return (
        <Card className="card mb-3" style={{ maxWidth: '600px' }}>
            <CardHeader className="bg-danger text-white" />
            <CardHeader className=''
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {course.slice(0, 1)}
                    </Avatar>
                }
                title={course}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Typography className="">
                        <h5>Teacher: {teacherName}</h5>
                        <h5>Days: {days}</h5>
                    </Typography>
                </Typography>
            </CardContent>
        </Card>
    );
}

