


let mediaRecorder;
let audioBlob;
let audioChunks = [];
var recordingStart=false;
var audioRecorded=false;
var audioPreview=new Audio();


function recordAction(){
    if(recordingStart==false){
        recordBtn.style.background="green";
        recordingStart=true;
        audioTitleTxt.innerHTML="...RECORDING...";
        startRecording();

        if(audioRecorded==true){
            announceBtn.disabled = false;
            announceBtn.style.opacity=0.5;
        }
    }else{
        stopRecording();
        recordBtn.style.background = "red";
        recordingStart=false;
        audioRecorded=true;
        
    }
}




function startRecording() {//-------------------------------------------------start recording button action
    navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = function (e) {
                if (e.data.size > 0) {
                    audioChunks.push(e.data);
                }
            };
            mediaRecorder.onstop = function () {
                audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                audioChunks = [];
                // Create an Audio element
                audioPreview.src= URL.createObjectURL(audioBlob); // Replace with your audio file's path
                audioPreview.load();

                audioPreview.addEventListener('loadedmetadata',()=>{
                    audioPreview.play();
                    snailAnim();
                    
                });

                

                    
                
            };
            mediaRecorder.start();
        })
        .catch(function (err) {
            console.error('Error accessing microphone:', err);
        });
}




function stopRecording() {//-------------------------------------------------audo stop button action
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
    }
}

function snailAnim() {
var audioDuration=audioPreview.duration;
var currentTime=audioPreview.currentTime;

//console.log("audio duration:"+audioDuration+".........current time:"+currentTime);

var percentageComplete=100-Math.floor(((audioDuration-currentTime)/audioDuration)*100);

   // console.log("snail walk:"+percentageComplete);

   
if(currentTime<audioDuration){
    requestAnimationFrame(snailAnim);
    audioTitleTxt.innerHTML="...PLAYING...";
}else if(currentTime==audioDuration){
    audioTitleTxt.innerHTML="READY TO ANNOUNCE";
    announceBtn.disabled = false;
    announceBtn.style.opacity=1;
}
};

function uploadAudio() {//-------------------------------------------------upload audio button action
    if (audioPreview.src) {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recorded.html');
        audioTitleTxt.innerHTML="...ANNOUNCING...";

        fetch('php/uploadVoiceAnnouncement.html', {
            method: 'POST',
            body: formData
        })
            .then(function (response) {
                if (response.ok) {
                    audioTitleTxt.innerHTML="ANNOUNCED SUCCESSFULLY";
                    setTimeout(()=>{
                        audioTitleTxt.innerHTML="VOICE ANNOUNCEMENT";
                        announceBtn.disabled=true;
                        announceBtn.style.opacity=0.5;
                    },3000);
                } else {
                    audioTitleTxt.innerHTML="FAILED";
                    setTimeout(()=>{
                        audioTitleTxt.innerHTML="VOICE ANNOUNCEMENT";
                    },3000);
                }
            })
            .catch(function (error) {
                console.error('Error uploading audio:', error);
            });
    }
}




