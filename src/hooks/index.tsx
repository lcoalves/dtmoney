import { ReactNode } from 'react';

import { TransactionsProvider } from './useTransactions';

type AppProviderProps = {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <TransactionsProvider>
      {children}
    </TransactionsProvider>
  )
};
