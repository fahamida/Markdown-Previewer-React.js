import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

let marked = require("marked");

class App extends Component {
  state={
    markdown:""
  }
  updateMarkdown = function(markdown){
    this.setState({markdown});
  }
  render() {
    let {markdown} =this.state;
    console.log(markdown);
    return (
      <div className="App container">
      <div className="space">
      <h1>Markdown Previewer</h1>
      </div>
      <Grid>
      <Row className="show-grid">
    <Col xs={6} md={6}>
      <code>      
      <h1 className="title">Text Editor</h1>  
      </code>
    </Col>
    <Col xs={6} md={6}>
      <code>  
        <h1 className="title">Output</h1>    
      </code>
    </Col>
  </Row>
  <Row className="show-grid">
    <Col xs={6} md={6}>
      <code>      
        <div>
    <FormGroup controlId="FormControlsTextArea">
    <ControlLabel></ControlLabel>
    
    <FormControl componentClass="textarea" style={{ height: 300 }} placeholder="Type Here" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></FormControl>
    </FormGroup>
      </div>
      </code>
    </Col>
    <Col xs={6} md={6}>
      <code>    
      <div style={{ color: "rgb(51, 51, 63)" }} dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>
      </code>
    </Col>
  </Row>
</Grid>
      <div className="space">
      <h6> This is a GitHub-flavored Markdown Previewer with React.js.</h6>
      <h6> The syntax guidelines can be found at <a href="https://guides.github.com/features/mastering-markdown/">Mastering Markdown</a>.</h6>
      </div>
      </div>
    );
  }
}

export default App;
