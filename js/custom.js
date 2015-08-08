$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});


$('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    ready: function () {
        $('.yvid1').append('<iframe width="853" height="480" src="//www.youtube.com/embed/zyzQu8yueSs?rel=0;autohide=1;autoplay=1" frameborder="0" allowfullscreen></iframe>');
        $('.yvid2').append('<iframe width="853" height="480" src="//www.youtube.com/embed/MX5DMg7Y1zk?rel=0;autohide=1;autoplay=1" frameborder="0" allowfullscreen></iframe>');

    },
    complete: function () { $('.yvid1').empty(); $('.yvid2').empty(); } // Callback for Modal close
});