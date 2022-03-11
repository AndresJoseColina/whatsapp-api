const rules = {
	user: {
		static: [
			"ticket-options:transferWhatsapp",
		],
	},

	admin: {
		static: [
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"ticket-options:transferWhatsapp",
			"ticket-options:deleteTicket",
			"contacts-page:deleteContact",
		],
	},
};

export default rules;
