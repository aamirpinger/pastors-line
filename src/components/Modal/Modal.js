import React from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';

function Modal() {
  return (
    <div
      className='modal fade bd-example-modal-lg'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myLargeModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}

export default Modal;
