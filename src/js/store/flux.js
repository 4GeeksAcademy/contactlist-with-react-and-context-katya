const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
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

        if (store.contacts.some((contact) => contact.email === email)) {
          setStore({contactExists: true})
          alert(`${name} is already in your contacts`);
        } else {
          setStore({contactExists: false})
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

      editContact: () => {
        console.log("This will edit a contact");
      },

      deleteContact: (id, index) => {
        const store = getStore();

        setStore({
          contacts: store.contacts.filter((contact, i) => index !== i),
        });

        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
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
