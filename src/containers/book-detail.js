import React, { Component } from 'react';
import { connect } from 'react-redux';



class BookDetail extends Component {

    render() {

        if (!this.props.book) {
            return (
                <div className="col-sm-8">
                    <div className="row margin-top">
                        <div className="col-sm-12">
                            <h3>Please select a book ...</h3>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="col-sm-8 ">
                    <div className="row margin-top">
                        <div className="col-sm-12 ">
                            <h1 >{this.props.book.title}</h1>
                         </div>
                     </div><br />
                     <div className="row margin-top">
                         <div className="col-sm-5 ">
                            <img className="img-responsive " src={this.props.book.imageUrl} />
                          </div>
                          <br />
                          <div className="col-sm-7 ">
                            <p><b>Description:</b> {this.props.book.description}</p>
                            <p><b>Price:</b> {this.props.book.price}</p>
                          </div>
                            
                        </div>
                    </div>
                    </div>
                
           
        )
    }
}


//Here we are mapping state to our props object
function mapStateToProps(state) {
    return {
        book: state.activeBook
    }

}


//Here we export the connect function and pass it the mapStateToProps , mapDispatchToProps and the class as arguments
export default connect(mapStateToProps)(BookDetail)
