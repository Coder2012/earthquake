import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';
import Item from './item';

class stuffList extends React.Component {
    componentWillMount() {
        this.props.stuffActions.fetchEarthquakes();
    }

    renderData(id, properties) {
        return <Item key={id} id={id} properties={properties}/>
    }

    render() {
        if(!this.props.stuff){
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        }else{
            return (
                <div className="">
                    {this.props.stuff.length > 3 &&
                    this.props.stuff.filter(item => item.properties.mag > 4)
                        .map((item) => {
                            return (
                                this.renderData(item.id, item.properties)
                            );
                        })
                    }
                </div>
            )
        }
    }
}

stuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
};

function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
       stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);