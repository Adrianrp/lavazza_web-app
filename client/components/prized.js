import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import LoadMore from '../../node_modules/material-ui/svg-icons/navigation/expand-more';
import IconButton from '../../node_modules/material-ui/IconButton';
import {browserHistory} from 'react-router';

import VideoArchive from './video/video_archive';
import {Videos} from '../../imports/collections/videos';
import FbShareBtn from './fb_share_btn';


const PER_PAGE = 3;
const styles = {
  large: {
    width: 60,
    height: 60,
  },
};
class Prized extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDone: false
    }
  }

  componentWillMount() {
    this.page = 1;
  }

  componentDidMount() {
    $(".wrap").addClass('wrap-slut');
    $('footer').addClass('footer-slut');
    $('.logo-container img').attr('src', '/images/lavazza_logo_dark.svg');
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.8&appId=180321945790800";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  handleBtnClick() {
    Meteor.subscribe('getVideos', PER_PAGE * (this.page + 1));
    this.page += 3;

  }

  render() {
    return (
      <div className="prize-container">
        <div className="prize-text">
          <h2>TAK, DIN STEMME ER NU MODTAGET</h2>
          <p>Så er det vist tid til en god kop Lavazza kaffe.</p>
          <p>Tak fordi du deltog i konkurrencen om ugens Lavazza Maestro Detalje fra Masterchef. Du er nu med i
            konkurrencen om ugepræmier fra Lavazza (et Lavazza Barista Maestro Kit med Lavazza filterkaffe 4 varianter,
            2 stk Lavazza filterkopper, 1 sæt Hario bryggeudstyr samt et Lavazza Barista forklæde) og hovedpræmien: En
            gourmetrejse for 2 personer til Torino.
          </p>
          <p>Del med dine venner på Facebook, så de kan se, at du har god smag for italiensk filterkaffe.</p>
          <div><FbShareBtn /></div>
        </div>
        <div className="wrap-archive">
          <div className="archive-content">
            <strong>Se ugens klip</strong>
            <div className="outliner-video-archive">
              <VideoArchive videos={this.props.videos}/>
            </div>
            <IconButton
              iconStyle={styles.largeIcon}
              tooltip="LOAD MORE"
              tooltipPosition="top-center"
              onClick={this.handleBtnClick.bind(this)}
            >
              <LoadMore />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}
;

export default createContainer(() => {
  Meteor.subscribe('getVideos', PER_PAGE);

  return {
    videos: Videos.find({}).fetch()
  }
}, Prized);