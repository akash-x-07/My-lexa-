let btn=document.querySelector("#btn")
let content=document.querySelector("content")

function speak(text){
  let text_speak=new speechsynthesisutterance(text) 
  text_speak.rate=1
  text_speak.pitch=1
  text_speak.volume=1
  text_speak.lang="hi.GB"
  window.speechSynthesis.speak (text_speak)
}
function wishMe(){
  let day=new Date()
  let hours=day.getHours()
  if(hours>=0 && hours <12){
    speak("Good Morning Sir ")
  }
  else if (hours>12 && hours <16) {
    speak("Good Afternoon Sir")
  }else{
    speak("Good Evening Sir")
  }
  }
  window.addEventListener('load',()=>{
    wishMe()
  })
  let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition=SpeechRecognition()
  recognition.onresult=(event)=>{
    
    let current index=event.resultindex
    let transcript=event.results[current index][0].transcript content.innertext=transcript
    take command (transcript)
  }