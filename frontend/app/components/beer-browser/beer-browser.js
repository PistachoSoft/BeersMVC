import React from 'react';
import BeerView from '../beer-view';
import Filter from '../filter';
import Grid from '../grid';
import Spinner from '../spinner';
import BeerService from '../../services/beer-service';
import style from './beer-browser.scss';

export default class BeerBrowser extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      array: [],
      filtered: [],
      loading: true
    };

    BeerService.getAllBeers().then((data) => {
      this.setState({
        array: data,
        filtered: data,
        loading: false
      });
    });
  }

  filterAction(text) {
    if (text) {
      let filtered = this.state.array.filter(function(item) {
        return new RegExp(text.toLowerCase()).test(item.name.toLowerCase());
      });

      this.setState({
        filtered: filtered
      });
    } else {
      this.setState({
        filtered: this.state.array
      });
    }
  }

  render() {
    return (
      <div className="beer-browser">
        <Filter onType={this.filterAction.bind(this)}
            placeholder={"Filter beers by name..."} />
        {
          this.state.loading ?
            <Spinner />
            :
            <div className="grid-wrapper">
              <Grid>
                {
                  this.state.filtered.map(function(item, index) {
                    return (
                      <BeerView key={index} data={item}/>
                    );
                  })
                }
              </Grid>
            </div>
        }
      </div>
    );
  }
}
