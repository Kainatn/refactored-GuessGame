// import React, { Component } from 'react';
// import { Form, InputNumber, Button, Card } from 'antd';
// import './Guess.css'
// export class GuessHard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             random: Math.floor(1 + Math.random() * (100 - 1)),
//             guessedNo: '',
//             count: 0
//         };
//     }
//     changeDone = (e) => {
//         this.setState({
//             guessedNo: e,
//         })
//     }

//     checkNumberHandler = (e) => {
//         e.preventDefault();
//         const { guessedNo, random, count } = this.state;
//         console.log(random);
//         console.log(guessedNo);
//         this.setState({ count: count + 1 })
//         if (guessedNo === random) {
//             alert('Congratulation You guessed the ' + this.state.count);

//         } else if (guessedNo < random) {
//             alert("You guessed Small Number")
//         }
//         else if (guessedNo > random) {
//             alert("You guessed Big Number in ")
//         }
//     }
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 console.log('Received values of form: ', values);
//             }
//         });
//     };
//     render() {
//         console.log(this.state.random);
//         console.log(this.state.guessedNo);
//         return (
//             <Card title="Guess number between 1 to 1000" bordered={false} style={{ width: 500 }}>
//                 <Form className="login-form">
//                     <InputNumber min={1} max={100} defaultValue={3} onChange={this.changeDone.bind(this)} />
//                 </Form>
//                 <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.checkNumberHandler} >
//                     Guess
//           </Button>

//             </Card>
//         );
//     }
// }

// export default GuessHard;
