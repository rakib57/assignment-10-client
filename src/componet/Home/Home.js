
import React, { useEffect, useState } from 'react';
import './Home.css'
import VolunteerWorks from '../VolunteerWorks/VolunteerWorks';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';



const Home = () => {
const [works, setWorks] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/works')
    .then(res => res.json())
    .then(data => setWorks(data))
} ,[])
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container className="text-center">
        <h1 >I GROW BY HELPING PEOPLE NEED</h1>
        <br/>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Search"
          />
          <InputGroup.Append>
            <Button variant="primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
      <br/>
      <div className="row">
        {
          works.map(work => <VolunteerWorks key={work.key} work={work}></VolunteerWorks>)
        }
      </div>

    </div>
  );
};

export default Home;

