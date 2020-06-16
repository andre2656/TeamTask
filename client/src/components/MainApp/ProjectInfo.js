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
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>The Beginning</p>
                    </div>
                </div>
                <div className='card' style={{ width: 310, paddingTop: 5, paddingBottom: 5, paddingLeft: 3, paddingRight: 3, marginLeft: 8, backgroundColor: '#EEEEEE' }}>
                    <div className='col-md-12'>
                        <p style={{ fontSize: 16, marginTop: 10, fontWeight: 'bold' }}>Personnel</p>
                    </div>
                    <div className='row' id='Presonnel' style={{ width: 301, marginLeft: 0, }}>
                        <p id='Name'>Terrence Campbell </p>
                        <p id='Position'> Creative Direction</p>
                    </div>
                    <div className='row' id='Presonnel' style={{ width: 301, marginLeft: 0, }}>
                        <p id='Name'>Helen Aguilar </p>
                        <p id='Position'>Costume/Prop</p>
                    </div>
                    <div className='row' id='Presonnel' style={{ width: 301, marginLeft: 0, }}>
                        <p id='Name'>Nasim Campbell</p>
                        <p id='Position'>Styling</p>
                    </div>
                    <div className='row' id='Presonnel' style={{ width: 301, marginLeft: 0, }}>
                        <p id='Name'>Kwe Johnson</p>
                        <p id='Position'>Photographer</p>
                    </div>
                    <div className='row' id='Presonnel' style={{ width: 301, marginLeft: 0, }}>
                        <p id='Name'>TBD</p>
                        <p id='Position'> Hair/Make Up</p>
                    </div>
                    <div className='row' id='Presonnel' style={{ width: 301, marginLeft: 0, }}>
                        <p id='Name'>TBD</p>
                        <p id='Position'>CPA</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='col-md-3'>
                        <p style={{ fontSize: 16, textAlign: 'center' }}>Location</p>
                    </div>
                    <div className='Location'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Broadacres Elementary</p>
                    </div>
                    <div className='Location'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Leapwood Elementary</p>
                    </div>
                    <div className='Location'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Courtis JH</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectInfo;