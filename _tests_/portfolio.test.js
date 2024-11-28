const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, '../styles/styles.css'), 'utf8');

describe('proyecto-portfolio Tests', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;

    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  });

  test('La barra de navegación debería existir', () => {
    const navbar = document.querySelector('.navbar');
    expect(navbar).not.toBeNull();
  });

  test('Los enlaces de la barra de navegación deben tener los href correctos', () => {
    const navbarItems = document.querySelectorAll('.navbar a');  
    
    expect(navbarItems[0].getAttribute('href')).toBe('#quien-soy');
    expect(navbarItems[1].getAttribute('href')).toBe('#formacion');
    expect(navbarItems[2].getAttribute('href')).toBe('#experiencia');
    expect(navbarItems[3].getAttribute('href')).toBe('#intereses');
    expect(navbarItems[4].getAttribute('href')).toBe('#contacto');
  });

  test('La sección "Quién Soy" tiene un color de fondo y un margen superior de 20px', () => {
    const sectionQuienSoy = document.querySelector('.presentacion');
    expect(sectionQuienSoy).not.toBeNull();
    const styles = dom.window.getComputedStyle(sectionQuienSoy);
    expect(styles.backgroundColor).toBe('rgba(194, 176, 201, 0.4)');
    expect(styles.marginTop).toBe('20px');
  });

  test('La sección "Formación Académica debería tener una lista <ul>', () => {
    const sectionFormacion = document.querySelector('.formacion-academica');
    expect(sectionFormacion.querySelector('ul')).not.toBeNull();
  });

  test('La sección "Formación Académica debería tener el texto alineado a la izquierda', () => {
    const sectionFormacion = document.querySelector('.formacion-academica');
    const styles = dom.window.getComputedStyle(sectionFormacion);
    expect(styles.textAlign).toBe('left');
  });

  test('La sección "Formación Académica" debería tener los items de la lista de otro color', () =>{
    const lista = document.querySelector('.lista-formaciones');
    const styles = dom.window.getComputedStyle(lista);
    expect(styles.color).toBe('rgb(150, 86, 161)');
  }) 

  test('La sección "Experiencia Laboral" debería tener formato tabla', () =>{
    const sectionExperiencia = document.querySelector('.experiencia-laboral');
    expect(sectionExperiencia).not.toBeNull();
    const table = sectionExperiencia.querySelector('table');
    expect(table).not.toBeNull();
    const fila = table.querySelectorAll('tr');
    expect(fila.length).toBeGreaterThan(2);
  })

  test('La tabla debería tener bordes visibles y un espaciado entre celdas', () =>{
    const table = document.querySelector('table');
    expect(table).not.toBeNull();
    const tableStyles = dom.window.getComputedStyle(table);
    expect(tableStyles.border).not.toBeNull();
    const borderSpacing = parseInt(tableStyles.borderSpacing, 10);
    expect(borderSpacing).toBeGreaterThan(2);     
  })

  test('La sección "Interéses" debería tener imágenes', () =>{
    const sectionIntereses = document.querySelector('.intereses');
    const images = sectionIntereses.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(2);
  })

  /*test('Las imágenes deberían estar alineadas horizontalmente', () =>{
    const imagesDisplay = document.querySelector('.flex-grid');
    expect(imagesDisplay).not.toBeNull();
    const styles = window.getComputedStyle(imagesDisplay);
    const displayStyle = styles.display;
    expect(displayStyle).toBe('flex');
  })

  test('Las imágenes deberían tener un tamaño mayor a 100px', () =>{
    const sizeImage = document.querySelector('.flex-grid img');
    images.forEach((img) =>{
      const imgStyles = window.getComputedStyle(images);
      const widht = parseInt(imgStyles.width, 10);
      const height = parseInt(imgStyles.height, 10);
      expect(widht).toBeGreaterThan(100);
      expect(height).toBeGreaterThan(100);
  });*/

  test('La sección "Contacto" debería existir', ()=>{
    const contacto = document.querySelector('.contacto');
    expect(contacto).not.toBeNull;
  });
  
  test('El formulario de contacto debería existir', ()=>{
    const form = document.querySelector('.contacto-form');
    expect(form).not.toBeNull();
  })

  test('El campo de texto para el nombre debería existir', ()=>{
    const nameInput = document.querySelector('input[type="text"]');
    expect(nameInput).not.toBeNull();
  })

  test('El campo para email debería existir', ()=>{
    const emailInput = document.querySelector('input[type="email"]');
    expect(emailInput).not.toBeNull();
  })

  test('El campo de número teléfonico debería existir', ()=>{
    const telInput = document.querySelector('input[type="tel"]');
    expect(telInput).not.toBeNull();
  })

  test('El campo de fecha debería existir', ()=>{
    const dateInput = document.querySelector('input[type="date"]');
    expect(dateInput).not.toBeNull();
  })

  test('El campo de selección de archivo debería existir', ()=>{
    const fileInput = document.querySelector('input[type="file"]');
    expect(fileInput).not.toBeNull();
  })

  test('El campo de checkbox para términos y condiciones debería existir', ()=>{
    const checkInput = document.querySelector('input[type="checkbox"]');
    expect(checkInput).not.toBeNull();
  })

  test('El botón de Envío debería existir', ()=>{
    const submitInput = document.querySelector('input[type="submit"]');
    expect(submitInput).not.toBeNull();
  })
  
});






