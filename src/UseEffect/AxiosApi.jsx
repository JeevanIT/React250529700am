import React,{ useState,useEffect} from 'react'
import axios from 'axios';


const AxiosApi = () => {
    // Axios is a promise-based HTTP client for the browser and Node.js.
    // It is used to make HTTP requests to fetch or send data to a server.
    // Axios provides a simple API for making requests and handling responses.
    const [photos, setPhotos] = useState([]);
    const myphotos = [
        {
            id: 1,
            title: 'Peacock-feather',
            url: 'https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg',
            albumId: 1
        },
        {
            id: 2,
            title: 'Beach-Houses',
            url: 'https://e0.pxfuel.com/wallpapers/335/92/desktop-wallpaper-beach-houses-beach-bungalow.jpg',
            albumId: 1
        },
        {
            id: 3,
            title: 'Beautiful-of-american-places',
            url: 'https://e1.pxfuel.com/desktop-wallpaper/782/988/desktop-wallpaper-beautiful-of-american-places-and-of-world-pretty-places-thumbnail.jpg',
            albumId: 1
        },
        {
            id: 4,
            title: 'Bora-bora-sea-palms',
            url: 'https://e0.pxfuel.com/wallpapers/736/461/desktop-wallpaper-bora-bora-sea-palms-paradise-hammock-beach-vacation-skyphoenixx1-summer-cabins-clouds-nature-sky-ocean-thumbnail.jpg',
            albumId: 1
        },
        {
            id: 5,
            title: 'Beautiful-places',
            url: 'https://e0.pxfuel.com/wallpapers/100/1000/desktop-wallpaper-beautiful-places-nature-thumbnail.jpg',
            albumId: 1
        },
        {
            id: 6,
            title: 'Beautiful-places',
            url: 'https://e0.pxfuel.com/wallpapers/100/1000/desktop-wallpaper-beautiful-places-nature-thumbnail.jpg',
            albumId: 1
        }
    ]; 
    
    const menunavlist = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Services', path: '/services' },
        { id: 5, name: 'Gallery', path: '/gallery' },
        { id: 6, name: 'Blog', path: '/blog' },
        { id: 7, name: 'FAQ', path: '/faq' },
        { id: 8, name: 'Testimonials', path: '/testimonials' },
        { id: 9, name: 'Portfolio', path: '/portfolio' },
        { id: 10, name: 'Careers', path: '/careers' }
    ]

    useEffect(() => {
        // Fetching photos from the API
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                setPhotos(response.data);
            })
            .catch(error => {
                console.error('Error fetching photos:', error);
            });
    })

  return (
    <div>

        <h2>Menu Nav List</h2>
        { menunavlist.map((menu) => (
            <div key={menu.id} style={{border: '1px solid #ccc', padding: '10px', width: '200px', margin: '10px',display: 'inline-block'}}>
                <h3>{menu.name}</h3>
                <p><strong>Path:</strong> {menu.path}</p>
            </div>
        ))}
    <h3>AxiosApi</h3>

    <h3>My Photos</h3>
    {        myphotos.map((myphoto) => (
        <div key={myphoto.id} style={{border: '1px solid #ccc', padding: '10px', width: '300px',display: 'inline-block', margin: '10px'}}>
            <h4>{myphoto.title}</h4>
            <img src={myphoto.url} alt={myphoto.title} style={{width: '100%'}} />
            <p><strong>Album ID:</strong> {myphoto.albumId}</p>
            </div>
            ))
            }

<h3>Photos from API</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            {photos.map((photo) => (
            <div key={photo.id} style={{border: '1px solid #ccc', padding: '10px', width: '300px'}}>
                <h4>{photo.title}</h4>
                <img src={photo.url} alt={photo.title} style={{width: '100%'}} />
                <p><strong>Album ID:</strong> {photo.albumId}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default AxiosApi