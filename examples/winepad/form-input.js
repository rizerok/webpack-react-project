import Rating from './rating';
import React, {Component, PropTypes} from 'react';
import Suggest from './suggest';
class FormInput extends Component {
    getValue() {}
    render() {
        const common = { // свойства, применимые для всех компонентов
            id: this.props.id,
            ref: 'input',
            defaultValue: this.props.defaultValue
        };
        switch (this.props.type) {
            case 'year':
                return (
                    <input
                        {...common}
                        type="number"
                        defaultValue={this.props.defaultValue ||
                    new Date().getFullYear()} />
                );
            case 'suggest':
                return <Suggest {...common}
                    options={this.props.options} />;
            case 'rating':
                return (
                    <Rating
                        {...common}
                        defaultValue={parseInt(this.props.defaultValue,10)} />
                );
            case 'text':
                return <textarea {...common} />;
            default:
                return <input {...common} type="text" />;
            
        }
    }
}


export default FormInput;