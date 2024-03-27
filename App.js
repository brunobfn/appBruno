// //npm install -g npm@10.5.0

// // 
// // estrutura básica de um Aplicativo
// import React from "react";
// import { View, Text } from "react-native";

// //sempre tem q ter o return nas funções
// function App() {
//   return(
//    // View é uma tela
//    <View>
//       <Text>Olá Mundo!</Text>
//     </View>
//   );
// }

// //depois de criar tenho que colocar o export
// export default App; //poderia por antes da function

import React, {Component  } from "react";
import { View, Text, Image  } from "react-native";

// extends(herdar) as coisas da classe Component
// render serve para mostrar na tela
class App extends Component{
    render(){
        let curso='INFO';

        return(
            <View>
                <Text>Olá Mundo!</Text>
                <Text>Exemplo</Text>
                <Text style={{color: 'blue', fonSize: 20, margin:15}}>Meu exemplo!</Text>

                <Image source={{uri:"coloca a url aqui"}} style={{width:300, height:300}}/>
                {/* Image é obrigatório informar a largura e altura*/}

                <Text>(curso)</Text>

                {/*para chamar o componente */}
                {/* <MinhaImage/>*/}
                {/* Passando propriedades a largura e a Altura*/}
                {/* <MinhaImagem largura=(400) altura=(400) nome="Imagem 1"/>*/}
            </View>
        );
    }
}
//para a imagem tem que ter o https
export default App;