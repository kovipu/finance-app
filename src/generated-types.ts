import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Amount = {
  __typename?: 'Amount';
  /** The amount currency */
  currency: Scalars['String'];
  /** The amount */
  value?: Maybe<Scalars['Float']>;
};

export type NordnetAccount = {
  __typename?: 'NordnetAccount';
  /** The account identifier (id) of the account. The id is unique within the session. Not applicable for partners */
  accid?: Maybe<Scalars['ID']>;
  /** The Nordnet account number */
  accno: Scalars['Int'];
  /** Account alias can be set on Nordnet by the end user */
  alias: Scalars['String'];
  /** Account type identifier */
  atyid?: Maybe<Scalars['Int']>;
  /** Description to why the account is blocked. The language specified in the request is used in this reply so it can be displayed to the end user */
  blocked_reason?: Maybe<Scalars['String']>;
  /** True if this is the default account */
  default: Scalars['Boolean'];
  /** The account info summary gives details of one or more account. */
  info: Array<NordnetAccountInfo>;
  /** True if the account is blocked. No queries can be made to this account */
  is_blocked?: Maybe<Scalars['Boolean']>;
  /** Information about the currency ledgers of an account */
  ledgers?: Maybe<NordnetLedgerInfo>;
  /** The positions of the account */
  positions: Array<NordnetPosition>;
  /** Historical returns of the account */
  returns?: Maybe<NordnetAccountReturnsHistorical>;
  /** Shareville alias that is connected to this account number. Only available for certain systems */
  shareville_alias?: Maybe<Scalars['String']>;
  /** Translated account type. */
  type: Scalars['String'];
};

export type NordnetAccountInfo = {
  __typename?: 'NordnetAccountInfo';
  /** The account identifier (id) of the account. The id is unique within the session. Not applicable for partners */
  accid?: Maybe<Scalars['ID']>;
  /** The Nordnet account number */
  accno: Scalars['Int'];
  /** Account credit */
  account_credit: Amount;
  /** The account currency */
  account_currency: Scalars['String'];
  /** All ledgers combined */
  account_sum: Amount;
  /** Bonus cash if available */
  bonus_cash?: Maybe<Amount>;
  /** Collateral claim for options */
  collateral: Amount;
  /** Accrued interest for credit account if available */
  credit_account_interest?: Maybe<Amount>;
  /** Sum for credit account if available */
  credit_account_sum?: Maybe<Amount>;
  /** Locked amount for forwards */
  forward_sum: Amount;
  /** Total market value */
  full_marketvalue: Amount;
  /** Not realized profit/loss for future */
  future_sum: Amount;
  /** Interest on the account */
  interest: Amount;
  /** Intraday credit if available */
  intraday_credit?: Maybe<Amount>;
  /** Max loan limit (regardless of pawnvalue) */
  loan_limit: Amount;
  /** account_sum + full_marketvalue + interest + forward_sum + future_sum + unrealized_future_profit_loss */
  own_capital: Amount;
  /** Own capital calculated in the morning. Static during the day */
  own_capital_morning: Amount;
  /** Pawn value of all positions combined */
  pawn_value: Amount;
  /** Registration date of the account in YYYY-MM-DD format */
  registration_date?: Maybe<Scalars['String']>;
  /** Available for trading */
  trading_power: Amount;
  /** Unrealized profit and loss for futures */
  unrealized_future_profit_loss: Amount;
};

export type NordnetAccountReturnsHistorical = {
  __typename?: 'NordnetAccountReturnsHistorical';
  /** The account identifier (id) of the account. The id is unique within the session. Not applicable for partners */
  accid?: Maybe<Scalars['Int']>;
  /** The account number, omitted if this is an aggregate */
  account_number: Scalars['Int'];
  /** Indicates if this is the aggregated performance or not, defaults to false */
  aggregated: Scalars['Boolean'];
  /** Result the last month */
  result_1_month?: Maybe<Amount>;
  /** Result the last week */
  result_1_week?: Maybe<Amount>;
  /** Result the last year */
  result_1_year?: Maybe<Amount>;
  /** Result the last 3 months */
  result_3_month?: Maybe<Amount>;
  /** Result the last 3 year */
  result_3_year?: Maybe<Amount>;
  /** Result the last 6 months */
  result_6_month?: Maybe<Amount>;
  /** Result this year */
  result_this_year?: Maybe<Amount>;
  /** Return in % the last month */
  returns_1_month?: Maybe<Scalars['Float']>;
  /** Return in % the last week */
  returns_1_week?: Maybe<Scalars['Float']>;
  /** Return in % the last year */
  returns_1_year?: Maybe<Scalars['Float']>;
  /** Return in % the last three months */
  returns_3_month?: Maybe<Scalars['Float']>;
  /** Return in % the last three years */
  returns_3_year?: Maybe<Scalars['Float']>;
  /** Return in % the last six months */
  returns_6_month?: Maybe<Scalars['Float']>;
  /** Return in % this year */
  returns_this_year?: Maybe<Scalars['Float']>;
  /** Sharpe ratio the last month */
  sharpe_ratio_1_month?: Maybe<Scalars['Float']>;
  /** Sharpe ratio the last year */
  sharpe_ratio_1_year?: Maybe<Scalars['Float']>;
  /** Sharpe ratio the last three years */
  sharpe_ratio_3_year?: Maybe<Scalars['Float']>;
  /** Portfolio volatility the last month */
  volatility_1_month?: Maybe<Scalars['Float']>;
  /** Portfolio volatility the last year */
  volatility_1_year?: Maybe<Scalars['Float']>;
  /** Portfolio volatility the last three years */
  volatility_3_year?: Maybe<Scalars['Float']>;
};

