import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementAsync, decrementAsync} from './testActions';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { openModal} from '../modal/modalActions';

const mapStateToProps = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
});

const mapDispatchToProps = {
    incrementAsync,
    decrementAsync,
    openModal
}

class TestComponent extends Component {
    state = {
        latlng: {
            lat: 59.95,
            lng: 30.33
        }
    }

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latlng => 
            this.setState({
                latlng: latlng
            }))
          .catch(error => console.error('Error', error));
      };

    render() {
        const {data, incrementAsync, decrementAsync, openModal, loading, buttonName} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3>
                <Button loading={buttonName === "increment" && loading} name="increment" onClick={(e) => incrementAsync(e.target.name)} positive content="Increment" />
                <Button loading={buttonName === "decrement" && loading} name="decrement" onClick={(e) => decrementAsync(e.target.name)} negative content="Decrement" />
                <Button onClick={() => openModal('TestModal', {data: 42})} color='teal' content="Open Modal" />
                <br/>
                <br />
                <TestPlaceInput selectAddress={this.handleSelect} />
                <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
