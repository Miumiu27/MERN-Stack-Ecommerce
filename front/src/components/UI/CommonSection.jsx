import React from "react";
import{Container} from 'reactstrap'
import "../../styles/common-section.css"

const CommonSection =({title} )=> {
    return(
        <section className="CommonSection2">
            <Container className='text-center'>
                <h1>{title}</h1>
            </Container>
        </section>
    );
};

export default CommonSection ;