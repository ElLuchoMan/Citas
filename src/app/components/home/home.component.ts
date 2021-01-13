import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      avatar: 'book_online',
      title: 'Citas',
      //subtitle: 'Asigna las citas',
      img: 'https://i.imgur.com/js443MJ.jpg',
      button: 'Cita',
      urlTo: '/listarCitas',
    },
    {
      avatar: 'people',
      title: 'Usuarios',
      //subtitle: 'Crea los usuarios',
     img: 'https://i.imgur.com/xshty5M.jpg',
      button: 'Usuarios',
      urlTo: '/listarUsuarios',
    },
    {
      avatar: 'assignment_ind',
      title: 'Especialistas',
     // subtitle: 'Modifica Especialistas',
      img: 'https://i.imgur.com/pEkp0EU.jpg',
      button: 'Especialistas',
      urlTo: '/listarEmpleados',
    },
    {
      avatar: 'next_week',
      title: 'Tipos de Cita',
      //subtitle: 'Modifica los tipos de cita',
      img: 'https://i.imgur.com/n7t3yxY.jpg',
      button: 'Tipos de cita',
      urlTo: '/listarTipoCitas',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
