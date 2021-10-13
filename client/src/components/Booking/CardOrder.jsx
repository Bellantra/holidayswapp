import {React, useEffect} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography, IconButton, Alert, Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {updateOrderStatus} from '../../redux/actions/bookingActions'
import { useDispatch } from 'react-redux';
import { red } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    
    divider: {},
    buttons: {
      justifyContent:"space-around",
    },
    cards:{
        margin: "20px 30px",
    },
    accepted:{
        backgroundColor: '#0063cc',
    }
  }));

const CardOrder = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    console.log(props,"que props tengo")
    const { orders, userInfo } = props;
    // console.log(orders,"mis ordenes")
    console.log(props.userInfo.profilePicture,"mifoto")
    const handleOnclik = (newStatus,orderId)=>{
        const data ={newStatus,orderId}
        console.log(data)
      dispatch(updateOrderStatus(data))
      window.location.reload(true)
    }
    // useEffect(() => {
        
    //   },[]);
    

    return (
        <Card className={classes.cards} sx={{ maxWidth: 200 }} >
      <CardMedia
        component="img"
        height="140"
        image={userInfo.profilePicture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userInfo.username}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {orders.description}
        </Typography>
        {/* <Typography className={classes.accepted} gutterBottom variant="h5" component="div">
          {orders.status}
        </Typography> */}
        {/* <Button  className={classes.accepted}  disableElevation variant="contained">{orders.status}</Button> */}
        {orders.status==="Pending" && (<Alert severity="success">{orders.status}</Alert>) }
        {orders.status==="Accepted" && (<Alert severity="info">{orders.status}</Alert>) }
        {orders.status==="Cancelled" && (<Alert severity="error">{orders.status}</Alert>) }
        {orders.status==="Completed" && (<Alert severity="warning">{orders.status}</Alert>) }
        
      </CardContent>
      <CardActions className={classes.buttons}>
          <Grid  className={classes.buttons}></Grid>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        <IconButton aria-label="" onClick={()=>handleOnclik("Cancelled",orders.id)}>
          <CancelIcon></CancelIcon>
        </IconButton>
        <IconButton aria-label="" onClick={()=>handleOnclik("Accepted",orders.id)}>
         <CheckCircleIcon></CheckCircleIcon>
        </IconButton>
        <IconButton aria-label="" onClick={()=>handleOnclik("Completed",orders.id)}>
         <ThumbUpAltIcon></ThumbUpAltIcon>
        </IconButton>
      </CardActions>
    </Card>
    )
}

export default CardOrder