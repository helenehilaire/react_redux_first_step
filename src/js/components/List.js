import React from "react";
import { connect } from "react-redux";

const mapStateToProp = state => {
    return { articles: state.articles };
}

const ConnectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
)

const List = connect(mapStateToProp)(ConnectedList);

export default List;