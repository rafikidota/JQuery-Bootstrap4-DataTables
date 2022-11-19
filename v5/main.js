$(document).ready(function () {
    $("#myTable").DataTable({
        dom: "Bfrtip",
        buttons: {
            dom: {
                button: {
                    className: 'btn'
                }
            },
            buttons: [
                {
                    extend: "excel",
                    text: 'Excel',
                    className: 'btn btn-outline-success',

                    excelStyles: {
                        //template: "header_blue",  // Apply the 'header_blue' template part (white font on a blue background in the header/footer)
                    }
                }
            ]
        }
    });
});