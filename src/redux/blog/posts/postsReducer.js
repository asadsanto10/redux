/* eslint-disable eqeqeq */
import initialState from './initialState';

const postsReducer = (state = initialState, action) => {
  console.log(action?.payload?.searchText);
  switch (action.type) {
    // case SEARCHPOST:
    //   // return [state.some((item) => item.title === action.payload.searchText)];
    //   // return state.filter((post) => {
    //   //   // if (action.payload.searchText == '') {
    //   //   //   console.log('blank');
    //   //   // }
    //   //   const a = post.title.toLowerCase().match(action.payload.searchText.toLowerCase());
    //   //   return a;
    //   //   // if (action.payload.searchText == '') {
    //   //   //   console.log('dash');
    //   //   //   return state;
    //   //   // }
    //   //   // return state;
    //   //   // return post.title.toLowerCase() == action.payload.searchText.toLowerCase();
    //   // });

    //   return [state.filter((post) => post.title == '')];

    // // if (action.payload.searchText.length > 0) {
    // //   // return state.filter((post) =>
    // //   //   post.title.toLowerCase().match(action.payload.searchText.toLowerCase())
    // //   // );

    // //   return [
    // //     ...state,
    // //     {
    // //       title: action.payload.searchText,
    // //     },
    // //   ];
    // // }
    // // return state;
    // // return {
    // //   ...state,
    // //   title:
    // //   // posts: [
    // //   //   ...state.posts,
    // //   //   state.posts.filter((post) =>
    // //   //     post.title.toLowerCase().match(action.payload.searchText.toLowerCase())
    // //   //   ),
    // //   // ],
    // // };

    default:
      return state;
  }
};

export default postsReducer;
