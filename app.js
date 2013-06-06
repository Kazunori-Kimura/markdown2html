/*
 * markdown to html
 */
var md = require("node-markdown").Markdown,
	fs = require("fs"),
	here = require("here").here;

if (process.argv.length === 3) {
	fs.exists(process.argv[2], function(exists){
		if (exists) {
			var text = fs.readFileSync(process.argv[2], "UTF-8");
			// < -> &lt;
			text = text.replace(/</g, "&lt;")
				.replace(/&lt;pre/g, "<pre")
				.replace(/&lt;\/pre/g, "</pre");
			var html = md(text);

			console.log(html);
		}
	});
} else {
	//show usage
	console.log(here(/*
	MarkDown to HTML
	Usage: node app.js <markdown_file_path>
	*/).unindent());
}

