import React from 'react'
import {
    Thumbnail,
    BackLink
} from '../ui'

const thumb = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/15822985_10209615011705397_1587411091808219463_n.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=c6e817c8522b73dea03279ac79e31cb9&oe=5C53F59E'

const placeholderCounselors = [
    { id: 'DDD', name: 'counselor D', photo: { thumb } },
    { id: 'EEE', name: 'counselor E', photo: { thumb } },
    { id: 'FFF', name: 'counselor F', photo: { thumb } }
]

export const Counselors = ({ navigate }) =>
    <section>
        <h1>Counselors Screen</h1>
        {placeholderCounselors.map((counselor, i) => 
            <Thumbnail key={i} 
                link={`/counselor/${counselor.id}`}
                img={counselor.photo.thumb}
                navigate={navigate}>
                {counselor.name}
            </Thumbnail>
        )}
        <BackLink />
    </section>