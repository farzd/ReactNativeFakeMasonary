var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} = React;

var Profile = React.createClass({
    render: function() {
        return (
            <View style={[styles.imgContainer, {height: this.props.containerHeight}]}>
                <Image source={{uri:this.props.imageURL}} style={[styles.images, {height: this.props.containerHeight}]}/>
            </View>
        );
    }
});

module.exports = Profile;


var styles = StyleSheet.create({
  imgContainer: {
    width: 150,
    height: 200,
    marginBottom: 6
  },
  images: {
      flex: 1,
     resizeMode: 'cover'
  }
});
