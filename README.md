# usernamefront
Application to check a user name avaiblility

This simple web application has a form that receives a user name and it needs to check same rules:
1) it needs to check whether this user name is unique and available to be used
2) it needs to check if this username is the same as a restricted user name, e.g. cannabis, abuse, crack, damm, drunk, grass  
3) it needs to provide a function to maintain this restricted user name list
4) it needs to provide a list with 14 suggestions in case this user name has unavailable
5) it needs to provide 3 possibilities of user name suggestion list
6) it needs to check if a user name input field form has at least 6 chars
7) it needs to provide a unit test for 2 usernames

The technological solution : 
- AngularJS 1.6.4, npm 4.1.2, node 7.5.0 and Google Chrome extension ( Web Server 200 Ok ) in frontend. 

Considerations:
- Flat file usernamelist.txt and username-restricted.txt are provided to be copied in your user.home directory
- Both username.war (backend application) and usernamefront (frontend application) are used for this solution

Please, follow the procedures below which are necessary to run this frontend. Install Google Chrome Navigator and the follow extensions:

1) Install 200 Ok
- Open Google Chrome and access "Web Server for Chrome" with the follow URL: 
  https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb
- Clone the Frontend project : git clone https://github.com/alexandre1202/usernamefront
- Configure 200 Ok: Choose folder /usernamefront and Check (Automaticaly show index.html)

2) Open Google Chrome and access CORS Toggle
- Install "CORS Toggle": 
  https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh
- Turn on CORS button : ON

After theses steps, please, enter the url http://localhost:8887/ and you have to accesss the Web Application.

Before entering in username field, please, access https://github.com/Alexandre1202/username to get and start backend too.
