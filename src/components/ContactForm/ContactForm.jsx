import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { apiAddContact } from '../../redux/contactSlice/contactSlice.js';
import { selectContacts } from '../../redux/contactSlice/contact.selectors.js'

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const handleFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const newContact = {name, number};
    const checkDuplication = contacts ? contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) : false; 

    if (checkDuplication) {
        alert(`${newContact.name} is alredy in contscts`);
        return;
      }
      dispatch(apiAddContact(newContact))
  };

  return (
    <div className={css.formAdd}>
        <h2 className={css.title}>Phonebook</h2>
        <form onSubmit={handleFormSubmit} className={css.form}>
          <h3 className={css.titleForm}>Name</h3>
          <input className={css.inputNum} type="text" name="name" required placeholder='Entered name'/>
          <h3 className={css.titleForm}>Number</h3>
          <input className={css.inputNum} type="tel" name="number" required placeholder='Entered number'/>
          <button className={css.buttonAdd} type='submit'>Add contact</button>
        </form>
      </div> 
  );
};

export { ContactForm };
       