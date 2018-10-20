import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import {selectTerm, getMembers} from '../redux/members/Api'
import DropdownFilter from '../components/filter/DropdownFilter'


class FilterBar extends Component {
  termsList = () => {
    const possibleTerms = []
    this.props.members.allMembers.forEach(member => {
      member.terms_on.forEach(term => {
        if (!possibleTerms.includes(term)) {
          possibleTerms.push(term)
        }
      })
    })

    return possibleTerms
  }

  async componentDidMount() {
    await this.props.getMembers()
    const mems = this.props.members.members
    this.props.selectTerm(this.termsList(), mems)
  }

  selectToggle = (term) => {
    const currentSelectedTerms = this.props.members.terms.slice()
    let newTerms = []
    if (currentSelectedTerms.includes(term)) {
      newTerms = currentSelectedTerms.filter(item => item !== term)
    } else {
      newTerms = currentSelectedTerms
      newTerms.push(term)
    }
    this.props.selectTerm(newTerms, this.props.members.allMembers)
  }

  render() {
    return (
      <Row>
      <Col>
      <Row>
      <Col>
      <h3>Filter</h3>
      </Col>
      </Row>
      <Row>
      <Col>
      <DropdownFilter filter="Terms On" items={this.termsList()} activeItems={this.props.members.terms} select={this.selectToggle}/>
      </Col>
      <Col>
      </Col>
      </Row>
      </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ members }) => ({ members });

const mapDispatchToProps = {
  getMembers, selectTerm
};

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(FilterBar);
