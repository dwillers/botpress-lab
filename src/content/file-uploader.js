module.exports = {
  id: 'file-uploader',
  title: 'File Uploader',
  renderer: '#file-uploader',

  jsonSchema: {
    title: 'A simple file uploader',
    description: 'A simple file uploader',
    type: 'object',
    required: ['title', 'required'],
    properties: {
      title: {
        type: 'string',
        title: 'Document title'
      },
      required: {
        type: 'boolean',
        title: 'Document is required?'
      },
      typing: {
        type: 'boolean',
        title: 'Show typing indicators',
        default: true
      }
    }
  },

  uiSchema: {
    variations: {
      'ui:options': {
        orderable: false
      }
    }
  },

  computeMetadata: null
}
