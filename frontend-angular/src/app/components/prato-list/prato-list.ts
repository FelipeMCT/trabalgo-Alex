import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PratoService } from '../../services/prato.service';
import { Prato } from '../../models/prato';

@Component({
  selector: 'app-prato-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './prato-list.html'
})
export class PratoListComponent implements OnInit {
  pratos: Prato[] = [];

  constructor(private pratoService: PratoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.pratoService.getAll().subscribe({
      next: data => {
        this.pratos = data;
        this.cdr.detectChanges();
      },
      error: err => console.error('Erro ao carregar pratos:', err)
    });
  }

  excluir(id: number): void {
    if (confirm('Deseja excluir este prato?')) {
      this.pratoService.delete(id).subscribe(() => this.carregar());
    }
  }
}
