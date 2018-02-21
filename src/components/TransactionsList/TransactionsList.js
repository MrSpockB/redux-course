import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import values from 'ramda/src/values';
import AddTransactionButton from '../AddTransactionButton';
import Transaction from '../Transaction';
import PortfolioIndicatorsBar from '../PortfolioIndicatorsBar';
import {
  AddTransactionButtonContainerStyled,
  TransactionsListContainerStyled,
} from './TransactionsList.styled';
import transactions from '../../actions/transactions';
import prices from '../../actions/prices';
import user from '../../actions/user';

class TransactionsList extends React.Component {
  constructor(props) {
    super(props);
    // setInterval(function(){
    //   props.getPricesRequested();
    // }, 4000);
    props.getUserRequested();
  }

  render() {
    const {
      cryptoPrices,
      removeTransaction,
    } = this.props;

    const transactions = values(this.props.transactions).map((transaction) =>
      <Transaction
        key={transaction.id}
        cryptoPrice={cryptoPrices[transaction.crypto]}
        transaction={transaction}
        removeTransaction={removeTransaction}
      />
    );

    return (
      <div>
        <AddTransactionButtonContainerStyled>
          <AddTransactionButton />
        </AddTransactionButtonContainerStyled>
        <PortfolioIndicatorsBar />
        <TransactionsListContainerStyled>
          { transactions }
        </TransactionsListContainerStyled>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    cryptoPrices,
    transactions,
  } = state;

  return {
    cryptoPrices,
    transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { removeTransaction } = transactions.creators;
  const { getPricesRequested } = prices.creators;
  const { getUserRequested } = user.creators;

  return bindActionCreators({
    getPricesRequested,
    removeTransaction,
    getUserRequested,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
