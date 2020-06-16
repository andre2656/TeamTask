import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Index'
import './ProjectInfo.css'
class ProjectInfo extends Component {



    render() {
        return (
            <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column' }}>


                <div className='col-md-12'>
                    <p style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', padding: '8 4 4 8', height: 36, display: 'block', width: '100%' }}>The Beginning</p>
                </div>
                <div style={{ width: '100%', }} id='Board'>

 
                    <div id='Wrapper'>
                        <div className='card' id='Card'>
                            <div className='col-md-12'>
                                <p id='cardHeader'>Location</p>
                            </div>
                            <div id='list-cards'>
                                <div id='cardContent'>
                                    <p id='cardText'>Broadacres Elementary</p>
                                </div>
                                <div id='cardContent'>
                                    <p id='cardText'>Leapwood Elementary</p>
                                </div>
                                <div id='cardContent'>
                                    <p id='cardText'>Courtis JH <br /> <br /> Add in Links to the locations and googleMaps photos</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id='Wrapper'>
                        <div className='card' id='Card'>
                            <div className='col-md-12'>
                                <p id='cardHeader'>Details</p>
                            </div>
                            <div id='list-cards'>
                                <div id='cardContent'>
                                    <p id='cardText'>Blah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='Wrapper'>
                        <div className='card' id='Card'>
                            <div className='col-md-12'>
                                <p id='cardHeader'>Cast</p>
                            </div>
                            <div id='list-cards'>
                                <div id='cardContent'>
                                    <p id='cardText'>Blah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='Wrapper'>
                        <div className='card' id='Card'>
                            <div className='col-md-12'>
                                <p>Budget</p>
                            </div>
                            <div id='list-cards'>
                                <div id='cardContent'>
                                    <p id='cardText'>Blah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='Wrapper'>
                        <div className='card' id='Card'>
                            <div className='col-md-12'>
                                <p id='cardHeader'>Shoot Dates</p>
                            </div>
                            <div id='list-cards'>
                                <div id='cardContent'>
                                    <p id='cardText'>Broadacres Elementary</p>
                                </div>
                                <div id='cardContent'>
                                    <p id='cardText'>Leapwood Elementary</p>
                                </div>
                                <div id='cardContent'>
                                    <p id='cardText'>Courtis JH <br /> <br /> Add in Links to the locations and googleMaps photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='Wrapper'>
                        <div className='card' id='Card'>
                            <div className='col-md-12'>
                                <p id='cardHeader'>Notes</p>
                            </div>
                            <div id='list-cards'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectInfo;