import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {

};

function TodoForm(props) {
    const { onSubmit } = props;
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (title !== '') {
            onSubmit(title);
        }
        setTitle('');
    };
    // console.log(title);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">title</label>
                    <input
                        type="text"
                        placeholder="Input title here"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">
                    submit
                </button>
            </form>
        </div>
    );
}

export default TodoForm;

