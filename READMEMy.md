<!-- npx create-react-app myapp  : it take time to creat app  so we can make app using vite (i.e bundle-->

The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last.

<!-- <!-- -->

A better alternative to this is using useContext hook. The useContext hook is based on Context API and works on the mechanism of Provider and Consumer. Provider needs to wrap components inside Provider Components in which data have to be consumed. Then in those components, using the useContext hook that data needs to be consumed. -->

 <!-- context api -->

Context API allows data to be passed through a component tree without having to pass props manually at every level.

<!-- redux -->

it's mostly used as a state management tool(idhar udhar jo data passed ho rh ) with React, you can use Redux with any other JavaScript framework or library.
