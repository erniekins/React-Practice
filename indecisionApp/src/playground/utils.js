// export { square, add, subtract as default };

console.log('Utils file');

export const square = (x) => x*x;

export const add = (a,b) => a+b;

// const subtract = (a,b) => a-b;

// export default subtract

export default (a,b) => a-b;