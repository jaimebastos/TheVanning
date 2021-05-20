import 'react-glide/lib/reactGlide.css';
import React from 'react';
import { Glide} from 'react-glide'
import './VanGallery.css'

const VanGallery = (props) => {
    return(
        <div className="glide-img" >
            <Glide height={510} width={500} >
                {props.img.map(elm => <img src={elm} alt={props.alt} style={{ height: '380px', width: '100%' }} />)}
            </Glide>
       </div>
    )
}
    
export default VanGallery

