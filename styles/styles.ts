import { StyleSheet } from "react-native";

let cor1: string = "#C5E5FF"; // fundo suave
let cor2: string = "#84A4BF"; // tons médios
let cor3: string = "#266AA6"; // principal / botões
let cor4: string = "#043F8C"; // contraste forte

export const stylesApp = StyleSheet.create({
  tabIcon: {
    width: 26,
    height: 26,
  },
});

// ---------- HOME SCREEN ----------
export const stylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cor1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: cor4,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: cor3,
    marginBottom: 16,
  },
  bntVehicleDetails: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  txtVehicleDetails: {
    fontSize: 16,
    fontWeight: "600",
    color: cor4,
  },
});

// ---------- PERFIL SCREEN ----------
export const stylesPerfilScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: cor1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: cor4,
    marginBottom: 16,
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: cor3,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: cor3,
    fontWeight: "bold",
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: "#333",
  },
  exitButton: {
    backgroundColor: cor3,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 3,
  },
  exitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
    modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
    elevation: 6,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: cor4,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  categoriaBox: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginVertical: 10,
},

categoriaBotao: {
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: "#3498db",
  margin: 4,
},

categoriaSelecionada: {
  backgroundColor: "#3498db",
},

categoriaTexto: {
  color: "#3498db",
  fontWeight: "500",
},

categoriaTextoSelecionado: {
  color: "#fff",
},
});

// ---------- VEHICLE DETAILS SCREEN ----------
export const stylesVehicleDetailsScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cor1,
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: cor4,
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  battery: {
    fontSize: 16,
    fontWeight: "600",
    color: cor3,
    marginTop: 8,
  },
  button: {
    backgroundColor: cor3,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "80%",
    elevation: 6,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: cor4,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: cor3,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    color: "#fff",
    fontWeight: "600",
  },
  closeButton: {
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  closeText: {
    fontWeight: "bold",
    color: "#333",
  },
});