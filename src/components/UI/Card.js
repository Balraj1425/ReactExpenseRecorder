import './Card.css';

//use custom component as wrapper class
//value of children prop will be the content of the opening and closing tag of our custom component
//for passing the css classes to the wrapper component we can use props.classname along with the default class that we added for wrapper component
const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card