const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      
      contacts: [],
      contact: [
        {
          name: "Helen Anamendolla",
          email: "helen.ana@example.com",
          phone: "(870) 288-4149",
          address: "5842 Hillcrest Rd",
          photo:
            "https://img.freepik.com/premium-photo/closeup-portrait-model-with-dramatic-lighting-melancholic-expressions-ai-generated_834670-164.jpg",
        },
      ],
      inputs: [
        {
          inputName: "",
          inputEmail: "",
          inputPhone: "",
          inputAddress: "",
        }
      ]
    },
    actions: {
      
      loadSomeData: () => {
      
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda_katya")
				.then((response) => {
					if(!response.ok) {
						throw Error(response.status);
					}
					return response.json();
				}) 
				.then(data => setStore({"contacts": data}))
				.catch((error) => {
					console.log(error)
				})
				
      },
     
      addContact: () => {

        getStore()

        fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          body: {
            "full_name": store.inputs.inputName,
            "email": store.inputs.inputEmail,
            "agenda_slug": "agenda_katya",
            "address": store.inputs.inputAddress,
            "phone": store.inputs.inputPhone,
        },
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then(response => {
          if (!response.ok) {
            throw Error(response.status)
          }
          return response.json();
        })
        .catch((error) => console.log(error))
      }
    },
  };
};

export default getState;
