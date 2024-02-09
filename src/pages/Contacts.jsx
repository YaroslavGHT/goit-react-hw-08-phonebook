import React from 'react'
import { ContactForm } from '../components/ContactForm/ContactForm.jsx'
import { Filter } from '../components/Filter/Filter.jsx'
import { ContactList } from '../components/ContactList/ContactList.jsx'
import css from '../App.module.css'

const Contacts = () => {
  return (
    <div>
        <h2 className={css.title}>Phonebook</h2>
        <div className={css.form}>
            <ContactForm/>
        </div>
        <h2 className={css.title}>Contacts</h2>
        <div className={css.formFilter}>
            <Filter/>
        </div>
        <div className={css.listContact}>
            <ContactList/>
        </div>  
    </div>
  )
}

export default Contacts