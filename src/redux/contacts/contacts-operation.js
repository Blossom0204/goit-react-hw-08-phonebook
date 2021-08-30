import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../services/contactsapi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchContacts()
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = { name, number }
      const { data } = await fetchAddContact(newContact)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id)
      return id
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
