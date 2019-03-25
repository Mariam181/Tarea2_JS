function dce(e) {
  return document.createElement(e);
}

function createColumn(nombre, fila, valor) {
  td = dce('td');
  let input = dce('input');
  input.type='text';
  input.setAttribute('name', 'txt_'+nombre);
  input.setAttribute('id', 'txt_'+ nombre+'_'+fila);
  input.value = valor;
  input.style.border='none';
  td.appendChild(input);
  return td;
}




function newRow(){
  addRow(['','','','','','','','','','','','','','','','']);
}

let n_fila=0;

function addRow(dato) {
  let destino=document.getElementById('tableBody');
  let tr=dce('tr');
  tr.appendChild(createColumn('0',n_fila, dato[0]));
  tr.appendChild(createColumn('a',n_fila, dato[1]));
  tr.appendChild(createColumn('b',n_fila, dato[2]));
  tr.appendChild(createColumn('c',n_fila, dato[3]));
  tr.appendChild(createColumn('d',n_fila, dato[4]));
  tr.appendChild(createColumn('e',n_fila, dato[5]));
  tr.appendChild(createColumn('f',n_fila, dato[6]));
  tr.appendChild(createColumn('g',n_fila, dato[7]));
  tr.appendChild(createColumn('h',n_fila, dato[8]));
  tr.appendChild(createColumn('i',n_fila, dato[9]));
  tr.appendChild(createColumn('j',n_fila, dato[10]));
  tr.appendChild(createColumn('k',n_fila, dato[11]));
  tr.appendChild(createColumn('l',n_fila, dato[12]));
  tr.appendChild(createColumn('m',n_fila, dato[13]));
  tr.appendChild(createColumn('n',n_fila, dato[14]));
  tr.appendChild(createColumn('o',n_fila, dato[15]));

  btn=dce('button');
  btn.type='button';
  btn.innerHTML='X';
  btn.setAttribute('onclick', 'removeRow(this)');
  td=dce('td');
  td.appendChild(btn);
  tr.appendChild(td);

  destino.appendChild(tr);
  n_fila++;
}

function removeRow(btn) {
  fila=btn.parentNode.parentNode;
  fila.parentNode.removeChild(fila);
}

function save() {
  datos=[];
  datos_0=document.getElementsByName('txt_0');
  datos_a=document.getElementsByName('txt_a');
  datos_b=document.getElementsByName('txt_b');
  datos_c=document.getElementsByName('txt_c');
  datos_d=document.getElementsByName('txt_d');
  datos_e=document.getElementsByName('txt_e');
  datos_f=document.getElementsByName('txt_f');
  datos_g=document.getElementsByName('txt_g');
  datos_h=document.getElementsByName('txt_h');
  datos_i=document.getElementsByName('txt_i');
  datos_j=document.getElementsByName('txt_j');
  datos_k=document.getElementsByName('txt_k');
  datos_l=document.getElementsByName('txt_l');
  datos_m=document.getElementsByName('txt_m');
  datos_n=document.getElementsByName('txt_n');
  datos_o=document.getElementsByName('txt_o');

  for(x=0; x < datos_a.length; x++){
    datos [datos.length] = [datos_0[x].value, datos_a[x].value, datos_b[x].value, datos_c[x].value, datos_d[x].value, datos_e[x].value,datos_f[x].value, datos_g[x].value, datos_h[x].value, datos_i[x].value, datos_j[x].value, datos_k[x].value, datos_l[x].value, datos_m[x].value, datos_n[x].value, datos_o[x].value];
  }
  cadena=JSON.stringify(datos);
  window.localStorage.setItem('datos_tabla',cadena);
}

if(window.localStorage.getItem('datos_tabla')) {
  cadena = window.localStorage.getItem('datos_tabla');
  datos = JSON.parse(cadena);
  for(x=0; x < datos.length; x++){
    dato = datos[x];
    addRow(dato);
  }
}


