# Log.js
A logger that you can utilise within your projects

# Instructions

### Instalation

First install the module

```
npm install log-dot-js
```
 
Then add this code snippet to your file 

```JS
const log = require('log-dot-js')
```

### Print

This is used to simply print a message along with your local time next to it without any color

Usage:

```JS
log.print("Your message");
```

Output: 

![Screenshot](http://i.imgur.com/mwFZWht.png)

### Info

This is used to display any sort of information you would like the user to know about 

Usage:

```JS
log.info("Some information");
```

Output:

![Screenshot](http://i.imgur.com/EqrvsG2.png)

### Success

This is used to show the user a task has been succesfully completed 

Usage:

```JS
log.success("Some operation completed successfully");
```

Output:

![Screenshot](http://i.imgur.com/n41tEoJ.png)

### Warning

This is used to display a warning


Usage: 

```JS
log.warn("Some warning");
```

Output:

![Screenshot](http://i.imgur.com/ao6gdGk.png)

### Message

Use this to display any message.
This gets the message from the specified url.

```JS
var log = require('log-dot-js');
log.message("yoururlhere.domain");

```

### Write File

Use this to store logs in a file.
<br>The text is kept in a file and is overrun once the app is started again
<br>You can use this multiple times within the file .


Usage:

```JS
log.writeFile("Info that you want to store");
```

### Welcome

Use this for a welcome message.
<br>It will get your project name and version from the package.json.
<br>If you do not have a package.json file it will produce an error.

Usage:

```JS
log.welcome();
```

Output

![Screenshot](http://i.imgur.com/B01WACs.png)