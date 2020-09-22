$(function () {
    $("[data-toggle='tooltip']").tooltip()
    $("[data-toggle='popover']").popover()
    $('.carousel').carousel({
        interval: 5000
    })
})

$('#ofertas').on('show.bs.modal', function(e) {
    console.log('El modal contacto se está mostrando')
    $('#btnOfertas').removeClass('btn-info');
    $('#btnOfertas').addClass('btn-danger');
    $('#btnOfertas').prop('disabled', true);
    
});

$('#ofertas').on('shown.bs.modal', function (e) {
    console.log('El modal contacto se mostró')
});
$('#ofertas').on('hide.bs.modal', function (e) {
    console.log('El modal contacto se oculta')
    $('#btnOfertas').removeClass('btn-danger');
    $('#btnOfertas').addClass('btn-info');
});
$('#ofertas').on('hidden.bs.modal', function (e) {
    console.log('El modal contacto se ocultó')
    $('#btnOfertas').prop('disabled', false);
});