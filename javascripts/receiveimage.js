var ImageReceiver = (function() {
    Quiet.setProfilesPrefix("javascripts/");
    Quiet.setMemoryInitializerPrefix("javascripts/");
    Quiet.setLibfecPrefix("javascripts/");
    var target;
    var content = "";

    function onReceive(recvPayload) {
        content += recvPayload;
        target.innerHTML = "<img src='" + content + "'>";
    };

    function onQuietReady() {
        var profilename = document.querySelector('[data-quiet-profile-name]').getAttribute('data-quiet-profile-name');
        Quiet.receiver(profilename, onReceive);
    };

    function onDOMLoad() {
        var host = "brian-armstrong.github.io";
        if ((host == window.location.host) && (window.location.protocol != "https:"))
            window.location.protocol = "https";

        target = document.querySelector('[data-quiet-receive-image-target]');
        Quiet.addReadyCallback(onQuietReady);
    };

    document.addEventListener("DOMContentLoaded", onDOMLoad);
})();