import axios from 'axios'

const url = 'https://www.reddit.com/r/kpics/top.json?limit=10&after=';

export const fetchItems = async (after) => {
    const response = await axios.get(url + after);
    const children = response.data.data.children
    const items = children.map(({ data }) => {
        return {
            image: data.url,
            title: data.title,
            author: data.author,
            ref: data.name
        }
    })
    return items
}