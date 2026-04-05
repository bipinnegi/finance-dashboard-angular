import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCards } from '../../components/dashboard/summary-cards/summary-cards';
import { Charts } from '../../components/dashboard/charts/charts';
import { Insights } from '../../components/dashboard/insights/insights';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SummaryCards,
    Charts,
    Insights
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {}