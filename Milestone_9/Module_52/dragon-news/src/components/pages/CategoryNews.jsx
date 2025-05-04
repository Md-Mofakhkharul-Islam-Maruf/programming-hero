import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    // console.log(id, data)
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        if (id == 0) {
            setCategoryNews(data)
        } else if (id == 1) {
            const filternews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filternews)
        } else {
            const filternews = data.filter(news => news.category_id == id)
            // console.log(filternews)
            setCategoryNews(filternews)
        }
    }, [data, id])
    return (
        <div>total news: {categoryNews.length}</div>
    );
};

export default CategoryNews;