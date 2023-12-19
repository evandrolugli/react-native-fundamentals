import { FlatList, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';


export default function Home(){

  const participants = ['Evandro', 'Felipe', 'Vanessa', 'Jose', 'Ana', 'Isa', 'Jack', 'Jorge', 'Sabrina', 'Rafa'];

    function handleParticipantAdd(){
      if (participants.includes("Evandro")){
        return Alert.alert("Participant exists","Participant already exists in the list with this name")
      }
        console.log('clicked!!!')
    }

    function handleParticipantRemove(name: string){
      Alert.alert('Remove', `Do you want to remove the participant ${name}?`, [
        {
          text: 'Yes',
          onPress: () => Alert.alert("Deleted!")
        },
        {
          text: 'No',
          style: 'cancel'
        }
      ])
      console.log(`clicked in ${name}`)
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

      <FlatList
       data={participants}
       keyExtractor={item => item}
       renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
       )}
       showsVerticalScrollIndicator={false}
       ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Nobody has arrived at the event yet! Please, add a participant.
        </Text>
       )}
      />
    </View>
  )
}