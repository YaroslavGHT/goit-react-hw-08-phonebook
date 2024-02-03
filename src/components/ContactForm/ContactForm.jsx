import css from './ContactForm.module.css'
import { useDispatch } from 'react-redux'
import { apiAddContact } from '../../redux/contactSlice/contactSlice.js';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const phone = event.currentTarget.elements.phone.value;

    const newContact = {
      name,
      phone
    };
    dispatch(apiAddContact(newContact))
  };

  return (
    <div className={css.formAdd}>
        <form onSubmit={handleFormSubmit} className={css.form}>
          <h3 className={css.titleForm}>Name</h3>
          <input className={css.inputNum} type="text" name="name" required placeholder='Entered name'/>
          <h3 className={css.titleForm}>Number</h3>
          <input className={css.inputNum} type="tel" name="phone" required placeholder='Entered number'/>
          <button className={css.buttonAdd} type='submit'>Add contact</button>
        </form>
      </div> 
  );
};

export { ContactForm };
       