const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      isInSingleView: false,
      loading: true,
      contactExists: false,
      photo:
        "https://img.freepik.com/premium-photo/closeup-portrait-model-with-dramatic-lighting-melancholic-expressions-ai-generated_834670-164.jpg",
    },

    actions: {
      loadSomeData: () => {
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/agenda_katya"
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .then((data) => setStore({ contacts: data, loading: false }))
          .catch((error) => {
            console.log(error);
          });
      },

      addContact: (name, email, phone, address) => {
        const store = getStore();

        if (store.contacts.some((contact) => contact.phone === phone)) {
          setStore({ contactExists: true });
          alert(`${phone} already exists in your contacts`);
          setStore({ contactExists: false });
        } else if (store.contacts.some((contact) => contact.email === email)) {
          setStore({ contactExists: true });
          alert(`${email} already exists in your contacts`);
          setStore({ contactExists: false });
        } else {
          setStore({ contactExists: false });

          fetch("https://playground.4geeks.com/apis/fake/contact/", {
            method: "POST",
            body: JSON.stringify({
              full_name: name,
              email: email,
              agenda_slug: "agenda_katya",
              address: address,
              phone: phone,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw Error(response.status);
              }
              return response.json();
            })
            .then(() => {
              const store = getStore();
              setStore({
                contacts: store.contacts.concat([
                  {
                    full_name: name,
                    email: email,
                    agenda_slug: "agenda_katya",
                    address: address,
                    phone: phone,
                  },
                ]),
              });
              alert(`${name} has been added to your contacts`);
            })
            .catch((error) => console.log(error));
        }
      },

      editContact: (name, email, phone, address, id, navigate) => {
        const actions = getActions();
        const store = getStore();


        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            full_name: name,
            email: email,
            agenda_slug: "agenda_katya",
            address: address,
            phone: phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .then(() => {
            
            setStore({
              full_name: name,
              email: email,
              agenda_slug: "agenda_katya",
              address: address,
              phone: phone,
            });
            actions.loadSomeData();
            alert(`${name} has been updated`);
            navigate();
          })
          .catch((error) => console.log(error));
      },

      openContact: (
        id,
        setInputName,
        setInputEmail,
        setInputPhone,
        setInputAddress
      ) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .then((contact) => {
            setStore({ isInSingleView: true, loading: false });
            setInputName(contact.full_name);
            setInputEmail(contact.email);
            setInputPhone(contact.phone);
            setInputAddress(contact.address);
          })
          .catch((error) => {
            console.log(error);
          });
      },

      changeView: () => {
        setStore({ isInSingleView: false });
      },

      deleteContact: (id, index, navigate) => {
        const store = getStore();
        const actions = getActions();

        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .then(() => {
            setStore({
              contacts: store.contacts.filter((contact, i) => index !== i),
            });
          })
          .catch((error) => console.log(error));

        if (store.isInSingleView) {
          actions.loadSomeData();
          navigate();
        }
      },

      deleteAllContacts: () => {
        const store = getStore();
        setStore({ contacts: [] });
        fetch(
          `https://playground.4geeks.com/apis/fake/contact/agenda/agenda_katya`,
          {
            method: "DELETE",
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.status);
            }
            return response.json();
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
