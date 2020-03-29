class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this); //access to setState
        this.state = {
            details: false
        };
    }
    handleClick () {
        console.log("!");
        this.setState((prevState) => {
            if(prevState.details === true) {
               return {
                    details: false
                }
            } else {
                return {
                    details: true
                }
            }
            //visibility: !prevState.visibility
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleClick}>{this.state.details ? 'Hide Details' : 'Show Details'}</button>
                {this.state.details && (<div><p>These are details you can now see!</p></div>)}
            </div>
        )
    }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let message = "Show Details";
// let show = true;

// const details = () => {
//     if (message == "Show Details" ){
//         message = "Hide Details";
//         show = false;
//         renderBuild();
//     } else {
//         message = "Show Details";
//         show = true;
//         renderBuild();
//     }
// };

// The example build it 

// let visibility = false;

// constToggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && (<div><p>These are details you can now see!</p></div>)}
//         </div>
//     )
// }

// const appRoot = document.getElementById('app');

// const renderBuild = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={details}>{message}</button>
//             <p>{show ? true: "Hey. These are some details you can now see!"}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderBuild();