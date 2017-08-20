var l = new Loader();
l.require([
    "example-script-1.js",
    "example-script-2.js"], 
    function() {
        // Callback
        console.log('All Scripts Loaded');
    });
