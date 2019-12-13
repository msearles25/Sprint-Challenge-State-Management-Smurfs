1. What problem does the context API help solve?

It is trying to solve the problem of 'prop drilling.'

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: they contain infromations with 'packets' of data such as the action type and the data or 'payload' associated with it.

reducers: will handle the actions and update the state, or 'store' accordingly 

store: the store is what sets the state or the intial state.

The store is known as the 'single source of truth' because it is the only way to change the data within the UI, so it needs to be updated or the data won't change.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is more like a 'global state', it would be used across the whole application.

Component state is a state being used in that component, so something like setting a state for an input.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Allows us to write action creators that return a function instead fo an action. It can be used to delay a dispatch of an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, I like it so much because it allows for a much easier state management across the whole app without needing to 'prop drill' through every component.
