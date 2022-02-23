const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
const increment = () => ({
    type: INCREMENT,
})

const decrement = () => ({
    type: DECREMENT,
})



export {
    increment,
    decrement,
    INCREMENT,
    DECREMENT,
}