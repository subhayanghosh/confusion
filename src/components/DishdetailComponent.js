import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor (props) {
        super(props);
    }

    monthConverter(month) {
        const i = parseInt(month);
        const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return monthList[i-1];
    }

    formatDate(date) {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);
        const formattedDate = this.monthConverter(month) + " " + day + ", " + year;
        return formattedDate;
    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle><h5>{dish.name}</h5></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        const comment = comments.map( (commentDetail) => {
            return (
                <ul key={commentDetail.id} className="list-unstyled">
                    {commentDetail.comment}<br/><br/>-- {commentDetail.author}, {this.formatDate(commentDetail.date)}
                </ul>
            )
        });
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comment}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }

    }

    render () {

        if (this.props.dish != null) {
            
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );   
        }

        else {

            return (
                <div></div>
            );
        }

    }
}

export default DishDetail;