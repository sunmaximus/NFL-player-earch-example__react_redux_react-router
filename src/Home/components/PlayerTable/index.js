import React, { Component } from 'react';
import _ from 'lodash';
import { Pagination, Table, DropdownButton, MenuItem } from 'react-bootstrap';

import './playertable.scss';
class PlayerTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      prevPage: 0,
      currentPage: 100,
      nextPage: 200,
      filter: 'default'
    }
    this.showPreviousPage = this.showPreviousPage.bind(this);
    this.showNextPage = this.showNextPage.bind(this);
  }

  showPreviousPage = () => {
    if (this.state.page === 1) return;
    this.setState(state => ({
      page: state.page - 1,
      prevPage: state.prevPage - 100,
      currentPage: state.currentPage - 100,
      nextPage: state.currentPage,
    }))
  }

  showNextPage = () => {
    if (
      this.state.currentPage === this.props.results.length ||
      this.state.currentPage > this.props.results.length
    ) return;

    this.setState(state => ({
      page: state.page + 1,
      nextPage: state.nextPage + 100,
      currentPage: state.currentPage + 100,
      prevPage: state.currentPage,
    }))
  }

  renderResults() {
    const { prevPage, currentPage, filter } = this.state;

    let results = 
      filter === 'default' ?
        this.props.results :  
        _.sortBy(this.props.results, (player) => player[filter]);
    
    return results.slice(prevPage, currentPage).map((player, index) => {
      return (
        <tr key={player.PlayerID}>
          <td>{prevPage + index}</td>
          <td>{`${player.Name}`}</td>
          <td>{player.Team}</td>
          <td>{player.Number}</td>
          <td>{player.Position}</td>
          <td>{player.Age}</td>
          <td>{player.Weight} lbs</td>
        </tr>)
    });
  }

  renderFilter() {
    const { page, currentPage } = this.state;
    const { results, filter } = this.props;
    return (
      <div className={'player-table__group'}>
        <Pagination>
          <Pagination.Prev
            disabled={page <= 1}
            onClick={this.showPreviousPage}
          />
          <Pagination.Item>{page}</Pagination.Item>
          <Pagination.Next
            disabled={currentPage === results.length || currentPage > results.length}
            onClick={this.showNextPage}
          />
        </Pagination>

        <DropdownButton
          bsStyle={'default'}
          title={this.state.filter}
          id={'filter-player'}
        >
          {
            Object.keys(filter).map(
              filterItem =>
                <MenuItem
                  key={filterItem}
                  eventKey={filterItem}
                  onSelect={() => {this.setState({ filter: filterItem })}}
                >
                  {filter[filterItem]}
                </MenuItem>
            )
          }
        </DropdownButton>
      </div>)
  }
  render() {
    return (
      <div className='player-table__container'>
        {this.renderFilter()}

        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Team</th>
              <th>Number</th>
              <th>Position</th>
              <th>Age</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {this.renderResults()}
          </tbody>
        </Table>

        {this.renderFilter()}
      </div>
    )
  }
}

export default PlayerTable;