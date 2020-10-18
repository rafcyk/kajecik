import React, { Component } from 'react';
import Poem from '../components/Poem';
import PaginationNumbers from '../components/PaginationNumbers';

class Poems extends Component {
    state = {
        poems: [],
        currentPage: 1,
        postsPerPage: 6,
    }

    componentDidMount(){
        fetch('http://localhost:1337/poems')
        .then(res => res.json())
        .then(res => {
            this.setState({
                poems: res
            })
        })
    }

    handleClickShowPoem(e){
        e.target.parentNode.classList.toggle('poem-down');
        e.target.querySelector('img').classList.toggle('change-arrow');
    }

    render() {
        const { poems,currentPage, postsPerPage } = this.state;

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPost = poems.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = (pageNumber) => {
            this.setState({
                currentPage: pageNumber
            })
        }

        return (
            <>
                <div className = {poems.length === 0 ? 'loader' : 'load-display'}></div>
                <section className = {poems.length === 0 ? 'load-display' : 'poems'}>
                    <div className="wrap-poems">
                        <Poem 
                        poems = {currentPost} handleClickShowPoem = {this.handleClickShowPoem}/>
                        <PaginationNumbers 
                        postsPerPage={postsPerPage} 
                        totalPosts={poems.length}
                        paginate={paginate}/>
                    </div>
                </section>
            </>
        );
    }
}

export default Poems;