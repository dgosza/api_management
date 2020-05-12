import React from 'react';
import Aux from '../../../hoc'

import LineOfTweet from '../LineOfTweet'

//Material UI
import Divider from '@material-ui/core/Divider'

const TopTrendsLondon = ({tweetsLondon, tweetsLimit}) => {
    return (
        <Aux>

            {tweetsLondon.slice(0, tweetsLimit).map((eachTweet, index) => (
                <Aux key={index}>
                    <LineOfTweet nameTweet={eachTweet.name} urlTweet={eachTweet.url} tweet_volume={eachTweet.tweet_volume} />
                    <Divider />
                </Aux>
            ))}

        </Aux>
    )
}

export default TopTrendsLondon