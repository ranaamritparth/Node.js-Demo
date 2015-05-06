1. Paste the package.json in default directory. // Not required. Helps if you want all the dependencies/package to install
   in one command [[npm install]].
2. Go to command line and navigate to default directory.
3. Run npm install mime for mime package or simply npm install if you have a package.json file in default directory,
   in this case it will install all dependencies in the json file (simple!!). [[Creates a node_modules in default
   folder]]
4. Put in server.js
	var mime = require("mime");
	If more package are there, create as per required objects.
5. Remove comment line on line 13 and comment line on 15. [[Done only for mime package]]
6. Your server now works, can read all types of files. Earlier it only read "text/html".
