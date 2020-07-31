import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {

    constructor (props) {
        super(props);
    }

    monthConverter(month) {
        const i = parseInt(month);
        const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthList[i-1];
    }

    formatDate(date) {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);
        const formattedDate = this.monthConverter(month) + " " + day + "," + year;
        return formattedDate;
    }

    render () {

        if (this.props.selectedDish != null) {

            const comment = this.props.selectedDish.comments.map( (commentDetail) => {
                return (
                    <p>{commentDetail.comment}<br/>-- {commentDetail.author}, {this.formatDate(commentDetail.date)}</p>
                )
            });

            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                            <CardBody>
                                <CardTitle><h5>{this.props.selectedDish.name}</h5></CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comment}
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