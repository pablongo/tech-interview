export interface HashState {
  hashInformation: any;
  isLoading: boolean;
  subscribedHashes: string[];
  hashMessage: any;
  latestBlockHeight: number;
  selectedCurrency: any;
  error: any;
}

export interface SpendingOutpoints {
  n: number;
  tx_index: number;
}

export interface Input {
  sequence: number;
  witness: string;
  script: string;
  index: number;
  prev_out: {
    addr: string;
    n: number;
    script: string;
    spending_outpoints: SpendingOutpoints[];
    spent: boolean;
    tx_index: number;
    type: number;
    value: number;
  };
}

export interface Output {
  type: number;
  spent: boolean;
  value: number;
  spending_outpoints: SpendingOutpoints[];
  n: number;
  tx_index: number;
  script: string;
  addr: string;
}

export interface AddressDetailsProps {
  n_tx: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
}

export interface TransactionDetailsProps {
  hash: string;
  total_received: number;
  time: number;
  size: null;
  block_height: number;
  inputs: Input[];
  out: any[];
  fee: number;
}
