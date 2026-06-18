var designPage = {
	title: "Design & Tech",
	intro: "A look behind the scenes: why this shop looks and is built the way it is.",
	nav: {
		overview: "Overview",
		philosophy: "Philosophy",
		tech: "Tech",
		structure: "Structure",
		colors: "Colors",
		components: "UI Elements"
	},
	overview: {
		philosophyTitle: "Philosophy",
		philosophyText: "Reduced, clear, functional – Bauhaus for the digital space.",
		techTitle: "Tech",
		techText: "Nuxt & Sass: strong SEO and full design freedom.",
		structureTitle: "Structure",
		structureText: "A clear structure and a deliberately minimal checkout.",
		colorsTitle: "Colors",
		colorsText: "A calm palette with three accent tones.",
		componentsTitle: "UI Elements",
		componentsText: "Buttons, inputs and components at a glance."
	},
	philosophy: {
		title: "Philosophy",
		p1: "This shop sells designer furniture – so the interface deliberately steps back to let the products speak.",
		p2: "The design reference is the Bauhaus: form follows function, clear grids, plenty of white space and typography instead of decoration.",
		p3: "Every element has a job. Whatever doesn't help is removed."
	},
	tech: {
		title: "Tech",
		p1: "The site is built on Nuxt with server-side rendering. For a shop that needs to be found by end customers, good SEO is essential – SSR delivers complete HTML to search engines.",
		p2: "Styling uses Sass instead of a ready-made component kit like Nuxt UI. That keeps full design freedom and lets us realise the Bauhaus concept without compromise.",
		p3: "Translations run through nuxt-i18n (German/English); data is handled by typed composables and services."
	},
	structure: {
		title: "Structure & Checkout",
		p1: "The project is separated by responsibility: layouts, pages, reusable components and composables for the logic.",
		p2: "Recurring patterns are shared – such as the side menu and hash navigation used by both this design page and the service area.",
		p3: "The checkout is kept deliberately even more minimal: no distraction, no superfluous steps – only what is needed to complete the order."
	},
	colors: {
		title: "Colors",
		intro: "A calm base of dark and light, complemented by three restrained accent tones.",
		primary: "Primary",
		secondary: "Secondary",
		blue: "Accent Blue",
		red: "Accent Red",
		grey: "Grey",
		success: "Success",
		error: "Error"
	},
	components: {
		title: "UI Elements",
		buttonsTitle: "Buttons",
		inputsTitle: "Inputs",
		accordionTitle: "Accordion",
		accordionTrigger: "What's included?",
		accordionContent: "Build, material and care notes – compact and collapsible.",
		linksTitle: "Links",
		linksText: "Links always carry an arrow, so it's instantly clear there's more to come:",
		linkExample: "To the collection",
		inputPlaceholder: "Your email",
		buttonPrimary: "Add to cart",
		buttonSecondary: "Learn more"
	}
};
var servicePage = {
	title: "Service & Help",
	intro: "We're here for you. Pick a topic on the left or jump straight to it via the address, e.g. /service#faq.",
	nav: {
		faq: "FAQ",
		shipping: "Shipping & Delivery",
		payment: "Payment Methods",
		imprint: "Imprint",
		privacy: "Privacy"
	},
	faq: {
		title: "Frequently Asked Questions",
		q1: "How can I track my order?",
		a1: "As soon as your order has shipped, you'll receive an email with a tracking link. You can also find the current status in your account under “Orders”.",
		q2: "Can I change or cancel my order?",
		a2: "As long as the order hasn't shipped yet, you can adjust or cancel it through our customer service. Please contact us as soon as possible.",
		q3: "How do returns work?",
		a3: "You have 30 days to return items free of charge. Include the enclosed return label and drop the parcel off at a parcel shop.",
		q4: "What are the shipping costs?",
		a4: "Within Germany we ship free of charge from an order value of €50. Below that we charge a flat rate of €4.95."
	},
	shipping: {
		title: "Shipping & Delivery",
		p1: "We ship all orders within 24 hours on business days. Delivery within Germany usually takes 2–4 business days.",
		p2: "Shipping within Germany is free from an order value of €50. Deliveries to other European countries have different lead times and costs, which are shown to you during checkout.",
		p3: "As soon as your parcel leaves our warehouse, we'll notify you by email with a tracking link."
	},
	payment: {
		title: "Payment Methods",
		intro: "We offer you several secure payment methods:",
		m1: "PayPal",
		m2: "Credit card (Visa, Mastercard)",
		m3: "Purchase on account",
		m4: "SEPA direct debit",
		note: "All payments are transmitted encrypted. For purchase on account, the amount is due within 14 days of receiving the goods."
	},
	imprint: {
		title: "Imprint",
		disclaimer: "Note: Please replace the sample details below with your real company data.",
		providerLabel: "Information pursuant to § 5 TMG",
		company: "Muster Shop GmbH",
		street: "Musterstraße 1",
		city: "12345 Musterstadt",
		country: "Germany",
		contactLabel: "Contact",
		phone: "Phone: +49 (0) 123 456789",
		email: "Email: info{'@'}muster-shop.de",
		repLabel: "Represented by",
		rep: "Max Mustermann (Managing Director)",
		registerLabel: "Register entry",
		register: "Local court Musterstadt, HRB 000000",
		vatLabel: "VAT ID",
		vat: "DE000000000"
	},
	privacy: {
		title: "Privacy",
		disclaimer: "Note: This is a sample privacy text and does not constitute legal advice. Please adapt it to your company.",
		h1: "1. Controller",
		p1: "The controller responsible for data processing on this website is Muster Shop GmbH, Musterstraße 1, 12345 Musterstadt.",
		h2: "2. Collection and processing",
		p2: "We only process personal data to the extent necessary to provide our shop, process your order and fulfil legal obligations.",
		h3: "3. Your rights",
		p3: "You have the right at any time to access, rectify, erase and restrict the processing of your data, as well as the right to data portability and objection.",
		h4: "4. Cookies",
		p4: "We use cookies to provide basic functions such as the shopping cart and your language preference. We only set non-essential cookies with your consent."
	}
};
var common = {
	language: "Language",
	currency: "USD",
	currencySymbol: "$",
	loading: "Loading...",
	error: "Error",
	save: "Save",
	cancel: "Cancel",
	"delete": "Delete",
	edit: "Edit",
	back: "Back",
	next: "Next",
	submit: "Submit",
	close: "Close",
	search: "Search",
	apply: "Apply",
	reset: "Reset"
};
var nav = {
	home: "Home",
	products: "Products",
	account: "Account",
	cart: "Cart",
	favorites: "Favorites",
	login: "Login",
	logout: "Logout",
	menu: "Menu"
};
var categories = {
	all: "All",
	chairs: "Chairs",
	table: "Tables",
	lighting: "Lighting",
	accessory: "Decoration"
};
var product = {
	designer: "Designer",
	price: "Price",
	features: "Features",
	description: "Description",
	specifications: "Specifications",
	addToCart: "Add to Cart",
	addToFavorites: "Add to Favorites",
	removeFromFavorites: "Remove from Favorites",
	inStock: "In Stock",
	outOfStock: "Out of Stock"
};
var productList = {
	title: "Products",
	sort: "Sort",
	filter: "Filter",
	sortByPrice: "By Price",
	sortPriceAsc: "Price (ascending)",
	sortPriceDesc: "Price (descending)",
	sortByName: "By Name",
	sortNameAsc: "Name (A–Z)",
	sortNameDesc: "Name (Z–A)",
	noProducts: "No products found"
};
var cart = {
	title: "Cart",
	empty: "Your cart is empty",
	subtotal: "Subtotal",
	shipping: "Shipping",
	freeShipping: "Free Shipping",
	total: "Total",
	checkout: "Checkout",
	continueShopping: "Continue Shopping",
	remove: "Remove",
	added: "Added",
	alreadyInCart: "Already in cart",
	freeShippingMessage: "Free shipping on orders over ${amount}",
	amountUntilFreeShipping: "${amount} until free shipping"
};
var checkout = {
	title: "Checkout",
	address: "Address",
	payment: "Payment",
	overview: "Overview",
	confirmation: "Confirmation",
	shippingAddress: "Shipping Address",
	billingAddress: "Billing Address",
	sameAsShipping: "Same as Shipping",
	fillDummy: "Fill with dummy data",
	placeOrder: "Place Order",
	orderPlaced: "Order Placed",
	thankYou: "Thank you for your order!",
	termsConditions: "Terms & Conditions",
	acceptTerms: "I accept all Terms and Conditions",
	houseNo: "House No.",
	fees: "Fees",
	fillRequired: "Please fill in all required fields correctly.",
	acceptTermsRequired: "Please accept the Terms and Conditions."
};
var account = {
	title: "My Account",
	overview: "Overview",
	orders: "Orders",
	orderHistory: "Order History",
	addresses: "Addresses",
	settings: "Settings",
	profile: "User Data",
	editProfile: "Edit Profile",
	changePassword: "Change Password",
	favorites: "Favorites"
};
var favorites = {
	title: "Favorites",
	empty: "No favorites yet"
};
var order = {
	orderNumber: "Order Number",
	date: "Date",
	status: "Status",
	items: "Items",
	total: "Total",
	details: "Order Details",
	pending: "Pending",
	processing: "Processing",
	shipped: "Shipped",
	delivered: "Delivered",
	cancelled: "Cancelled",
	notFound: "Order not found.",
	orderDate: "Order Date",
	shippedDate: "Shipped Date",
	deliveredTo: "Delivered To",
	deliveryType: "Delivery Type",
	deliveryWithin: "Delivery within {time}",
	trackOrder: "Track Order",
	invoice: "Invoice (PDF)",
	returnShipment: "Return Shipment"
};
var address = {
	firstName: "First Name",
	lastName: "Last Name",
	street: "Street",
	city: "City",
	zip: "ZIP",
	country: "Country",
	phone: "Phone",
	"default": "Default",
	setAsDefault: "Set as Default"
};
var auth = {
	login: "Login",
	register: "Register",
	email: "Email",
	password: "Password",
	confirmPassword: "Confirm Password",
	forgotPassword: "Forgot Password?",
	noAccount: "Don't have an account?",
	hasAccount: "Already have an account?",
	passwordRequirements: "Your password must have at least 8 characters with one number, one upper and one lower case letter and one special character.",
	logout: "Logout",
	invalidLogin: "Invalid email or password.",
	registerFailed: "Registration failed. Please check your details.",
	passwordMismatch: "The passwords do not match.",
	orderNotFound: "No order found for these details."
};
var footer = {
	service: "Service",
	legal: "Legal",
	payment: "Payment",
	newsletter: "Join Our Newsletter",
	emailPlaceholder: "Email Address",
	subscribe: "Subscribe",
	disclaimer: "*All prices include VAT, plus applicable shipping and delivery costs."
};
var disclaimer = {
	title: "Disclaimer",
	text1: "This website is a portfolio project and not a real online store. All products, prices, and transactions displayed are fictional and exist solely to showcase my front-end development skills.",
	text2: "If you're interested in my work, feel free to reach out!"
};
var errors = {
	notFound: "Page Not Found",
	notFoundText: "The page you're looking for doesn't exist or has moved. Let's get you back on track.",
	serverError: "Server Error",
	serverErrorText: "Something went wrong on our end. Please try again in a moment.",
	goHome: "Go Home",
	browse: "Browse products"
};
const en = {
	designPage: designPage,
	servicePage: servicePage,
	common: common,
	nav: nav,
	categories: categories,
	product: product,
	productList: productList,
	cart: cart,
	checkout: checkout,
	account: account,
	favorites: favorites,
	order: order,
	address: address,
	auth: auth,
	footer: footer,
	disclaimer: disclaimer,
	errors: errors
};

export { account, address, auth, cart, categories, checkout, common, en as default, designPage, disclaimer, errors, favorites, footer, nav, order, product, productList, servicePage };
//# sourceMappingURL=en.mjs.map
