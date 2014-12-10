var disp = document.querySelector('#deviceready');

function deviceReady(){
    
    disp.innerHTML = 'Device is ready';
    disp.innerHTML += '<br>Waiting for Accelerometer'+navigator.accelerometer;
    
    var options = { frequency: 500 };
    
    navigator.accelerometer.watchAcceleration(accSuccess, accError, options);
}

function accSuccess(acc){
    var str = 'Acceleration X : ' + acc.x + '<br>' +
          'Acceleration Y : ' + acc.y + '<br>' +
          'Acceleration Z : ' + acc.z + '<br>';
    disp.innerHTML = str;
}

function accError(acc){
    disp.innerHTML = 'Accelometer not working';
}

