/* error-pages.js
	Uber-minimalist automatically generated HTTP/HTML error pages. */

const fs = require("fs");
const path = require("path");

/** Generate an error page with a title and body text */
const template = (title, text) => `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<title>${title}</title>

		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"> 

		<style type="text/css">
			body {
				display: block;

				position: fixed;
				left: 0; top: 0; right: 0; bottom: 0;

				margin: 0; padding: 0; border: 0;

				background-color: white;
				color: black;

				overflow: hidden;
			}

			table {
				width: 100%;
				height: 100%;
			}
			table td {
				padding: 0;
			}

			#title {
				margin: 0; padding: 0; border: 0;

				text-align: center;

				font-family: "Roboto", sans-serif;
				font-weight: 900;
				font-size: 16em;
			}

			.no-select {
				-webkit-touch-callout: none;
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
			}
		</style>
	</head>
	<body>
		<table>
			<tr><td></td></tr>
			<tr><td>
				<h1 id="title" class="no-select">${text}</h1>
			</td></tr>
			<tr><td></td></tr>
		</table>
	</body>
</html>
`;

/** Generate a page object */
const page = ({ folder, file, title, text }) => {
	if (!folder)	folder = "./";
	if (!file)	file = "index.html";
	if (!title)	title = "";
	if (!text)	text = "";
	return { folder, file, data: template(title, text) };
};

/** List of pages */
const pages = [
	page({ folder: "./dist/wip",	title: "Work in Progress",			text: "WIP" }),

	page({ folder: "./dist/404",	title: "Not Found",				text: "404" }),

	page({ folder: "./dist/400",	title: "Bad Request",				text: "401" }),
	page({ folder: "./dist/401",	title: "Unauthorized",				text: "401" }),
	page({ folder: "./dist/402",	title: "Payment Required",			text: "402" }),
	page({ folder: "./dist/403",	title: "Forbidden",				text: "403" }),
	page({ folder: "./dist/405",	title: "Method Not Allowed",			text: "405" }),
	page({ folder: "./dist/406",	title: "Not Acceptable",			text: "406" }),
	page({ folder: "./dist/407",	title: "Proxy Authentication Required",		text: "407" }),
	page({ folder: "./dist/408",	title: "Request Timeout",			text: "408" }),
	page({ folder: "./dist/409",	title: "Conflict",				text: "409" }),
	page({ folder: "./dist/410",	title: "Gone",					text: "410" }),
	page({ folder: "./dist/411",	title: "Length Required",			text: "411" }),
	page({ folder: "./dist/412",	title: "Precondition Failed",			text: "412" }),
	page({ folder: "./dist/413",	title: "Payload Too Large",			text: "413" }),
	page({ folder: "./dist/414",	title: "URI Too Long",				text: "414" }),
	page({ folder: "./dist/415",	title: "Unsupported Media Type",		text: "415" }),
	page({ folder: "./dist/416",	title: "Range Not Satisfiable",			text: "416" }),
	page({ folder: "./dist/417",	title: "Expectation Failed",			text: "417" }),
	page({ folder: "./dist/418",	title: "I'm a teapot",				text: "&#x1FAD6;" }),
	page({ folder: "./dist/421",	title: "Misdirected Request",			text: "421" }),
	page({ folder: "./dist/422",	title: "Unprocessable Entity",			text: "422" }),
	page({ folder: "./dist/423",	title: "Locked",				text: "423" }),
	page({ folder: "./dist/424",	title: "Failed Dependency",			text: "424" }),
	page({ folder: "./dist/425",	title: "Too Early",				text: "425" }),
	page({ folder: "./dist/426",	title: "Upgrade Required",			text: "426" }),
	page({ folder: "./dist/428",	title: "Precondition Required",			text: "428" }),
	page({ folder: "./dist/429",	title: "Too Many Requests",			text: "429" }),
	page({ folder: "./dist/431",	title: "Request Header Fields Too Large",	text: "431" }),
	page({ folder: "./dist/451",	title: "Unavailable For Legal Reasons",		text: "451" }),
	page({ folder: "./dist/500",	title: "Internal Server Error",			text: "500" }),
	page({ folder: "./dist/501",	title: "Not Implemented",			text: "501" }),
	page({ folder: "./dist/502",	title: "Bad Gateway",				text: "502" }),
	page({ folder: "./dist/503",	title: "Service Unavailable",			text: "503" }),
	page({ folder: "./dist/504",	title: "Gateway Timeout",			text: "504" }),
	page({ folder: "./dist/505",	title: "HTTP Version Not Supported",		text: "505" }),
	page({ folder: "./dist/506",	title: "Variant Also Negotiates",		text: "506" }),
	page({ folder: "./dist/507",	title: "Insufficient Storage",			text: "507" }),
	page({ folder: "./dist/508",	title: "Loop Detected",				text: "508" }),
	page({ folder: "./dist/510",	title: "Not Extended",				text: "510" }),
	page({ folder: "./dist/511",	title: "Network Authentication Required",	text: "511" })
];

// Save pages to disk
for (const page of pages) {
	const { folder, file, data } = page;

	const full = path.join(folder, file);
	const dir = path.dirname(full);
	try { fs.mkdirSync(dir, { recursive: true }); } finally {}

	fs.writeFileSync(full, data, { encoding: "utf-8" });
}
