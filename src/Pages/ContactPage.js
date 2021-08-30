import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container/Container'
import ContactForm from '../components/ContactFrom/ContactForm'
import ContactList from '../components/ContactList/ContactList'
import Filter from '../components/Filter/Filter'
import { getLoading } from '../redux/contacts/contacts-selectors'
import { ContactTitle } from './ContactPage.styles'

export default function ContactsPage() {
  const loading = useSelector(getLoading)
  return (
    <Container title="Phonebook">
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
      {loading}
    </Container>
  )
}
