import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsTable } from '../../components/transactions/transactions-table/transactions-table';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionsTable],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions {}