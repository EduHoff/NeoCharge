import { StyleSheet } from "react-native";

let cor1:string = "#c5e5ffff";
let cor2:string = "#84A4BF";
let cor3:string = "#266AA6";
let cor4:string = "#043F8C";

export const stylesApp = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    }
});

export const stylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: cor1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16
  },
  bntVehicleDetails: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    },
  txtVehicleDetails: {
    fontSize: 16,
    fontWeight: "bold"
    }
});

export const stylesPerfilScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cor1
  },
  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
});
