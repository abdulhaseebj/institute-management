import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function AlignItemsList({ studentImg, studentName, course, date, uid,}) {
    const navigate = useNavigate()
    const handleClick = () => {
        // Your onClick logic here
        console.log("ListItem clicked!");
        navigate(`students/${uid}`);
    };
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
            <Divider variant="inset" component="li"  />
            <ListItem alignItems="flex-start" onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar  alt="Remy Sharp" src={studentImg} />
                </ListItemAvatar>
                <ListItemText
                    primary={studentName}
                    // secondary={
                    //     <React.Fragment>
                    //         <Typography
                    //             sx={{ display: 'inline' }}
                    //             component="span"
                    //             variant="body2"
                    //             color="text.primary"
                    //         >
                    //             {studentName}
                    //             {/* -
                    //             {date} */}
                    //         </Typography>
                    //         {/* {" — I'll be in your neighborhood doing errands this…"} */}
                    //     </React.Fragment>
                    // }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            
            
        </List>
    );
}
