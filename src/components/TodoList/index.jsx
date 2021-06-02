import React from 'react';
import PropTypes from 'prop-types'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList(props) {
    const { todoList, onTodoClick } = props;
    const handleClick = index => {
        if (onTodoClick) {
            onTodoClick(index);
        }
    };

    return (
        <div>
            <ul className="todo-list">
                {
                    todoList.map((todo, index) =>
                        <li
                            key={todo.id}
                            onClick={() => handleClick(index)}
                        >
                            <span>{todo.id}</span><span>{todo.title}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default TodoList;