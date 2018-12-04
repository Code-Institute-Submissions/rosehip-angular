# Rosehip Productions (https://marc-marquez.github.io/rosehip-angular/)

Rosehip Productions needed a website to promote their events management and consultation company. This website offers information about their owner, breaks down a listing of their services, shows examples of the clients they have worked with and a contact page to allow future clients to contact the company.
 
## UX
 
First impressions are everything and I wanted to create a website for Rosehip Productions that showed off two of their best attributes: contemporary elegence and trust. Any potential client should think that when they view the website. Clients should come away thinking:

1. I can trust this company/person to plan and execute my event.
2. I can work well with this company/person because I can visualize my event based on the examples I see on this website.

Much of the design focused around the Rosehip logo. I picked colors, fonts, and images that I thought complemented the logo well. 

I chose black as the primary background color because I wanted the primary colors of the logo (pink and gold) to pop off the page. Black also helped give that contemporary elegence feeling.

I chose the "Raleway" font because I thought it presented the contemporary elegence I was looking for. The "Special Elite" font was chosen for the quote because I wanted to embed in the client how good the company is just like the way a typewriter embeds on a piece of paper. The "Homemade Apple" font was chosen to give a personal feeling. What's more personal than a signature? It's unique and the person that signs their name endorses what they are saying.

### Design Choices
- [Hero Image](https://marc-marquez.github.io/rosehip-angular/#/home) - Client preferred the "just hands" [photo](https://github.com/marc-marquez/rosehip-angular/blob/master/img/KJWedFL-201-1920-sm.jpg) when in mobile view (< 576px).

### USER STORIES

#### As a user:
- I want to view the website so that I can get a better userstanding of what this company represents.
- I want to view the home page so that I can form a first impression of whether this company is right for me.
- I want to view the about page so that I can get some background information on the company and owner.
- I want to view the services page so that I can gain an understading of what types of services the company offers.
- I want to view the portfolio page so that I can see examples of events done by the company and help me visualize how my event will look.
- I want to view the contact page so that I can immediately communicate with the company and tell them my contact information and what type of event I want to do.
- I want to click on the instagram link so that I can see other examples of the company's events.
- I want to click on the email link so that I can email the company directly.
- I want to click on the facebook link so that I can see more information about the company.

## Features

- Home Page: Main page for the company. Should immediately elicit a feeling of contemporary elegence and trustworthiness.
- About Page: The about page gives background information about the owner and what makes her qualified to run the potential client's event.
- Event Services Page: The event services page provides a brief description of each of the services povided by the company.
- Portfolio Pages: The portfolio pages provide examples of events coordinated by the company. These should provide evidence that the skill level exists to run small or large events.
- Contact Page: The contact page provides a form that the potential client can fill out and submit to initiate contact with the company.
 
### Existing Features
- Home: Allows user to view the "Home" page by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/home).
- About: Allows user to view the "About" page by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/about).
- Event Services: Allows user to view the "Event Services" page by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/events).
- Portfolio: Allows user to view the general "Portfolio" page by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/portfolio).
	- Kat and James: Specific example of event run by company by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/kat-james).
	- Decor: Specific examples of decorations used at events run by company by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/event-decor).
	- Jessica and Marc: Specific example of event run by company by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/jess-marc).
- Contact: Allows user to view the "Contact" form by having them click on [link](https://marc-marquez.github.io/rosehip-angular/#/contact).
- Instagram: Allows users to view the company Instagram page by having them click on the instagram [icon](https://www.instagram.com/rosehipproductions/).
- Email: Allows users to email company by having them click on the email icon. Clicking on icon should open email client.
- Facebook: Allows users to view the company Facebook page by having them click on the facebook [icon](https://www.facebook.com/RoseHipProductions).


### Features Left to Implement
- Film Services: Allows users to view the "Film Services" page. These services haven't been rolled out yet by the company so the link has been disabled.

## Technologies Used

- [jQuery](http://code.jquery.com/) 
	- The project uses **jQuery** to simplify DOM manipulation.
- [PopperJS](https://popper.js.org/)
	- The project uses the **Popper.js** Javascript library as a requirement for Bootstrap.
- [Bootstrap](https://getbootstrap.com/)
	- The project uses **Bootstrap** to create a responsive and mobile-first thinking website.
- [AngularJS](https://angular.io/)
	- The project uses **AngularJS** to do page routing.
- [FontAwesome](https://fontawesome.com/)
	- The project uses **Font Awesome** for the graphical icons.
- [Google Fonts](fonts.google.com)
	- The project uses **Google Fonts** for web-friendly readable fonts.    

## Testing

Go to this [page](https://docs.google.com/spreadsheets/d/18vqeqeFvVToHrCFkr4TTtSTixUJhG7vb8ipQ4wMm6U4/edit?usp=sharing) to see test cases.

These pages were tested:
- Index Page (Header and Footer)
- Home Page
- About Page
- Event Services Page
- Portfolio Page (General)
- Portfolio Page (Specific including Lightbox Modal)
- Contact Page

Each of these pages were tested for:
- Layout, image, and font responsiveness to browser width and height resolutions.
- Browser page redirection using AngularJS routing, button and link clicks.

Forms were tested for:
- Valid and invalid input (specifically email address format)
- Pristine, untouched, touched, unmodifed, modified, invalid, and valid states.

## Deployment

The project is hosted on Github Pages and is deployed through Github.

### Differences bewtween Development and Production Versions

|                                 | Development          | Production   |
| ------------                    | -----------          | ----------   |
| Web Host                        | Local                | Github Pages |
| Site URL                        | localhost            | https://marc-marquez.github.io/rosehip-angular/ |

## Credits

- [w3schools](https://www.w3schools.com/) for the many tutorials (Lightbox, Bootstrap cards, image manipulation, text location).
- [skelly](https://www.codeply.com/go/PkEufEnojF/bootstrap-4-navbar-animated-toggle-hamburger-close) for the animated hamburger toggler.
- [Miriam Suzanne](https://css-tricks.com/fun-viewport-units/) for the responsive font sizes CSS.

### Media

- The photos used in this site were obtained from Rosehip Productions.

### Acknowledgements

- I received inspiration for this project from my sister.

## Authors

- **Marc Marquez** - [Github Page](https://github.com/marc-marquez/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
