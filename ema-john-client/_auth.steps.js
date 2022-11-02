/* 
    --------------
    AUTH SETUP 
    --------------
    1. create firebase project
    2. enable web 
    3. enable sign in method
    4. install firebase 
    5. get firebase config in your firebase.config.js file
    6. export app from firebase.config.js

*/

/* 
    ----------------
    CONTEXT API SETUP
    ----------------
    1. Create UserContext (AuthContext): UserContext --> component name UserContext provides AuthContext
    2. Create AuthContext
    3. set AuthContext.Provider
    4. Make sure you set the children
    5. export AuthContext to be used inside useContext hook
    6. get form data
    7. getAuth in the userContext
*/

/* 
    ------------------
    FIREBASE HOSTING
    ------------------
    // ONE TIME FOR EACH COMPUTER
    1. npm install -g firebase-tools
    2. firebase login

    -----------------------------
    // ONE TIME FOR EACH PROJECT
    -----------------------------
    3. firebase init (Hoisting option : big)
    Make sure: for public directory: you select: build
    single page application: y

    ----------------------
    // FOR EVERY DEPLOY
    ----------------------
    4. npm run build
    5. firebase deploy
*/
