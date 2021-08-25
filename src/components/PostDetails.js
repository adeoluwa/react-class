import React,{useState, useEffect} from 'react';
import { Spinner, Container, Row, Alert } from 'react-bootstrap';
import axios from 'axios';
import Post from './Post';


export default function PostDetails(props) {
    const [post, setPost] = useState(null);
    const [err, setErr] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const [show, setShow] = useState(false)

    useEffect(() =>{
        axios
        .get`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
    
        .then((response) => {
            setPost(response.data);
            setIsloading(false);
        })
        .catch((err) => {
            setTimeout(() =>{
                setErr(true);
                setShow(true);
                setIsloading(false);
            }, 5000);
        });

    }, []);


    console.log(Post)
    return (
        <Container>
            {err && show ? (
                <Alert variant="danger" onClose={() => setShow(false)}>
                    <Alert.Heading>oh snap! You got an error!</Alert.Heading>
                    <p>Check your network settings and reload to try again later</p>
                </Alert>
            ):(
                ""
            )}
            {isLoading ? (
                <div className="text-center my-4">
                    <Spinner animation="grow"/>
                </div>
            ):(
                <>
                    <h1 className="text-center my-4">{Post?.title}</h1>
                    <p>{post?.body}</p>
                </>
            )}
        </Container>
    );
}
