A React-based rendition of the New York Times Article Search application using Node, Express and MongoDB so users can save articles to read later.

   * Create a Bootstrap layout similar to that displayed in [HW_Assignment.png](HW_Assignment.png). This should be a SPA (Single Page Application) that uses [`react-router`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

     * If you want to try out another CSS framework, feel free to use an alternative to Bootstrap.

   * You'll need several Express routes for your app:

     * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles

     * `/api/saved` (post) - your components will use this to save an article to the database

     * `/api/saved` (delete) - your components will use this to delete a saved article in the database

     * `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes

   * The layout should include three React Components named `Main`, `Search` and `Saved`.

     * **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

     * **Search** - queries the NYT API for articles. Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.

     * **Saved** - displays the Saved Articles that were searched and stored in the database

* Deploy your application to Heroku once complete.

- - -

### Bonus Live Updates to Saved Articles

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.
  * Say you have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.
