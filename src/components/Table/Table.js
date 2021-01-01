import React, { useCallback, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Loading from '../Loading/Loading';
import ContactDetails from '../ContactDetails/ContactDetails';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchContacts } from '../../redux/actions/contacts';
import _ from 'lodash';
import {
  eventNoContactIds,
  nextPageSelector,
  contactsIdsSelector,
  contactsSelector,
} from '../../redux/selectors/contact';
import { loadingDataSelector } from '../../redux/selectors/loader';

function Table(props) {
  const { evenIdsOnly, currentDefaultCompany } = props;
  const dispatch = useDispatch();

  const nextPage = useSelector(nextPageSelector);
  const contactsIds = useSelector(evenIdsOnly ? eventNoContactIds : contactsIdsSelector);
  const contacts = useSelector(contactsSelector);
  const loading = useSelector(loadingDataSelector);
  const location = useLocation();

  const [selectedContact, setSelectedContact] = useState(false);
  const [searchText, setSearchText] = useState('');

  const search = (value, _nextPage = 1) => {
    const searchParam = new URLSearchParams(location.search);

    return dispatch(
      fetchContacts(currentDefaultCompany, _nextPage, searchParam.get('countryId'), value)
    );
  };

  const onScroll = () => search(searchText, nextPage + 1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    _.debounce(e => search(e), 500),
    []
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    _.debounce(e => onScroll(e), 500),
    [nextPage]
  );
  const _handleSearchText = ({ currentTarget: { value } }) => {
    setSearchText(value);
    handleSearch(value);
  };

  const _handleSubmitForm = e => {
    e.preventDefault();
    search(searchText);
  };

  const _handleScroll = ({ top }) => {
    if (top > 0.99) handleScroll(top);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className='p-2 text-right'>
        <form onSubmit={_handleSubmitForm}>
          <label>
            Search:
            <input
              className='ml-2'
              type='text'
              placeholder='Search...'
              value={searchText}
              onChange={_handleSearchText}
            />
          </label>
        </form>
      </div>
      <Scrollbars autoHeight autoHeightMin={'70vh'} onScrollFrame={_handleScroll}>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Country Id</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {contactsIds?.length &&
                contactsIds.map((contactsId, index) => (
                  <tr key={index} onClick={e => setSelectedContact(contacts[contactsId])}>
                    <td>{contactsId}</td>
                    <td>{contacts[contactsId].first_name}</td>
                    <td>{contacts[contactsId].last_name}</td>
                    <td>{contacts[contactsId].email}</td>
                    <td>{contacts[contactsId].phone_number}</td>
                    <td>{contacts[contactsId].country_id}</td>
                    <td>{contacts[contactsId].comment}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Scrollbars>
      {selectedContact && (
        <ContactDetails details={selectedContact} onDismiss={() => setSelectedContact(null)} />
      )}
    </>
  );
}

export default Table;
