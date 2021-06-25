const videoContent = document.getElementById('video')
const button = document.getElementById('button')
 async function selectMedia(){
     try {
         const mediaStream = await navigator.mediaDevices.getDisplayMedia()
         videoContent.srcObject = mediaStream
         videoContent.onloadeddata=()=>{
             videoContent.play()
         }
     } catch (error) {
         
     }
 }
button.addEventListener('click', async () =>{
    button.disabled = true
    videoContent.requestPictureInPicture();
    button.disabled= false
})
 selectMedia();