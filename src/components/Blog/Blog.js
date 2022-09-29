import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>How Does react Work ?</h3>
            <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            <h3>Props vs stats ?</h3>
            <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            <h3>Usestate with api ?</h3>
            <p>Ans: Accepts a function that contains imperative, possibly effectful code.

                Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as Reacts render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.</p>

        </div>
    );
};

export default Blog;