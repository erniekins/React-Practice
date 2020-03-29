import { createStore} from 'redux';
console.log('101');

const store = createStore((state = { count: 0 }) => {
    return state;
})

console.log(store.getState());