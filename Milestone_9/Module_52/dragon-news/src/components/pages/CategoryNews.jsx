import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Homelayout/NewsCard';

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
        <div>
            <h2 className='font-bold mb-5'>Total <span>{categoryNews.length}</span> news found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard news= {news} key= {news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;