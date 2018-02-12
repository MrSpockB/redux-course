import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import transactions from '../actions/transactions';

const getRandomId = () => Math.floor(Math.random() * 0x1000000).toString(16);

const AddTransactionButton = (props) => {
  const { addTransaction } = props;

  const transaction= {
    crypto: 'ETH',
    type: 'buy',
    amount: 10,
    price: 15000,
  };

  const handleClick = () => addTransaction({ transaction: { ...transaction, id: getRandomId(), } });

  return (
    <button onClick={handleClick}>
      Add transactions
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { addTransaction } = transactions.creators;

  return bindActionCreators({
    addTransaction,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddTransactionButton);
