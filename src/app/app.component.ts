import { AlunoService } from './aluno.service';
import { Component, OnInit } from '@angular/core';
import { PwappService } from './pwapp.service';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  alunos;

  title = 'Hello World!';


  constructor(public pwa: PwappService, private service: AlunoService) {

  }

  ngOnInit(): void {
    this.service.getAlunos().subscribe(res => this.alunos = res);
  }
  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }
}
