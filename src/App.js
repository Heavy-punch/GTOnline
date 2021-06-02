import { useEffect, useState } from 'react';
import './App.css';
import queryString from "query-string"
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love you" },
    { id: 2, title: "I hate you" },
    { id: 3, title: "I miss you" }
  ]);

  const [hide, setHide] = useState(false);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    totalRows: 11,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filter);
        // const requestURL = `http://js-post-api.herokuapp.com/api/posts?_limit=${pagination._limit}&_page=${pagination._page}`;
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPagination(responseJSON.pagination)
        // console.log(pagination);
        setPostList(data);
      } catch (error) {
        console.log("failed to fetch data from server: ", error.message);
      }


    }
    fetchPostList();
  }
    , [filter]);

  const handleTodoClick = (index) => {
    // console.log(index);
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    // console.log(newTodoList);
    setTodoList(newTodoList);
  };

  const handleSubmit = (newTitle) => {
    // console.log(newTitle);
    let newTodoList = [...todoList];
    let newTodo = { id: newTodoList[newTodoList.length - 1].id + 1, title: newTitle }
    // console.log(newTodo);
    newTodoList.push(newTodo);
    // console.log(newTodoList);
    setTodoList(newTodoList);
  };

  const handlePageChange = (newPage) => {
    // console.log(newPage);
    setPagination({
      ...pagination,
      _page: newPage,
    });
    setFilter({ ...filter, _page: newPage });
  };

  const handleSearchTerm = (newFilter) => {
    console.log(newFilter);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm
    });
  };

  return (
    <div className="app">
      <p>hello world</p>
      {/* <ColorBox />
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleSubmit} />
      <PostFilterForm onSubmit={handleSearchTerm} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {/* {hide || <Clock />}
      <button
        onClick={() => { hide === true ? setHide(false) : setHide(true) }}
        className={hide === true ? "button hide" : "button"}
      >
        {hide === true ? "show me" : "hide me"}
      </button> */}
      <MagicBox />

    </div>
  );
}

export default App;
