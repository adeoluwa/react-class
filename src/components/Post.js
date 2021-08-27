import React, {useEffect} from 'react';
import { Spinner, Row, Col, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../actions/post.action';

export default function Post(props) {
  const state = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const getAllData = bindActionCreators(getPosts, dispatch)

  console.log(state);
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <Container>
      <h1 className="display-4 text-center">Post</h1>
      
      {state.isloading ? (
        <div className='text-center'>
          <Spinner animation='grow'/>
        </div>
      ):(
        <>
          <Row>
            {state.posts.slice(0, 30).map((post) => {
              return(
                <Col md={3} key={post?.id}>
                  <h4>
                    <Link>
                      {post?.title.slice(0, 10)}
                    </Link>

                    ...

                  </h4>
                </Col>
              )
            })}
          </Row>
        </>
      )}
    </Container>
  );
}
