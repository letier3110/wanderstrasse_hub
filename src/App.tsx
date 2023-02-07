import { FC } from 'react'
import logo from './assets/logo.jpg'
import './App.css'
import { authorTgLink, authorTgPhoto, tgData, youtubeData } from './data/data'

export const App: FC = () => {
  return (
    <main>
      <header>
        <div className='logoWrapper'>
          <img src={logo} className='logo' />
          <h2>Wanderstrasse.tv</h2>
        </div>
        <div className='navigatorItems'>
          <div className='navigatorItem'>
            <div className='navigatorIcon'>1</div>
            <div className='navigatorText'>WC 3</div>
          </div>
          <div className='navigatorItem'>
            <div className='navigatorIcon'>2</div>
            <div className='navigatorText'>AoE2</div>
          </div>
          <div className='navigatorItem'>
            <div className='navigatorIcon'>3</div>
            <div className='navigatorText'>🇺🇦</div>
          </div>
          <div className='navigatorItem'>
            <div className='navigatorIcon'>4</div>
            <div className='navigatorText'>posts</div>
          </div>
        </div>
        <div className='socials'>
          <div>tg</div>
          <div>ds</div>
          <div>yt</div>
        </div>
      </header>
      <div className='App'>
        <div className='leftbar'>leftbar</div>
        <div className='content'>
          {tgData.map((item) => {
            return (
              <div className='post'>
                {item.image === authorTgPhoto ? (
                  <a className='tgLink' href={authorTgLink} target={'_blank'} rel='noopener noreferrer'>
                    Wanderbraun: Warcraft 3 и RTS
                  </a>
                ) : (
                  <div className='tgImage'>
                    <img src={item.image} className='postImage' />
                  </div>
                )}
                <div className='tgTitle mt24'>{item.text}</div>
              </div>
            )
          })}
          {youtubeData.map((item) => {
            const url = 'https://www.youtube.com/watch?v=' + item.videoId
            // const url = 'https://www.youtube.com/embed/' + item.videoId
            return (
              <a className='post' target={'_blank'} rel='noopener noreferrer' href={url} key={item.videoId}>
                <div className='videoImage'>
                  <img src={item.thumbnail} className='postImage' />
                </div>
                {/* <iframe
                  width='560'
                  height='315'
                  src={url}
                  title='YouTube video player'
                  frameBorder={0}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe> */}
                <div className='videoTitle'>{item.description}</div>
                {/* <div className='videoDescription'>
                  {item.description}
                </div> */}
              </a>
            )
          })}
        </div>
        <div className='rightbar'>rightbar</div>
      </div>
    </main>
  )
}
