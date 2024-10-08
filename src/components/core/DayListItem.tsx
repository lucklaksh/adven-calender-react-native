import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const days=[...Array(24)].map((val, index) => index +1);
type DayListItem = {
    day: number;
};

export default function DayListItem( { day }: DayListItem) {
    return(
      <Link href={`/day${day}`} asChild >
        <Pressable style={styles.box}>
          <Text style={styles.text}>{day}</Text>
        </Pressable>
        </Link>

    );

}

const styles = StyleSheet.create({ 
        box: {
          backgroundColor: '#F9EDE3',
          flex: 1,
          aspectRatio: 1,
      
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#9b4521',
          borderRadius: 20,
      
          justifyContent: 'center',
          alignItems: 'center',
        },
        text: {
          color: '#F9ED20',
          fontSize: 50,
          fontFamily: 'AmaticBold'
          
        }
});
      