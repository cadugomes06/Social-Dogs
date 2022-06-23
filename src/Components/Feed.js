import React from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinit, setInfinit] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    function infinitScroll() {
    if (infinit === true) {
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight
      if (scroll > height * 0.85 && !wait) {
        setPages((pages) => [...pages, pages.length + 1 ])
        wait = true
        setTimeout(() => {
          wait = false
        }, 500)
      }
    }
    }

    window.addEventListener('wheel', infinitScroll)
    window.addEventListener('scroll', infinitScroll)
    return () => {
    window.removeEventListener('wheel', infinitScroll)
    window.removeEventListener('scroll', infinitScroll)

    }
  }, [infinit])
  
  return (
    <section>
       {modalPhoto &&  <FeedModal  
       photo={modalPhoto} setModalPhoto={setModalPhoto}/>  }

       {pages.map((page)=>  <FeedPhotos user={user}
        page={page}
         setModalPhoto={setModalPhoto}
         setInfinit={setInfinit}  />)}

         
        
    </section>
  )
}

export default Feed