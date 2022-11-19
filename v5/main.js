$(document).ready(function () {
    $("#myTable").DataTable({
        dom: "Bfrtip",
        buttons:{
            dom: {
                button: {
                    className: 'btn'
                }
            },
            buttons: [
            {
                //definimos estilos del boton de excel
                extend: "excel",
                text:'Exportar a Excel',
                className:'btn btn-outline-success',

                // 1 - ejemplo básico - uso de templates pre-definidos
                //definimos los parametros al exportar a excel
                
                excelStyles: {                
                    //template: "header_blue",  // Apply the 'header_blue' template part (white font on a blue background in the header/footer)
                    //template:"green_medium" 
                    
                    "template": [
                        "blue_medium",
                        "header_green",
                        "title_medium"
                    ] 
                    
                },
                

                // 2 - estilos a una fila   
                /* 
                excelStyles: {                      // Add an excelStyles definition
                    cells: "2",                     // adonde se aplicaran los estilos (fila 2)
                    style: {                        // The style block
                        font: {                     // Style the font
                            name: "Arial",          // Font name
                            size: "14",             // Font size
                            color: "FFFFFF",        // Font Color
                            b: true,               // negrita SI
                        },
                        fill: {                     // Estilo de relleno (background)
                            pattern: {              // tipo de rellero (pattern or gradient)
                                color: "ff7961",    // color de fondo de la fila
                            }
                        }
                    }
                },
                */

                // 3 - uso de condiciones
                /*
                 excelStyles: {
                    cells: 'sD', //(s) de Smart - Referencia de celda inteligente, todas las filas de datos en la columna D (en este caso Edad)
                    condition: {                    // Add the style conditionally
                        type: 'cellIs',             // Using the cellIs type
                        operator: 'between',        // Operator a usar "Entre"
                        formula: [35,50],    // arreglo de valores requeridos para el operador 'entre' (edades entre 35 y 50 años son pintadas)
                    },
                    style: {
                        font: {
                            b: true,                // Make the font bold
                        },
                        fill: {                     // Style the cell fill (background)
                            pattern: {              // Type of fill (pattern or gradient)
                                bgColor: 'e8f401',  // Fill color (be aware of the Excel gotcha that conditonal fills                                
                            }
                        }
                    }
                }
                */

                // 4 - Reemplazar o insertar celdas, columnas y filas

                // 4.1 - Añadir columnas
                /*
                insertCells: [                  // Agregar una opción de configuración insertCells
                    {
                        cells: 'sCh',               // la "s" de Smart, "C" es la columna y "h" se refiere al header,
                        content: 'Nueva columna C',    // nombre del encabezado de la columna que insertamos
                        pushCol: true,              // pushCol hace que se inserte la columna
                    },
                    {
                        cells: 'sC1:C-0',           // Target the data
                        content: 'C',                // Add empty content
                        pushCol: true               // empuja las columnas a la derecha para insertar el nuevo contenido
                    }                    
               ],
                excelStyles: {
                    template: 'cyan_medium',    // Add a template to the result
                }
                */

                // 4.2 - Insertar filas
                /*
                insertCells: [                  // Agregar una opción de configuración insertCells                   
                    {
                        cells: 's5:6',              // Inserta los datos en las filas 5 y 6 contando desde el encabezado
                        content: 'Celdas nuevas',   // contenido a insertar
                        pushRow: true               // empuja las filas hacia abajo para insertar el contenido                    
                    },
                    {
                        cells: 'B3',                // Celda B3
                        content: 'Esta es la celda B3', // Simplemente sobreescribimos su contenido                                                    
                    }
               ],
                excelStyles: {
                    template: 'cyan_medium',    // Add a template to the result
                }
                */


            // ejemplo para IMPRIMIR
            /*
            pageStyle: {
                sheetPr: {
                    pageSetUpPr: {
                        fitToPage: 1            // Fit the printing to the page
                    } 
                },
                printOptions: {
                    horizontalCentered: true,
                    verticalCentered: true,
                },
                pageSetup: {
                    orientation: "landscape",   // Orientacion
                    paperSize: "9",             // Tamaño del papel (1 = Legal, 9 = A4)
                    fitToWidth: "1",            // Ajustar al ancho de la página
                    fitToHeight: "0",           // Ajustar al alto de la página
                },
                pageMargins: {
                    left: "0.2",
                    right: "0.2",
                    top: "0.4",
                    bottom: "0.4",
                    header: "0",
                    footer: "0",
                },
                repeatHeading: true,    // Repeat the heading row at the top of each page
                repeatCol: 'A:A',       // Repeat column A (for pages wider than a single printed page)
            },
            excelStyles: {
                template: 'blue_gray_medium',    // Add a template style as well if you like
            }
            */    

            }
            ]            
        }            
    });
});