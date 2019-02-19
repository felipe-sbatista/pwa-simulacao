import { Aluno } from './Aluno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  getAlunos() {
    return this.http.get<Aluno[]>('https://pwa-unicap.firebaseio.com/usuarios.json')
  }
}
