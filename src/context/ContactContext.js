import { useReducer } from "react";
import _ from "lodash";
import createUseContext from "constate";

const initialState = {
  contacts: [
    {
      id: "098",
      name: "Diana Prince",
      email: "diana@us.army.mil"
    },
    {
      id: "099",
      name: "Bruce Wayne",
      email: "bruce@batmail.com"
    },
    {
      id: "100",
      name: "Clark Kent",
      email: "clark@metropolitan.com"
    }
  ],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  console.log(state);
  console.log("_______--------------__________");
  console.log(action);
  switch (action.type) {
    case "ADD_CONTACT":
      //   const store = stat
      //   store.push(action.payload);
      return {
        contacts: [...state.contacts, action.payload]
      };

    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "START":
      return {
        loading: true
      };

    case "COMPLETE":
      return {
        loading: false
      };

    default:
      throw new Error();
  }
};

const useContacts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { contacts, loading } = state;

  const addContact = (name, email) => {
    console.log(name, email);
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name, email }
    });
  };

  const delContact = id => {
    dispatch({
      type: "DEL_CONTACT",
      payload: id
    });
  };

  return { contacts, loading, addContact, delContact };
};

export const useContactsContext = createUseContext(useContacts);
