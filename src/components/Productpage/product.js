import React from 'react';
import MediaCard from "./card"
import {useEffect , useState} from "react"
import Filter from "./filter"



const Product = () => {

    const [Data, setData] = useState([]);
    const [Fillter, setFillter] = useState("");


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((json)=>{
            setData(json)
          }
            )
        }, [setData]);
        
        let fil = (param)=>{
            setFillter(param)
           console.log(param)
        }


    
    return (
        <div className="products">
            <Filter Fil = {fil} />
            
            <div className="cardcontainer">
        
            { 
                (Fillter==="")?
                Data.map((val)=>{
                    return(
                        <MediaCard val={val}></MediaCard>
                        )
                       
                    }) :
                (Data.map((val)=>{
                    let name  = val.title;
                    return(
                    (name.includes(Fillter))?
                      <MediaCard val={val}></MediaCard>:""
                    )
                }))
                
            }
            </div>
        </div>
    );
}

export default Product;
