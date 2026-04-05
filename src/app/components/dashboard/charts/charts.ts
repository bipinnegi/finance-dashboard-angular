import { Component, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.html',
  styleUrl: './charts.css'
})
export class Charts implements AfterViewInit {

  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  @ViewChild('pieCanvas') pieCanvas!: ElementRef;

  private lineChart: Chart | null = null;
  private pieChart: Chart | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private transactionService: TransactionService
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.renderCharts();
      }, 0);
    }
  }

  renderCharts() {
    const transactions = this.transactionService.getTransactions();

    const expenses = transactions.filter(t => t.type === 'expense');

    const categoryMap: any = {};
    expenses.forEach(t => {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    });

    //  Destroy old charts if exist
    if (this.pieChart) {
      this.pieChart.destroy();
    }
    if (this.lineChart) {
      this.lineChart.destroy();
    }

    // Pie Chart
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: Object.keys(categoryMap),
        datasets: [{
          data: Object.values(categoryMap),
          backgroundColor: ['#ef4444', '#3b82f6', '#10b981']
        }]
      }
    });

    //  Line Chart
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: transactions.map(t => t.date),
        datasets: [{
          label: 'Balance Flow',
          data: transactions.map(t => t.amount),
          borderColor: '#3b82f6',
          tension: 0.4
        }]
      }
    });
  }
}