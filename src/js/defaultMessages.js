import { defineMessages } from 'react-intl';

//
// Default messages are 'en-US'
//
export const messages = defineMessages({
  initiatingButtonText : {
    id             : 'initiatingButtonText',
    description    : 'text in initiating button',
    defaultMessage : 'Open Editor'
  },
  modalSaveButtonText : {
    id             : 'saveButtonText',
    description    : 'text in save button',
    defaultMessage : 'Standard'
  },
  modalCancelButtonText : {
    id             : 'cancelButtonText',
    description    : 'text in cancel button',
    defaultMessage : 'Standard'
  },
  headerTitle : {
    id             : 'headerTitle',
    description    : 'text in header title',
    defaultMessage : 'Edit Photo'
  },
  bodyText : {
    id             : 'bodyText',
    description    : 'text in body of modal',
    defaultMessage : 'Nice Photo! Now use the photo editing tool to add that final touch.'
  }
});
