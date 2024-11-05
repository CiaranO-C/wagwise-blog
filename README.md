
![wagwise-header](https://github.com/user-attachments/assets/c0db8458-1332-41d2-adbe-1d8c3ad83791)

## 🐕 Introduction
Welcome to Wag Wise, a blog for dog training tips and techniques! Built using React and JavaScript, this site allows users to view and interact with articles, post comments, and explore dog training resources.
### Visit Wag Wise!
[https://wagwise-blog.vercel.app/](https://wagwise-blog.vercel.app/)

## ⚙️ Backend
The source code for the api can be found here: [Wag Wise API](https://github.com/CiaranO-C/WagWise)
## 🔧 Content Management System 
The source code for the CMS front-end can be found here: [Wag Wise CMS](https://github.com/CiaranO-C/wagwise-cms)
## ⬇️ Installation
To clone and run locally you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/package-manager)(which comes with npm) installed.
enter the following in your command line:
```
# Clone this repository
$ git clone https://github.com/CiaranO-C/wagwise-blog

# Go into the repository
$ cd wagwise-blog

# Install dependencies
$ npm install
```

### Usage  
To start the app in Vites dev mode run:  
`npm run dev`  

### Environment variables  
create the following two Vite env files  
`.env.local`  
`.env.production`  

each file should contain the following variables:   
```
# replace this with your own production/local url
VITE_API_URL=https://wagwise.com

# replace with your own desired port numbers
VITE_PORT=5175 
```
## 🔎 Features
### Article Search
![search GIF](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXNjYzA2Z2Y5cGdrOWZwMDhpY2Z5M2IyOW1pcmZoZ2V0cGJkajgxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cuAoY8RARLHCp1mvkV/giphy.gif)  
Users can easily access the search bar from most pages within the app via clicking the search icon attached to the header. The search results will display paginated articles in order of relevance.  
### User Auth
![auth GIF](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3luYWw0cG5qdTk4bzZtaXliNTBkdmdtOXd3OG5hc2VoOTY0OWR1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wwx54aVzwFlL5CHgXN/giphy.gif)  
With the use of React portals and modals, users are able to both sign up and login from any page without the need to navigate to other routes. Giving them access to features such as commenting and liking articles.  
### Responsive Design  
![device-views](https://github.com/user-attachments/assets/0e584c26-9cca-4df6-8a3f-4a9404ad0fad)
Responsive design through the use of media queries ensures a smooth experience for users no matter the size of their device. The above image displays how the application adapts across devices.
## 🖇️ Credits
This software uses the following dependencies:
- [React](https://react.dev)
- [ESLint](https://eslint.org)
- [Vite](https://vite.dev)
- [dompurify](https://github.com/cure53/DOMPurify)
- [HTML React Parser](https://github.com/remarkablemark/html-react-parser#readme)
- [JWT Decode](https://github.com/auth0/jwt-decode#readme)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router](https://reactrouter.com/en/main)
- [React Spinners](https://www.davidhu.io/react-spinners/)
- [Styled Components](https://styled-components.com)
