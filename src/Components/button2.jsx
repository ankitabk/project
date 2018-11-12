import React ,{Component} from 'react';
//import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
export class Button2 extends React.Component {
    render(){
        return (
            
           <button type="button" onClick={this.props.handleName}>Sort by name </button>
          
        );
    }
}