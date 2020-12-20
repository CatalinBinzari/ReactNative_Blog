import createDataContext from './createDataContext';

const blogReducer = (state, action) => { //state is blogPost
  switch (action.type) {
    case 'delete_blogpost':
      //filter iterates frow the elements and run a child function which we run in
      return state.filter(blogPost=>blogPost.id !== action.payload) //payload will the the id of blogpost we want ot delete
      //if its not true, state va primi obiectul in interiorul sau
    case 'add_blogpost':
      return [...state, {
        id: Math.floor(Math.random() * 99999),
        title: `Blog Post #${state.length + 1}`
      }];
    default:
      return state;
  }

}
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' })
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id }) //by convention: type and payload
  }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);