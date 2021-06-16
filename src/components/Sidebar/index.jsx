import React from "react";
import "./styles.css";
import avatar from "assets/images/profile-picture-girl-1.jpeg";
import Icon from "components/Icon";
import Alert from "./Alert";
import Contact from "./Contact";
import contacts from "data/contacts";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<header className="sidebar__header">
				<div className="sidebar__avatar-wrapper">
					<img src={avatar} alt="Karen Okonkwo" className="sidebar__avatar" />
				</div>
				<div className="sidebar__actions">
					<button className="sidebar__action" aria-label="Status">
						<Icon
							id="status"
							className="sidebar__action-icon sidebar__action-icon--status"
						/>
					</button>
					<button className="sidebar__action" aria-label="New chat">
						<Icon id="chat" className="sidebar__action-icon" />
					</button>
					<button className="sidebar__action" aria-label="Menu">
						<Icon id="menu" className="sidebar__action-icon" />
					</button>
				</div>
			</header>
			<Alert />
			<div className="sidebar__search-wrapper">
				<Icon id="back" className="sidebar__search-icon" />
				<input
					className="sidebar__search"
					placeholder="Search or start a new chat"
				/>
			</div>
			<div className="sidebar__contacts">
				{contacts.map((contact, index) => (
					<Contact key={index} contact={contact} />
				))}
			</div>
		</aside>
	);
};

export default Sidebar;