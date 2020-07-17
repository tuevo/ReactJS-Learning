# ReactJS Background for Beginners 🎉

## 1. Create React App
- See more instructions at https://reactjs.org/docs/create-a-new-react-app.html

## 2. Set up Environment Variables
- Install package for managing project environment variables
  ```
  npm install --save dotenv
  ```

- Create `.env` file at root directory and declare your environment variables inside. There are 2 kind of environment variables:
  + Default variable
    ```
    PORT=8000
    ```
  + Custom variable ( `REACT_APP_<YOUR_VARIABLE_NAME>` )
    ```
    REACT_APP_API_URL=http://localhost:3000/api
    ```

## 3. Component Base Concepts
- The UI is divided into Components for easy to manage.
- Component is reusable and easy to add or reject.

- There are two kind of Components:
  + Class Component
  + Functional Component

- People normally divide the UI into two kind of Components:
  + Container (Smart Component)
    + Fetch original data from Server or update data from `State`.
    + Represent flow of UI rendering.
    + Contain `Dumb Components` and give them data through `Prop`.

  + Child Component (Dumb Component)
    + Receive data from `Container` through `Prop`.
    + Render UI (may use State to process UI better).

- Prop
  + Is `Share data` transferred from `Container (Smart Component)` to `Child Component (Dumb Component)` as `value` or `method` to emit value from child to parent.

  + Can NOT be updated from `Child Component`.

- State
  + Is `Local data` initialized and used inside a component.

- Ref
  + Apply for creating a `reference` to a control in UI or Component.
  + Will not be `reset` its values after component re-rendered.

- Life Cycles (for `Class Component`)
  + Constructor()
    + Is called while component is being initialized.
    + Apply for Initializing `states` of component.

  + ComponentDidMount()
    + Is called after `the first` rendering of component.
    + Apply for calling API to fetch original data from `API Server`.

  + ComponentDidUpdate()
    + Is called after component's `state` updated.

  + ComponentWillUnmount()
    + Is called before a component will be rejected from DOM.

- Hooks (for `Functional Component`)
  + useRef()
  + useEffect()
  + useState()
  + Read more at https://reactjs.org/docs/hooks-intro.html

## 4. Global State
- What is Global State?
  + State holds data, which can be accessed from non-related components.

- Why using Global State?
  + Apply for building app's `Utility Components` (such as Loading Spinner, Notification Box, Dialog).
  + Apply for storing data, which can be shared to non-related components.

- How to use Global State?
  + Using `Redux` (RECOMMENDED)
    + Reducer
    + Action
    + Store
    
  + Using `React Context` (read more at https://reactjs.org/docs/context.html)

## 5. React Router
- Is apply for `page navigation` in your React App.

- Single route
  ```
  /tasks
  ```

- Nested route
  ```
  /tasks/details
  ```
- Read more at https://medium.com/@khaiphan/react-router-v4-2df49046ed63


## 6. Request API
- Using `fetch` or `axios` for calling API and fetch data from `API Server`.
- It is recommended to build an `API Request Service`, which contains functions for you to code less and call API more simply.

## 7. Authentication & Authorization
- `Authentication` includes tasks to check if guest is an `app user` before using app (such as Login feature).

- `Authorization` includes tasks to check `user role` to determine what data or features he can access or use by validating `token` stored in `localStorage`.

## 8. Deploy React App
- Deploy with `Firebase` because it is free and simple.
- See more instructions at https://www.robinwieruch.de/firebase-deploy-react-js
