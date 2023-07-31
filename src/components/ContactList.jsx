import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './App.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <ListItem key={contact.id}>
        <ContactName>{contact.name}:</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
        <DeleteButton onClick={() => onDeleteContact(contact.id)}>
          Delete
        </DeleteButton>
      </ListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
