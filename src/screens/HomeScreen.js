import { View, Text, Button } from "react-native";


export default function HomeScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItens: 'center', justifyContet: 'center'}}>
            <Text>Home</Text>
            <Button
                title="Ir para detalhes"
                onPress={() => navigation.navigate("Details")}
            >    
            </Button>
        </View>
    );
}