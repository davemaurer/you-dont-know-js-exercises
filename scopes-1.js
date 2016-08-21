var global = "global";

function a() {
  var global = "override";
}

a();

console.log('from after function a() execution: ' + global);
