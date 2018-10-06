import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, removeArticle } from "../actions/index";
const mapStateToProps = state => {
  return { articles: state.articles };
};
const mapDispatchToProps = dispatch => {
  return {
    removeArticle: id => dispatch(removeArticle(id))
  };
};
class ConnectedList extends Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(event) {
    event.preventDefault
    this.props.removeArticle(event.target.parentElement.id);
  }
  render() {
    return <ul className="list-group list-group-flush">
      {this.props.articles.map(el => (
        <li className="list-group-item" key={el.id} id={el.id}>
          {el.title} <a href="#" onClick={this.handleRemove}>remove</a>
        </li>
      ))}
    </ul>
  }
}
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
