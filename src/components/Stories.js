import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchStories from '../actions/index.js';


class Show extends Component {
  
  fetchStories(route) {
    this.props.fetchStories(route)
  }

  componentDidMount = () => {
    const { route } = this.props;
    this.fetchStories(route);
  }
  
  render() {
    const { stories } = this.props;
    const storiesList = stories.length ? (
      stories.map(story => {          
        return(            
            <li key={story.id}>
                <a href={story.url} target="_blank" rel='noopener noreferrer'>{story.title}</a>
                <br/><span className="details">Score: {story.score} - submitted by {story.by}</span>
          </li>
        )
      })
    ) : (
      <p>Loading stories...</p>
    )

    return (
      <div className="stories">
        <ul>
            {storiesList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let route;
  switch (ownProps.match.path.substring(1)) {
      case 'jobs': route = 'job';
      break;
      case '': route = 'top';
      break;
      default: route = ownProps.match.path.substring(1);
  }
  return {
      stories: state[route],
      route
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchStories: (route) => dispatch(fetchStories(route))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Show);