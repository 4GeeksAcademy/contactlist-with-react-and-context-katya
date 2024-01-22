const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      photo:
        "https://img.freepik.com/premium-photo/closeup-portrait-model-with-dramatic-lighting-melancholic-expressions-ai-generated_834670-164.jpg",
      inputs: [
        {
          inputName: "",
          inputEmail: "",
          inputPhone: "",
          inputAddress: "",
        },
      ],
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

      addContact: () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          body: {
            full_name: store.inputs[0].inputName,
            email: store.inputs[0].inputEmail,
            agenda_slug: "agenda_katya",
            address: store.inputs[0].inputAddress,
            phone: store.inputs[0].inputPhone,
          },
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
          .catch((error) => console.log(error));
      },

      editContact: () => {
        console.log("Thiw will edit a contact");
      },

      deleteContact: () => {
        console.log("Thiw will delete a contact");
      },

      setStore: (newState) => {
        setStore(newState);
      },
    },
  };
};

export default getState;
