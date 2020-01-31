import React from "react";
import '../index.css'
import {
  Card, CardText, CardBody,
  CardTitle, Col, CardImg
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
      <Col xs="6" md="4" xl="3">
        <Card className='character-row'>
          <CardBody>
          <CardImg top width="100%" src={props.character.image} alt="Card image cap" />
            <CardTitle><strong>{props.character.name}</strong></CardTitle>
            <CardText>Status: {props.character.status}</CardText>
            <CardText>{props.character.species}</CardText>
            <CardText>{props.character.type}</CardText>
            <CardText>{props.character.gender}</CardText>
            <CardText>Birthplace: {props.character.origin.name}</CardText>
          </CardBody>
        </Card>
      </Col>

  )
}