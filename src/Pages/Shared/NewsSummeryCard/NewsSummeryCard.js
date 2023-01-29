import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar,  } from 'react-icons/fa';

const NewsSummeryCard = (props) => {
    const {_id, author, details, image_url,title,rating,total_view} = props.news;
    
    return (
        <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-content-center'>
        <div className='d-flex'>
        <Image  roundedCircle style={{height:'60px'}} src={author?.img}>
            
        </Image>
        <div className='ms-2'>
            <h5>{author?.name}</h5>
            <p>{author?.published_date}</p>
        </div>
       
        </div>
        <div>
        <FaShareAlt className='me-2'></FaShareAlt>
        <FaRegBookmark></FaRegBookmark>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url}/>
        <Card.Text>
         {details.length>250? <p>{details.slice(0,250)+'...'} <Link to={`/news/${_id}`}>read more</Link></p>: <p>{details}</p>
         }
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
         <div>
          <FaStar className='text-warning me-2'></FaStar>
          <span>{rating.number}</span>
         </div>
         <div>
          <FaEye className='me-2'></FaEye>
          <span>{total_view}</span>
         </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsSummeryCard;