import React, { Component } from 'react';
import moment from 'moment';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator'
import Viewer from './components/Viewer';
import { getAPOD } from './api'

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }
  getData = async (date) => {
    if (this.state.loading) return;

    this.setState({
      loading: true
    });

    try {
      const { data: { date: retrievedDate, url, media_type: mediaType } } = await getAPOD(date);
      if (!this.state.maxDate) {
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });

    } catch (e) {
      console.error(e)
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    this.getData(prevDate);
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if (date === maxDate) return;

    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.getData(nextDate);
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { url, mediaType, date, loading } = this.state;
    const { handleNext, handlePrev } = this;

    return (
      <div className="App">
        <ViewerTemplate
          spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext} />}
          viewer={(
            <Viewer
              date={date}
              url={url}
              mediaType={mediaType}
              loading={loading}
            />
          )}

        />
      </div>
    );
  }
}

export default App;
