module.exports = {
    '#file-uploader': data => ({
        on: 'webchat',
        id: 'file1',
        typing: data.typing || true,
        type: '@botpress-webchat-plugin-file-uploader',
        text: 'Please, send me some docs!'
    }),

    '#date-picker': data => [
        {
          on: 'webchat',
          id: 'date-picker1',
          type: '@botpress-webchat-plugin-calendar',
          typing: data.typing || true,
          text: 'Please, pick a date:',
          data: { slots: [2018-01-01, 2018-10-10] }
        }
    ]
}