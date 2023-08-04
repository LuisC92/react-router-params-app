import React from 'react'
import { useParams } from 'react-router-dom'

const artcilesData = [
    {
        id:1,
        title: "Test 1",
        description: "This is the first article"
    }, {
        id:2,
        title: "Test 2",
        description: "This is the second article"
    }, {
        id:3,
        title: "Test 3",
        description: "This is the third article"
    }
]


const ArticleDetails = () => {

    const {articleId} = useParams()

    return (
    <div>
        {artcilesData.filter(article => article.id === Number(articleId)).map(article => (
            <>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
            </>
        ))}
    </div>
  )
}

export default ArticleDetails