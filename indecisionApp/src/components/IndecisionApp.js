import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))   
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const rando = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[rando];
        this.setState(() => ({selectedOption: option}))
        console.log(rando);    
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter Valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists "
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };
    clearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
        console.log("clearing");
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));
            }
        } catch (e) {
        }
        console.log('componentDidMount!')
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
            console.log("Updated!");
        }
        
    }
    componentWillUnmount() {
        console.log("unmounted")
    }

    render() {
        const subtitle = "Let a computer make all your decisions"
        //let options = ["Nothing", "Something", "Everything"]

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                        </div>
                        <OptionModal 
                            selectedOption={this.state.selectedOption}
                            clearSelectedOption={this.clearSelectedOption}
                        />  
                    </div>
                    
            </div>
        );
    }
}

export default IndecisionApp;