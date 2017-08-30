import React from 'react';
import ReactDOM from 'react-dom';
import './style.styl';
import {headers, data} from './data';



class CellForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <form onSubmit={this.props.save}>
            <input type="text" defaultValue={this.props.cellContent}/>
        </form>;
    }
}

class Excel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.initialData,
            sortBy:null,
            descending:false,
            edit:null,//{row:index,cell:index}
            search:false
        };
        this._sort = this._sort.bind(this);
        this._showEditor = this._showEditor.bind(this);
        this._save = this._save.bind(this);
        this._toggleSearch = this._toggleSearch.bind(this);
    }
    _sort(e){
        let col = e.target.cellIndex;
        let data = this.state.data.slice();
        let descending = this.state.sortBy === col && !this.state.descending;

        data.sort((a,b)=>{
            return descending
                ? a[col] > b[col] ? 1 : -1
                : a[col] < b[col] ? 1 : -1;
        });

        this.setState({
            data,
            sortBy:col,
            descending
        });
    }
    _showEditor(e){
        this.setState({
            edit:{
                row:parseInt(e.target.dataset.row,10),
                cell:e.target.cellIndex
            }
        });
    }
    _save(e){
        e.preventDefault();
        let input = e.target.firstChild;
        let data = this.state.data.slice();

        data[this.state.edit.row][this.state.edit.cell] = input.value;

        console.log(input,data,this.state.edit.row,this.state.edit.cell);

        this.setState({
            edit:null,
            data:data
        });
    }
    _toggleSearch(){
        if(this.state.search){
            this.setState({
                search:false,
                data:this.preSearchData
            });
            this.preSearchData = null;
        }else{
            this._preSearchData = this.state.data;
            this.setState({
                search:true
            });
        }
    }
    _search(){
        
    }
    _renderTable(){
        return (
            <table>
                <thead onClick={this._sort}>
                    <tr>
                        {this.props.headers.map(
                            (title,idx)=>(<th key={idx}>
                                {title}
                                {(this.state.sortBy===idx) ? ` ${this.state.descending? '\u2191' : '\u2193'} ` : null}
                            </th>)
                        )}
                    </tr>
                </thead>
                <tbody onDoubleClick={this._showEditor}>
                    {this._renderSearch()}
                    {this.state.data.map(
                        (row,rowIdx)=>(
                            <tr key={rowIdx}>
                                {row.map((cell,idx)=>{
                                    let edit = this.state.edit;
                                    if(
                                        edit
                                        && edit.row === rowIdx
                                        && edit.cell === idx
                                    ){
                                        return <td data-row={rowIdx} key={idx}>
                                            <CellForm cellContent={cell} save={this._save}></CellForm>
                                        </td>;
                                    }else{
                                        return <td data-row={rowIdx} key={idx}>{cell}</td>;
                                    }
                                })}
                            </tr>)
                    )}
                </tbody>
            </table>
        );
    }
    _renderToolbar(){
        return <button onClick={this._toggleSearch}>Search</button>;
    }
    _renderSearch(){
        if(!this.state.search){
            return null;
        }
        return <tr>
            {this.props.headers.map((_ignore,idx)=><td key={idx}>
                <input type="text" data-idx={idx} />
            </td>)}
        </tr>;
    }
    render(){
        //let Table = this._renderTable;
        return <div>
            {this._renderToolbar()}
            {this._renderTable()}
        </div>;
    }
}

ReactDOM.render((
    <Excel headers={headers} initialData={data} />
), document.getElementById('root'));