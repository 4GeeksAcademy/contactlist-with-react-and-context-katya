import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./views/home";
import { Single } from "./views/single";
import { AddNewContact } from "./views/addNewContact";
import injectContext from "./store/appContext";


const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/addnewcontact" element={<AddNewContact />} />
						<Route path="/single/:id" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
