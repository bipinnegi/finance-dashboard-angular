import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Transaction {
  date: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private storageKey = 'transactions';
  private isBrowser: boolean;

  private transactions: Transaction[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.transactions = this.loadTransactions();
  }

  //  Load safely
  private loadTransactions(): Transaction[] {
    if (this.isBrowser) {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : this.getDefaultData();
    }
    return this.getDefaultData();
  }

  //  Save safely
  private saveTransactions() {
    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.transactions));
    }
  }

  private getDefaultData(): Transaction[] {
    return [
      { date: '2026-04-01', amount: 5000, category: 'Salary', type: 'income' },
      { date: '2026-04-02', amount: 2000, category: 'Food', type: 'expense' },
      { date: '2026-04-03', amount: 15000, category: 'Freelance', type: 'income' },
      { date: '2026-04-04', amount: 3000, category: 'Shopping', type: 'expense' }
    ];
  }

  getTransactions() {
    return this.transactions;
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.saveTransactions();
  }

  deleteTransaction(index: number) {
    this.transactions.splice(index, 1);
    this.saveTransactions();
  }
}