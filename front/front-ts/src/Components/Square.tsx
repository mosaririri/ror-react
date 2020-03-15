import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
})

type Props = {
  value: 'X' | '0' | null
  onPress: () => void
}

const Square = (props: Props) => {
  const { value } = props

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  )
}

export default Square
