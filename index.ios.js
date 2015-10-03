'use strict';

var React = require('react-native');
var Profile = require('./Profile');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} = React;

var flexLayout = React.createClass({
    _shuffle: function(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },
    createProfiles: function() {
        var datas = [{
            url: 'http://localhost:8080/female1.jpg'
        },{
            url: 'http://localhost:8080/female22.jpg'
        },{
            url: 'http://localhost:8080/female3.jpg'
        },{
            url: 'http://localhost:8080/female4.jpg'
        },{
            url: 'http://localhost:8080/female5.jpg'
        },{
            url: 'http://localhost:8080/female6.jpg'
        },{
            url: 'http://localhost:8080/female8.jpg'
        },{
            url: 'http://localhost:8080/female9.jpg'
        },{
            url: 'http://localhost:8080/male1.jpg'
        },{
            url: 'http://localhost:8080/male2.jpg'
        },{
            url: 'http://localhost:8080/male3.jpg'
        },{
            url: 'http://localhost:8080/female7.jpg'
        }];

        var heights = [200, 180, 150, 100];

        return this._shuffle(datas).map(function (profile, i) {
            var randomHeight = Math.floor(Math.random() * (4 - 0));
            var height = this._shuffle(heights)[randomHeight];
            return <Profile imageURL={profile.url} containerHeight={height} key={i}/>;
        }.bind(this))
    },
  render: function() {
    return (
        <ScrollView style={styles.scrollStyle}>
        <View style={styles.wrapper}>

            <View style={styles.row}>
                {this.createProfiles()}
            </View>

              <View style={[styles.row, {marginRight: 0}]}>
                  {this.createProfiles()}
              </View>
        </View>
        </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
    scrollStyle: {
        marginTop: 17
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 5,
        marginLeft: 5
    },
  row: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: 155,
      marginRight: 5
  }
});

AppRegistry.registerComponent('flexLayout', () => flexLayout);
