import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Index'
import './ProjectInfo.css'
class ProjectInfo extends Component {



    render() {
        return (
            <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column' }}>


                <div className='row' style={{ height: 50 }}>
                    <p className='col-md-2' style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', padding: '8 4 4 8', height: 36, display: 'block', width: '100%' }}>The Beginning</p>

                    <div className='col-md-6'/>
                    <div id='mainPersonnel' className='col-md-3'>
                        <div className="row" id='Presonnel'>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TC
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>Terrence Campbell </p>
                                    <p id='Position'> Creative Direction</p>
                                    <p id='Email'>TCamp0171@gmail.com</p>
                                    <p id='Phone'>(949)345-9836</p>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    HA
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>Helen Aguilar</p>
                                    <p id='Position'>Costume/Prop</p>
                                    <p id='Email'>example@email.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    NC
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>Nasim Campbell</p>
                                    <p id='Position'>Styling</p>
                                    <p id='Email'>example@email.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    KJ
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>Kwe Johnson</p>
                                    <p id='Position'>Photographer</p>
                                    <p id='Email'>example@email.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TB
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>TBD</p>
                                    <p id='Position'>Hair/Make Up</p>
                                    <p id='Email'>example@email.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TB
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>TBD</p>
                                    <p id='Position'>CPA</p>
                                    <p id='Email'>example@email.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-1' >
                        <p>Log</p>
                    </div>
                   
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