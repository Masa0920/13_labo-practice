import React from 'react'
import "../static/css/screens/13Labo.css"
import NewsCard from '../components/NewsCard'



const Labo = (props) => {
   // let newslist = ''
   // let newslist2 = []
   // if (props.news.length && props.news.length <= 4) {
   //    newslist = props.news.map((item) => (
   //       <div key={item.sys.id}>
   //          <NewsCard
   //          url={`/News/${item.sys.id}#detail`}
   //          headerImage={item.fields.headerImage.fields.file.url}
   //          publishDate={item.fields.publishDate}
   //          title={item.fields.title}
   //          category={item.fields.category.fields.slug}
   //          />
   //       </div>
   //    ))
   //    } else if (props.news.length) {
   //    for (let i = 0; i < 4; i++) {
   //       newslist2.push(
   //          <NewsCard
   //          key={i}
   //          url={`/News/${props.news[i].sys.id}#detail`}
   //          // headerImage={props.news[i].fields.headerImage.fields.file.url}
   //          // publishDate={props.news[i].fields.publishDate}
   //          title={props.news[i].fields.title}
   //          category={props.news[i].fields.category.fields.slug}
   //          headerImage={props.news[i].fields.headerImage.fields.file.url}
   //          />
   //       )
   //    }
   //    } else {
   //    newslist = <p>坖得中</p>
   //    }

   return (
      <div className="labo" >
         <div className="img" ></div>
         <div className="news" >
            <div className="news-title" >
               <h2>NEWS</h2>
               <p>新着情報</p>
               <div className="see-all" >SEE ALL</div>
            </div>
            <div className="news-content" >
               {/* {newslist}
               {newslist2} */}
            </div>
         </div>
      </div>
   )
}

export default Labo