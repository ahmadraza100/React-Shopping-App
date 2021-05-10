import {React , useState} from 'react'
import GridOnIcon from '@material-ui/icons/GridOn';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ListIcon from '@material-ui/icons/List';
import ListItemLink from "./filterlist"
import "./../../App.css"

const Filter = ({Fil}) => {
    const [Open, setOpen] = useState(false);

    let data = (param)=>{
        Fil(param);
    }
    let filter  = ()=>{
            setOpen(true)
    }
    let close = ()=>{
        setOpen(false)
    }
    return (
        <div className = "filter">
            <GridOnIcon />
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
            {(Open!==true)?<>
                <EqualizerIcon onClick={filter}/>
            Filter
            </>:
            <ListItemLink Close={close} data = {data}/>
            }
            </div>
            <ListIcon/>
            
        </div>
    );
}

export default Filter;
