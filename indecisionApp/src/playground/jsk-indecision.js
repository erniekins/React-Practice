console.log('app.js is running');

let app = {
    title: "Indecision App",
    subtitle: "Let a computer make all your decisions",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(option);
        renderIndecision();
    }

};

const remove = () => {
    app.options = [];
    renderIndecision();
};

const makeDecision = () => {
    const rando = Math.floor(Math.random()*app.options.length);
    const option = app.options[rando];
    alert(option);
    console.log(rando);
};

const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);

const renderIndecision = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I Do?</button>
        <button onClick={remove}>Remove All</button>
        <ol>
            {app.options.map((option) => <li key={option}>{option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);
    ReactDOM.render(template, appRoot);
}

renderIndecision();
