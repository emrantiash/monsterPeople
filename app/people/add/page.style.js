import commonStyle from "@/app/components/style/Styles";

const styles = {
    containerHeader : {
        display : 'flex',
        justifyContent : 'fle',
        alignItems : 'center',
        flexDirection : 'column'
    },
    headerWrapper : {
        display : 'flex',
        flexDirection : 'column'
        
    },
    numberBox: {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    circle : {
        display :  'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : 40,
        width : 40 ,
        borderRadius : 40/2,
        borderWidth:1,
        borderStyle:'solid',
        borderColor : commonStyle.color.black,
        // backgroundColor : commonStyle.color.red
    },
    updateCircle : {
        display :  'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : 40,
        width : 40 ,
        borderRadius : 40/2,
        borderColor: "green",
        borderStyle:'solid',
        borderWidth: 3 
    },
    numberBoxNext: {
         marginLeft :  -20,
        marginRight : -20,
        // backgroundColor : commonStyle.color.red ,
        marginTop : 5,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    body : {      
        marginTop : 50 ,
        marginBottom : 60
       },
    bobyInnerRow : {
        marginBottom:30
    },
   
    radioGroup : {
        marginTop : 10,
        // marginLeft : 30 ,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'space-evenly'
    },
    radioBranch : {
        backgroundColor : commonStyle.color.offWhite,
        height : 50,
        width:100,
        border : '1px solid #f1e8e7',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonGroup : {
        // backgroundColor : 'red',
        display : 'flex',
        flexDirection : 'row',
        // justifyContent : 'flex-start'
    },
    justifyLabel : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    salaryBoundary : {

        border : '1px solid #f1e8e7'
    },
    boundaryScope : {
        marginTop : 20,
        marginLeft : 10
    },
    spacing : {
        letterSpacing : 1.0
    },
    transferBox : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        cursor : commonStyle.cursor
        // alignItems : 'center'
    },
    top : {
        marginTop : 20
    },
    bottom : {
        marginBottom : 10
    },
    bigBottom : {
        marginBottom : 30 
    },
    documentMergin : {
        //  backgroundColor : 'green',
        // marginTop: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 200,
      },
      docBox : {
        marginBottom :10
      }
    
}

export default styles ;