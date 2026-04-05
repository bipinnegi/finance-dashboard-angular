import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleService } from '../../../services/role.service';
import { TransactionService, Transaction } from '../../../services/transaction.service';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions-table.html',
  styleUrl: './transactions-table.css'
})
export class TransactionsTable {

  searchTerm: string = '';
  filterType: string = 'all';

  newTransaction: Transaction = {
    date: '',
    amount: 0,
    category: '',
    type: 'expense'
  };

  constructor(
    public roleService: RoleService,
    private transactionService: TransactionService
  ) {}

  get transactions() {
    return this.transactionService.getTransactions();
  }

  get filteredTransactions() {
    return this.transactions
      .filter(t => this.filterType === 'all' || t.type === this.filterType)
      .filter(t =>
        t.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }

  sortByAmount() {
    this.transactions.sort((a, b) => b.amount - a.amount);
  }

  addTransaction() {
    this.transactionService.addTransaction({ ...this.newTransaction });
    this.newTransaction = { date: '', amount: 0, category: '', type: 'expense' };
  }

  deleteTransaction(index: number) {
    this.transactionService.deleteTransaction(index);
  }
}