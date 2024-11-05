import "../../assets/contacts.json";
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => onDelete(contact.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
