import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insights.html',
  styleUrl: './insights.css'
})
export class Insights {

  constructor(private transactionService: TransactionService) {}

  get transactions() {
    return this.transactionService.getTransactions();
  }

  get expenses() {
    return this.transactions.filter(t => t.type === 'expense');
  }

  get totalExpenses() {
    return this.expenses.reduce((sum, t) => sum + t.amount, 0);
  }

  //  Top category %
  get topCategoryData() {
    const map: any = {};

    this.expenses.forEach(t => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });

    const top = Object.keys(map).reduce((a, b) =>
      map[a] > map[b] ? a : b
    );

    const percent = ((map[top] / this.totalExpenses) * 100).toFixed(1);

    return { category: top, percent };
  }

  //  Monthly comparison
  get monthlyComparison() {
    const currentMonth = new Date().getMonth();

    const thisMonth = this.expenses
      .filter(t => new Date(t.date).getMonth() === currentMonth)
      .reduce((sum, t) => sum + t.amount, 0);

    const lastMonth = this.expenses
      .filter(t => new Date(t.date).getMonth() === currentMonth - 1)
      .reduce((sum, t) => sum + t.amount, 0);

    if (lastMonth === 0) return 0;

    return Number((((thisMonth - lastMonth) / lastMonth) * 100).toFixed(1));
  }

  // Avg daily expense
  get avgDailyExpense() {
    if (this.expenses.length === 0) return 0;

    const days = new Set(this.expenses.map(t => t.date)).size;
    return Math.round(this.totalExpenses / days);
  }
}