import 'react-glide/lib/reactGlide.css';
import React from 'react';
// import { Component } from 'react'
 import { Glide} from 'react-glide'
 import './VanGallery.css'



const VanGallery = (props) => {
   //mapear todas las imagenes dentro del glide


   console.log(props)
    return(
        <div className="glide-img" >
        <Glide height={510} width={500} >
            {props.img.map(elm => <img src={elm} alt={props.alt} style={{ height: '380px', width: '100%' }} />)}
       </Glide>

       </div>
    )
}
    

export default VanGallery



// const props: GlideProps = {
//   height: 600,
//   width: 600,
//   autoPlay: true,
//   autoPlaySpeed: 5000,
//   onSlideChange: () => console.log('slide changed'),
//   infinite: false,
//   dots: true
// }

// class VanGallery extends Component {
//    render(){
//        return(
//            <Glide {...props} >
//                <img src={props.img} alt={props.alt} style={{ width: '100%' }} />
//           </Glide>
//        )
//    }
//    }

// export default VanGallery



