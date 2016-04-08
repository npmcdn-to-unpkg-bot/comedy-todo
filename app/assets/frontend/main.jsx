import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class Main extends React.Component {
  render() {
    return(
      <div className="container">
        <ButtonGroup>
          <DropdownButton bsStyle="success" title="Dropdown for our App">
            <MenuItem key="1">Vinigar</MenuItem>
            <MenuItem key="2">Drink</MenuItem>
          </DropdownButton>
          <Button bsStyle="info">Keep</Button>
          <Button bsStyle="info">Throw in Garbage</Button>
        </ButtonGroup>
      </div>
    )
  }
}


let documentReady = () => {
  ReactDOM.render(<Main />, document.getElementById("react"))
}

$(documentReady);
