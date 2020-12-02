import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerWorks.css'
const VolunteerWorks = (props) => {
    const { name, photoUrl,key } = props.work
    console.log(props)
    return (
        <Container  className="col-md-3">
            <Link to={`/login/${key}`}>
                <div>
                    <img src={photoUrl} alt="" />
                    <p>{name}</p>
                </div>
            </Link>
      </Container>
    );
};

export default VolunteerWorks;

