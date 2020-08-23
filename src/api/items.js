import axios from 'axios'

const url = 'https://www.reddit.com/r/kpics/randomrising.json?limit=5';

export const fetchItems = async () => {
    const response = await axios.get(url);
    const children = response.data.data.children
    const items = children.map(({ data }) => {
        return {
            image: data.url,
            title: data.title,
            author: data.author
        }
    })
    return items
}