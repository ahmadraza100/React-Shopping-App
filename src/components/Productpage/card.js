import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import "../../App.css"

const useStyles = makeStyles({
  root: {
    width: 300,
    height:600,
    margin:" 2em 2em",
    
  },

  media: {
    height: 400,
    width:300
  },
});

export default function MediaCard({val}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={val.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom style={{fontSize:"1em"}}>
            <h3>{val.title.substring(0,25)}</h3>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h2 style={{color:"green" , textDecoration:"underline"}}>${val.price}</h2>
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="stars">

       <StarIcon/>
       <StarIcon/>
       <StarIcon/>
       <StarIcon/>
       <StarIcon/>
      </div>
    </Card>
  );
}
