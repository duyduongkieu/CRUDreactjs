import React, { Component } from 'react';

class TaskSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }
  onChange = event => {
    var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onSearch(value);
        this.setState({
            [name]: value
        })  
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render() {
    var { keyword } = this.state;
    return (
      <div className="">
        <div className="row">
          <div className="col-md-9 pr-0">
          <input type="text"
                    name="keyword"
                    value={keyword}
                    className="form-control"
                    placeholder="Tìm kiếm"
                    onChange={this.onChange}>
                </input>
          </div>
          <div className="col-md-3 pl-0">
            {/* <button className="btn btn-success" onClick={this.onSearch}>
              Tìm kiếm
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskSearch;
