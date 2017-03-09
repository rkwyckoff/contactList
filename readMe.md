README:  Contact List By Kurt Wyckoff, The Iron Yard, Atlanta Mar 8, 2017

This project introduces "Back End" server modeling and creation, database creation and migration, and request methods, commands, and routes to the data. Finally, successful queries are made of the data.

First I created a Node JS environment using a template which sets up the file structure within Atom, the text editor.  Additionally, I install Sequelize, which models and watches the data, two nice things.  I'm  lucky the template already does the heavy lifting during setup.  I create a Class, in this case, a Contact in a contact list.  I give this object attributes such as name, telephone number, etc. With one command, I'm able to define my data migration and model the data.

Then, my heavy lifting begins.  A series of methods(functions within the Class "Contact") are created in the Controller file to define potential tasks or queries such as:
1)creating a new contact, 2)deleting contact 3)searching through and outputting contacts 4) updating contacts

One other task is to define the "routes" for these methods.  They are essentially a series of one-line function calls that reference the path to the database.   

Finally, I use Postman, a GUI in Chrome for making database requests.  By selecting GET, PUT, POST buttons, entering the path to the data ('/contacts'), and entering my data at the prompts, making a quick contact list was a breeze.  The other queries could have been as easy as the first, if for syntax issues!  

Overall, a great learning experience and gratifying to have crossed to the other side, that scary, dreaded Back End! I'm sure this is just the beginning of a beautiful friendship with the Back End...
