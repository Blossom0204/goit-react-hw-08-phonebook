import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchContact,
  deleteContact,
} from '../../redux/contacts/contacts-operation'
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors'
import {
  ContactsList,
  ContactListItem,
  ContactListText,
  BtnDel,
} from './ContactList.styles'

export default function ContactList() {
  const dispatch = useDispatch()
  const contacts = useSelector(getVisibleContacts)

  const onDeleteContact = (id) => dispatch(deleteContact(id))

  useEffect(() => {
    dispatch(fetchContact())
  }, [dispatch])

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>
            {name}:&nbsp;{number}
          </ContactListText>
          <BtnDel onClick={() => onDeleteContact(id)}>Delete</BtnDel>
        </ContactListItem>
      ))}
    </ContactsList>
  )
}
