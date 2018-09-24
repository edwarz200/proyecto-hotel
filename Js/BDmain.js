// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYOQJ4-y7fKB-d7eA2-fwYkTh9FZeWBGk",
  authDomain: "sena-hotel-bd.firebaseapp.com",
  databaseURL: "https://sena-hotel-bd.firebaseio.com",
  projectId: "sena-hotel-bd",
  storageBucket: "sena-hotel-bd.appspot.com",
  messagingSenderId: "504296591453"


};
firebase.initializeApp(config);

// function writeHotelData(telhot, correohot, histo) {
//   firebase.database().ref('Hotel/' + userId).set({
//     telefono: telhot,
//     email: correohot,
//     historia: histo,
//   });
// }

// function getHotelData(telhot, correohot, histo) {
//   firebase.database().ref('Hotel/' + userId).get({
//     telefono: telhot,
//     email: correohot,
//     historia: histo,
//   });
// }

// function writeHabitacionesData(tipohab, capacidad, valorhab, contenido, fotos, estado) {
//   firebase.database().ref('Hotel/Habitaciones' + userId).set({
//     tipo_hab: tipohab,
//     capacidad: capacidad,
//     precio: valorhab,
//     contenido_hab: contenido,
//     fotografias_hab: fotos,
//     estado_hab: estado
//   });
// }

// function getHabitacionesData(tipohab, capacidad, valorhab, contenido, fotos, estado) {
//   firebase.database().ref('Hotel/Habitaciones' + userId).get({
//     tipo_hab: tipohab,
//     capacidad: capacidad,
//     precio: valorhab,
//     contenido_hab: contenido,
//     fotografias_hab: fotos,
//     estado_hab: estado
//   });
// }

// function writeServiciosData(nombreserv, descripcionserv, imagenserv, horarioaten, valorser) {
//   firebase.database().ref('Hotel/Servicios' + userId).set({
//     nombre_serv: nombreserv,
//     descripcion_serv: descripcionserv,
//     Fotografias_serv: imagenserv,
//     horario_atencion: horarioaten,
//     valor_serv: valorser
//   });
// }

// function getServiciosData(nombreserv, descripcionserv, imagenserv, horarioaten, valorser) {
//   firebase.database().ref('Hotel/Servicios' + userId).get({
//     nombre_serv: nombreserv,
//     descripcion_serv: descripcionserv,
//     Fotografias_serv: imagenserv,
//     horario_atencion: horarioaten,
//     valor_serv: valorser
//   });
// }

// function writeGaleriaData(fotoshot) {
//   firebase.database().ref('Hotel/Servicios' + userId).set({
//     fotos_hot: fotoshot,
//   });
// }

// function getGaleriaData(fotoshot) {
//   firebase.database().ref('Hotel/Servicios' + userId).get({
//     fotos_hot: fotoshot,
//   });
// }

// function writeResevacionesData(fechain, fechafi) {
//   firebase.database().ref('Hotel/Reservaciones' + userId).set({
//     fecha_in: fechain,
//     fecha_fin: fechafi
//   });
// }

// function getResevacionesData(fechain, fechafi) {
//   firebase.database().ref('Hotel/Reservaciones' + userId).get({
//     fecha_in: fechain,
//     fecha_fin: fechafi
//   });
// }

// function writeClientesData(dnicli, nomcli, telecli, corcli) {
//   firebase.database().ref('Hotel/Reservaciones/Clientes' + userId).set({
//     dni_cli: dnicli,
//     nombre_cli: nomcli,
//     telefono_cli: telecli,
//     correo_cli: corcli
//   });
// }

// function getReserva_habitacionesData(tipohabr, capacihabr, valorhabr, fotosr, estadohabr) {
//   firebase.database().ref('Hotel/Reservaciones/habitaciones' + userId).get({
//     tipo_hab_r: tipohabr,
//     capacidad_habitacion_r: capacihabr,
//     valor_hab_r: valorhabr,
//     fotos_hab_r: fotosr,
//     estado_hab_r: estadohabr
//   });
// }

function writePerfilData(nombreper, apellper, telper, correoper) {
  const $formLogin = document.querySelector('#form-login')
  const formData = new FormData($formLogin)
  var dniper = formData.get('dni');
  firebase.database().ref('Hotel/Perfiles' + dniper).set({
    nombre_perf: nombreper,
    apellido_perf: apellper,
    telefono_perf: telper,
    correo_perf: correoper,
  });
}

// function getPerfilData(dniper, nombreper, apellper, telper, fechnac, dirper, correoper, fotoper, tipousuario) {
//   firebase.database().ref('Hotel/Perfiles' + userId).get({
//     dni_perf: dniper,
//     nombre_perf: nombreper,
//     apellido_perf: apellper,
//     telefono_perf: telper,
//     fecha_nacimiento: fechnac,
//     direccion_perf: dirper,
//     correo_perf: correoper,
//     foto_perf: fotoper,
//     tipo_usuario: tipousuario,
//   });
// }