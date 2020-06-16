import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Index'
import './ProjectInfo.css'
class ProjectInfo extends Component {



    render() {
        return (
            <div style={{ marginTop: 50, }}>

                <div className='card'>
                    <div className='col-md-2'>
                        <p style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'left', paddingTop: 10, height: 36 }}>The Beginning</p>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex'}}>
                    <div className='card' id='Card'>
                        <div className='col-md-12'>
                            <p style={{ fontSize: 22, marginTop: 10, }}>Personnel</p>
                        </div>
                        <div className='row' id='Presonnel'>
                            <p id='Name'>Terrence Campbell </p>
                            <p id='Position'> Creative Direction</p>
                        </div>
                        <div className='row' id='Presonnel'>
                            <p id='Name'>Helen Aguilar </p>
                            <p id='Position'>Costume/Prop</p>
                        </div>
                        <div className='row' id='Presonnel'>
                            <p id='Name'>Nasim Campbell</p>
                            <p id='Position'>Styling</p>
                        </div>
                        <div className='row' id='Presonnel'>
                            <p id='Name'>Kwe Johnson</p>
                            <p id='Position'>Photographer</p>
                        </div>
                        <div className='row' id='Presonnel'>
                            <p id='Name'>TBD</p>
                            <p id='Position'> Hair/Make Up</p>
                        </div>
                        <div className='row' id='Presonnel'>
                            <p id='Name'>TBD</p>
                            <p id='Position'>CPA</p>
                        </div>
                    </div>
                    <div className='card' id='Card'>
                        <div className='col-md-12'>
                            <p style={{ fontSize: 16, textAlign: 'center' }}>Location</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Broadacres Elementary</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Leapwood Elementary</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Courtis JH <br /> <br /> Add in Links to the locations and googleMaps photos</p>
                        </div>
                    </div>
                    <div className='card' id='Card'>
                        <div className='col-md-12'>
                            <p style={{ fontSize: 16, textAlign: 'center' }}>Details</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Blah</p>
                        </div>
                    </div>
                    <div className='card' id='Card'>
                        <div className='col-md-12'>
                            <p style={{ fontSize: 16, textAlign: 'center' }}>Cast</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Blah</p>
                        </div>
                    </div>
                    <div className='card' id='Card'>
                        <div className='col-md-12'>
                            <p style={{ fontSize: 16, textAlign: 'center' }}>Budget</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Blah</p>
                        </div>
                    </div>
                    <div className='card' id='Card'>
                        <div className='col-md-12'>
                            <p style={{ fontSize: 16, textAlign: 'center' }}>Shoot Dates</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Broadacres Elementary</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Leapwood Elementary</p>
                        </div>
                        <div className='Location'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Courtis JH <br /> <br /> Add in Links to the locations and googleMaps photos</p>
                        </div>
                    </div>
                    <div className='card' id='Card'>
                        <div className='col-md-12'>
                            <p style={{ fontSize: 16, textAlign: 'center' }}>Notes</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectInfo;