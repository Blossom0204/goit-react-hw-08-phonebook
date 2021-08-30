import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../redux/contacts/contacts-selectors'
import { addContact } from '../../redux/contacts/contacts-operation'
import { Form, Label, Input, Button } from './ContactForm.styles'

export default function ContactForm() {
  const dispatch = useDispatch()
  const state = useSelector(getContacts)

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const findContact = state.find((contact) => contact.name.includes(name))
    if (findContact) {
      return
    }
    dispatch(addContact({ name, number }))
    resetForm()
  }
  const resetForm = () => {
    setName('')
    setNumber('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Enter name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          autoComplete="off"
          placeholder="Enter number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <Button type="submit" disabled={!name || !number}>
        Add contact
      </Button>
    </Form>
  )
}
