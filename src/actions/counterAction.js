export const INCREMENT ="INCREMENT"
export const DECREMENT ="DECREMENT"

const increment = (n) => {
    console.log("n="+n)
    return {
        "type": INCREMENT,
        "n": n
    }
}
const decrement = (n) => {
    return {
        type: DECREMENT,
        n: n
    }
}
export {increment, decrement }