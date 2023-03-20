import PropTypes from 'prop-types';
import { Table, Head, Body, Element } from './TransactionHistory.styled';
export function TransactionHistory({ items }) {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>

      <Body>
        {items.map((item, i) => {
          return (
            <Element key={item.id} index={i}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </Element>
          );
        })}
      </Body>
    </Table>
  );
}
TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
