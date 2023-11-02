import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import HeaderStyles from './HeaderStyle'
import { faGear, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import styles from './styles'

const Header = () => {
  return (
   
    <View style={HeaderStyles.header}>
       <TouchableOpacity>
    <FontAwesomeIcon style={HeaderStyles.icon} icon={faGear} size={24} />
    </TouchableOpacity>
    <Text style={HeaderStyles.headerTitle}>NazMobile</Text>
    <TouchableOpacity>
    <FontAwesomeIcon style={HeaderStyles.icon} icon={faToolbox} size={24}  />
    </TouchableOpacity>
  </View>
  )
}

export default Header;
