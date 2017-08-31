import React from 'react';

class Suggest extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value:this.props.defaultValue
        };
    }
    getValue(){
        return this.refs.lowlovelinput.value;
    }
    render(){
        const randomid = Math.random().toString(16).substring(2);
        return <div>
            <input
                list={randomid}
                defaultValue={this.props.defaultValue}
                ref="lowlevelinput"
                id={this.props.id}
                onChange={e => this.setState({value: e.target.value})}
            />
            <datalist id={randomid}>{
                this.props.options.map((item,idx)=>
                    <option value={item} key={idx}></option>
                )
            }</datalist>
        </div>;
    }
}

export default Suggest;