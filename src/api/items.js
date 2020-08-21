import axios from 'axios'

const url = 'https://www.reddit.com/r/kpics/random.json';

export const fetchItem = async () => {
    const response = await axios.get(url);
    const data = response.data[0].data.children[0].data
    const image = data.url
    const title = data.title
    const author = data.author
    return { image, title, author }
}