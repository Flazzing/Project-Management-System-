import React, { Component, useState, useEffect } from "react";
import firestore from "../../../config/firestore";
import { Table, Menu, Modal, Button, Icon } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import Page from "../../Page";
import { Route, Link, Redirect, Switch, BrowserRouter } from "react-router-dom";
import AddCustomer from "../../signUp/customerForm";

function useProject() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		firestore.collection("Customer").onSnapshot(snapshot => {
			const newProject = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));
			setProjects(newProject);
		});
	}, []);
	return projects;
}

const ProjectList = () => {
	const projects = useProject();
	return (
		<div>
			<Modal open dimmer="blurring">
				<div style={{ float: "right" }}>
					<Link to="/home">
						<Icon name="close" size="large" />
					</Link>
				</div>
				<Modal.Header>Add Customer</Modal.Header>

				<Modal.Description>{<AddCustomer />}</Modal.Description>
				<Modal.Actions>
					<Link to="/home">
						<Button>Close</Button>
					</Link>
				</Modal.Actions>
			</Modal>

			{/* </Page> */}
		</div>
	);
};

export default ProjectList;
