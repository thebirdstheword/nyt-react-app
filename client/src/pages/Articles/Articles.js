// import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, FormBtn } from "../../components/Form";

// class Articles extends Component {
//   state = {
//     articles: []
//   };

//   componentDidMount() {
//     this.loadArticles();
//   }

//   loadArticles = () => {
//     API.getArticles()
//       .then(res => this.setState({ articles: res.data }))
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       // <div>
//       //   <h1>What Articles Should I Read?</h1>
//       //   <form>
//       //     <input name="topic" placeholder="Topic" />
//       //     <input name="start year" placeholder="Start Year (Optional" />
//       //     <input name="end year" placeholder="End Year (Optional)" />
//       //     <button>Search for Articles</button>
//       //   </form>

//       //   <h1>Articles On My List</h1>

//       //   {this.state.articles.length ? (
//       //     <ul>
//       //       {this.state.articles.map(article => (
//       //         <li key={article._id}>
//       //           <a href={"/articles/" + article._id}>
//       //             <strong>
//       //               {article.topic} by {article.date}
//       //             </strong>
//       //           </a>
//       //         </li>
//       //       ))}
//       //     </ul>
//       //   ) : (
//       //     <h3>No Results to Display</h3>
//       //   )}
//       // </div>
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Articles Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input name="topic" placeholder="Topic (required)" />
//               <Input name="start year" placeholder="Start Year (optional)" />
//               <Input name="end year" placeholder="End Year (optional)" />
//               <FormBtn>Search for Articles</FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Articles On My List</h1>
//             </Jumbotron>
//             {this.state.articles.length ? (
//               <List>
//                 {this.state.articles.map(article => (
//                   <ListItem key={article._id}>
//                     <a href={"/articles/" + article._id}>
//                       <strong>
//                         {article.topic} by {article.date}
//                       </strong>
//                     </a>
//                     <DeleteBtn />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Articles;
