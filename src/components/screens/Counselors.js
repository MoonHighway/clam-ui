import React from 'react'
import { Thumbnail, BackLink } from '../ui'
import { useNavigate } from "react-router-dom"

// TODO: Fetch Data from the API for real

const placeholderCounselors = [
  { id: 'shrutikapoor08', name: 'Shruti Kapoor', photo: { thumb: "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1589491019/counselors/shrutikapoor08-thumb.jpg" } },
  { id: 'maggieappleton', name: 'Maggie Appleton', photo: { thumb: "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1589491019/counselors/maggieappleton-thumb.jpg" } },
  { id: 'saraviera', name: 'Sara Viera', photo: { thumb: "https://res.cloudinary.com/hmaz4q3oh/image/upload/v1589491019/counselors/saravieira-thumb.jpg" } }
]

export const Counselors = () => {
  let navigate = useNavigate()
  return (
    <section>
      <h1>Camp Lambda Counselors</h1>
      {placeholderCounselors.map((counselor, i) => (
        <Thumbnail
          key={i}
          link={`/counselor/${counselor.id}`}
          navigate={navigate}
        >
          {counselor.name}
          <img src={counselor.photo.thumb} />
        </Thumbnail>
      ))}
      <BackLink />
    </section>
  )
} 
