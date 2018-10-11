import axios from 'axios';

export default function fetchStories(route){
    return (dispatch) => {
        return axios.get('https://hacker-news.firebaseio.com/v0/'+route+'stories.json?print=pretty')
        .then(data => data.data.slice(0,15))
        .then(idList => idList.map(id => {
          return axios.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json')
          .then(story => {
              if (!story ) {return }
              dispatch(addStory(story.data, route))
            })
        }))
    }
}

export function addStory(story, route) {
    return {
        type: 'ADD_STORY',
        story,
        route
    }
}