const fs = require('fs');
const path = './tareas.json';

exports.leerTareas = function () {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

exports.agregarTarea = function (tarea) {
    let listado = JSON.parse(fs.readFileSync(path, 'utf-8'));
	listado.push({titulo: `${tarea.titulo}`, status: `${tarea.status}`});
	fs.writeFileSync(path, JSON.stringify(listado), "utf-8");
}

exports.filtrarTareasPorEstado = function (estado) {
    return exports.leerTareas().filter(t => t.status == estado);
}