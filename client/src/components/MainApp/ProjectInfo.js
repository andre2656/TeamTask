import React, { Component } from "react";
import './ProjectInfo.css'
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
                                            <div className='row'><p id='Name'>Terrence Campbell</p></div>
                                            <div className='row'><p id='Position'>Creative Direction</p></div>
                                        </div>
                                    </div>
                                    <div className='row'> <a id='Email' className='col-md-12' href='mailto:TCamp0171@gmail.com'>TCamp0171@gmail.com</a></div>
                                    <div className='row'><a className='col-md-12' href="tel:9493459836" id='Phone'>(949)345-9836</a></div>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    HA
                                </button>
                                <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <div className='row'>
                                        <div className='col-md-4'> <button id='userProfileImg'> HA </button> </div>
                                        <div className='col-md-8'>
                                            <div className='row'><p id='Name'>Helen Aguilar</p></div>
                                            <div className='row'><p id='Position'>Costume/Prop</p></div>
                                        </div>
                                    </div>
                                    <div className='row'> <a id='Email' className='col-md-12' href='mailto:hla1016@gmail.com'>hla1016@gmail.com</a></div>
                                    <div className='row'><a className='col-md-12' href="tel:9493459836" id='Phone'>(626)241-8859</a></div>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    NC
                                </button>
                                <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <div className='row'>
                                        <div className='col-md-4'> <button id='userProfileImg'> NC </button> </div>
                                        <div className='col-md-8'>
                                            <div className='row'><p id='Name'>Nasim Campbell</p></div>
                                            <div className='row'><p id='Position'>Styling</p></div>
                                        </div>
                                    </div>
                                    <div className='row'> <a id='Email' className='col-md-12' href='mailto:nasimcampbell@gmail.com'>nasimcampbell@gmail.com</a></div>
                                    <div className='row'><a className='col-md-12' href="tel:9493459836" id='Phone'>(949)302-6675</a></div>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    KJ
                                </button>
                                <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <div className='row'>
                                        <div className='col-md-4'> <button id='userProfileImg'> KJ </button> </div>
                                        <div className='col-md-8'>
                                            <div className='row'><p id='Name'>Kwe Johnson</p></div>
                                            <div className='row'><p id='Position'>Photographer</p></div>
                                        </div>
                                    </div>
                                    <div className='row'> <a id='Email' className='col-md-12' href='mailto:example@email.com'>example@email.com</a></div>
                                    <div className='row'><a className='col-md-12' href="tel:9493459836" id='Phone'>(949)345-9836</a></div>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TB
                                </button>
                                <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <div className='row'>
                                        <div className='col-md-4'> <button id='userProfileImg'> TB </button> </div>
                                        <div className='col-md-8'>
                                            <div className='row'><p id='Name'>TBD</p></div>
                                            <div className='row'><p id='Position'>Hair/Make Up</p></div>
                                        </div>
                                    </div>
                                    <div className='row'> <a id='Email' className='col-md-12' href='mailto:example@email.com'>example@email.com</a></div>
                                    <div className='row'><a className='col-md-12' href="tel:9493459836" id='Phone'>(949)345-9836</a></div>
                                </div>
                            </div>
                            <div id='personnelWrapper'>
                                <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TB
                                </button>
                                <div className="dropdown-menu container" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                                    <div className='row'>
                                        <div className='col-md-4'> <button id='userProfileImg'> TB </button> </div>
                                        <div className='col-md-8'>
                                            <div className='row'><p id='Name'>TBD</p></div>
                                            <div className='row'><p id='Position'>Creative Direction</p></div>
                                        </div>
                                    </div>
                                    <div className='row'> <a id='Email' className='col-md-12' href='mailto:example@email.com'>example@email.com</a></div>
                                    <div className='row'><a className='col-md-12' href="tel:9493459836" id='Phone'>(949)345-9836</a></div>
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