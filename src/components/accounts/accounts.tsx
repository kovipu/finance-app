import { useAccountsQuery } from '../../generated-types';

function Accounts() {
  const [result] = useAccountsQuery();

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data?.nordnetAccounts.map(({ accno, type, returns }) => (
        <li key={accno}>{type} : {returns?.result_1_month?.value}</li>
      ))}
    </ul>
  );
}

export default Accounts;