import React from 'react'
import Video from './Video'
import './VideoCard.css'
import Image from './Image'

function VideoCard() {
    return (
        <div className="videoCard">
            <h2>Match Highlights</h2>
            <div className="videos">
            
                <Video image="https://www.newsbricks.com/root_upld/general-news/2020/09/55320/org_35532202009291256.jpg"
                 title="RCB vs Chennai"
                />
                
                 <Video image="https://resources.platform.iplt20.com/photo-resources/2020/11/10/aa050d96-1bb5-4b5e-9ab1-24ff5693ce53/RON_3777.JPG?width=2000&height=1333"
                 title="Dream 11 IPL Final"
                />
                 <Video image="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/russell-dhoni-1602034416.jpg"
                title="Rusell Power"                />
                 <Video image="https://e3.365dm.com/20/10/768x432/skysports-cricket-rajasthan-royals_5150188.jpg?20201025165940"
                title="Rajasthan Royals"
                />
                
            </div>
            <h2>2020 Leaders</h2>
            <div className="videos">
            
                <Image img="https://static.iplt20.com/players/210/1125.png"
                 title="KL Rahul"
                 desc="670 Runs"
                />
                
                 <Image img="https://static.iplt20.com/players/210/1664.png"
                 title="Kagiso Rabada"
                 desc="30 Wicket"
                />
                 <Image img="https://static.iplt20.com/players/210/1125.png"
                title="KL Rahul"   
                desc="132*"             />
                 <Image img="https://static.iplt20.com/players/210/5432.png"
                title="Varun Chakravarthy"
                desc="5/20"
                />
                 <Image img="https://static.iplt20.com/players/210/3502.png"
                title="Jofra Archer"
                desc="305 Points"
                />
                 <Image img="https://static.iplt20.com/players/210/107.png"
                title="Mumbai Indians"
                desc="IPL 2020 Winner "
                />
                
            </div>

            
        </div>
    )
}

export default VideoCard
