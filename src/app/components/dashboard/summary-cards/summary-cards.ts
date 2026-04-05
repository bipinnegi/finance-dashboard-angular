import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cards.html',
  styleUrl: './summary-cards.css',
})
export class SummaryCards {

  constructor(private transactionService: TransactionService) {}

  get transactions() {
    return this.transactionService.getTransactions();
  }

  get totalIncome() {
    return this.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  get totalExpenses() {
    return this.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  get balance() {
    return this.totalIncome - this.totalExpenses;
  }
}