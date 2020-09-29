let on = document. getElementById('on');
let off = document. getElementById('off');


let context = new AudioContext();
console.log(context);

let oscillator = context.createOscillator();
oscillator.type = "triangle";
oscillator.frequency.value = 450;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(context.destination);

let oscillatorStarter = false;

on.addEventListener("click",()=>{

if(oscillatorStarter==false){

  oscillator.start(0);
  console.log("on");
  oscillatorStarter = true;
}
  gain.gain.value=1;
})


off.addEventListener("click",()=>{

  gain.gain.value=0;

})
