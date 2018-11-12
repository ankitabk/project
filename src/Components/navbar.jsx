import React ,{Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

export class MyNavbar extends React.Component {
    render(){
        return (
            <div className="col-12" style={{backgroundColor:'#00151B',width:'72rem', padding:10}}>
                <nav className="navbar navbar-light bg-faded justify-content-between"
                     style={{backgroundColor:'#00151B'}}>
                    <div className="navbar-brand col-12 " style={{color:'white', textAlign:'center',
                        fontSize:43, fontStyle:'bold'}}>VIDEO4U</div>
                    <div className=" col-12" style={{color:'white', textAlign:'right',fontSize:15}}>
                        Free Online Video Streaming
                    </div>
                </nav>
            </div>
        );
    }
}