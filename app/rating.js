import React, {Component} from 'react';
import classNames from 'classNames';
class Rating extends Component{
    constructor(props){
        super(props);
        this.state = {
            raiting:props.defaultValue,
            tmpRaiting:props.defaultValue
        };
    }
    getValue(){
        return this.state.rating;
    }
    setTemp(rationg){
        this.setState({
            tmpRating:rating
        });
    }
    setRating(rating){
        this.setState({
            tmpRating:rating,
            rating:rating
        });
    }
    reset(){
        this.setTemp(this.state.rating);
    }
    componentWillReceiveProps(newsProps){
        this.setRating(nextProps.defaultValue);
    }
    render(){
        const stars = [];
        for(let i=1;i<=this.props.max;i++){
            stars.push(<span className={i<=this.state.tmpRating ? 'rating-on':null}
                    key={i} 
                    onClick={!this.props.readonly && this.setRating.bind(this,i)}
                    onMouseOver={!this.props.readonly && this.setTemp.bind(this)}
                >{'\u2606'}</span>);
        }
        return (
            <div className={classNames({
                    Rating:true,
                    RatingReadonly:this.props.readonly
                })}
                onMouseOut={this.reset.bind(this)}>
                
                {stars}
                {this.props.readonly || !this.props.id 
                    ? null
                    : <input type="hidden" id={this.props.id} value={this.state.rating}/>
                }
                
            </div>
        );
    }
}

Rating.defaultProps = {
    defaultValue:0,
    max:5
};

export default Rating;