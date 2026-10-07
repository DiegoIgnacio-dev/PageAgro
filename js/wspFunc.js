function setServicio(val){
  document.getElementById('servicio').value = val;
  document.getElementById('cotizar').scrollIntoView({behavior:'smooth'});
}
function cotizar(){
  let serv = document.getElementById('servicio').value;
  let ha = document.getElementById('hectareas').value;
  let sec = document.getElementById('sector').value;
  let det = document.getElementById('detalle').value;
  let msg = `Hola AgroServicios San Pablo, quiero cotizar:\n\n- Servicio: ${serv}\n- Hectáreas: ${ha}\n- Sector: ${sec}\n- Detalle: ${det}\n\nQuedo atento.`;
  window.open("https://wa.me/569XXXXXXXX?text=" + encodeURIComponent(msg), "_blank");
}