import React, { Component } from 'react';
import css from '../styles.module.css'
export class Searchbar extends Component {
    state = {
        query: '',
    };

    handleInputChange = event => {
        const { value } = event.currentTarget;

        this.setState({
            query: value.toLowerCase(),
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.query.trim() === '') {
            console.log("Hey")
        };
            this.props.onSubmit(this.state.query);
            this.resetForm();
        
    }

    resetForm = () => {
        this.setState({ query: '' });
    };
    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <input
                        className={css.SearchForminput}
                        type="text"
                        autoComplete="off"
                        value={this.state.query}
                        onChange={this.handleInputChange}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit" className={css.SearchFormbutton}>
                        <span className={css.SearchFormbuttonlabel}>Search</span>
                    </button>
                </form>
            </header>
        )
    }
}