var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}


Webcam.set({
    width:500,
    height:400,
    image_format : 'jpg',
    jpg_quality:90
});
camera = document.getElementById("camera");

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log(speak_data);
        speak();
    }
}
function speak() {

    
    var synth = window.speechSynthesis;
    Webcam.attach('#camera');


    setTimeout(function(){
        img_id = "img1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function(){
        img_id = "img2";
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function(){
        img_id = "img3";
        take_snapshot();
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
}

function take_snapshot() {
    
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if (img_id == "img1") {
            document.getElementById("result1").innerHTML = '<img id="img1" src="' + data_uri + '"/>';
        if (img_id == "img2") {
            document.getElementById("result2").innerHTML = '<img id="img2" src="' + data_uri + '"/>';
        }
        if (img_id == "img3") {
            document.getElementById("result3").innerHTML = '<img id="img3" src="' + data_uri + '"/>';
        }
            
        }
    }) 
}