import axios from 'axios'

const url = 'https://www.reddit.com/r/pics/top.json?limit=10&after=';

export const fetchItems = async (after) => {
    const response = await axios.get(url + after);
    const children = response.data.data.children
    const items = children.map(({ data }) => {
        return {
            image: data.url_overridden_by_dest,
            title: data.title,
            author: data.author,
            ref: data.name,
            group: data.link_flair_text,
            link: `https://reddit.com${data.permalink}`,
        }
    })
    return items
}