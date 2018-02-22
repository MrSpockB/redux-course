import React from 'react';
import { connect } from 'react-redux';

class CryptoLabels extends React.Component {
  render() {
    const {
      cryptoPrices,
    } = this.props;

    const {
      fetching,
      exerciseData,
      ...restCryptoPrices,
    } = cryptoPrices;

    return (
      <div>
        {
          fetching ?
          'Loading...' :
          Object.keys(restCryptoPrices)
            .map((key, idx) => (<span key={`${key}-${idx}`}>{key}: {cryptoPrices[key]}&nbsp;&nbsp;</span>))
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    cryptoPrices,
  } = state;

  return {
    cryptoPrices,
  };
};

export default connect(mapStateToProps, null)(CryptoLabels);
