import { FC } from 'react'
import logo from './assets/logo.jpg'
import { authorTgLink, authorTgPhoto, tgData, youtubeData } from './data/data'
import s from './App.module.css'

export const App: FC = () => {
  return (
    <main>
      <header>
        <div className={s.logoWrapper}>
          <img alt="logo" src={logo} className={s.logo} />
          <h2>Wanderstrasse.tv</h2>
        </div>
        <div className={s.navigatorItems}>
          <div className={s.navigatorItem}>
            <div className={s.navigatorIcon}>1</div>
            <div className={s.navigatorText}>WC 3</div>
          </div>
          <div className={s.navigatorItem}>
            <div className={s.navigatorIcon}>2</div>
            <div className={s.navigatorText}>AoE2</div>
          </div>
          <div className={s.navigatorItem}>
            <div className={s.navigatorIcon}>3</div>
            <div className={s.navigatorText}>🇺🇦</div>
          </div>
          <div className={s.navigatorItem}>
            <div className={s.navigatorIcon}>4</div>
            <div className={s.navigatorText}>posts</div>
          </div>
        </div>
        <div className={s.socials}>
          <div>tg</div>
          <div>ds</div>
          <div>yt</div>
        </div>
      </header>
      <div className={s.App}>
        <div className={s.leftbar}></div>
        <div className={s.content}>
          {tgData.map((item) => {
            const isLinkInsideText = item.text.includes('https://')
            return (
              <div className={s.post}>
                <a
                  className={[s.tgHeader, s.mb24].join(' ')}
                  href={authorTgLink}
                  target={'_blank'}
                  rel='noopener noreferrer'
                >
                  <img alt={'tg favicon'} src={'https://web.telegram.org/z/favicon.svg'} width={20} />
                  <div className={s.tgLink}>Wanderbraun: Warcraft 3 и RTS</div>
                </a>
                {item.image === authorTgPhoto ? null : (
                  <div className={s.tgImage}>
                    <img alt={item.text} src={item.image} className={s.postImage} />
                  </div>
                )}
                <div className={s.tgTitle}>
                  {isLinkInsideText ? item.text.slice(0, item.text.indexOf('https://')) : item.text}
                </div>
                {item.widget !== '' && <div className={s.mt24} dangerouslySetInnerHTML={{ __html: item.widget }} />}
              </div>
            )
          })}
          {youtubeData.map((item) => {
            const url = 'https://www.youtube.com/watch?v=' + item.videoId
            // const url = 'https://www.youtube.com/embed/' + item.videoId
            return (
              <div className={s.post} key={item.videoId}>
                <a
                  className={[s.tgHeader, s.mb24].join(' ')}
                  href={authorTgLink}
                  target={'_blank'}
                  rel='noopener noreferrer'
                >
                  <img alt="youtube logo" src={'https://www.youtube.com/s/desktop/156c3d3d/img/favicon_144x144.png'} width={20} />
                  <div className={s.tgLink}>Wanderbraun: Warcraft 3 и RTS</div>
                </a>
                <a target={'_blank'} rel='noopener noreferrer' href={url}>
                  <div className={s.videoImage}>
                    <img alt={item.description} src={item.thumbnail} className={s.postImage} />
                  </div>
                </a>
                {/* <iframe
                  width='560'
                  height='315'
                  src={url}
                  title='YouTube video player'
                  frameBorder={0}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe> */}
                <div className={s.mt12}>
                  <a className={[s.videoTitle].join(' ')} target={'_blank'} rel='noopener noreferrer' href={url}>
                    {item.description}
                  </a>
                </div>
                {/* <div className={s.videoDescription}>
                  {item.description}
                </div> */}
              </div>
            )
          })}
        </div>
        <div className={s.rightbar}></div>
      </div>
    </main>
  )
}
