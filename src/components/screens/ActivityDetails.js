import React from 'react'
import { 
    BackLink,
    SportPanel,
    NaturePanel,
    ArtsCraftsPanel,
    GamePanel
} from '../ui'

export const ActivityDetails = ({ id }) =>
    <section>
        <h1>Activity Details</h1>
        <p>activity id: {id}</p>
        <SportPanel />
        <NaturePanel />
        <ArtsCraftsPanel />
        <GamePanel />
        <BackLink />
    </section>
    