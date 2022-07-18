import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: "10px 16px 10px 16px",
    marginTop: "20px",
  },
  icons: {
    marginRight: "15px",
    position: "flex-start",
  },
  centere: {
    align: "center",
  },

  Button: {
    paddingRight: "20px",
    paddingBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "green",
    cursor: "pointer",
  },
  MoreBatchWrap: {
    display: "flex",
    flexDirection: "column",
    padding: "25px",
  },
  MoreBatchCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px 0",
    minHeight: "170px",
  },
  ButtonInfo: {
    borderRedius: "90px",
  },
  FlexedContant: {
    display: "flex",
  },
  BatchEnroll2Box: {
    maxWidth: 500,
    mb: 10,
    pt: 3,
    height: 280,
    padding: "15px",
  },
  BatchEnroll2DateNDegree: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0",
    mb: 1,
  },
  ExerciseBatchClassCard: {
    maxWidth: 350,
  },
  EnrollInCourseBox1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    flexWrap: "wrap",
    marginTop: "50px",
  },
  EnrollInCourseBox2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  EnrollInCourseCard: {
    align: "right",
    mt: 1,
    maxWidth: 370,
    mb: 10,
  },
  EnrollInCourseFormBox: {
    display: "flex",
    justifyContent: "start",
  },
  // DoubtClassChip:{
  //   borderRadius: 90,
  //   height: 30,
  // },
  // DoubtClassLangChip: {
  //   marginLeft: 10,
  //   borderRadius: 90,
  //   height: 30
  // },
  // DropOut: {
  //   marginTop: "16px" ,
  //   cursor: "pointer",
  //   display:"flex",
  //   align:"center"
  //  },
  //   NeedHelpBox:{
  //     padding : "16px",
  //     marginTop : "16px",
  //     borderRadius: "20px"
  // },
  // NeedHelpBoxContant :{
  //     marginBottom : "8px" ,
  //     display: "flex",
  // },
  // NeedHelpButtonBox:{
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
  // NotEnrolledViewClassDetailButton:{
  //   width: isActive ? "90%" : "215px",
  //   display: "flex",
  //   justifyContent: "flex-end",
  // },
  EnrolledViewClassDetailBox: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  EnrolledViewClassDetailButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  RevisionClassEnrollBox: {
    marginTop: 4,
    maxWidth: 350,
    mb: 10,
  },
}));

export default useStyles;
