module.exports = {
  id: 'date-picker',
  title: 'Date Picker',
  renderer: '#date-picker',

  jsonSchema: {
    title: 'A simple date picker',
    description: 'A simple date picker',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'Date'
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

  computePreviewText: formData => formData.text,
  computeMetadata: null
}
