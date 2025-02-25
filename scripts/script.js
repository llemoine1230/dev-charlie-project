$(document).ready(function () {
    console.log("That button certainly doesn't do anything when clicked");


    $('#easterEgg').hide();
    function showEasterEgg() {
        $('#easterEgg').fadeIn();
        $('#blueLobsterSound')[0].play();
    }
    function hideEasterEgg() {
        $('#easterEgg').fadeOut();
        var audio = $('#blueLobsterSound')[0];
        audio.pause();
        audio.currentTime = 0;
    }


    $('#popUpButton').click(function () {
        showEasterEgg();
    });


    $('#closeButton').click(function () {
        hideEasterEgg();
    });
});
