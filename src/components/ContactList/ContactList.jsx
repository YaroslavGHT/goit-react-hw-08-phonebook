import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetContacts, apiDeleteContact } from '../../redux/contactSlice/contactSlice.js';
import {selectContactsFilter} from '../../redux/filterSlice/filter.selector.js'
import css from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(apiGetContacts())
    }, [dispatch]);
   
    const handleDeleteContact = contactId => {
        dispatch(apiDeleteContact(contactId))
    };

    const visibleContacts = useSelector(selectContactsFilter);

    return (
        <ul className={css.listContscts}>
          {visibleContacts !== null && visibleContacts !== undefined && visibleContacts.map(contact => 
            <li key={contact.id}>
                <p>
                    <span className={css.contactName}>{contact.name}</span>
                    <span className={css.contactNumber}>{contact.number}</span>
                    <button className={css.contactDelete} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                </p>
            </li>)}
        </ul>
  );
};

export {ContactList};

