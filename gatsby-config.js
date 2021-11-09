module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Lambda",
	},
	plugins: [
		"gatsby-plugin-typescript",
		{
			resolve: "gatsby-plugin-i18n",
			options: {
				langKeyDefault: "en",
				useLangKeyLayout: false,
				prefixDefault: false,
			},
		},
	],
};
