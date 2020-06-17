import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Index'
import './ProjectInfo.css'
import { Link } from "react-router-dom";
class ProjectInfo extends Component {



    render() {
        return (
            <div style={{ marginTop: 50, display: 'flex', flexDirection: 'column' }}>
                <div className='' id='personnelRow'>
                    <p className='col-md-3' style={{ fontSize: 22, fontWeight: 500, textAlign: 'left', padding: '8 4 4 8', height: 36, display: 'block', width: '100%', marginTop: 15 }}>The Beginning</p>

                    <div className='col-md-5' />
                    <div id='mainPersonnel' className='col-md-3'>
                        <div className="row" id='Presonnel'>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TC
                                </button>
                                <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <div className='row'>
                                        <div className='col-md-4'> <button id='userProfileImg'> TC </button> </div>
                                        <div className='col-md-8'>
                                            <div className='row'>
                                                <p id='Name'>Terrence Campbell</p>
                                            </div>
                                            <div className='row'>
                                                <p id='Position'>Creative Direction</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <a id='Email' className='col-md-12' href='mailto:TCamp0171@gmail.com'>TCamp0171@gmail.com</a>
                                    </div>
                                    <div className='row'>
                                        <p ></p>
                                        <a className='col-md-12' href="tel:9493459836" id='Phone'>(949)345-9836</a>
                                    </div>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    HA
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>Helen Aguilar</p>
                                    <p id='Position'>Costume/Prop</p>
                                    <p id='Email'>hla1016@gmail.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    NC
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>Nasim Campbell</p>
                                    <p id='Position'>Styling</p>
                                    <p id='Email'>nasimcampbell@gmail.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    KJ
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
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
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
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
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <p id='Name'>TBD</p>
                                    <p id='Position'>CPA</p>
                                    <p id='Email'>example@email.com</p>
                                    <p id='Phone'>(310)555-1234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1 ' style={{ marginTop: 15 }}>
                        <div id='menuWrapper' className="dropleft row">
                            <p id='menuText'>menu</p>
                            <button type="button" id="menuDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='menuDropdownMenu'>
                                <p id='Name'>Tabs</p>
                                <p id='Position'>Calender</p>
                                <p id='Email'>Timeline</p>
                                <p id='Phone'>Activity</p>
                            </div>
                        </div>
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
                                    <p id='cardText'>Broadacres Elementary </p>
                                </div>
                                <div id='cardContent'>
                                    <p id='cardText'>Leapwood Elementary</p>
                                </div>
                                <div id='cardContent'>
                                    <p id='cardText'>Courtis Middle School <br /> <br /> Add in Links to the locations and googleMaps photos</p>
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