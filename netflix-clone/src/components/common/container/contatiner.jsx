import { Children } from 'react';
import './container.css'

export const Container = (props) => {
        const cname = 'container '+ props.className ;
        console.log(cname);
       return(
         <div className={cname}>
                {props.children}   
         </div>
       );
}