export type NordnetInstrument = {
  __typename?: 'NordnetInstrument';
  /** Asset class key word */
  asset_class?: Maybe<Scalars['String']>;
  /** URL to brochure if available */
  brochure_url?: Maybe<Scalars['String']>;
  /** The currency of the instrument */
  currency: Scalars['String'];
  /** The dividend policy */
  dividend_policy?: Maybe<Scalars['String']>;
  /** Expiration date if applicable. */
  expiration_date?: Maybe<Scalars['String']>;
  /** The instrument group. Wider description than instrument type. The description is available in the instrument type lookup */
  instrument_group_type?: Maybe<Scalars['String']>;
  /** Unique identifier of the instrument. Can in some cases be 0 if the instrument is not tradable */
  instrument_id: Scalars['ID'];
  /** The instrument type. */
  instrument_type: Scalars['String'];
  /** The instrument isin code */
  isin_code?: Maybe<Scalars['String']>;
  /** The leverage percentage if applicable */
  leverage_percentage?: Maybe<Scalars['Float']>;
  /** The margin percentage if applicable */
  margin_percentage?: Maybe<Scalars['Float']>;
  /** Marking market view for leverage instruments. U for up and D for down */
  market_view?: Maybe<Scalars['String']>;
  /** The mifid2 category of an instrument. Used to determine if a user can trade the instrument */
  mifid2_category?: Maybe<Scalars['Int']>;
  /** The instrument multiplier */
  multiplier?: Maybe<Scalars['Float']>;
  /** The instrument name */
  name: Scalars['String'];
  /** Number of securities, not available for all instruments */
  number_of_securities?: Maybe<Scalars['Float']>;
  /** The pawn percentage if applicable */
  pawn_percentage?: Maybe<Scalars['Float']>;
  /** Price type when trading, not available for all markets. Example: monetary_amount, percentage, yield */
  price_type?: Maybe<Scalars['String']>;
  /** URL to prospectus if available */
  prospectus_url?: Maybe<Scalars['String']>;
  /** The sector id of the instrument */
  sector?: Maybe<Scalars['String']>;
  /** The sector group of the instrument */
  sector_group?: Maybe<Scalars['String']>;
  /** The SFDR article of a fund. Can be 6, 8 or 9 */
  sfdr_article?: Maybe<Scalars['Int']>;
  /** Strike price if applicable */
  strike_price?: Maybe<Scalars['Float']>;
  /** The instrument symbol. E.g 'ERIC B' */
  symbol: Scalars['String'];
  /** Total fee */
  total_fee?: Maybe<Scalars['Float']>;
};

export type NordnetLedger = {
  __typename?: 'NordnetLedger';
  /** Interest credit in the ledger currency */
  acc_int_cred: Amount;
  /** Interest debit in the ledger currency */
  acc_int_deb: Amount;
  /** The sum in the ledger currency */
  account_sum: Amount;
  /** The sum in the account currency */
  account_sum_acc: Amount;
  /** Currency of the ledger */
  currency: Scalars['String'];
  /** The price to convert to base currency */
  exchange_rate: Amount;
};

export type NordnetLedgerInfo = {
  __typename?: 'NordnetLedgerInfo';
  /** Each ledger */
  ledgers: Array<NordnetLedger>;
  /** Total of all the ledgers in the account currency */
  total: Amount;
  /** Total interest credit in the account currency */
  total_acc_int_cred: Amount;
  /** Total interest debit in the account currency */
  total_acc_int_deb: Amount;
};

export type NordnetPosition = {
  __typename?: 'NordnetPosition';
  /** The account identifier (id) of the account. The id is unique within the session. Not applicable for partners */
  accid?: Maybe<Scalars['Int']>;
  /** The Nordnet account number */
  accno: Scalars['Int'];
  /** Acquisition price in the tradable currency */
  acq_price: Amount;
  /** Acquisition price in the account currency */
  acq_price_acc: Amount;
  /** Position instrument */
  instrument: NordnetInstrument;
  /** Collateral percentage required to cover this position if short (qty < 0). */
  margin_percent: Scalars['Int'];
  /** Market value in the tradable currency */
  market_value: Amount;
  /** Market value in the account currency */
  market_value_acc: Amount;
  /** The price of the instrument of the position in the morning */
  morning_price: Amount;
  /** How much can the user loan on this position */
  pawn_percent: Scalars['Int'];
  /** The quantity of the position */
  qty: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns a list of accounts that the user has access to. */
  nordnetAccounts: Array<NordnetAccount>;
};

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { __typename?: 'Query', nordnetAccounts: Array<{ __typename?: 'NordnetAccount', accno: number, type: string, returns?: { __typename?: 'NordnetAccountReturnsHistorical', result_1_month?: { __typename?: 'Amount', value?: number | null | undefined } | null | undefined } | null | undefined }> };


export const AccountsDocument = gql`
    query accounts {
  nordnetAccounts {
    accno
    type
    returns {
      result_1_month {
        value
      }
    }
  }
}
    `;

export function useAccountsQuery(options: Omit<Urql.UseQueryArgs<AccountsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AccountsQuery>({ query: AccountsDocument, ...options });
};