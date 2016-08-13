$(document).ready(function () {
    $('#btn-trigger').on('click', function () {
        $('#front').toggleClass('flipped-1-1');
        $('#fold-1').toggleClass('flipped-1-2');
        $('#half-fold-1-front').toggleClass('flipped-2-1');
        $('#half-fold-1-back').toggleClass('flipped-2-2');
        $('#half-fold-2-front').toggleClass('flipped-3-1');
        $('#half-fold-2-back').toggleClass('flipped-3-2');
    });
});