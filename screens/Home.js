import React from 'react'
import { View, Text, Button } from 'react-native'

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render(){
        return (
            <View>
                <Text>This the Home Screen</Text>
                <Button title="Ir a la lista más visitada" 
                    onPress={() => this.props.navigation.navigate('List', {
                        nameParam: 'Lista Compra 32'
                    })}
                />
            </View>
        )
    }
}

export default Home
