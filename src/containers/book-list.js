import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  //here we are using a map function to return an li containing prop data
  renderList() {
    return this
      .props
      .books
      .map((book) => {
        return (<li
          onClick={() => this.props.selectBook(book)}
          className="list-group-item margin-top "
          key={book.title}
        >
          <div className="media">
            <div className="media-left">             
                <img id="liImage" className="media-object" src={book.imageUrl}  />              
            </div>            
            <div className="media-body ">
              <p className="media-heading "><b>{book.title}</b></p>
           </div>
         </div>
          
        </li>
        )
      })
  };


  //The render function takes the returned renderList of li's
  render() {
    return (
      <div>
        <ul className="media-list col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

//Here we are mapping state to our props object
function mapStateToProps(state) {
  return {
    books: state.books
  }

}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all
  //of our reducers
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch)

}

//Here we export the connect function and pass it the mapStateToProps , mapDispatchToProps and the class as arguments
export default connect(mapStateToProps, mapDispatchToProps)(BookList)