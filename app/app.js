import React from 'react';
import ReactDOM from 'react-dom';
import style from './app.styl';
import {headers as h, data as d} from './data';

import Suggest from './suggest';
import Rating from './rating';

let headers = localStorage.getItem('headers') || h;
let data = localStorage.getItem('data') || d;

const Button = (props) => props.href
    ? <a {...props} className={style.button}></a>
    : <button {...props} className={style.button}></button>;


const CellForm = (props) =>
<form onSubmit={props.save}>
    <input type="text" defaultValue={props.cellContent}/>
</form>;

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

        this._preSearchData = null;

        this._sort = this._sort.bind(this);
        this._showEditor = this._showEditor.bind(this);
        this._save = this._save.bind(this);
        this._toggleSearch = this._toggleSearch.bind(this);
        this._search = this._search.bind(this);
        //this._download = this._download.bind(this);
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

        this.setState({
            edit:null,
            data:data
        });
    }
    _toggleSearch(){
        if(this.state.search){
            this.setState({
                search:false,
                data:this._preSearchData
            });
            this._preSearchData = null;
        }else{
            this._preSearchData = this.state.data;
            this.setState({
                search:true
            });
        }
    }
    _search(e){
        let needle = e.target.value.toLowerCase();
        if(!needle){
            this.setState({
                data:this._preSearchData
            });
            return;
        }
        let idx = e.target.dataset.idx;
        let searchdata = this._preSearchData.filter((row)=>{
            return row[idx].toString().toLowerCase().indexOf(needle) > -1;
        });

        this.setState({data:searchdata});
    }
    _download(format,ev){
        //ev.preventDefault();
        let contents = null;
        if(format ==='json'){
            contents = JSON.stringify(this.state.data);
        }else{
            contents = this.state.data.reduce((result,row)=>{
                return result + row.reduce((rowresult, cell, idx)=>{
                    return rowresult
                        +'"'
                        + cell.replace(/"/g,'""')
                        + '"'
                        + (idx < row.length - 1 ? ',' : '');

                },'') + '\n';
            },'');
        }

        let URL = window.URL || window.webkitURL;
        let blob = new Blob([contents],{type:'text/'+format});
        ev.target.href = URL.createObjectURL(blob);
        ev.target.download = 'data.' + format;
    }
    _renderTable(){
        return (
            <table className={style.excel}>
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
        let text = 'Search';
        if(this.state.search){
            text = 'Search is active';
        }
        return <div>
            <button onClick={this._toggleSearch}>{text}</button>
            <a href="data.json" onClick={this._download.bind(this,'json')}>Export JSON</a>
            <a href="data.csv" onClick={this._download.bind(this,'csv')}>Export CSV</a>
            <Button>123</Button>
        </div>;
    }
    _renderSearch(){
        if(!this.state.search){
            return null;
        }
        return <tr>
            {this.props.headers.map((_ignore,idx)=><td key={idx}>
                <input type="text" data-idx={idx} onChange={this._search} />
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
    <div>
        <Excel headers={headers} initialData={data} />

        <Suggest options={['eenie','meenie','miney','mo']}></Suggest>

        <Rating />
        <Rating defaultValue={4} />
        <Rating readonly={true} defaultValue={3}/>
    </div>

), document.getElementById('root'));