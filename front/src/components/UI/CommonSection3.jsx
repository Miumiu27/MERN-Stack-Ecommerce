import React from "react";
import{Container} from 'reactstrap'
import "../../styles/CommonSection3.css"


const CommonSection3 =({title} )=> {
    return(
        <section className="CommonSection3">
            <Container className='text-center'>
                <h1>{title}</h1>
            </Container>
        </section>
    );
};

export default CommonSection3 ;