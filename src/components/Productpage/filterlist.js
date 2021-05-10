import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor:"black",
    color:"white",
    maxWidth: 560,
    zIndex:10,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    position:"relative" , 
    top:"17vh",
    border:"2px solid red"

  }
}));

export default function NestedList({Close ,data}) {
  const classes = useStyles();

  let jewellery = ()=>{
      data("Gol")
    Close()
  }

  
  let mens = ()=>{
    data("Mens")
  Close()
}

let women = ()=>{
    data("Wom")
  Close()
}

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
     
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary="Mens" onClick={mens}/>
      </ListItem>
      <ListItem button onClick={jewellery}>
        <ListItemText primary="Jewellery" />
      </ListItem>
      <ListItem button >
        <ListItemText primary="Womens" onClick={women} /> 
      </ListItem>
    </List>
  );
}
