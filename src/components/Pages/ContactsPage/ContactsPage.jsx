import { Form } from 'components/Form/Form';
import css from './ContactsPage.module.css';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/loader';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContactValue, getIsLoading } from 'store/contactsSlice';

const ContactsPage = () => {
  const contactIsLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContactValue);

  return (
    <div>
      <div className={css.phonebookWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <Form />
      </div>
      <div className={css.contactsWrapper}>
        <h2 className={css.title}>Contacts</h2>
        {contacts !== null && <Filter />}
        {contactIsLoading && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};
export default ContactsPage;
