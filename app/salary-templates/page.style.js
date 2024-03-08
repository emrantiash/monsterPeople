import commonStyle from "@/app/components/style/Styles";

const styles = {
    container : {

    },
    headerBox  : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center',
      marginLeft : 20,
      marginRight :  20 
    },
    tableRoot : {
      marginTop :  20 
    },
    NoLengthContainer: {
    maxHeight: "100%",
    // backgroundColor: "green",
    display: "flex",
    flexDirection : 'column',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 800,
    margin: "0 auto",
  },
  innerBox : {
    // backgroundColor: "green",
    height :  130,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    alignItems : 'center'
  }
};

export default styles;
