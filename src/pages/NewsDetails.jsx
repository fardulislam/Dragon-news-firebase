import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id}=useParams()

    const [news,setnews]=useState({})
    // console.log(data,id,news)

    useEffect(()=>{
        const newsdetails = data.find(singlenews=>singlenews.id==id)
         setnews(newsdetails)

    },[data,id])
   
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-9'>
                    <h2 className='font-bold  mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;