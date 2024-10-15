import { mostRecent } from '../../api/article';

async function homeLoader(){
    const article = await mostRecent();
   
    return article;
}

export { homeLoader }