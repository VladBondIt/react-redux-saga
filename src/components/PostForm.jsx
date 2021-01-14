import React, { Component } from 'react';

class PostForm extends Component {

    state = {
        title: '',
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { title } = this.state;

        if (title.trim() !== '') {
            const newPost = {
                title,
                id: Date.now().toString(16)
            }

            console.log(newPost);
        } else {
            this.setState({ title: '' })
        }

        this.setState({ title: '' })

    }

    changeInputHandler = (e) => {

        this.setState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))

    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-5">
                    <label htmlFor="title" className="form-label"><h3>Heading Post</h3></label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler} />
                    <button className="btn btn-success" >Create</button>
                </div>
            </form>
        );
    }
}

export default PostForm;