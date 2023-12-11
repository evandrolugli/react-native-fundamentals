import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home(){
    function handleParticipantAdd(){
        console.log('clicou!!!')
    }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Event Name
      </Text>
      <Text style={styles.eventDate}>
        11 of December
      </Text>

      <View style={styles.form}>      
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}