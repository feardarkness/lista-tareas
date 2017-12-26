const app = require('../../index');
const test = require('tape');
const request = require('supertest');

test('Tareas - verificar existencia de rutas', (t) => {
  t.plan(3);
  request(app).get('/tareas')
    .expect(200)
    .end((err) => {
      if (err) {
        throw err;
      }
      t.pass('Ruta GET existe');
    });

  request(app).patch('/tareas')
    .expect(200)
    .end((err) => {
      if (err) {
        throw err;
      }
      t.pass('Ruta PATCH existe');
    });

  request(app).delete('/tareas')
    .expect(200)
    .end((err) => {
      if (err) {
        throw err;
      }
      t.pass('Ruta DELETE existe');
    });
});

test('Tareas POST - Crear tareas', (t) => {
  request(app).post('/tareas')
    .send({
      titulo: 'Creación del servicio web para obtener el listado de empresas',
      descripcion: 'Se necesita crear un servicio web que permita obtener un listado de empresas de la Entidad A, se necesita realizar los logs necesarios',
    })
    .expect(201)
    .end((err, result) => {
      if (err) {
        throw err;
      }
      t.equal(result.mensaje, 'La tarea se ha creado correctamente', 'La tarea no se ha creado correctamente');
    });
});
