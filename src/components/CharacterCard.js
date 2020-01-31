import React from "react";
import '../index.css'
import {
  Card, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
      <Col xs="6" md="4" xl="3">
        <Card className='character-row'>
          <CardBody>
            <CardTitle>{props.character.name}</CardTitle>
            <CardText>Status: {props.character.status}</CardText>
            <CardText>{props.character.species}</CardText>
            <CardText>{props.character.type}</CardText>
            <CardText>{props.character.gender}</CardText>
          </CardBody>
        </Card>
      </Col>

  )
}