import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOneJoke } from './redux/actions'

export class Joke extends Component {
    state = {
        jokes:[], 
    }

    componentDidMount () {
        //fetch joke
        const category = this.props.match.params.category
        this.props.fetchOneJoke(category)
    }

    render () {
        const { jokes } = this.props
        return (
            <div style={{justifyContent:'center', padding:50}}>
                <h3> {this.props.match.params.category} Jokes</h3>
                {jokes.map((joke, idx)=> 
                <div key={idx}>
                    <p>{idx+1}. {joke.joke}</p>
                </div>
                )}

                <button onClick={this.fetchJokeFromJokeAPI} >Get New Jokes</button>
            </div>
        )
    }
}


const mapDispatchToProps = {
    fetchOneJoke
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes.jokes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Joke)