import { TableHistory, TableH, TableD } from './Transaction.styled';

export const TransactionList = ({ items }) => {
  return (
    <TableHistory>
      <thead>
        <tr>
          <TableH>Type</TableH>
          <TableH>Amount</TableH>
          <TableH>Currency</TableH>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableD>{item.type}</TableD>
            <TableD>{item.amount}</TableD>
            <TableD>{item.currency}</TableD>
          </tr>
        ))}
      </tbody>
    </TableHistory>
  );
};
