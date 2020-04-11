import React, {  useState, useEffect, } from "react";
import { Link, } from "react-router-dom";
import { Card, } from 'semantic-ui-react';
import axios from 'axios';

const Artist = (props) => {
  const { albums, setAlbums } = useState([]);
 
  const artist = {id: props.id, albums: props.albums, genre: props.genre, }
 
 
  // let albumsShow = artist.albums.map((str) => ({ name: str}));
  
  // const renderAlbums = () => {
  //   return(
  //   albumsShow.map(album=>{
  //     return album.name
  //   }))

    // const renderArtists = () => {
    //   return artists.map( artist => (
    //     <Artist key={artist.id} {...artist} />
    //   ))
    // };
    // return( albums.forEach( album => {
    //   return "album"
    // }));
  // };

  return (
    <Card>
      <Card.Header>Artist</Card.Header>
      <Card.Content>Genre: {props.genre}</Card.Content>
      <Card.Content>Albums: {props.albums}</Card.Content>
    </Card>
  )
}

export default Artist;