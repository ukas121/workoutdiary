import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  header: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  WoutHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
    marginTop: 30,
  },
  workoutItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'lightblue',
  },
  workoutType: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  workoutDate: {
    fontSize: 17,
    color: 'black',
  },
  expandedInfo: {
    marginTop: 10,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    backgroundColor: 'lightblue',
  },
  containerTwo: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    minWidth: '178px',
    maxWidth: '500px',
    color: 'white',
  },
  addExerciseButton: {
    backgroundColor: 'orange',
    padding: 6,
    borderRadius: 5,
    marginTop: 10,
    width: '150px',
  },
  addExerciseText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  selectedIcon: {
    backgroundColor: 'black',
  },
  totalIcon: {
    backgroundColor: 'black',
  },
  removeIconWrapper: {
    width: 24, //match the width of the trash icon
  },
});

export default Styles;
