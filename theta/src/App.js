import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import logo from './logo.svg';
import './App.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';




const style = {
  margin: 12,
};
 
//TABS
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


class App extends Component {
    //Card
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
                };
        }
    
    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
        };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
        };

    handleExpand = () => {
        this.setState({expanded: true});
        };

    handleReduce = () => {
    this.setState({expanded: false});
        };

    render() {
        return (
        <MuiThemeProvider>
            
            <div class="Wrapper01">
                
                <div class="Premium">
                    </div>
                
                <div class="menu">
                      <Tabs>
                        <Tab label="Item One" >
                         <div>
                            <h2 style={styles.headline}>Tab One</h2>
                            <p>
                            This is an example tab.
                        </p>
                            <p>
                                You can put any sort of HTML or react component in here. It even keeps the component state!
                        </p>
                            <Slider name="slider0" defaultValue={0.5} />
                    </div>
                </Tab>
                <Tab label="Item Two" >
                    <div>
                        <h2 style={styles.headline}>Tab Two</h2>
                        <p>
                        This is another example tab.
                    </p>
                </div>
            </Tab>
                <Tab
                    label="onActive"
                    data-route="/home"
                    onActive={handleActive}
                >
                    <div>
                        <h2 style={styles.headline}>Tab Three</h2>
                        <p>
                        This is a third example tab.
                    </p>
                </div>
            </Tab>
            </Tabs>
        </div>
                
                <div class="right-box">
                    </div>
            
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            
                    <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
          avatar="data:image/png;base64,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"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                    <CardText>
                        <Toggle
                            toggled={this.state.expanded}
                            onToggle={this.handleToggle}
                            labelPosition="right"
                            label="This toggle controls the expanded state of the component."
                            />
                        </CardText>
            
                    <CardMedia
                        expandable={true}
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
                    <img    src="https://png.pngtree.com/element_origin_min_pic/17/03/09/5075f16d0d4420bfe7386317a816fb26.jpg" alt="" />
                        </CardMedia>
        
                    <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
                        <CardText expandable={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
            
                    <CardActions>
                        <FlatButton label="Expand" onClick={this.handleExpand} />
                        <FlatButton label="Reduce" onClick={this.handleReduce} />
                        </CardActions>
                    </Card>
            <RaisedButton label="Primary" primary={true} style={style} />
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
