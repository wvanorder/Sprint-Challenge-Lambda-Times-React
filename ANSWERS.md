[ x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
        
        
        PropTypes ensure that whatever data is being passed through props is meeting certain requirements. Say we have an array of people we are passing through a test to see if they are over 6 feet tall, but some pieces of data don't include height? Well, we should make sure that height is a required prop that way an error throws if we forget that!


- [x ] Describe a life-cycle event in React?
    
    
    A life-cycle event is something that happens to a React-app when... well, something happens. componentDidMount is a life-cycle event that will occur the first time the page is loaded onto the screen, and will help initialize state. DidUpdate happens when state is updated, and allows us to have certain actions occur every time we update something on the page!


- [ x] Explain the details of a Higher Order Component?
    
    
    A Higher Order Component is A component which takes in a component(or multiple) as an argument, and returns a component in return. An example would be our higher-order-function for determining whether a login page or homepage be displayed. It took in two components, and returned one or the other depending on other conditions.

    
- [ x] What are three different ways to style components in React? Explain some of the benefits of each.


    Vanilla CSS/SCSS (my preferred in most instances), styled-components, and libraries like ReactStrap or ANTD. Vanilla gives us total control, which is great for customization but also the most time-consuming. Styled-components give us reusability and fewer files to work with in some instances, but can be cumbersome to import so many different components. Libraries like ReactStrap give us pre-baked goodness, but customizing them to look different than the base styles can be difficult, which leaves customization potential relatively low.