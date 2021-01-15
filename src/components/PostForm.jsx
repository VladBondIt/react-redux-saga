import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts, setAlertForm } from '../redux/actions/posts'
import AlertForm from './AlertForm';

class PostForm extends Component {

    state = {
        title: '',
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { title } = this.state;
        const { createPosts, setAlertForm } = this.props

        if (title.trim() !== '') {
            const newPost = {
                title,
                id: Date.now().toString(16)
            }

            createPosts(newPost)
            setAlertForm(false)
        } else {
            this.setState({ title: '' })
            setAlertForm(true)
        }

        this.setState({ title: '' })

        setTimeout(() => {
            setAlertForm(false)
        }, 3000);

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
                {this.props.alertForm && <AlertForm />}
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

const mapStateToProps = (state) => {
    return {
        alertForm: state.posts.alertForm
    }
}

const mapDispatchToProps = {
    createPosts,
    setAlertForm
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);