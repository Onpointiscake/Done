import React from 'react'
import { View, Text, Button } from 'react-native'

class List extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('nameParam', 'Estas en...')
        }
    }
    render(){
        const { navigation } = this.props;
        const nameParam = navigation.getParam('nameParam', 'some default value')
        return (
            <View>
                <Text>The List screen</Text>
                <Text>nameParam: {JSON.stringify(nameParam)}</Text>
                <Button
              title="Go to Home"
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button title="volver atrás" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}

export default List
