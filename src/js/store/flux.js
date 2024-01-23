const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],

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
          .then((data) => setStore({ contacts: data }))
          .catch((error) => {
            console.log(error);
          });
      },

      addContact: (name, email, phone, address) => {
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
          })
          .catch((error) => console.log(error));
      },

      editContact: () => {
        console.log("Thiw will edit a contact");
      },

      deleteContact: (id) => {
        console.log("Thiw will delete a contact");
        const store = getStore();
        setStore({
          contacts: store.contacts.filter((contact) => contact.id !== id),
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
