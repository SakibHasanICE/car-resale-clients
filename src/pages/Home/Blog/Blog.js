import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mb-9">
        <h1 className="text-xl">
          1.What are the different ways to manage a state in a React
          application?
        </h1>
        <p>
          Which state management is best in React? React's useState is the best
          option for local state management. If you need a global state
          solution, the most popular ones are Redux, MobX, and the built-in
          Context API. Your choice will depend on the size of your project, your
          needs, and your engineers' expertise.
        </p>
      </div>
      <div  className="mb-9">
        <h1 className="text-xl">2.How does prototypical inheritance work?</h1>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object,
          we use Object. getPrototypeOf and Object
        </p>
      </div>
      <div  className="mb-9">
        <h1 className="text-xl">
          3. What is a unit test? Why should we write unit tests?
        </h1>
        <p>
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property. The
          isolated part of the definition is important. <br></br>
          For Test-Driven Development TDD, you write unit tests before writing
          any implementation. This makes your implementation details in your
          code shorter and easier to understand. In this instance, the best time
          to write unit tests is immediately. For others, most developers write
          unit tests after the code's been written
        </p>
      </div>
      <div  className="mb-9">
        <h1 className="text-xl">4.React vs. Angular vs. Vue?</h1>
        <p>
          React is a UI library, Angular is a fully-fledged front-end framework,
          while Vue.js is a progressive framework. They can be used almost
          interchangeably to build front-end applications, but theyre not 100
          percent the same, so it makes sense to compare them and understand
          their differences. <br></br>
          The Vue.js core library focuses on the View layer only. Its called a
          progressive framework because you can extend its functionality with
          official and third-party packages, such as Vue Router or Vuex, to turn
          it into an actual framework. <br></br>
          AngularJS, the original framework, is an MVC Model-View-Controller
          framework. But in Angular 2, theres no strict association with
          MV*-patterns as it is also component-based. Projects in Angular are
          structured into Modules, Components, and Services. Each Angular
          application has at least one root component and one root module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
