


import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
const popularContent = [
  {
    id: "cnt_001",
    title: "Top Article: AI Trends",
    badge: "Alex Rivera",
    avatar: "https://picsum.photos/200/200?random=7",
    count: 15400
  },
  {
    id: "cnt_002",
    title: "Viral Video: Funny Cats",
    badge: "Jordan Kim",
    avatar: "https://picsum.photos/200/200?random=8",
    count: 28750
  },
  {
    id: "cnt_003",
    title: "Popular Podcast: Tech Talk",
    badge: "Taylor Nguyen",
    avatar: "https://picsum.photos/200/200?random=9",
    count: 9200
  },
  {
    id: "cnt_004",
    title: "Trending Meme: Weekend",
    badge: "Casey Patel",
    avatar: "https://picsum.photos/200/200?random=10",
    count: 45600
  },
  {
    id: "cnt_005",
    title: "Hot Recipe: Vegan Burgers",
    badge: "Morgan Lee",
    avatar: "https://picsum.photos/200/200?random=11",
    count: 12300
  }
];

const latestTransactions =[
  {
    id: "txn_001",
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    avatar: "https://picsum.photos/200/200?random=1",
    count: 1300
  },
  {
    id: "txn_002",
    title: "Payment Received",
    badge: "Sarah Williams",
    avatar: "https://picsum.photos/200/200?random=2",
    count: 2450
  },
  {
    id: "txn_003",
    title: "Refund Processed",
    badge: "David Lee",
    avatar: "https://picsum.photos/200/200?random=3",
    count: 890
  },
  {
    id: "txn_004",
    title: "Invoice Paid Week",
    badge: "Emily Chen",
    avatar: "https://picsum.photos/200/200?random=4",
    count: 3200
  },
  {
    id: "txn_005",
    title: "Service Upgrade",
    badge: "James Rodriguez",
    avatar: "https://picsum.photos/200/200?random=5",
    count: 1750
  },
  
]





const CardList = ({title}:{title:string}) => {

const list = title === "Popular Content" ? popularContent : latestTransactions



  return (
    <div className=''>
      <h1 className='text-lg font-medium mb-6'>{title}</h1>
      <div className='flex flex-col gap-2'>
        {
            list.map(item=>(
                <Card key={item.id} className='flex flex-row items-center justify-between gap-4 p-4 '>
                    <div className='w-12 h-12 rounded-sm relative overflow-hidden'>
                        <Image src={item.avatar} alt={item.title} fill className='object-cover'/>
                    </div>
               
                <CardContent className='p-0 gap-2 flex-1 flex-col items-start'>
                    <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
                    <Badge className='text-xs font-light'>{item.badge}</Badge>
                </CardContent>
                <CardFooter className='p-0 '>
                    {item.count / 1000}K
                </CardFooter>
                </Card>
            ))
        }
      </div>
    </div>
  )
}

export default CardList
