// import React, { useEffect, useState, useMemo, useRef } from "react";
// import { useSelector } from "react-redux";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import {
//   Container,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Stack,
//   Button,
// } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
// import useStyles from "./styles";
// // import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import axios from "axios";
// import { METHODS } from "../../services/api";
// import course3 from "./asset/course3.svg";
// import course2 from "./asset/course2.svg";
// import course1 from "./asset/course1.svg";
// import vector from "./asset/vector.svg";
// import pythonCertificate from "./asset/pythonCertificate.svg";

// const content = [
//   "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit",
//   "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit",
//   "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit",
// ];

// const data = [
//   {
//     image: course1,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course2,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course3,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course1,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course2,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course3,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course1,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course2,
//     description: "Some description of the course in one or two or three lines",
//   },
//   {
//     image: course3,
//     description: "Some description of the course in one or two or three lines",
//   },
// ];

// function PathwayCourse({ endpoint }) {
//   const [pythonCourse, setPythonCourse] = useState([]);
//   const user = useSelector(({ User }) => User);
//   const classes = useStyles();
//   const isActive = useMediaQuery("(max-width:600px)");

//   useEffect(() => {
//     axios({
//       method: METHODS.GET,
//       url: `${process.env.REACT_APP_MERAKI_URL}/pathways/courses?courseType=json`,
//       headers: {
//         accept: "application/json",
//         "version-code": 30,
//         Authorization: user.data.token,
//       },
//     }).then((res) => {
//       setPythonCourse(res.data.courses);
//     });
//   }, []);

//   console.log("pythonCourse", pythonCourse);

//   return (
//     <>
//       <Container maxWidth="lg">
//         {/* <Container maxWidth="lg" sx={{ bgcolor: "#cfe8fc", height: "180vh" }}> */}
//         {/* <Box sx={{ pt: 5 }}> */}
//         <Grid container spacing={2} align="center" sx={{ pt: 3 }}>
//           <Grid xs={12} md={6}>
//             <Card align="left" elevation={0} sx={{ ml: 4 }}>
//               <CardContent>
//                 <Typography variant="body2" className={classes.cardSubtitle}>
//                   Learning Track
//                 </Typography>
//                 <Typography variant="h5" sx={{ pb: 1 }}>
//                   Python
//                 </Typography>
//                 <Typography variant="subtitle1" sx={{ pb: 1 }}>
//                   Batch: Ankit_15SEP21
//                 </Typography>
//                 <Box sx={{ display: "flex" }}>
//                   {/* <CalendarMonthIcon /> */}
//                   <Typography sx={{ pb: 1 }}>15 Sep 21 - 15 Nov 21</Typography>
//                 </Box>
//                 <Box sx={{ display: "flex" }}>
//                   <Typography sx={{ pb: 1 }}>Access to live classes</Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   className={classes.cardButton}
//                   sx={{ mb: 1 }}
//                 >
//                   <Typography>Enroll Batch</Typography>
//                 </Button>
//                 <Box sx={{ display: "flex" }}>
//                   <Typography sx={{ pb: 1 }} className={classes.text}>
//                     Can’t start on 15 Sep 21?
//                   </Typography>
//                   <Typography sx={{ pb: 1, ml: 1 }} color="primary">
//                     Check out our other batches
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid xs={12} md={6}>
//             {/* <Card sx={{ width: 355 }} align="left" elevation={0}> */}
//             {/* <CardMedia
//                 component="img"
//                 image={vector}
//                 alt="Paella dish"
//                 className={isActive ? classes.mobileVideo : classes.deskVideo}
//                 // sx={{ width: 475 }}
//               /> */}
//             <CardMedia
//               component="video"
//               autoPlay
//               controls
//               height="260"
//               // width="140"
//               src="https://www.youtube.com/watch?v=Doo1T5WabEU"
//               // className={isActive ? classes.mobileVideo : classes.deskVideo}
//               // // sx={{ width: 300 }}
//               sx={{ width: 480 }}
//             />
//             {/* </Card> */}
//           </Grid>
//         </Grid>
//         {/* </Box> */}
//         <Box sx={{ pt: 3 }}>
//           <Typography variant="h6">Learning Outcomes</Typography>
//           <Grid container spacing={0} align="center">
//             {content.map((item) => (
//               <Grid xs={12} md={4}>
//                 <Card sx={{ width: 355 }} align="left" elevation={0}>
//                   <CardContent>
//                     <Box sx={{ display: "flex" }}>
//                       <CheckIcon color="primary" />
//                       <Typography>{item}</Typography>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//         <Box sx={{ pt: 3 }}>
//           <Typography sx={{ pb: 3 }} variant="h6">
//             Courses
//           </Typography>
//           <Grid container spacing={0} align="center">
//             {pythonCourse.length > 1 &&
//               pythonCourse.map((item, index) => (
//                 <Grid xs={12} md={3} sx={{ mb: 2 }}>
//                   <Card sx={{ width: 275 }} align="left" elevation={0}>
//                     <CardMedia
//                       component="img"
//                       image={data[index].image}
//                       alt="Paella dish"
//                       sx={{ width: 275 }}
//                     />
//                     <CardContent>
//                       <Typography variant="subtitle1">{item.name}</Typography>
//                       <Typography variant="body1">
//                         {data[index].description}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//           </Grid>
//         </Box>
//         <Stack alignItems="center">
//           <CardMedia
//             component="img"
//             src={require("./asset/pythonCertificate.svg")}
//             alt="certificate"
//           />
//         </Stack>
//         <Typography sx={{ pt: 3 }} align="center">
//           Python Track Certificate
//         </Typography>
//       </Container>
//     </>
//   );
// }

// export default PathwayCourse;
