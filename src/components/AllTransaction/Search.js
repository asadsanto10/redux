import React, { useState } from 'react';

const Search = () => {
  // const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState('');
  // const dispatch = useDispatch();
  // const match = useMatch('/');
  // const navigate = useNavigate();
  const handelSubmit = (e) => {
    // e.preventDefault();
    // dispatch(searched(input.toLowerCase()));
    // // if user is not in homepage
    // if (!match) {
    //   navigate('/');
    // }
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        className="outline-none border mr-2 "
        type="search"
        value={input}
        // onChange={(e) => setInput(e.target.value)}
        name="search"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
