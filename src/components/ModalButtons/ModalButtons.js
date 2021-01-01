import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearContacts } from '../../redux/actions/contacts';

function ModalButtons(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { toggleEven } = props;

  const handleClick = countryId => {
    let routePath = '/contacts';

    if (countryId) {
      routePath = `${routePath}?countryId=${countryId}`;
    }
    dispatch(clearContacts());
    navigate(routePath);
  };

  const handleClose = () => {
    dispatch(clearContacts());
    navigate('/');
  };

  return (
    <div>
      <span className='m-2'>
        <input type='checkbox' className='m-2' onClick={toggleEven} />
        Only even
      </span>
      <button className='btn button-a' onClick={() => handleClick()}>
        All Contacts
      </button>
      <button className='btn button-b' onClick={() => handleClick(226)}>
        US Contacts
      </button>
      <button className='btn button-c' onClick={() => handleClose()}>
        Close
      </button>
    </div>
  );
}

export default ModalButtons;
