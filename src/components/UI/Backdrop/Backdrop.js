import React from 'react';
import Auxilliary from '../../../hoc/Auxiliary/Auxilliary';

const Backdrop = (props) => {
    let backdrop = <div></div>;
    if(props.show){
        backdrop = <div className = "backdrop" onClick = {props.clicked}></div>
    }

    return(
        <Auxilliary>
            {backdrop}
        </Auxilliary>
    );
}

export default Backdrop;