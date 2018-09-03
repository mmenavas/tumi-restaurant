import React, { Component } from 'react';
import firebase from 'firebase';
import Slider from 'react-slick';
import './Slideshow.css';

class Slideshow extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let _this = this;
    const photosRef = firebase.storage().ref().child('dishes');

    // Fetch photos
    firebase.database().ref('photos').once('value').then(snapshot => {
      let items = [];
      snapshot.forEach(item => {
        items.push(item.val());
      });

      return items;
      // _this.setState({
      //   photos: items
      // });
    }).then(items => {
      items.forEach(item => {
        photosRef.child(item).getDownloadURL().then((url) => {
          _this.setState({
            items: [
              ..._this.state.items,
              { 
                name: _this.getNameFromFilename(item),
                url: url
              }
            ]
          })
        });
      });
    } );
  }

  // componentWillReceiveProps(nextProps) {
  //   let _this = this;
  //   const photosRef = firebase.storage().ref().child('dishes');
  // }

  getNameFromFilename(filename) {
    return filename.replace(/-/g, ' ').replace('.jpg', '');
  }

  render = () =>
    <div className="slideshow">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {this.state.items.map((item, index) =>
          <div key={index} className="slideshow__item slide">
            <img className="slide__image" src={item.url} alt="slideshow item" />
            <h3 className="slide__title">{item.name}</h3>
          </div>
        )}
      </Slider>
    </div>
}

export default Slideshow;
