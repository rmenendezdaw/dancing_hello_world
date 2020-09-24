# curs2020_2021
Exercises about javascript 


2 points -> js/main.js with two global variables myState i myApp. Figure out a way to avoid globality. (Hint. Closures could help you)

I have eliminated the global variables by making a json variable, which has the stateApp variable and then myApp is added.

2 points -> danceWorld() is a child function inside inicia() but its callable in a global scope. We can avoid this? 

In the begining of the file "main.js" I put "use strict" to avoid this.

3 points -> Deal with module dependencies. main.js use core.js and stopball.js depend on main.js. In ES6 we can use import/export sentences to deal with module dependency at a browser level. Is it work in your browser?

I have created a web server with Apache, I have also put the imports and exports so that all the functions can work. Finally in the index.html I have added the line to be able to call the main.js.

3 points -> Using same import/export mechanism as stated in previous point if we use webpack how it simplifies our deployment?

After performing the "npm install webpack-cli" and webpack-dev-server, I have created the "webpack.config.js" file in which I indicate the path of the "main.js" and that of the "index.html".

https://github.com/rmenendezdaw/dancing_hello_world.git