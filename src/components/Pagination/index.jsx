import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const onHandleClick = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    };

    return (
        <div>
            <button
                className="btn-pagination"
                disabled={_page <= 1}
                onClick={() => onHandleClick(_page - 1)}
            >
                PREV
            </button>
            <button
                className="btn-pagination"
                disabled={_page >= Math.ceil(_totalRows / _limit)}
                onClick={() => onHandleClick(_page + 1)}
            >
                NEXT
            </button>
        </div>
    );
}

export default Pagination;