//import './styles/main.scss';
const axios = require('axios');

const Plugin = ({ id, onSendData }) => {
  const handleFiles = (files) => {
    //overlayOn();
    if (files) {
    // TODO: handle multiple file uploads
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    let fd = new FormData();
    fd.append('file', files[0])  
    axios.post("http://localhost:8099/upload", fd, config)
    .then(function (response) {
      // handle success
      //this.overlayOff();
      console.log(response);
      onSendData({ 
        type: 'text',
        text: `File uploaded successfully!`,
        data: { success: true, fileName: files[0].name, messageId: id }
      })
    })
    .catch(function (error) {
      // handle error
      //overlayOff();
      console.log(error);
      onSendData({ 
        type: 'text',
        text: `Error sending files! Please, try again...`,
        data: { success: false, fileName: files[0].name, messageId: id }
      })
    });
   } 
  }

  const overlayOn = () => {
    document.getElementById("overlay").style.display = "block";
  }

  const overlayOff = () => {
    document.getElementById("overlay").style.display = "none";
  }

  return (
    <div id="container">
        <div id="overlay">
        </div>
        <div>
            <input type="file" id="input" onChange={ (e) => handleFiles(e.target.files) } />        
        </div>
      </div> 
    )
}

const Entry = () => null // Could be used for initialization

if (typeof window !== 'undefined') {
  window.botpress = window.botpress || {}
  window.botpress['botpress-webchat-plugin-file-uploader'] = { Plugin, Entry }
}
