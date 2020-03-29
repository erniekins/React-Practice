class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const json = localStorage.getItem('count');
        const count = parseInt(json, 10);
        if(!isNaN(count)){
            this.setState(() => ({count}))
        }
        console.log(localStorage.getItem('count'))
        
    }
    componentDidUpdate(prevState, prevProps) {
        //const json = JSON.stringify(this.state.count)
        localStorage.setItem('count', this.state.count);
        console.log(localStorage.getItem('count'))
    }

    handleAddOne() {
        console.log("Add");
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        console.log("Minus");
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        console.log("reset");
        this.setState(() => {
            return {
                count: 0
            };
        });

        // //old way of doing above
            // can't update oo many states at once asynchronous if need access to previous state 
            // than should make sure and use function
        // this.setState({
        //     count: 0
        // });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    };
}

// Counter.defaultProps = {
//     count: 0
// };
ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;

// const addOne = () => {
//     count++;
//     console.log('Add');
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     console.log('Minus');
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     console.log("Reset");
//     renderCounterApp();
// };


// // const user = {
// //     name: "Erin",
// //     age: 225,
// //     location: "My Desk"
// // }
// // // var userName = "Erin";
// // // var userAge = 5;
// // // var userLocation = "My Desk";

// // function getLocation(location){
// //     if(location){
// //         return <p>Location: {location}</p>;
// //     }
// // };

// // //ternary operator true ? "Erin" : "Anonymous"

// // //logical and operator true && 'Some age'

// // const templateTwo = (
// //     <div>
// //         <h1>{user.name ? user.name : "Anonymous"}</h1>
// //         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
// //         {getLocation(user.location)}
// //     </div>
// // );

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
        
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();