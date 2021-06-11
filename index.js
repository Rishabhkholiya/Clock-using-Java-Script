
setInterval(() => {


    var d = new Date();


    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    document.getElementById('time').innerHTML = time;
    document.getElementById('Date').innerHTML = d.toDateString();
}, 1000);