function Enviar(accion,id){
    if(id===null){
        id=$('#hidIdPagoDia').val();
    }
    var parametros = {
        "idPagoDia" : id,
        "idEmpleado" : $('#hidIdEmpleado').val(),
        "pagoDia" : $('#numPagoDia').val(),
        "fechaPago" : $('#datFechaPago').val(),       
        "estado" : $('#cmbEstado').val(),
        "accion" : accion
    }; 

    $.ajax({
            data: parametros, //datos que se van a enviar al ajax
            url: '../../controlador/nomina/pagoDia.C.php', //archivo php que recibe los datos
            type: 'post', //método para enviar los datos
            dataType: 'json',//Recibe el array desde php
           
            success:  function (respuesta) { //procesa y devuelve la respuesta
                // console.log(respuesta); 

                //Reiniciar datatable
                $("#tableDatos").dataTable().fnDestroy();
                
                //Respueta adicionar
                if(respuesta['accion']=='ADICIONAR'){
                    alert(respuesta['respuesta']);
                    Limpiar();
                    $("#btnBuscar").trigger("click");
                }
                
                //Respuesta muchos registros
                if(respuesta['accion']=='CONSULTAR' && respuesta['numeroRegistros']>1){
                    $("#resultado").html(respuesta['tablaRegistro']);
                    
                    //Código para DataTable

                //Para inicializar datatable de la manera más simple

                    $(document).ready(function() {    
                        $('#tableDatos').DataTable({
                        //para cambiar el lenguaje a español
                            "language": {
                                    "lengthMenu": "Mostrar _MENU_ registros",
                                    "zeroRecords": "No se encontraron resultados",
                                    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                                    "sSearch": "Buscar:",
                                    "oPaginate": {
                                    "sFirst": "Primero",
                                    "sLast":"Último",
                                    "sNext":"Siguiente",
                                    "sPrevious": "Anterior"
                                    },
                                    "sProcessing":"Procesando...",
                                },
                                "paging":   false
                        });     
                    });
                    //$('#divEliminar').html(respuesta['eliminar']).hide();
                }

                //Respuesta un registro
                if(respuesta['accion']=='CONSULTAR'){
                    $('#hidIdPagoDia').val(respuesta['idPagoDia']);
                    $('#hidIdEmpleado').val(respuesta['idEmpleado']);
                    $('#txtEmpleado').val(respuesta['nombre']);
                    $('#numPagoDia').val(respuesta['pagoDia']);
                    $('#datFechaPago').val(respuesta['fechaPago']);
                    $('#cmbEstado').val(respuesta['estado']);
                    $('#divEliminar').html(respuesta['eliminar']);
                    $('#txtEmpleado').focus();
                }

                //Respuesta modificar
                if(respuesta['accion']=='MODIFICAR'){
                    alert(respuesta['respuesta']);
                    Limpiar();
                    $("#btnBuscar").trigger("click");
                }
                
                //Respuesta eliminar
                if(respuesta['accion']=='ELIMINAR'){
                    alert(respuesta['respuesta']);
                    Limpiar();
                    $("#btnBuscar").trigger("click");
                }
            }
    });
}

function Limpiar(){
    $('#hidIdPagoDia').val("");
    $('#hidIdEmpleado').val("");
    $('#txtEmpleado').val("");   
    $('#numPagoDia').val("");  
    $('#datFechaPago').val("");
    $('#cmbEstado').val(""); 
}

$(function(){
    //se carga el autocompleta
     $("#txtEmpleado").autocomplete({
        source:'../../busqueda/nomina/empleadoPagoDia.B.php',
        select:function(event, ui){
            $("#hidIdEmpleado").val(ui.item.id);
        }
     });
});

// $(function(){
//     $("#numPagoDia").on({
//         "focus": function (event) {
//             $(event.target).select();
//         },
//         "keyup": function (event) {
//             $(event.target).val(function (index, value ) {
//                 return value.replace(/\D/g, "")
//                             .replace(/([0-9])([0-9]{2})$/, '$1.$2')
//                             .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
//             });
//         }
//     });
// });
