var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function callClicked() {
    var id = $("peerID").text();
    console.log("Making call with id: ", id);
    getUserMedia({
        video: true,
        audio: true
    }, function (stream) {
        var call = peer.call(id, stream);
        call.on('stream', function (remoteStream) {
            console.log("streaming initialised");
        });
    }, function (err) {
        console.log('heck', err);
    });
}

function answerClicked() {
    var id = $("peerID").text();
    console.log("Answering call with id: ", id);
    peer.on('call', function (call) {
        getUserMedia({
            video: true,
            audio: true
        }, function (stream) {
            call.answer(id);
            call.on('stream', function (remoteStream) {
                // ahhhh more thing i dont know how do ;*(
            });
        }, function (err) {
            console.log('heking fik', err);
        });
    });
}
