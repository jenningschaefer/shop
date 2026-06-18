var designPage = {
	title: "Design & Technik",
	intro: "Ein Blick hinter die Kulissen: warum dieser Shop so aussieht und so gebaut ist, wie er ist.",
	nav: {
		overview: "Übersicht",
		philosophy: "Philosophie",
		tech: "Technik",
		structure: "Aufbau",
		colors: "Farben",
		components: "UI-Elemente"
	},
	overview: {
		philosophyTitle: "Philosophie",
		philosophyText: "Reduziert, klar, funktional – Bauhaus für den digitalen Raum.",
		techTitle: "Technik",
		techText: "Nuxt & Sass: SEO-stark und völlig frei im Design.",
		structureTitle: "Aufbau",
		structureText: "Klare Struktur und ein bewusst minimaler Checkout.",
		colorsTitle: "Farben",
		colorsText: "Eine ruhige Palette mit drei Akzenttönen.",
		componentsTitle: "UI-Elemente",
		componentsText: "Buttons, Eingaben und Komponenten im Überblick."
	},
	philosophy: {
		title: "Philosophie",
		p1: "Dieser Shop verkauft Designer-Möbel – also tritt die Gestaltung der Oberfläche bewusst zurück, damit die Produkte wirken können.",
		p2: "Das gestalterische Vorbild ist das Bauhaus: Form folgt Funktion, klare Raster, viel Weißraum und Typografie statt Dekoration.",
		p3: "Jedes Element hat eine Aufgabe. Was nicht hilft, fällt weg."
	},
	tech: {
		title: "Technik",
		p1: "Die Seite basiert auf Nuxt mit serverseitigem Rendering. Für einen Shop, der von Endkunden gefunden werden soll, ist gute SEO entscheidend – SSR liefert Suchmaschinen vollständiges HTML.",
		p2: "Für das Styling kommt Sass zum Einsatz statt eines fertigen Komponenten-Kits wie Nuxt UI. So behalten wir die volle gestalterische Freiheit und können das Bauhaus-Konzept kompromisslos umsetzen.",
		p3: "Übersetzungen laufen über nuxt-i18n (Deutsch/Englisch), die Datenhaltung über typisierte Composables und Services."
	},
	structure: {
		title: "Aufbau & Checkout",
		p1: "Das Projekt ist nach Verantwortlichkeiten getrennt: Layouts, Seiten, wiederverwendbare Komponenten und Composables für die Logik.",
		p2: "Wiederkehrende Muster werden geteilt – etwa das Seitenmenü und die Hash-Navigation, die sowohl diese Design-Seite als auch der Service-Bereich nutzen.",
		p3: "Der Checkout ist bewusst noch minimaler gehalten: keine Ablenkung, keine überflüssigen Schritte – nur das, was zum Abschluss der Bestellung nötig ist."
	},
	colors: {
		title: "Farben",
		intro: "Eine ruhige Basis aus Dunkel und Hell, ergänzt um drei zurückhaltende Akzenttöne.",
		primary: "Primär",
		secondary: "Sekundär",
		blue: "Akzent Blau",
		red: "Akzent Rot",
		grey: "Grau",
		success: "Erfolg",
		error: "Fehler"
	},
	components: {
		title: "UI-Elemente",
		buttonsTitle: "Buttons",
		inputsTitle: "Eingaben",
		accordionTitle: "Akkordeon",
		accordionTrigger: "Was ist enthalten?",
		accordionContent: "Aufbau, Material und Pflegehinweise – kompakt aufklappbar.",
		linksTitle: "Links",
		linksText: "Links tragen immer einen Pfeil, damit sofort klar ist, dass es weitergeht:",
		linkExample: "Zur Kollektion",
		inputPlaceholder: "Ihre E-Mail",
		buttonPrimary: "In den Warenkorb",
		buttonSecondary: "Mehr erfahren"
	}
};
var servicePage = {
	title: "Service & Hilfe",
	intro: "Wir sind für Sie da. Wählen Sie links ein Thema oder springen Sie direkt über die Adresse dorthin, z. B. /service#faq.",
	nav: {
		faq: "FAQ",
		shipping: "Versand & Lieferung",
		payment: "Zahlungsarten",
		imprint: "Impressum",
		privacy: "Datenschutz"
	},
	faq: {
		title: "Häufige Fragen",
		q1: "Wie kann ich meine Bestellung verfolgen?",
		a1: "Sobald Ihre Bestellung versandt wurde, erhalten Sie eine E-Mail mit einem Tracking-Link. Den aktuellen Status finden Sie zusätzlich in Ihrem Konto unter „Bestellungen“.",
		q2: "Kann ich meine Bestellung ändern oder stornieren?",
		a2: "Solange die Bestellung noch nicht versandt wurde, können Sie sie über unseren Kundenservice anpassen oder stornieren. Bitte kontaktieren Sie uns dazu schnellstmöglich.",
		q3: "Wie funktioniert die Rückgabe?",
		a3: "Sie haben 30 Tage Zeit, Artikel kostenlos zurückzusenden. Legen Sie das beiliegende Retourenlabel bei und geben Sie das Paket bei einem Paketshop ab.",
		q4: "Welche Versandkosten fallen an?",
		a4: "Innerhalb Deutschlands liefern wir ab einem Bestellwert von 50 € versandkostenfrei. Darunter berechnen wir eine Pauschale von 4,95 €."
	},
	shipping: {
		title: "Versand & Lieferung",
		p1: "Wir versenden alle Bestellungen werktags innerhalb von 24 Stunden. Die Lieferzeit innerhalb Deutschlands beträgt in der Regel 2–4 Werktage.",
		p2: "Ab einem Bestellwert von 50 € ist der Versand innerhalb Deutschlands kostenlos. Für Lieferungen ins europäische Ausland gelten abweichende Laufzeiten und Kosten, die Ihnen im Bestellprozess angezeigt werden.",
		p3: "Sobald Ihr Paket unser Lager verlässt, informieren wir Sie per E-Mail mit einer Sendungsverfolgung."
	},
	payment: {
		title: "Zahlungsarten",
		intro: "Wir bieten Ihnen verschiedene sichere Zahlungsmethoden an:",
		m1: "PayPal",
		m2: "Kreditkarte (Visa, Mastercard)",
		m3: "Kauf auf Rechnung",
		m4: "SEPA-Lastschrift",
		note: "Alle Zahlungen werden verschlüsselt übertragen. Bei Kauf auf Rechnung ist der Betrag innerhalb von 14 Tagen nach Erhalt der Ware fällig."
	},
	imprint: {
		title: "Impressum",
		disclaimer: "Hinweis: Bitte ersetzen Sie die folgenden Musterangaben durch Ihre echten Unternehmensdaten.",
		providerLabel: "Angaben gemäß § 5 TMG",
		company: "Muster Shop GmbH",
		street: "Musterstraße 1",
		city: "12345 Musterstadt",
		country: "Deutschland",
		contactLabel: "Kontakt",
		phone: "Telefon: +49 (0) 123 456789",
		email: "E-Mail: info{'@'}muster-shop.de",
		repLabel: "Vertreten durch",
		rep: "Max Mustermann (Geschäftsführer)",
		registerLabel: "Registereintrag",
		register: "Amtsgericht Musterstadt, HRB 000000",
		vatLabel: "Umsatzsteuer-ID",
		vat: "DE000000000"
	},
	privacy: {
		title: "Datenschutz",
		disclaimer: "Hinweis: Dies ist ein Muster-Datenschutztext und ersetzt keine Rechtsberatung. Bitte passen Sie ihn an Ihr Unternehmen an.",
		h1: "1. Verantwortlicher",
		p1: "Verantwortlich für die Datenverarbeitung auf dieser Website ist die Muster Shop GmbH, Musterstraße 1, 12345 Musterstadt.",
		h2: "2. Erhebung und Verarbeitung",
		p2: "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unseres Shops, zur Abwicklung Ihrer Bestellung und zur Erfüllung gesetzlicher Pflichten erforderlich ist.",
		h3: "3. Ihre Rechte",
		p3: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch.",
		h4: "4. Cookies",
		p4: "Wir verwenden Cookies, um grundlegende Funktionen wie den Warenkorb und Ihre Spracheinstellung bereitzustellen. Nicht notwendige Cookies setzen wir nur mit Ihrer Einwilligung ein."
	}
};
var common = {
	language: "Sprache",
	currency: "EUR",
	currencySymbol: "€",
	loading: "Laden...",
	error: "Fehler",
	save: "Speichern",
	cancel: "Abbrechen",
	"delete": "Löschen",
	edit: "Bearbeiten",
	back: "Zurück",
	next: "Weiter",
	submit: "Absenden",
	close: "Schließen",
	search: "Suchen",
	apply: "Anwenden",
	reset: "Zurücksetzen"
};
var nav = {
	home: "Startseite",
	products: "Produkte",
	account: "Konto",
	cart: "Warenkorb",
	favorites: "Favoriten",
	login: "Anmelden",
	logout: "Abmelden",
	menu: "Menü"
};
var categories = {
	all: "Alle",
	chairs: "Stühle",
	table: "Tische",
	lighting: "Beleuchtung",
	accessory: "Dekoration"
};
var product = {
	designer: "Designer",
	price: "Preis",
	features: "Eigenschaften",
	description: "Beschreibung",
	specifications: "Spezifikationen",
	addToCart: "In den Warenkorb",
	addToFavorites: "Zu Favoriten hinzufügen",
	removeFromFavorites: "Aus Favoriten entfernen",
	inStock: "Auf Lager",
	outOfStock: "Nicht verfügbar"
};
var productList = {
	title: "Produkte",
	sort: "Sortieren",
	filter: "Filtern",
	sortByPrice: "Nach Preis",
	sortPriceAsc: "Preis (aufsteigend)",
	sortPriceDesc: "Preis (absteigend)",
	sortByName: "Nach Name",
	sortNameAsc: "Name (A–Z)",
	sortNameDesc: "Name (Z–A)",
	noProducts: "Keine Produkte gefunden"
};
var cart = {
	title: "Warenkorb",
	empty: "Ihr Warenkorb ist leer",
	subtotal: "Zwischensumme",
	shipping: "Versand",
	freeShipping: "Kostenloser Versand",
	total: "Gesamt",
	checkout: "Zur Kasse",
	continueShopping: "Weiter einkaufen",
	remove: "Entfernen",
	added: "Hinzugefügt",
	alreadyInCart: "Schon im Warenkorb",
	freeShippingMessage: "Kostenloser Versand ab {amount} €",
	amountUntilFreeShipping: "Noch {amount} € bis zum kostenlosen Versand"
};
var checkout = {
	title: "Kasse",
	address: "Adresse",
	payment: "Zahlung",
	overview: "Übersicht",
	confirmation: "Bestätigung",
	shippingAddress: "Lieferadresse",
	billingAddress: "Rechnungsadresse",
	sameAsShipping: "Wie Lieferadresse",
	fillDummy: "Mit Dummy-Daten ausfüllen",
	placeOrder: "Bestellung aufgeben",
	orderPlaced: "Bestellung aufgegeben",
	thankYou: "Vielen Dank für Ihre Bestellung!",
	termsConditions: "Allgemeine Geschäftsbedingungen",
	acceptTerms: "Ich akzeptiere alle Allgemeinen Geschäftsbedingungen",
	houseNo: "Hausnummer",
	fees: "Gebühren",
	fillRequired: "Bitte fülle alle Pflichtfelder korrekt aus.",
	acceptTermsRequired: "Bitte akzeptiere die Allgemeinen Geschäftsbedingungen."
};
var account = {
	title: "Mein Konto",
	overview: "Übersicht",
	orders: "Bestellungen",
	orderHistory: "Bestellverlauf",
	addresses: "Adressen",
	settings: "Einstellungen",
	profile: "Benutzerdaten",
	editProfile: "Profil bearbeiten",
	changePassword: "Passwort ändern",
	favorites: "Favoriten"
};
var favorites = {
	title: "Favoriten",
	empty: "Noch keine Favoriten"
};
var order = {
	orderNumber: "Bestellnummer",
	date: "Datum",
	status: "Status",
	items: "Artikel",
	total: "Gesamt",
	details: "Bestelldetails",
	pending: "Ausstehend",
	processing: "In Bearbeitung",
	shipped: "Versendet",
	delivered: "Geliefert",
	cancelled: "Storniert",
	notFound: "Bestellung nicht gefunden.",
	orderDate: "Bestelldatum",
	shippedDate: "Versanddatum",
	deliveredTo: "Lieferadresse",
	deliveryType: "Versandart",
	deliveryWithin: "Lieferung innerhalb {time}",
	trackOrder: "Bestellung verfolgen",
	invoice: "Rechnung (PDF)",
	returnShipment: "Rücksendung"
};
var address = {
	firstName: "Vorname",
	lastName: "Nachname",
	street: "Straße",
	city: "Stadt",
	zip: "PLZ",
	country: "Land",
	phone: "Telefon",
	"default": "Standard",
	setAsDefault: "Als Standard festlegen"
};
var auth = {
	login: "Anmelden",
	register: "Registrieren",
	email: "E-Mail",
	password: "Passwort",
	confirmPassword: "Passwort bestätigen",
	forgotPassword: "Passwort vergessen?",
	noAccount: "Noch kein Konto?",
	hasAccount: "Bereits ein Konto?",
	passwordRequirements: "Ihr Passwort muss mindestens 8 Zeichen mit einer Zahl, einem Groß- und Kleinbuchstaben und einem Sonderzeichen enthalten.",
	logout: "Abmelden",
	invalidLogin: "E-Mail oder Passwort ist ungültig.",
	registerFailed: "Registrierung fehlgeschlagen. Bitte prüfen Sie Ihre Angaben.",
	passwordMismatch: "Die Passwörter stimmen nicht überein.",
	orderNotFound: "Zu diesen Angaben wurde keine Bestellung gefunden."
};
var footer = {
	service: "Service",
	legal: "Rechtliches",
	payment: "Zahlung",
	newsletter: "Newsletter abonnieren",
	emailPlaceholder: "E-Mail Adresse",
	subscribe: "Abonnieren",
	disclaimer: "*Alle Preise inkl. MwSt., zzgl. anfallender Versand- und Lieferkosten."
};
var disclaimer = {
	title: "Hinweis",
	text1: "Diese Website ist ein Portfolio-Projekt und kein echter Online-Shop. Alle Produkte, Preise und Transaktionen sind fiktiv und dienen ausschließlich der Demonstration meiner Frontend-Entwicklungsfähigkeiten.",
	text2: "Wenn Sie an meiner Arbeit interessiert sind, kontaktieren Sie mich gerne!"
};
var errors = {
	notFound: "Seite nicht gefunden",
	notFoundText: "Die gewünschte Seite existiert nicht oder wurde verschoben. Wir bringen Sie zurück auf den Weg.",
	serverError: "Serverfehler",
	serverErrorText: "Auf unserer Seite ist etwas schiefgelaufen. Bitte versuchen Sie es gleich erneut.",
	goHome: "Zur Startseite",
	browse: "Produkte entdecken"
};
const de = {
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

export { account, address, auth, cart, categories, checkout, common, de as default, designPage, disclaimer, errors, favorites, footer, nav, order, product, productList, servicePage };
//# sourceMappingURL=de.mjs.map
