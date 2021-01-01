import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import ModalButtons from '../ModalButtons/ModalButtons';
import Table from '../Table/Table';
import { fetchContacts } from '../../redux/actions/contacts';
import CustomModal from '../CustomModal/CustomModal';
import { nextPageSelector } from '../../redux/selectors/contact';

function Contacts() {
  const nextPage = useSelector(nextPageSelector);
  const [evenIdsOnly, setEvenIdsOnly] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentDefaultCompany = 171;

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);

    dispatch(fetchContacts(currentDefaultCompany, nextPage, searchParam.get('countryId')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location]);

  const toggleEven = () => {
    setEvenIdsOnly(!evenIdsOnly);
  };

  return (
    <CustomModal size='large'>
      <Table
        nextPage={nextPage}
        evenIdsOnly={evenIdsOnly}
        currentDefaultCompany={currentDefaultCompany}
      />
      <ModalButtons toggleEven={toggleEven} />
    </CustomModal>
  );
}

export default Contacts;
