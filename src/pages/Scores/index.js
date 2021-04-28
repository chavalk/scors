import React from 'react';
import ScoresRow from '../../components/ScoresRow';

const Scores = () => {
    return (
        <>
            <ScoresRow
                // League
                nba="NBA"
                // Game one
                awayLogo1="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/orl.png&h=70&w=70"
                awayTeam1="Magic"
                homeLogo1="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cle.png&h=70&w=70"
                homeTeam1="Cavaliers"
                // Game two
                awayLogo2="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/atl.png&h=70&w=70"
                awayTeam2="Hawks"
                homeLogo2="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/phi.png&h=70&w=70"
                homeTeam2="76ers"
                // Game three
                awayLogo3="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/lal.png&h=70&w=70"
                awayTeam3="Lakers"
                homeLogo3="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/wsh.png&h=70&w=70"
                homeTeam3="Wizards"
                // Game four
                awayLogo4="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/cha.png&h=70&w=70"
                awayTeam4="Hornets"
                homeLogo4="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/bos.png&h=70&w=70"
                homeTeam4="Celtics"
            />
        </>
    );
}

export default Scores;