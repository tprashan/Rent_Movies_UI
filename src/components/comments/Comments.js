import React, {Component} from "react";

export default class Comments extends Component {

    componentWillMount() {
        this.props.actions.fetchAllComments();
    }

    render() {
        const {comments} = this.props;

        return (
            <div className="m-rental-container">
                <If condition={comments != null}>
                    <h1 style={{marginTop: "15px", textAlign: "center", display: "inline-flex"}}>
                        Comment Section for Movies :)
                    </h1>
                    {comments.map((c, index) => {
                        return <div className="comment-box" key={index}>
                            <b>Comment:</b> <br/>
                            <p>{c.comment}</p>
                        </div>
                    })}
                </If>
            </div>
        )
    };
}