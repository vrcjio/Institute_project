"use client"

import { useEffect, useState } from "react"
import Placeholder from 'react-bootstrap/Placeholder';

const LetestNewsFeed = () => {
    const [newsArr, setNewsArr] = useState([]);
    const [newsload, setLoad] = useState(true)
    const getNews = async () => {
        try {
            let result = await fetch("https://dummyjson.com/products?limit=10");
            result = await result.json();
            setNewsArr(result.products)
            setLoad(false)
        } catch (err) {
            alert("News Field Connection Feild")
        }
    }
    useEffect(() => {
        getNews();
    }, [])
    return (
        <>
            {
                newsload ? <>
                    <Placeholder as="p" animation="glow">
                        {Array.from(Array(10)).map((_, i) =>
                            <Placeholder xs={12} bg="info"/>
                        )}
                    </Placeholder>

                </>
                    :
                    newsArr.map(news => <>
                        <marquee>{news.title}</marquee><br />
                    </>
                    )
            }
        </>
    )
}

export default LetestNewsFeed