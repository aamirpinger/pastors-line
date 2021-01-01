import React from 'react';
const CustomModal = ({ children, withoutFade, renderFooter, renderHeader, size = 'small' }) => {
  let modalWidth = '30vw';
  if (size === 'medium') {
    modalWidth = '60vw';
  } else if (size === 'large') {
    modalWidth = '90vw';
  }

  return (
    <>
      {!withoutFade && <div className='modal-backdrop fade show'></div>}
      <div className='modal fade d-block show'>
        <div
          className='modal-dialog modal-dialog-centered  modal-lg'
          role='document'
          style={{ maxWidth: modalWidth }}
        >
          <div className='modal-content'>
            {renderHeader && <div className='modal-header'>{renderHeader()}</div>}
            <div className='modal-body'>{children}</div>
            {renderFooter && <div className='modal-footer'>{renderFooter()}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
