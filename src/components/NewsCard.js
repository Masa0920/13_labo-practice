import React from 'react'
import "../static/css/screens/NewsCard.css"

export const NewsCard = () => {
   return (
      <div className="content">
         <table>
         <tbody>
            <tr>
               <th>9:30 - 10:00</th>
               <td colSpan="2">受付開始</td>
            </tr>
            <tr>
               <th>10:00 - 10:10</th>
               <td colSpan="2">開始の挨拶・学生振り分け</td>
            </tr>
            <tr>
               <th>10:10 - 10:40</th>
               <td colSpan="2">午前オンライン　1ターム</td>
            </tr>
            <tr>
               <th>10:40 - 10:50</th>
               <td colSpan="2">休憩・入替時間</td>
            </tr>
            <tr>
               <th>10:50 - 11:20</th>
               <td colSpan="2">午前オンライン　2ターム</td>
            </tr>
            <tr>
               <th>11:20 - 11:30</th>
               <td colSpan="2">休憩・入替時間</td>
            </tr>
            <tr>
               <th>11:30 - 12:00</th>
               <td colSpan="2">午前オンライン　3ターム</td>
            </tr>
            <tr>
               <th>12:00 - 12:10</th>
               <td colSpan="2">休憩・入替時間</td>
            </tr>
            <tr>
               <th>12:10 - 12:40</th>
               <td colSpan="2">午前オンライン　4ターム</td>
            </tr>
            <tr>
               <th>12:40 - 13:00</th>
               <td colSpan="2">休憩・入替時間</td>
            </tr>
            <tr>
               <th>13:00 - 13:45</th>
               <td colSpan="2">
               特別ガイダンス「コロナウイルス禍での遅れを取り戻す勉強法」
               </td>
            </tr>
            <tr>
               <th>13:45 - 14:00</th>
               <td colSpan="2">休憩入時間</td>
            </tr>
            <tr>
               <th>14:00 - 14:30</th>
               <td>午後オンライン　1ターム</td>
               <td rowSpan="8">対面説明会</td>
            </tr>
            <tr>
               <th>14:30 - 14:40</th>
               <td>休憩・入替時間</td>
            </tr>
            <tr>
               <th>14:40 - 15:10</th>
               <td>午後オンライン　2ターム</td>
            </tr>
            <tr>
               <th>15:10 - 15:20</th>
               <td>休憩・入替時間</td>
            </tr>
            <tr>
               <th>15:20 - 15:50</th>
               <td>午後オンライン　3ターム</td>
            </tr>
            <tr>
               <th>15:50 - 16:00</th>
               <td>休憩・入替時間</td>
            </tr>
         </tbody>
         </table>
      </div>
   )
}


export default NewsCard