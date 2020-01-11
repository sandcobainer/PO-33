function loadApp() {
    document.getElementById('app').innerHTML='<object type="text/html" data="/app.html"></object>';
}

function loadTips() {
    document.getElementById('tips').innerHTML='<object type="text/html" data="/tips.html"></object>';
}

loadTips();
loadApp();