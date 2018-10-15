const Plugin = ({ id, onSendData }) => {
  const handleFiles = (files) => {
    alert(files);
    console.log(files);
    // onSendData({ 
    //   type: 'text',
    //   text: `Selected ${e.target.value} date-time`,
    //   data: { date: e.target.value, messageId: id }
    // })
  }


  return (
      <div>
       <input type="file" id="input" onChange={ (e) => handleFiles(e.target.files) } />
      </div>
    )
}

const Entry = () => null // Could be used for initialization

if (typeof window !== 'undefined') {
  window.botpress = window.botpress || {}
  window.botpress['botpress-webchat-plugin-file-uploader'] = { Plugin, Entry }
}
