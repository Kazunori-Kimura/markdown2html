
//markdown2html.js
//  Markdown形式のテキストファイルをHTMLに変換する

var md = require("node-markdown").Markdown,
	fs = require("fs"),
	here = require("here").here,
    opts = require("opts");

var arguments = [
    { name: "markdown", required: true }
];
var options = [
    {
        short: "o",
        long: "output-file",
        value: true,
        description: "出力するHTMLのファイルパスを指定します。"
    }
];

opts.parse(options, arguments, true);

var m = opts.arg("markdown"),       //取込み対象ファイル
    h = opts.get("output-file");    //出力先ファイル


fs.exists(m, function(exists){
    if (exists) {
        var text = fs.readFileSync(m, "utf-8");
        var html = md(text);

        if (h) {
            fs.writeFileSync(h, html, {encoding: "utf-8"});
        } else {
            //出力先未指定の場合は標準出力へ
            console.log(html);
        }
    }
});
