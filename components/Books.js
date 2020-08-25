import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import CardFlip from 'react-native-card-flip';
import { Card } from 'react-native-paper';
import { Booklists } from '../shared/Booklist';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../reducer/index';


 const mapStateToProps = (state) => {
    return {
      Booklists: state.Booklists
    };
  };

  function RenderItem(props) {
    const { item } = props;
if (item) {
        return (
          <Card 
              image={Booklists.image}>
             </Card>
  );
    }
    return;
}   

const Books = () => {
  const [selectedTab, setSelectedTab] = useState(0);

 

  function RenderNewReleases(props) {
    const { Booklists } = props;

    if (Booklists) {
      return (
        <SafeAreaView style={styles.container}>
          <MaterialTabs
            items={['New Releases', 'All', 'BOM']}
            selectedIndex={selectedTab}
            onChange={setSelectedTab}
            barColor="#1fbcd2"
            indicatorColor="#ff914d"
            activeTextColor="white"
          />
          <CardFlip
            style={styles.cardContainer}
            ref={(card) => (this.card = card)}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => this.card.flip()}>
              <Card featuredTitle={Booklists.name} 
              image={Booklists.image}>
                <Text>Book One</Text>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => this.card.flip()}>
              <Card >
                <Text style={{ margin: 10 }}>{Booklists.description}</Text>
                <Text>Book One</Text>
              </Card>
              <Text>Book Description</Text>
            </TouchableOpacity>
          </CardFlip>
        </SafeAreaView>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps)(Books);
