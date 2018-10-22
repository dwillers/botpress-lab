module.exports = {
  id: 'file-uploader',
  title: 'File Uploader',
  renderer: '#file-uploader',

  jsonSchema: {
    title: 'New file(s)',
    description: 'Specify files to upload',
    type: 'object',
    required: ['files'],
    definitions: {
      file: {
        type: 'object',
        properties: {
          name: {
            title: 'File Name',
            type: 'string',
            default: ''
          },
          required: {
            title: 'Required',
            type: 'boolean',
            default: false
          }
        },
        required: ['name']
      }
    },
    properties: {
      files: {
        title: 'Files',
        type: 'array',
        items: {
          "$ref": "#/definitions/file"
        }
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