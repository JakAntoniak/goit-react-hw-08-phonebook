import { useDispatch, useSelector } from 'react-redux';
import css from './Style.module.css';
import { selectContacts } from 'components/Redux/contacts/selectors';
import { addContact } from 'components/Redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleAddContact = e => {
    e.preventDefault();

    const nameInput = document.querySelector('#name').value;
    const numberInput = document.querySelector('#number').value;

    const nameExists = contacts.some(contact => contact.name === nameInput);

    if (nameExists) {
      alert(`${nameInput} is already present in the phonebook`);
      return;
    } else {
      dispatch(addContact({ nameInput, numberInput }));
    }
  };

  return (
    <div className="container" onSubmit={handleAddContact}>
      <form className={css['contact-form']}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[A-Za-z.'\- ]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="tel"
          name="number"
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button}>Add contact</button>
      </form>
    </div>
  );
};
