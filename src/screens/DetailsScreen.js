import { Button, Text, View } from "react-native";

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItens: 'center', justifyContet: 'center'}}>
            <Text>Details Screen</Text>
            <Button
                title="Voltar para home"
                onPress={() => navigation.goBack()}
            >    
            </Button>
            <Button
                title="Listar filmes"
                onPress={() => navigation.navigate("Movies")}
            >    
            </Button>
            
        </View>
    );
}