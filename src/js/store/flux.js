const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      /*contacts: [],*/
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
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
					
					fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
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
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
