import { Component } from '@angular/core';

@Component({
  selector: 'app-db3',
  templateUrl: './db3.component.html',
  styleUrls: ['./db3.component.css']
})
export class Db3Component {
  cards = [
    {
      header: 'Mitad del Mundo',
      subheader: 'Quito',
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/N4R5XPCOZFC7JHOL63QY2WBDYA.jpg',
      description: 'Párate en ambos hemisferios a la vez en este icónico monumento.'
    },
    {
      header: 'Islas Galápagos',
      subheader: 'Archipiélago',
      image: 'https://viajes.nationalgeographic.com.es/medio/2019/08/02/un-eden-remoto_a8e2f1ce_1254x837.jpg',
      description: 'Explora la biodiversidad única que inspiró a Charles Darwin.'
    },
    {
      header: 'Volcán Cotopaxi',
      subheader: 'Sierra',
      image: 'https://www.comecuamex.com/wp-content/uploads/2021/04/cotopaxi-1200x600-1.jpg',
      description: 'Aventúrate en uno de los volcanes activos más altos del mundo.'
    },
    {
      header: 'Baños de Agua Santa',
      subheader: 'Tungurahua',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/V%C3%B3lcan_Cotopaxi.jpg/640px-V%C3%B3lcan_Cotopaxi.jpg',
      description: 'Disfruta de cascadas y deportes de aventura en este pueblo mágico.'
    },
    {
      header: 'Ciudad de Cuenca',
      subheader: 'Azuay',
      image: 'https://www.plusvalia.com/noticias/wp-content/uploads/2024/03/PRIORIDAD-Cuenca-Ciudad-Descubriendo-el-encanto-y-razones-para-llamarla-hogar.jpeg',
      description: 'Recorre calles coloniales en esta ciudad patrimonio de la humanidad.'
    },
    {
      header: 'Parque Nacional Yasuní',
      subheader: 'Amazonía',
      image: 'https://www.laselvajunglelodge.com/wp-content/uploads/2019/07/02-amazon-travel-amazonfacts01.jpg',
      description: 'Sumérgete en la selva más biodiversa del planeta.'
    },
    {
      header: 'Mercado de Otavalo',
      subheader: 'Imbabura',
      image: 'https://naturegalapagos.com/es/wp-content/uploads/sites/3/2015/06/Otavalo.jpg',
      description: 'Descubre artesanías en uno de los mercados indígenas más grandes de Sudamérica.'
    },
    {
      header: 'Malecón 2000',
      subheader: 'Guayaquil',
      image: 'https://img.goraymi.com/2017/06/12/fa9e714c52e7e86616fff3144cbbeb09_xl.jpg',
      description: 'Pasea por este moderno malecón con vistas al río Guayas.'
    },
    {
      header: 'Laguna Quilotoa',
      subheader: 'Cotopaxi',
      image: 'https://quitotourbus.com/wp-content/uploads/2020/01/image3-1.jpg',
      description: 'Admira las aguas turquesas en el cráter de este volcán inactivo.'
    },
    {
      header: 'Mindo',
      subheader: 'Pichincha',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/48/e5/94/a-walk-to-the-top-of.jpg?w=500&h=400&s=1',
      description: 'Explora bosques nublados y una increíble variedad de aves.'
    },
    {
      header: 'Parque Nacional El Cajas',
      subheader: 'Azuay',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/13/5b/56/dd.jpg',
      description: 'Maravíllate con lagunas glaciares y paisajes andinos.'
    },
    {
      header: 'Isla de la Plata',
      subheader: 'Manabí',
      image: 'https://live.staticflickr.com/65535/53054394667_d09c37c052_c.jpg',
      description: 'Conocida como "Galápagos chiquito", ideal para el avistamiento de fauna marina.'
    },
  ];
}
