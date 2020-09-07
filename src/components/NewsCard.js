import React from 'react'
import '../index.css'
import { HashLink } from 'react-router-hash-link'

let a
const NewsCard = (props) => {
   if (props.category === 'event') {
      a = 'イベント'
   } else if (props.category === 'intern') {
      a = 'インターン'
   } else if (props.category === 'notice') {
      a = 'お知らせ'
   }
   return (
      <HashLink to={props.url}>
         <div className="card">
         <img
            src={props.headerImage}
            className="headerImage"
            alt="headerImage"
         />
         <p className="category">{a}</p>
         <span className="publishDate">{props.publishDate}</span>
         <p className="title">{props.title}</p>
         </div>
      </HashLink>
   )
}

export default NewsCard
