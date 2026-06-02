import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PratoService } from '../../services/prato.service';
import { Prato } from '../../models/prato';

@Component({
  selector: 'app-prato-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './prato-form.html'
})
export class PratoFormComponent implements OnInit {
  prato: Prato = {
    id: 0,
    nome: '',
    descricao: '',
    categoria: '',
    preco: 0,
    disponivel: true
  };
  editando = false;

  constructor(
    private pratoService: PratoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.pratoService.getById(+id).subscribe(data => (this.prato = data));
    }
  }

  salvar(): void {
    if (this.editando) {
      this.pratoService.update(this.prato.id, this.prato).subscribe({
        next: () => this.router.navigate(['/pratos']),
        error: err => console.error('Erro ao atualizar:', err)
      });
    } else {
      this.pratoService.create(this.prato).subscribe({
        next: () => this.router.navigate(['/pratos']),
        error: err => console.error('Erro ao criar:', err)
      });
    }
  }
}
