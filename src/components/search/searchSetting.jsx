import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import options from '../../assets/icons/options.png'

class SearchSetting extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
        <React.Fragment>
            <div className="col-md-1 text-right">
                <Button onClick={this.toggle} className="btn box-shadow" style={{background: 'white', border: 'none'}}><img src={options} alt="COGS" width="20" /></Button>
            </div>
            <Collapse isOpen={this.state.collapse} className="col-md-11">
            <Card>
                <CardBody>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Violin</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Guitar</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                        <label className="form-check-label" htmlFor="inlineRadio3">Harp</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                        <label className="form-check-label" htmlFor="inlineRadio3">Ukulele</label>
                    </div>
                </CardBody>
            </Card>
            </Collapse>
        </React.Fragment>
    );
  }
}

export default SearchSetting;