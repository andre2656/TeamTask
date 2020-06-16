import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Index'

class ProjectInfo extends Component {
   


    render() {
        return (
            <div>
             <div className= 'container'>
                 <div className='row'>
                     <div className='col-md-2'>
                            <p style={{ fontSize: 16, textAlign: 'right' }}>Project Name: </p>
                     </div>
                        <div className='col-md-2'>
                            <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>The Beginning</p>
                        </div>
                 </div>
             </div>
                <div className='container'>
                    <div className='col-md-2'>
                        <p style={{ fontSize: 16, fontWeight: 'bold' }}>Personnel</p>
                    </div>

                    <div className='Personnel'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Terrence Campbell - Creative Direction</p>
                    </div>
                    <div className='Personnel'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Helen Aguilar - Costume/Prop</p>
                    </div>
                    <div className='Personnel'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Nasim Campbell - Styling</p>
                    </div>
                    <div className='Personnel'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Kwe Johnson - Photographer</p>
                    </div>
                    <div className='Personnel'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>TBD - Hair/Make Up</p>
                    </div>
                    <div className='Personnel'>
                        <p style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>TBD - CPA</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectInfo;