import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchJokes } from './redux/actions'

export class Categories extends Component {
    componentDidMount () {
        this.props.fetchJokes()
    }

    render() {
        const { jokes } = this.props
        return (
            <div>
            <h3>Joke Categories</h3>
            {jokes.data.map((category, idx) => 
                <Link to={"/jokes/" + category} key={idx}>
                    <p> {idx+1}. {category} </p>
                </Link>
            )}
        </div>
        )
       
    }
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes,
    }
}

const mapDispatchToProps = {
    fetchJokes
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)