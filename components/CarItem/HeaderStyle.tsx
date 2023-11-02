import { icon } from "@fortawesome/fontawesome-svg-core";
import {StyleSheet} from "react-native";

const HeaderStyles = StyleSheet.create({
    header: {
marginTop: 50,
marginLeft:20,
marginRight:20,
flexDirection: "row",
justifyContent:"space-between",
alignItems:"center",
marginBottom: 10

    },

    headerTitle:{
        color:"white",
        fontSize:16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"

    },
    icon:{
color: "white"
    }
})

export default HeaderStyles; 